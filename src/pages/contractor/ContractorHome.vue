<template>
  <q-layout view="lHh Lpr lFf" container class="layout-height" v-if="model && model.id">
    <q-header :class="{ 'page-title text-black': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <ContractorNav :model="model" />
    </q-header>
    <q-page-container>
      <q-page padding class="q-pt-md layout-container q-pa-md">
        <router-view :model="model" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { inject, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ContractorNav from './ContractorNav.vue'

const route = useRoute()
const bus = inject('bus') as EventBus
const model = ref()

const getContractor = async () => {
  api.get('/public/user/contractor/profile').then((response) => {
    model.value = response.data
    document.title = model.value.fullname
  }).catch((response) => {
    useMixinDebug(response)
  })
}

onMounted(async () => {
  await getContractor()
  bus.on('getContractor', () => { getContractor() })
})

onBeforeUnmount(() => {
  bus.off('getContractor')
})

watch(() => route.params.id, (newVal) => {
  if (route.name === 'contractor-dashboard') {
    if (newVal) { getContractor() }
  }
})
</script>
