<template>
  <q-dialog v-model="show">
    <q-card class="modal-lg" v-if="model.name">
      <q-toolbar>
        <q-toolbar-title>{{ model.name }}</q-toolbar-title>
        <q-space />
        <q-btn v-close-popup icon="close" flat round dense />
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <q-input v-model="model.name" label="Name of the group" :error="$v.name.$invalid" />
        <postcode-region-map-field :lat-lng="latLng" v-model="model.postcoderegions" v-if="latLng" :zoom="12"
          :show-map="true" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup label="Cancel" flat color="secondary" rounded />
        <q-btn :disable="loading || $v.$invalid" label="Update" color="primary" @click="save()" rounded />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import PostcodeRegionMapField from 'src/components/form/PostcodeRegionMapField.vue'
import { PostcodeRegionGroup } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { doNotify } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const show = ref(false)
const state = ref()
const latLng = ref()
const model = reactive<PostcodeRegionGroup>({
  id: null,
  name: null,
  postcoderegions: null,
  approved: true
})
const loading = ref(false)
const bus = inject('bus') as EventBus
const rules = {
  name: { required },
  postcoderegions: { required }
}

const $v = useVuelidate(rules, model)

const save = () => {
  api.put(`/userpostcoderegiongroup/${model.id}`, model).then(() => {
    doNotify('positive', 'Group updated')
    bus.emit('userPostcodeRegionGroupLoadMore')
    show.value = false
    loading.value = false
  }).catch(error => {
    useMixinDebug(error)
  })
}

onMounted(() => {
  bus.on('editUserPostcodeRegionGroup', async (data: LooseObject) => {
    state.value = data.state
    api.get(`/userpostcoderegiongroup/${data.id}`).then(response => {
      Object.assign(model, response.data)
      if (model.postcoderegions && model.postcoderegions[0]) {
        latLng.value = { lat: parseFloat(model.postcoderegions[0].meta.pivot_lat), lng: parseFloat(model.postcoderegions[0].meta.pivot_lng) }
      }
      show.value = true
    }).catch(error => {
      useMixinDebug(error)
    })
  })
})

onBeforeUnmount(() => {
  bus.off('editUserPostcodeRegionGroup')
})
</script>
