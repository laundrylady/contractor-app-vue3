<template>
  <div v-if="model.id">
    <div class="text-h5">Booking History</div>
    <p>Below is the complete booking history for this {{ $t('contractor.name').toLowerCase() }}.</p>
    <OrderManagementTeamContractor :contractor_user_id="model.id" />
  </div>
</template>
<script setup lang="ts">
import { User } from 'src/components/models'
import OrderManagementTeamContractor from 'src/components/order/OrderManagementTeamContractor.vue'

interface Props {
  model: User
}
defineProps<Props>()
</script>
