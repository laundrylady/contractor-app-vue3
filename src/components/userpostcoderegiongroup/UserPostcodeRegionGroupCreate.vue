<template>
  <q-dialog v-model="show">
    <q-card class="modal-lg">
      <q-toolbar>
        <q-toolbar-title>New {{ $t('postcodeRegionGroup.name') }}</q-toolbar-title>
        <q-space />
        <q-btn v-close-popup icon="close" flat round dense />
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <q-input v-model="model.name" label="Name of the group" :error="$v.name.$invalid" />
        <postcode-region-map-field :lat-lng="latLng" v-model="model.postcoderegions" v-if="latLng" :show-map="true"
          :state="state" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup label="Cancel" flat color="secondary" rounded />
        <q-btn :disable="loading || $v.$invalid" label="Save" color="primary" @click="save()" rounded />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { doNotify } from 'src/mixins/help'
import { getCurrentLocation } from 'src/services/geolocation'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import PostcodeRegionMapField from '../form/PostcodeRegionMapField.vue'

const show = ref(false)
const state = ref()
const model = reactive({
  name: null,
  postcoderegions: null,
  user_id: null,
  approved: true
})
const loading = ref(false)
const latLng = ref()
const bus = inject('bus') as EventBus
const rules = {
  name: { required },
  postcoderegions: { required }
}

const $v = useVuelidate(rules, model)

const save = () => {
  api.post('/userpostcoderegiongroup', model).then(() => {
    doNotify('positive', 'Group created')
    bus.emit('userPostcodeRegionGroupLoadMore')
    Object.assign(model, {
      id: null,
      name: null,
      user_id: null
    })
    show.value = false
    loading.value = false
  }).catch(error => {
    useMixinDebug(error)
  })
}

onMounted(async () => {
  bus.on('newUserPostcodeRegionGroup', async (data: LooseObject) => {
    latLng.value = await getCurrentLocation()
    Object.assign(model, { name: null, postcoderegions: null, user_id: data.user_id })
    state.value = data.state
    show.value = true
  })
})

onBeforeUnmount(() => {
  bus.off('newUserPostcodeRegionGroup')
})
</script>
