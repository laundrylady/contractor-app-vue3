<template>
  <q-icon name="settings" color="grey-7" /> <span v-if="o.productcategories"><span
      v-for="(c, index) in o.productcategories.filter(q => q.meta && q.meta.pivot_active)" :key="c.id">{{
        c.name }}<span v-if="index + 1 !== o.productcategories.filter(q => q.meta && q.meta.pivot_active).length"
        class="q-ml-xs q-mr-xs">&</span>
    </span> pickup with {{ o.team.name }}</span>
</template>
<script setup lang="ts">
import { Order } from '../models'

interface Props {
  o: Order
}
defineProps<Props>()
</script>
