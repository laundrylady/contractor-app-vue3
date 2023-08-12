<template>
  <q-tabs v-model="currentTab" dense>
    <q-route-tab :to="{ name: 'contractor-dashboard' }" label="Home" icon="home" />
    <q-route-tab :to="{ name: 'contractor-edit' }" label="Details" icon="info" />
    <q-route-tab :to="{ name: 'contractor-schedule' }" label="Schedule" icon="calendar_month" />
    <q-route-tab :to="{ name: 'contractor-postcoderegion-groups' }" label="Commissions" icon="attach_money" />
  </q-tabs>
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
