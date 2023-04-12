<template>
  <div v-if="model.id">
    <div class="text-h6">Email Activities</div>
    <p>Send an Email or view the history for this {{ $t('order.name') }}.</p>
    <SendNotificationOrder :order="model" :notifiable_id="model.id" class="q-mb-lg" />
    <GlobalNotifications :notifiable_id="model.id" notifiable_type="Order" />
  </div>
</template>
<script setup lang="ts">
import { Order } from 'src/components/models'
import GlobalNotifications from 'src/components/notification/GlobalNotifications.vue'
import SendNotificationOrder from 'src/components/notification/SendNotificationOrder.vue'

interface Props {
  model: Order
}
defineProps<Props>()
</script>
