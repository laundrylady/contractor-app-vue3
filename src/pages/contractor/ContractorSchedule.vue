<template>
  <div v-if="model.id">
    <UserRosterScheduleManagement :user="model" />
  </div>
</template>
<script setup lang="ts">
import { User } from 'src/components/models'
import UserRosterScheduleManagement from 'src/components/userrosterschedule/UserRosterScheduleManagement.vue'

interface Props {
  model: User
}
defineProps<Props>()
</script>
