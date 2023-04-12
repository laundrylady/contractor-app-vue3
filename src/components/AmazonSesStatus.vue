<template>
  <q-badge :color="color">{{ awsSesStatus(status) }}</q-badge>
</template>
<script setup lang="ts">
import { awsSesStatus } from 'src/mixins/help'
import { computed } from 'vue'

interface Props {
  status:string
}
const props = defineProps<Props>()

const color = computed(() => {
  if (props.status === 'Send') {
    return 'primary'
  }
  if (props.status === 'Delivery') {
    return 'positive'
  }
  if (props.status === 'Open') {
    return 'positive'
  }
  if (props.status === 'Bounce') {
    return 'negative'
  }
  if (props.status === 'Click') {
    return 'positive'
  }
  return 'grey'
})
</script>
