<template>
  <div v-if="model.id">
    <div class="text-h6">{{ $t('order.name') }} {{ $t('document.namePlural') }}</div>
    <p>These documents are only visible to staff.</p>
    <GlobalAttachments :attachable_id="model.id" attachable_type="Order" />
  </div>
</template>
<script setup lang="ts">
import GlobalAttachments from 'src/components/attachment/GlobalAttachments.vue'
import { Order } from 'src/components/models'

interface Props {
  model: Order
}
defineProps<Props>()
</script>
