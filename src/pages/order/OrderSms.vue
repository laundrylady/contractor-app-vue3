<template>
  <div v-if="model.id">
    <div class="text-h6">SMS Activities</div>
    <p>Send an SMS or view the history for this {{ $t('team.name') }}.</p>
    <SendSmsOrder :order="model" class="q-mb-lg" />
    <SmsLogComponent :order_id="model.id" />
  </div>
</template>
<script setup lang="ts">
import { Order } from 'src/components/models'
import SendSmsOrder from 'src/components/sms/SendSmsOrder.vue'
import SmsLogComponent from 'src/components/sms/SmsLogComponent.vue'

interface Props {
  model: Order
}
defineProps<Props>()
</script>
