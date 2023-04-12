<template>
  <div v-if="model.id">
    <div class="text-h5">Booking History</div>
    <p>Below is the complete booking history.</p>
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
