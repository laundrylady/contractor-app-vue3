<template>
  <div v-if="model.id">
    <InvoiceManagement :team_id="model.id" />
  </div>
</template>
<script setup lang="ts">
import { Team } from 'src/components/models'
import InvoiceManagement from 'src/components/invoice/InvoiceManagement.vue'

interface Props {
  model: Team
}
defineProps<Props>()
</script>
