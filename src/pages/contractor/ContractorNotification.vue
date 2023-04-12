<template>
  <div v-if="model.id">
    <div class="text-h5">Email Activities</div>
    <p>Send an Email or view the history for this {{ $t('contractor.name') }}.</p>
    <SendNotificationUser :notification-user="model" class="q-mb-lg" />
    <GlobalNotifications :notifiable_id="model.id" notifiable_type="User" />
  </div>
</template>
<script setup lang="ts">
import { User } from 'src/components/models'
import GlobalNotifications from 'src/components/notification/GlobalNotifications.vue'
import SendNotificationUser from 'src/components/notification/SendNotificationUser.vue'

interface Props {
  model: User
}
defineProps<Props>()
</script>
