<template>
  <q-select :label="label" :model-value="modelValue" @update:model-value="handleChange" :options="postcodes"
    @filter="filterPostcodes" use-input emit-value map-options :dark="dark" :color="dark ? 'white' : ''" :error="invalid"
    hide-dropdown-icon input-debounce="350" autocomplete="postcode-filter" :outlined="outlined" :disable="disabled"
    ref="qSelectPostcodeRegion" :borderless="borderless" :dense="dense" class="q-pb-none" :filled="filled"
    :loading="loading" :multiple="multiple" :placeholder="placeholder">
    <template v-slot:prepend>
      <q-icon name="place" color="info" />
    </template>
    <template v-slot:loading>
      <q-spinner v-if="loading" />
    </template>
  </q-select>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { onMounted, ref, watch } from 'vue'
import { PostcodeRegion, SelectOption } from '../models'

interface Props {
  modelValue?: number | number[] | null,
  invalid?: boolean,
  label?: string,
  dark?: boolean,
  outlined?: boolean,
  disabled?: boolean,
  multiple?: boolean
  dense?: boolean,
  borderless?: boolean,
  filled?: boolean,
  placeholder?: string,
  nowatch?: boolean,
  state?: string
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue', 'selectedLocation'])

const loading = ref(false)
const postcodes = ref()

const handleChange = (val: number | number[]) => {
  emits('update:modelValue', val)
  const found = postcodes.value ? postcodes.value.find((o: SelectOption) => o.value === val) : null
  emits('selectedLocation', found ? found.label : null)
}

const filterPostcodes = (val: string, update: (fn: () => void) => void) => {
  if (val.length < 2) {
    return
  }
  loading.value = true
  api.get(`/public/postcoderegion/index?keyword=${val}${props.state ? `&state=${props.state}` : ''}`).then(response => {
    update(() => {
      postcodes.value = response.data.map((o: PostcodeRegion) => { return { value: o.id, label: `${o.locality} (${o.state} ${o.postcode})` } })
      loading.value = false
    })
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

onMounted(() => {
  if (props.modelValue && ((Array.isArray(props.modelValue) && props.modelValue.length) || !Array.isArray(props.modelValue))) {
    api.get(`/public/postcoderegion/${props.modelValue}`).then(res => {
      if (Array.isArray(res.data)) {
        postcodes.value = res.data.map((o: PostcodeRegion) => { return { value: o.id, label: `${o.locality} (${o.state} ${o.postcode})` } })
        loading.value = false
      } else {
        postcodes.value = [{ value: res.data.id, label: `${res.data.locality} (${res.data.state} ${res.data.postcode})` }]
        loading.value = false
      }
    })
  }
})

watch(() => props.modelValue, (newVal, oldVal) => {
  if (!props.nowatch && newVal && newVal !== oldVal && ((Array.isArray(newVal) && newVal.length) || !Array.isArray(newVal))) {
    api.get(`/public/postcoderegion/${newVal}`).then(res => {
      postcodes.value = [{ value: res.data.id, label: `${res.data.locality} (${res.data.state} ${res.data.postcode})` }]
    }).catch(error => { useMixinDebug(error) })
  }
})
</script>
