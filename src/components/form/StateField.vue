<template>
  <q-select :model-value="modelValue" label="State" style="min-width:120px" :options="stateOptions" :outlined="outlined"
    :dense="dense" :disable="disabled" @update:model-value="handleChange" clearable />
</template>
<script setup lang="ts">
import { stateOptions } from 'src/mixins/help'

interface Props {
  modelValue: string | null,
  label: string,
  outlined?: boolean,
  dense?: boolean,
  disabled?: boolean
}
defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const handleChange = (val: string) => {
  emits('update:modelValue', val)
}
</script>
