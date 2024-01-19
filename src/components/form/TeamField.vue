<template>
  <q-select :label="label" :model-value="modelValue" @update:model-value="handleChange" :options="teams"
    @filter="filterTeams" use-input emit-value map-options :dark="dark" :color="dark ? 'white' : ''" :error="invalid"
    hide-dropdown-icon input-debounce="350" autocomplete="team-filter" :outlined="outlined" :disable="disabled"
    ref="qSelectTeam" :borderless="borderless" :dense="dense" class="q-pb-none" :filled="filled" :loading="loading"
    :multiple="multiple" :placeholder="placeholder">
    <template v-slot:loading>
      <q-spinner v-if="loading" />
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>{{ scope.opt.label }}</q-item-label>
          <q-item-label caption v-if="scope.opt.label !== scope.opt.subLabel">{{ scope.opt.subLabel }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { onMounted, ref, watch } from 'vue'
import { Team } from '../models'

interface Props {
  modelValue?: number | number[] | null,
  status?: string,
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
  nowatch?: boolean
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const loading = ref(false)
const teams = ref()

const handleChange = (val: number | number[]) => {
  emits('update:modelValue', val)
}

const filterTeams = (val: string, update: (fn: () => void) => void) => {
  if (val.length < 2) {
    return
  }
  loading.value = true
  api.post(`/public/team/index?status=${props.status}`, { keyword: val }).then(response => {
    update(() => {
      teams.value = response.data.map((o: Team) => { return { value: o.id, label: o.name, subLabel: `${o.first_name} ${o.last_name}` } })
      loading.value = false
    })
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

onMounted(() => {
  if (props.modelValue && ((Array.isArray(props.modelValue) && props.modelValue.length) || !Array.isArray(props.modelValue))) {
    api.get(`/public/team/${props.modelValue}`).then(res => {
      if (Array.isArray(res.data)) {
        teams.value = res.data.map((o: Team) => { return { value: o.id, label: o.name } })
        loading.value = false
      } else {
        teams.value = [{ value: res.data.id, label: res.data.name }]
        loading.value = false
      }
    })
  }
})

watch(() => props.modelValue, (newVal, oldVal) => {
  if (!props.nowatch && newVal && newVal !== oldVal && ((Array.isArray(newVal) && newVal.length) || !Array.isArray(newVal))) {
    api.get(`/public/team/${newVal}`).then(res => {
      teams.value = [{ value: res.data.id, label: res.data.name }]
    }).catch(error => { useMixinDebug(error) })
  }
})
</script>
