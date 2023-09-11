
<template>
  <p class="text-bold">Booking Summary</p>
  <q-card>
    <q-card-section>
      <div>
        <span v-if="localModel.suburbpostcoderegion"><q-icon name="place" size="24px" /> {{
          localModel.suburbpostcoderegion.locality
        }} {{
  localModel.suburbpostcoderegion.state }}</span>
      </div>
      <div class="q-mt-md" v-if="props.productcategories.filter(o => o.active).length">
        <q-icon name="local_laundry_service" size="24px" /> <span
          v-for="c in props.productcategories.filter(o => o.active)" :key="c.product_category_id" class="q-mr-sm">
          {{ categoryDisplay(c.product_category_id, props.categories) }}
        </span>
      </div>
      <div v-if="!localModel.contractor && props.scheduled_pickup_date && !props.scheduled_pickup_time" class="q-mt-md">
        <q-icon name="event" size="24px" /> {{
          props.scheduled_pickup_date }}
      </div>
      <div v-if="localModel.contractor && props.scheduled_pickup_date && props.scheduled_pickup_time" class="q-mt-md">
        <q-icon name="account_circle" size="24px" /> Pickup with {{ localModel.contractor.first_name }} on {{
          props.scheduled_pickup_date }} ({{ hourBookingDisplay(props.scheduled_pickup_time) }})
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { categoryDisplay, hourBookingDisplay } from 'src/mixins/help'
import { ref, watch, onMounted } from 'vue'
import { SelectOption } from '../models'

interface Props {
  suburb_postcode_region_id: number | null,
  contractor_user_id: number | null,
  scheduled_pickup_date: string | null,
  scheduled_pickup_time: string | null,
  productcategories: LooseObject[],
  categories: SelectOption[]
}

const props = defineProps<Props>()
const localModel = ref<LooseObject>({ suburbpostcoderegion: undefined, contractor: undefined })

const getSuburbPostcodeRegion = (val: number) => {
  api.get(`/public/postcoderegion/${val}`).then(response => {
    localModel.value.suburbpostcoderegion = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
}

const getContractor = (val: number) => {
  api.get(`/public/user/contractor/details/${val}`).then(response => {
    localModel.value.contractor = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
}

watch(() => props.suburb_postcode_region_id, (newVal) => {
  if (newVal) {
    getSuburbPostcodeRegion(newVal)
  } else {
    localModel.value.suburbpostcoderegion = null
  }
})

watch(() => props.contractor_user_id, (newVal) => {
  if (newVal) {
    getContractor(newVal)
  } else {
    localModel.value.contractor = null
  }
})

onMounted(() => {
  if (props.suburb_postcode_region_id) {
    getSuburbPostcodeRegion(props.suburb_postcode_region_id)
  }
  if (props.contractor_user_id) {
    getContractor(props.contractor_user_id)
  }
})
</script>
