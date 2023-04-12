<template>
  <div v-if="model.id">
    <div class="text-h5">{{ $t('roster.name') }}</div>
    <p>Below are the pickup timeslots for this {{ $t('contractor.name').toLowerCase() }}.</p>
    <UserRosterManagement :user="model" />
  </div>
</template>
<script setup lang="ts">
import { User } from 'src/components/models'
import UserRosterManagement from 'src/components/userroster/UserRosterManagement.vue'

interface Props {
  model: User
}
defineProps<Props>()
</script>
