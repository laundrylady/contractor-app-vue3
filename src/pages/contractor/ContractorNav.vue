<template>
  <div class="layout-container">
    <q-tabs v-model="currentTab" :align="!$q.screen.xs ? 'left' : 'center'">
      <q-route-tab :to="{ name: 'appDashboard' }" icon="home" title="Home" />
      <q-route-tab :to="{ name: 'contractor-dashboard' }" icon="account_circle" title="Profile" />
      <q-route-tab :to="{ name: 'contractor-edit' }" icon="info" title="Details" />
      <q-route-tab :to="{ name: 'contractor-schedule' }" icon="calendar_month" title="Roster" />
      <q-route-tab :to="{ name: 'contractor-commission-paid' }" icon="attach_money" title="Commissions" />
    </q-tabs>
  </div>
</template>
<script setup lang="ts">
import { User } from 'src/components/models'
import { ref } from 'vue'

interface Props {
  model: User
}
defineProps<Props>()

const currentTab = ref('details')
</script>
