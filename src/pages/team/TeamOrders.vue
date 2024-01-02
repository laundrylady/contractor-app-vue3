<template>
  <div v-if="model.id">
    <OrderManagementTeamContractor :team_id="model.id" />
  </div>
</template>
<script setup lang="ts">
import { Team } from 'src/components/models'
import OrderManagementTeamContractor from 'src/components/order/OrderManagementTeamContractor.vue'

interface Props {
  model: Team
}
defineProps<Props>()
</script>
