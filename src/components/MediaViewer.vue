<template>
  <q-dialog v-model="showModal" maximized>
    <q-layout view="Lhh lpR fff" container class="bg-black">
      <q-header class="bg-secondary">
        <q-toolbar>
          <q-toolbar-title>{{data.name}}</q-toolbar-title>
          <q-btn flat v-close-popup round dense icon="close"/>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="items-center flex justify-center">
          <iframe v-if="pdfSrc" :src="pdfSrc" width="100%" class="pdfIframe"></iframe>
          <img v-bind:src="src" v-if="src&&!pdfSrc" style="max-width:100%;" ref="viewerImage"/>
        </q-page>
      </q-page-container>
      <q-footer class="bg-primary text-white">
        <q-toolbar inset class="row justify-center" v-if="!pdfSrc">
          <q-btn @click="rotateZoomFunc('rotateForward')" icon="refresh"/>
          <q-btn @click="rotateZoomFunc('zoomIn')" icon="zoom_in"/>
          <q-btn @click="rotateZoomFunc('zoomOut')" icon="zoom_out"/>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </q-dialog>
</template>
<script setup lang="ts">
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { inject, onMounted, reactive, ref } from 'vue'

const rotateZoom = reactive({
  rotate: 0,
  zoom: 1
})
const $q = useQuasar()
const bus = inject('bus') as EventBus
const data = ref()
const src = ref()
const pdfSrc = ref()
const showModal = ref(false)
const viewerImage = ref<HTMLDivElement>()

const rotateZoomFunc = (action:string) => {
  if (action === 'rotateForward') {
    rotateZoom.rotate += 90
    if (rotateZoom.rotate > 360) {
      rotateZoom.rotate = 90
    }
  }
  if (action === 'rotateBackwards') {
    if (viewerImage.value) {
      viewerImage.value.style.transform = `rotate(${rotateZoom.rotate}deg)`
    }
  }
  if (action === 'zoomIn') {
    rotateZoom.zoom += 0.2
  }
  if (action === 'zoomOut') {
    rotateZoom.zoom -= 0.2
  }
  if (viewerImage.value) {
    viewerImage.value.style.transform = `scale(${rotateZoom.zoom}) rotate(${rotateZoom.rotate}deg)`
  }
}

interface EventData {
  model:object,
  type:string
}

onMounted(() => {
  bus.on('view-file', (eventData:EventData) => {
    Object.assign(rotateZoom, { rotate: 0, zoom: 1 })
    pdfSrc.value = false
    data.value = eventData
    $q.loading.show({ message: 'Loading asset...' })
    src.value = false
    if (data.value.type === 'photo') {
      api.get(`/photo/${data.value.model.id}?original=1`).then((response) => {
        api.get(`/photo/loadoriginaldata/${data.value.model.id}`).then((res) => {
          src.value = 'data:' + response.data.image_file_uri.original.type + ';base64,' + res.data.raw
        })
        $q.loading.hide()
        showModal.value = true
      }).catch((error) => {
        $q.loading.hide()
        useMixinDebug(error)
      })
    } else if (data.value.type === 'pdfUrl') {
      window.open(data.value.url)
      $q.loading.hide()
    } else {
      api.get(`/attachment/${data.value.model.id}?original=1`).then((response) => {
        data.value = response.data
        if (data.value.file_file_uri.original.type !== 'application/pdf') {
          src.value = `data:${response.data.file_file_uri.original.type};base64,${response.data.file_file_uri.original.data.content}`
          $q.loading.hide()
          showModal.value = true
        } else {
          pdfSrc.value = `data:application/pdf;base64,${response.data.file_file_uri.original.data}`
          window.open(data.value.file_file_uri.original.uri)
          // this.showModal = true
        }
        $q.loading.hide()
      }).catch((error) => {
        useMixinDebug(error)
      })
    }
  })
})
</script>
