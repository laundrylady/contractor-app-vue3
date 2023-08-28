<template>
  <q-badge :color="statusColor" :class="{ 'q-pa-xs': small, 'q-pa-sm': !small }"><q-icon name="check" class="q-mr-xs"
      v-if="status === 'PAID'" />
    {{ statusText }}</q-badge>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  status?: string,
  small?: boolean,
  white?: boolean
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
  if (props.status === 'DELETED') {
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
  return label
})
</script>
