<template>
  <div v-if="model.id">
    <div class="text-h5">SMS Activities</div>
    <p>Send an SMS or view the history for this {{ $t('contractor.name') }}.</p>
    <SendSmsUser :sms-user="model" class="q-mb-lg" />
    <SmsLogComponent :user_id="model.id" />
  </div>
</template>
<script setup lang="ts">
import { User } from 'src/components/models'
import SendSmsUser from 'src/components/sms/SendSmsUser.vue'
import SmsLogComponent from 'src/components/sms/SmsLogComponent.vue'

interface Props {
  model: User
}
defineProps<Props>()
</script>
