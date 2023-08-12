<template>
  <div v-if="model.id">
    <q-tabs v-model="currentTab" class="q-mb-md">
      <q-tab name="schedule" :label="$t('schedule.name')" />
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
