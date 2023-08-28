<template>
  <div class="layout-container">
    <q-tabs v-model="currentTab" dense :align="!$q.screen.xs ? 'left' : 'center'">
      <q-route-tab :to="{ name: 'contractor-dashboard' }" label="Home" icon="home" />
      <q-route-tab :to="{ name: 'contractor-edit' }" label="Details" icon="info" />
      <q-route-tab :to="{ name: 'contractor-schedule' }" label="Roster" icon="calendar_month" />
      <q-route-tab :to="{ name: 'contractor-commission-paid' }" label="Commissions" icon="attach_money" />
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
