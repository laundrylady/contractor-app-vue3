<template>
  <div v-if="model.id">
    <AuditTimeline :auditable_id="model.id" auditable_type="Order" />
  </div>
</template>
<script setup lang="ts">
import AuditTimeline from 'src/components/audit/AuditTimeline.vue'
import { Order } from 'src/components/models'

interface Props {
  model: Order
}
defineProps<Props>()
</script>
