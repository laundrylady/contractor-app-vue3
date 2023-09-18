<template>
  <span v-if="o.productcategories"><span v-for="(c) in o.productcategories.filter(q => q.meta && q.meta.pivot_active)"
      :key="c.id"><q-icon :name="c.icon" class="q-mr-xs" size="18px" :title="c.name" />
    </span></span>
</template>
<script setup lang="ts">
import { Order } from '../models'

interface Props {
  o: Order
}
defineProps<Props>()
</script>
