<template>
  <div>
    <div class="q-pb-sm">
      <q-input v-model="keyword" placeholder="Keyword search" outlined @keydown.enter="getContractors()" dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:append>
          <q-btn-group>
            <q-btn @click="[keyword = null, getContractors()]" label="Reset" size="sm" />
          </q-btn-group>
        </template>
      </q-input>
    </div>
    <div class="q-pa-md text-center" v-if="(!data || !data.length) && !loading">
      <NoRecords />
    </div>
    <div style="height:400px;">
      <GMapMap :center="center" :zoom="4" map-type-id="terrain" style="width: 100%; height: 650px" ref="mapRef"
        v-if="markers && markers.length">
        <GMapCluster>
          <GMapMarker :position="m.position" :clickable="true" :draggable="false" @click="toggleInfoWindow(m, index)"
            v-for="(m, index) in
                                                                            markers" :key="index">
            <GMapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="currentMidx === index" />
          </GMapMarker>
        </GMapCluster>
      </GmapMap>
    </div>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { PostcodeRegion } from 'src/components/models'
import { useMixinDebug } from 'src/mixins/debug'
import { reactive, ref, onMounted } from 'vue'
import NoRecords from '../NoRecords.vue'

const loading = ref(false)
const data = ref()
const keyword = ref()
const markers = ref()
const center = reactive({
  lat: -26.6851157,
  lng: 153.1074659
})
const infoWindowPos = ref()
const currentMidx = ref<null | number>(null)
const infoOptions = reactive({
  content: '',
  pixelOffset: {
    width: 0,
    height: 0
  }
})

interface MarkerObjModel {
  fullname: string,
  address2: string,
  postcoderegionsuburb: PostcodeRegion
}

interface MarkerObjPosition {
  lat: string,
  lng: string
}

interface MarkerObj {
  lat: string,
  lng: string,
  name: string,
  model: MarkerObjModel,
  position: MarkerObjPosition
}

const getMarkers = () => {
  markers.value = []
  data.value.forEach((obj: MarkerObj) => {
    if (obj.lat && obj.lng) {
      markers.value.push({
        position: {
          lat: parseFloat(obj.lat), lng: parseFloat(obj.lng)
        },
        model: obj,
        infoText: obj.name
      })
    }
  })
  if (markers.value.length === 1) {
    Object.assign(center, markers.value[0].position)
  }
  loading.value = false
}

const getInfoWindowContent = (marker: MarkerObj) => {
  const html =
    `<div class="text-h5">${marker.model.fullname}</div><p>${marker.model.address2} ${marker.model.postcoderegionsuburb.locality} ${marker.model.postcoderegionsuburb.state} ${marker.model.postcoderegionsuburb.postcode}</p>`
  return html
}

const toggleInfoWindow = (marker: MarkerObj, idx: number) => {
  infoWindowPos.value = marker.position
  infoOptions.content = getInfoWindowContent(marker)
  currentMidx.value = idx
}

const getContractors = () => {
  loading.value = true
  api.post('/user/contractor/map', { keyword: keyword.value }).then(response => {
    data.value = response.data
    getMarkers()
  }).catch(error => {
    useMixinDebug(error)
    loading.value = false
  })
}

onMounted(() => {
  getContractors()
})
</script>
