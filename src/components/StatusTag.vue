<template>
  <q-badge :color="statusColor" :class="{ 'q-pa-xs': small, 'q-pa-sm': !small }" v-if="!textOnly"><q-icon name="check"
      class="q-mr-xs" v-if="status === 'PAID'" />
    {{ statusText }}</q-badge>
  <span v-if="textOnly">{{ statusText }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  status?: string,
  small?: boolean,
  white?: boolean,
  textOnly?: boolean
}
const props = defineProps<Props>()

const statusColor = computed(() => {
  if (!props.status) {
    return 'positive'
  }
  if (props.white) {
    return 'white'
  }
  if (props.status === 'in_progress') {
    return 'info'
  }
  if (props.status === 'active') {
    return 'positive'
  }
  if (props.status.toLowerCase() === 'draft') {
    return 'grey'
  }
  if (props.status === 'confirmed') {
    return 'info'
  }
  if (['DELETED', 'cancelled', 'VOID'].indexOf(props.status) !== -1) {
    return 'negative'
  }
  return 'positive'
})

const statusText = computed(() => {
  if (!props.status) {
    return ''
  }
  let label = props.status
  if (props.status === 'in_progress') {
    label = 'In Progress'
  }
  if (props.status === 'processed') {
    label = 'Processed'
  }
  if (props.status === 'active') {
    label = 'Active'
  }
  if (props.status.toLowerCase() === 'draft') {
    label = 'Draft'
  }
  if (props.status.toLowerCase() === 'paid') {
    label = 'PAID'
  }
  if (props.status.toLowerCase() === 'confirmed') {
    label = 'Confirmed'
  }
  if (props.status.toLowerCase() === 'awaiting_payment') {
    label = 'Awaiting Payment'
  }
  if (props.status.toLowerCase() === 'ready_for_delivery') {
    label = 'Ready For Delivery'
  }
  if (props.status.toLowerCase() === 'cancelled') {
    label = 'Cancelled'
  }
  if (props.status.toLowerCase() === 'completed') {
    label = 'Completed'
  }
  return label
})
</script>
