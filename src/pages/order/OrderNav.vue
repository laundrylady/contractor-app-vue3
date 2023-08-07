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
    <q-btn :to="{ name: 'order-edit', params: { id: model.id } }" label="Details"
      :outline="tabBtnInfo('order-edit').outline" rounded :color="tabBtnInfo('order-edit').color"
      class="q-mr-sm q-mb-sm" />
    <q-btn :to="{ name: 'order-documents', params: { id: model.id } }" label="Documents"
      :outline="tabBtnInfo('order-documents').outline" rounded :color="tabBtnInfo('order-documents').color"
      class="q-mr-sm q-mb-sm" />
    <q-btn :to="{ name: 'order-sms', params: { id: model.id } }" label="SMS" :outline="tabBtnInfo('order-sms').outline"
      rounded :color="tabBtnInfo('order-sms').color" class="q-mr-sm q-mb-sm" />
    <q-btn :to="{ name: 'order-notifications', params: { id: model.id } }" label="Emails"
      :outline="tabBtnInfo('order-notifications').outline" rounded :color="tabBtnInfo('order-notifications').color"
      class="q-mr-sm q-mb-sm" />
    <q-btn :to="{ name: 'order-audit', params: { id: model.id } }" label="Audit"
      :outline="tabBtnInfo('order-audit').outline" rounded :color="tabBtnInfo('order-audit').color"
      class="q-mr-sm q-mb-sm" />
  </div>
</template>
<script setup lang="ts">
import { Order } from 'src/components/models'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  model: Order
}
defineProps<Props>()

const route = useRoute()
const currentRoute = computed(() => route.name)

const tabBtnInfo = (val: string) => {
  if (currentRoute.value === val) {
    return {
      outline: false,
      color: 'primary'
    }
  }
  return {
    outline: true,
    color: ''
  }
}
</script>
