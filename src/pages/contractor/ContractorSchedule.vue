<template>
  <div v-if="model.id">
    <UserRosterScheduleManagement :user="model" />
    <UserPostcodeRegionGroupManagement :user="model" class="q-mt-md" />
  </div>
</template>
<script setup lang="ts">
import { User } from 'src/components/models'
import UserPostcodeRegionGroupManagement from 'src/components/userpostcoderegiongroup/UserPostcodeRegionGroupManagement.vue'
import UserRosterScheduleManagement from 'src/components/userrosterschedule/UserRosterScheduleManagement.vue'

interface Props {
  model: User
}
defineProps<Props>()
</script>
