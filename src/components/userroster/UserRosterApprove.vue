<template>
  <q-dialog v-model="show">
    <q-card class="modal" v-if="model.day && model.user && model.start_time && model.end_time">
      <q-toolbar v-if="model.user">
        <q-toolbar-title>{{ model.user.fullname }} - {{ dayDisplay(model.day) }}s ({{ hourDisplay(model.start_time) }} -
          {{ hourDisplay(model.end_time) }})</q-toolbar-title>
        <q-space />
        <q-btn v-close-popup icon="close" flat round dense />
      </q-toolbar>
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-sm-6">
            <div class="text-bold q-mb-xs">Current Suburbs to pickup from:</div>
            <PostcodeRegionDisplay :postcoderegions="model.postcoderegions_old" v-if="model.postcoderegions_old" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="text-bold q-mb-xs">New Suburbs to pickup from:</div>
            <PostcodeRegionDisplay :postcoderegions="model.postcoderegions" />
          </div>
        </div>
        <div class="text-bold q-mb-xs q-mt-md">Changes</div>
        <PostcodeRegionDisplay :postcoderegions="difference" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup label="Cancel" flat color="secondary" />
        <q-btn :disable="loading" label="Approve" color="primary" @click="save(true)" :loading="loading" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { UserRoster } from 'src/components/models'
import { useMixinDebug } from 'src/mixins/debug'
import { dayDisplay, doNotify, hourDisplay } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import PostcodeRegionDisplay from '../PostcodeRegionDisplay.vue'
import _ from 'lodash'

const show = ref(false)
const difference = ref()
const model = reactive<UserRoster>({
  id: null,
  day: null,
  start_time: null,
  end_time: null,
  active: true,
  user_id: null,
  user: null,
  postcoderegions: [],
  capacity: { products: [] },
  approved: false
})
const loading = ref(false)
const bus = inject('bus') as EventBus

const save = (close: boolean) => {
  loading.value = true
  api.put(`/userroster/approve/${model.id}`, model).then(() => {
    doNotify('positive', 'Roster updated')
    bus.emit('getDashboardStats')
    if (close) {
      show.value = false
    }
    loading.value = false
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

onMounted(() => {
  bus.on('approveRoster', async (id: number) => {
    api.get(`/userroster/${id}`).then(response => {
      Object.assign(model, response.data)
      if (model.postcoderegions && model.postcoderegions_old) {
        difference.value = _.differenceBy(model.postcoderegions, model.postcoderegions_old, 'id')
      }
      show.value = true
    }).catch(error => {
      useMixinDebug(error)
    })
  })
})

onBeforeUnmount(() => {
  bus.off('approveRoster')
})
</script>
