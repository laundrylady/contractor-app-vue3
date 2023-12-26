<template>
  <q-dialog v-model="showModal">
    <q-card class="modal">
      <q-toolbar>
        <q-space />
        <q-btn rounded dense icon="close" v-close-popup flat />
      </q-toolbar>
      <q-card-section>
        <div class="q-pa-md bg-grey-2 rounded-borders q-mb-md flex items-center" v-if="validations.length">
          <div>
            <div class="text-medium">Please correct the following issues:</div>
            <ul style="list-style: none;">
              <li v-for="(v, index) in validations" :key="index">
                Field: {{ v.field }}
                <div>Error: {{ v.message }}</div>
              </li>
            </ul>
          </div>
        </div>
      </q-card-section>
      <q-card-actions v-if="validations && validations.length && validations[0].field === 'Security Token'"
        align="center">
        <q-btn @click="reload()" label="Refresh" color="primary" /></q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { EventBus } from 'quasar'
import { inject, ref } from 'vue'

const bus = inject('bus') as EventBus
const showModal = ref(false)
const validations = ref()

bus.on('showValidationsModal', data => {
  validations.value = data
  showModal.value = true
})

const reload = () => {
  window.location.reload()
}
</script>
