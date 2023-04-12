<template>
  <q-select :model-value="modelValue" :label="label" :options="filteredPostcodeRegionGroups" :outlined="outlined"
    :dense="dense" :disable="disabled" @update:model-value="handleChange" clearable use-input map-options emit-value
    @filter="filterPostcodeRegions">
    <template v-slot:prepend>
      <q-icon name="place" color="info" />
    </template>
    <template v-slot:loading>
    </template>
  </q-select>
</template>
<script setup lang="ts">
import { getPostcodeRegionGroups } from 'src/services/geolocation'
import { onMounted, ref } from 'vue'
import { PostcodeRegionGroup, SelectOption } from '../models'

interface Props {
  modelValue: number | null,
  label: string,
  outlined?: boolean,
  dense?: boolean,
  disabled?: boolean
}
defineProps<Props>()
const emits = defineEmits(['update:modelValue', 'selectedLocation'])
const postcodeRegionGroups = ref<SelectOption[]>()
const filteredPostcodeRegionGroups = ref<SelectOption[]>()

const handleChange = (val: string) => {
  emits('update:modelValue', val)
  const found = filteredPostcodeRegionGroups.value ? filteredPostcodeRegionGroups.value.find((o: SelectOption) => o.value === val) : null
  emits('selectedLocation', found ? found.label : null)
}

const filterPostcodeRegions = (val: string, update: (fn: () => void) => void) => {
  if (val.length < 2) {
    return
  }
  update(() => {
    filteredPostcodeRegionGroups.value = postcodeRegionGroups.value?.filter((o: SelectOption) => o.label.toLowerCase().match(val.toLowerCase()))
  })
}

onMounted(async () => {
  postcodeRegionGroups.value = (await getPostcodeRegionGroups()).map((o: PostcodeRegionGroup) => { return { value: o.id, label: o.name } })
  filteredPostcodeRegionGroups.value = postcodeRegionGroups.value
})
</script>
