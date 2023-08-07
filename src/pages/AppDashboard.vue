<template>
  <q-page padding v-if="user && user.id" :class="{ 'q-pa-md': $q.screen.xs }">
    <app-dashboard-contractor v-if="user.role === 'contractor'" />
  </q-page>
</template>
<script setup lang="ts">
import { useMixinSecurity } from 'src/mixins/security'
import { onBeforeUnmount, onMounted } from 'vue'
import AppDashboardContractor from './AppDashboardContractor.vue'

const { user } = useMixinSecurity()

onMounted(() => {
  console.log('mounted')
})

onBeforeUnmount(() => {
  console.log('unmounted')
})
</script>
