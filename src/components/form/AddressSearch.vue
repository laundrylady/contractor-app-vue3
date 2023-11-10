<template>
  <q-select v-model="keyword" :options="addresses" @update:model-value="handleChange" use-input :placeholder="placeholder"
    @filter="searchAddress" hide-dropdown-icon input-debounce="200" autocomplete="search-filter" class="q-mb-sm" outlined
    :filled="filled" dense :loading="loading" v-if="common?.operating_country === 'aud'">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:loading>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-icon name="place" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.formatted }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinCommon } from 'src/mixins/common'
import { useMixinDebug } from 'src/mixins/debug'
import { addressPopulate, addressPopulateGoogle } from 'src/services/address'
import { ref } from 'vue'

interface AddressFields {
  address1: string,
  address2: string,
  country_id: string,
  lat: string,
  lng: string,
  suburb_postcode_region_id: string,
  postcode: string
}

interface Props {
  model?: LooseObject,
  addressfields: AddressFields,
  invalid?: boolean,
  dark?: boolean,
  outlined?: boolean,
  disabled?: boolean,
  multiple?: boolean
  dense?: boolean,
  borderless?: boolean,
  filled?: boolean,
  placeholder?: string
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])
const common = useMixinCommon()

const keyword = ref()
const loading = ref(false)
const addresses = ref()

const handleChange = () => {
  if (keyword.value.placeId) {
    api.get(`/place/${keyword.value.placeId}`).then(response => {
      addressPopulateGoogle(
        response.data,
        props.model,
        props.addressfields.address1,
        props.addressfields.address2,
        props.addressfields.suburb_postcode_region_id,
        props.addressfields.lat,
        props.addressfields.lng,
        props.addressfields.country_id
      )
      keyword.value = null
      emits('update:modelValue', null)
    }).catch(error => {
      useMixinDebug(error)
    })
  } else {
    addressPopulate(
      keyword.value,
      props.model,
      props.addressfields.address1,
      props.addressfields.address2,
      props.addressfields.suburb_postcode_region_id,
      props.addressfields.lat,
      props.addressfields.lng,
      props.addressfields.country_id
    )
    keyword.value = null
    emits('update:modelValue', null)
  }
}

const searchAddress = (val: string, update: (fn: () => void) => void) => {
  if (val.length > 3) {
    loading.value = true
    addresses.value = [{ unit_number: 'Searching addresses...' }]
    api.post('/address', { address: val }).then((response) => {
      update(() => {
        addresses.value = response.data.data
        loading.value = false
      })
    }).catch((response) => {
      useMixinDebug(response)
      loading.value = false
      return []
    })
  }
}
</script>
