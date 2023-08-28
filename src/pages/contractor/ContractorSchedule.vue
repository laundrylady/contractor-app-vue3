<template>
  <div v-if="model.id">
    <div v-if="!$q.screen.xs">
      <q-breadcrumbs class="q-mb-md">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" />
        </template>
        <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
        <q-breadcrumbs-el label="Profile" :to="{ name: 'contractor-dashboard' }" />
        <q-breadcrumbs-el label="Roster" />
      </q-breadcrumbs>
    </div>
    <q-tabs v-model="currentTab" class="q-mb-md" :align="!$q.screen.xs ? 'left' : 'center'">
      <q-tab name="schedule" :label="$t('roster.name')" />
      <q-tab name="pickup" label="Pickup Locations" />
    </q-tabs>
    <UserRosterScheduleManagement :user="model" v-if="currentTab === 'schedule'" />
    <UserPostcodeRegionGroupManagement :user="model" v-if="currentTab === 'pickup'" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { User } from 'src/components/models'
import UserPostcodeRegionGroupManagement from 'src/components/userpostcoderegiongroup/UserPostcodeRegionGroupManagement.vue'
import UserRosterScheduleManagement from 'src/components/userrosterschedule/UserRosterScheduleManagement.vue'

interface Props {
  model: User
}
defineProps<Props>()
const currentTab = ref('schedule')
</script>
