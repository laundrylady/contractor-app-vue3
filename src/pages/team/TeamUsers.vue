<template>
  <div v-if="model.id">
    <div class="text-h5">Associated {{ $t('team.userPlural') }}</div>
    <p>Users that are involved in this customer.</p>
    <TeamUserManagement :team="model" />
  </div>
</template>
<script setup lang="ts">
import { Team } from 'src/components/models'
import TeamUserManagement from './TeamUserManagement.vue'

interface Props {
  model: Team
}
defineProps<Props>()
</script>
