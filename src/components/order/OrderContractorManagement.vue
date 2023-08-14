<template>
  <div v-if="loadingContractors" style="min-height:100px;">
    <q-linear-progress indeterminate v-if="loadingContractors" />
    <div class="q-ml-sm q-mt-sm">Finding available contractors...</div>
  </div>
  <div v-if="contractors && !loadingContractors">
    <div class="text-h6 q-mb-xs">
      <div v-if="!modelValue">Available {{ $t('contractor.namePlural') }} ({{ contractors.length }})</div>
      <div v-if="modelValue">Assigned {{ $t('contractor.name') }}</div>
    </div>
    <q-select v-model="tmpContractorUserId" :label="$t('order.contractorUserId')"
      :options="contractors.map(o => { return { value: o.id, label: o.fullname, avatar: o.avatar, first_name: o.first_name, last_name: o.last_name, fullname: o.fullname } })"
      map-options emit-value outlined @update:model-value="emitUpdate()" :disable="disabled" outline>
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section side>
            <UserAvatar :user="{
              id: scope.opt.value, first_name: scope.opt.first_name, last_name: scope.opt.last_name, fullname: scope.opt.fullname, avatar: scope.opt.avatar
            }" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ scope.opt.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-slot:selected-item="scope">
        <UserAvatar :user="{
          id: scope.opt.value, first_name: scope.opt.first_name, last_name: scope.opt.last_name, fullname: scope.opt.fullname, avatar: scope.opt.avatar
        }" class="q-mr-sm" />
        {{ scope.opt.label }}
      </template>
    </q-select>
    <div v-if="reassign && modelValue">
      <q-btn flat @click="reAssign()" label="Reassign" color="primary" icon="sync" rounded />
    </div>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { User } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { onMounted, ref, watch } from 'vue'
import UserAvatar from '../UserAvatar.vue'

interface Props {
  modelValue?: number | null,
  team_id: number | null,
  scheduled_pickup_date: string | null,
  scheduled_pickup_time: string | null,
  productcategories: LooseObject[] | null
  disabled?: boolean,
  reassign?: boolean
}

const emits = defineEmits(['update:modelValue'])
const props = defineProps<Props>()
const loadingContractors = ref(false)
const tmpContractorUserId = ref()
const contractors = ref<User[]>()

const findAvailableContractors = () => {
  loadingContractors.value = true
  api.post('/team/availablecontractors', {
    team_id: props.team_id,
    scheduled_pickup_date: props.scheduled_pickup_date,
    scheduled_pickup_time: props.scheduled_pickup_time,
    productcategories: props.productcategories
  }).then(response => {
    contractors.value = response.data
    loadingContractors.value = false
    if (tmpContractorUserId.value) {
      if (!response.data.find((o: LooseObject) => o.id === tmpContractorUserId.value)) {
        emits('update:modelValue', null)
        tmpContractorUserId.value = null
      }
    }
  })
}

const emitUpdate = () => {
  emits('update:modelValue', tmpContractorUserId)
}

const reAssign = () => {
  tmpContractorUserId.value = null
  emits('update:modelValue', null)
  findAvailableContractors()
}

onMounted(() => {
  tmpContractorUserId.value = null
  if (props.modelValue) {
    api.get(`/user/${props.modelValue}`).then(response => {
      contractors.value = [response.data]
      tmpContractorUserId.value = response.data.id
    }).catch(error => {
      useMixinDebug(error)
    })
  } else {
    findAvailableContractors()
  }
})

watch(() => props.scheduled_pickup_date, (newVal) => {
  if (newVal && props.scheduled_pickup_time) {
    findAvailableContractors()
  }
})

watch(() => props.scheduled_pickup_time, (newVal) => {
  if (newVal && props.scheduled_pickup_date) {
    findAvailableContractors()
  }
})

watch(() => props.productcategories, (newVal, oldVal) => {
  if (newVal && oldVal && JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
    findAvailableContractors()
  }
})
</script>
