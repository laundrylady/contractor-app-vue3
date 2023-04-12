<template>
  <div>
    <q-btn color="black" outline icon="menu" class="lt-sm">
      <q-menu auto-close>
        <q-list style="min-width: 100px">
          <q-item clickable :to="{ name: 'order-edit', params: { id: model.id } }">
            <q-item-section>Details</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable :to="{ name: 'order-documents', params: { id: model.id } }">
            <q-item-section>Documents</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable :to="{ name: 'order-sms', params: { id: model.id } }">
            <q-item-section>SMS Notifications</q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'order-notifications', params: { id: model.id } }">
            <q-item-section>Email Notifications</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable :to="{ name: 'order-audit', params: { id: model.id } }">
            <q-item-section>Audit</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <q-tabs v-model="currentTab" align="left" active-bg-color="primary" active-color="white">
      <q-route-tab :to="{ name: 'order-edit', params: { id: model.id } }" label="Details" icon="info" />
      <q-route-tab :to="{ name: 'order-documents', params: { id: model.id } }" label="Documents" icon="attach_file" />
      <q-route-tab :to="{ name: 'order-sms', params: { id: model.id } }" label="SMS" icon="chat" />
      <q-route-tab :to="{ name: 'order-notifications', params: { id: model.id } }" label="Emails" icon="mail" />
      <q-route-tab :to="{ name: 'order-audit', params: { id: model.id } }" label="Audit" icon="bolt" />
    </q-tabs>
  </div>
</template>
<script setup lang="ts">
import { Order } from 'src/components/models'
import { ref } from 'vue'

interface Props {
  model: Order
}
defineProps<Props>()

const currentTab = ref('dashboard')
</script>
