<template>
  <div v-if="loadingContractors" style="min-height:100px;">
    <q-linear-progress indeterminate v-if="loadingContractors" color="primary" />
    <div class="q-ml-sm q-mt-sm">Finding available ladies / lads...</div>
  </div>
  <div v-if="contractors && !loadingContractors && contractors.length">
    <div v-for="c in contractors" :key="c.key">
      <p>Pickup slots available in the {{ c.key }}</p>
      <q-list separator>
        <q-item v-for="d in c.data" :key="d.id">
          <q-item-section>
            <div class="flex no-wrap">
              <UserAvatar :user="{
                id: d.user.id, first_name: d.user.first_name, last_name: d.user.last_name, fullname: d.user.fullname, avatar: d.user.avatar
              }" size="48px" />
              <div class="q-ml-md">
                <div class="text-primary">{{ d.user.fullname }}</div>
                <q-radio v-model="tmpTimeSelection" :val="`${d.user.id}|${d.time}`" :label="hourBookingDisplay(d.time)"
                  @update:model-value="emitUpdate" />
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div v-if="reassign && modelValue" class="q-mt-md">
      <q-btn flat @click="reAssign()" label="Choose a different lady/lad" color="primary" icon="sync" rounded />
    </div>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { ContractorTime } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { onMounted, ref, watch } from 'vue'
import UserAvatar from '../UserAvatar.vue'
import { hourBookingDisplay } from 'src/mixins/help'

interface Props {
  modelValue?: number | null,
  team_id?: number | null | undefined,
  scheduled_pickup_date: string | null,
  scheduled_pickup_time?: string | null,
  productcategories: LooseObject[] | null
  disabled?: boolean,
  reassign?: boolean,
  suburb_postcode_region_id?: number | null
}

const emits = defineEmits(['update:modelValue', 'update:modelValueTime'])
const props = defineProps<Props>()
const loadingContractors = ref(false)
const tmpContractorUserId = ref()
const tmpTimeSelection = ref()
const contractors = ref<ContractorTime[]>()

const findAvailableContractors = () => {
  loadingContractors.value = true
  api.post('/public/order/findcontractorstimes', {
    team_id: props.team_id,
    scheduled_pickup_date: props.scheduled_pickup_date,
    productcategories: props.productcategories,
    suburb_postcode_region_id: props.suburb_postcode_region_id
  }).then(response => {
    contractors.value = response.data
    loadingContractors.value = false
    if (tmpContractorUserId.value) {
      if (!response.data.find((o: ContractorTime) => o.key === tmpContractorUserId.value)) {
        emits('update:modelValue', null)
        tmpContractorUserId.value = null
        tmpTimeSelection.value = null
      }
    }
  })
}

const emitUpdate = () => {
  if (tmpTimeSelection.value) {
    const [contractorUserId, time] = tmpTimeSelection.value.split('|')
    tmpContractorUserId.value = contractorUserId ? parseFloat(contractorUserId) : null
    emits('update:modelValue', tmpContractorUserId.value)
    emits('update:modelValueTime', time)
  }
}

const reAssign = () => {
  tmpContractorUserId.value = null
  tmpTimeSelection.value = null
  emits('update:modelValue', null)
  emits('update:modelValueTime', null)
  findAvailableContractors()
}

onMounted(() => {
  tmpContractorUserId.value = null
  tmpTimeSelection.value = null
  if (props.modelValue && props.scheduled_pickup_time) {
    loadingContractors.value = true
    api.get(`/public/user/contractor/details/${props.modelValue}`).then(response => {
      if (props.scheduled_pickup_time) {
        const stx = props.scheduled_pickup_time.split('-')
        contractors.value = [{
          key: parseFloat(stx[0]) < 12 ? 'Morning' : 'Afternoon',
          data: [{
            user: response.data,
            id: 0,
            time: props.scheduled_pickup_time
          }]
        }]
        tmpContractorUserId.value = response.data.id
        tmpTimeSelection.value = `${response.data.id}|${props.scheduled_pickup_time}`
      }
      loadingContractors.value = false
    }).catch(error => {
      useMixinDebug(error)
    })
  } else {
    findAvailableContractors()
  }
})

watch(() => props.scheduled_pickup_date, (newVal) => {
  if (newVal) {
    findAvailableContractors()
    tmpContractorUserId.value = null
    tmpTimeSelection.value = null
  }
})

watch(() => props.productcategories, (newVal, oldVal) => {
  if (newVal && oldVal && JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
    findAvailableContractors()
  }
})
</script>
