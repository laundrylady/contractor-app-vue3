<template>
  <div v-if="model.id">
    <AuditTimeline :auditable_id="model.id" auditable_type="Team" />
  </div>
</template>
<script setup lang="ts">
import AuditTimeline from 'src/components/audit/AuditTimeline.vue'
import { Team } from 'src/components/models'

interface Props {
  model: Team
}
defineProps<Props>()
</script>
