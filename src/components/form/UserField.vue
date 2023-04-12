<template>
  <q-select :label="label" :model-value="modelValue" @update:model-value="handleChange" :options="users"
    @filter="filterUsers" use-input emit-value map-options :dark="dark" :color="dark ? 'white' : ''" :error="invalid"
    hide-dropdown-icon input-debounce="350" autocomplete="team-filter" :outlined="outlined" :disable="disabled" use-chips
    ref="qSelectTeam" :borderless="borderless" :dense="dense" class="q-pb-none" :filled="filled" :loading="loading"
    :multiple="multiple" :placeholder="placeholder">
    <template v-slot:prepend>
      <q-icon name="group" color="info" />
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
import { User } from '../models'

interface Props {
  modelValue?: number | number[] | null,
  role?: string,
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
const users = ref()

const handleChange = (val: number | number[]) => {
  emits('update:modelValue', val)
}

const filterUsers = (val: string, update: (fn: () => void) => void) => {
  if (val.length < 2) {
    return
  }
  loading.value = true
  api.post(`/user/index?role=${props.role}`, { keyword: val }).then(response => {
    update(() => {
      users.value = response.data.map((o: User) => { return { value: o.id, label: o.fullname } })
      loading.value = false
    })
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

onMounted(() => {
  if (props.modelValue && ((Array.isArray(props.modelValue) && props.modelValue.length) || !Array.isArray(props.modelValue))) {
    api.get(`/user/${props.modelValue}`).then(res => {
      if (Array.isArray(res.data)) {
        users.value = res.data.map((o: User) => { return { value: o.id, label: o.fullname } })
        loading.value = false
      } else {
        users.value = [{ value: res.data.id, label: res.data.fullname }]
        loading.value = false
      }
    })
  }
})

watch(() => props.modelValue, (newVal, oldVal) => {
  if (!props.nowatch && newVal && newVal !== oldVal && ((Array.isArray(newVal) && newVal.length) || !Array.isArray(newVal))) {
    api.get(`/user/${newVal}`).then(res => {
      users.value = [{ value: res.data.id, label: res.data.fullname }]
    }).catch(error => { useMixinDebug(error) })
  }
})

</script>
