<template>
  <div class="flex">
    <q-btn :to="{ name: 'team-dashboard', params: { id: model.id } }" label="Details"
      :outline="tabBtnInfo('team-dashboard').outline" rounded :color="tabBtnInfo('team-dashboard').color"
      class="q-mr-sm" />
    <q-btn :to="{ name: 'team-orders', params: { id: model.id } }" :label="$t('order.namePlural')"
      :outline="tabBtnInfo('team-orders').outline" rounded :color="tabBtnInfo('team-orders').color" class="q-mr-sm" />
    <q-btn :to="{ name: 'team-invoices', params: { id: model.id } }" :label="$t('invoice.namePlural')"
      :outline="tabBtnInfo('team-invoices').outline" rounded :color="tabBtnInfo('team-invoices').color" />
  </div>
</template>
<script setup lang="ts">
import { Team } from 'src/components/models'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  model: Team
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
  if (val === 'team-comms' && currentRoute.value && ['team-sms', 'team-notifications'].indexOf(currentRoute.value.toString()) !== -1) {
    return {
      outline: false,
      color: 'primary'
    }
  }
  if (val === 'team-invoices' && currentRoute.value && ['team-invoices', 'team-payments'].indexOf(currentRoute.value.toString()) !== -1) {
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
