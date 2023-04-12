<template>
  <div v-if="model.id">
    <div class="text-h5">Email Activities</div>
    <p>Send an Email or view the history for this {{ $t('team.name') }}.</p>
    <SendNotificationTeam :team="model" :notifiable_id="model.id" class="q-mb-lg" />
    <GlobalNotifications :notifiable_id="model.id" notifiable_type="Team" />
  </div>
</template>
<script setup lang="ts">
import { Team } from 'src/components/models'
import GlobalNotifications from 'src/components/notification/GlobalNotifications.vue'
import SendNotificationTeam from 'src/components/notification/SendNotificationTeam.vue'

interface Props {
  model: Team
}
defineProps<Props>()
</script>
