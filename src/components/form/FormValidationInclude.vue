<template>
  <q-card v-if="errors.$silentErrors.length" class="bg-red-1 q-mb-lg">
    <q-card-section>
      The following issues were found with the record:
      <q-list separator>
        <q-item v-for="(e, index) in errors.$silentErrors" :key="index" class="q-pl-none">
          <q-item-section>
            <div class="text-bold">Field: {{ fieldLabel(e.$property) }}</div>
            <div>{{ e.$message }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>
<script lang="ts" setup>
import { Validation } from '@vuelidate/core'

interface Props {
  errors: Validation
}
defineProps<Props>()

const fieldLabel = (val: string) => {
  if (val.match('region_')) {
    return 'SUBURB'
  }
  return val.replaceAll('_', ' ').toUpperCase()
}

</script>
