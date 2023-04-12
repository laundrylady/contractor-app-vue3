<template>
  <div v-if="model.id">
    <div class="text-h5">SMS Activities</div>
    <p>Send an SMS or view the history for this {{ $t('team.name') }}.</p>
    <SendSmsTeam :team="model" class="q-mb-lg" />
    <SmsLogComponent :team_id="model.id" />
  </div>
</template>
<script setup lang="ts">
import { Team } from 'src/components/models'
import SendSmsTeam from 'src/components/sms/SendSmsTeam.vue'
import SmsLogComponent from 'src/components/sms/SmsLogComponent.vue'

interface Props {
  model: Team
}
defineProps<Props>()
</script>
