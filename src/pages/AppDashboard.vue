<template>
  <q-page v-if="user && user.id">
    <app-dashboard-contractor v-if="user.role === 'contractor'" />
  </q-page>
</template>
<script setup lang="ts">
import { useMixinSecurity } from 'src/mixins/security'
import AppDashboardContractor from './AppDashboardContractor.vue'

const { user } = useMixinSecurity()
</script>
