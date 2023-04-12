<template>
<div v-if="model.id">
  <AuditTimeline :auditable_id="model.id" auditable_type="User"/>
</div>
</template>
<script setup lang="ts">
import AuditTimeline from 'src/components/audit/AuditTimeline.vue'
import { User } from 'src/components/models'

interface Props {
  model: User
}
defineProps<Props>()
</script>
