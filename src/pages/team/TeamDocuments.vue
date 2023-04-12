<template>
  <div v-if="model.id">
    <div class="text-h5">{{ $t('document.namePlural') }}</div>
    <p>These documents are only visible to staff.</p>
    <GlobalAttachments :attachable_id="model.id" attachable_type="Team" />
  </div>
</template>
<script setup lang="ts">
import GlobalAttachments from 'src/components/attachment/GlobalAttachments.vue'
import { Team } from 'src/components/models'

interface Props {
  model: Team
}
defineProps<Props>()
</script>
