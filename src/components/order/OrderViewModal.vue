<template>
  <q-card v-if="model.id" class="bg-transparent" flat style="margin-top:1px;">
    <q-card-section>
      <div>{{ model.team.name }}</div>
      <div>{{ model.address2 }}</div>
      <div>{{ model.team.suburbpostcoderegion.locality }}</div>
      <div class="q-mb-sm">{{ model.team.suburbpostcoderegion.state }} {{ model.team.suburbpostcoderegion.postcode }}
      </div>
      <span v-for="p in model.productcategories" :key="p.id">
        <q-icon :name="p.icon" size="20px" v-if="p.meta?.pivot_active" class="q-mr-sm" />
      </span>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { Order } from '../models'

interface Props {
  model: Order
}

defineProps<Props>()
</script>
