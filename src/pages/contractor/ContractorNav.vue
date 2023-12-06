<template>
  <div class="layout-container">
    <q-tabs v-model="currentTab" :align="!$q.screen.xs ? 'left' : 'center'">
      <q-route-tab :to="{ name: 'appDashboard' }" icon="home" title="Home" />
      <q-route-tab :to="{ name: 'contractor-dashboard' }" icon="bar_chart" title="Profile" />
      <q-route-tab :to="{ name: 'contractor-schedule' }" icon="schedule" title="Roster" />
      <q-route-tab :to="{ name: 'contractor-commission-paid' }" icon="attach_money" title="Commissions" />
      <q-route-tab :to="{ name: 'contractor-edit' }" icon="settings" title="Details" />
    </q-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const currentTab = ref('details')
</script>
