<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn" padding :class="{ 'q-pa-md': $q.screen.xs }">
        <q-card class="col-xs-12 col-sm-6 col-md-4">
          <q-card-section class="text-center" style="min-height:165px;">
            <AppLogo />
          </q-card-section>
          <q-card-section>
            <div class="text-h5 text-bold">New {{ $t('order.name') }}</div>
            <q-stepper v-model="step" vertical color="primary" animated header-nav>
              <q-step :name="1" title="Suburb to pickup from" icon="place" :done="!!model.suburb_postcode_region_id">
                <PostcodeRegionField v-model="model.suburb_postcode_region_id" label="Enter your pickup suburb" outlined
                  :invalid="$v.suburb_postcode_region_id.$invalid" class="q-mt-md" />
                <q-stepper-navigation>
                  <q-btn @click="stepMove(2)" color="primary" label="Continue"
                    :disable="!model.suburb_postcode_region_id" />
                </q-stepper-navigation>
              </q-step>
              <q-step :name="2" title="Select the services" icon="local_laundry_service"
                :done="!!model.productcategories.filter(o => o.active).length">
                <div class="q-mr-sm">
                  <q-checkbox v-model="washingAndIroning" @update:model-value="toggleWashingAndIroning()"
                    label="Washing & Ironing" />
                </div>
                <span v-if="!washingAndIroning">
                  <div v-for="c in model.productcategories" :key="c.product_category_id" class="q-mr-sm">
                    <q-checkbox v-model="c.active" :label="categoryDisplay(c.product_category_id, categories)" />
                  </div>
                </span>
                <q-stepper-navigation>
                  <q-btn @click="stepMove(3)" color="primary" label="Continue"
                    :disable="!model.productcategories.filter(o => o.active).length" />
                </q-stepper-navigation>
              </q-step>
              <q-step :name="3" title="Pickup date & time" icon="event"
                :done="!!(model.scheduled_pickup_date && model.scheduled_pickup_time)">
                <q-date v-model="model.scheduled_pickup_date" mask="DD/MM/YYYY" :options="minDate" class="q-mt-md"
                  @navigation="handleScheduledPickupDateNav" @update:model-value="getAvailableContractorsTimes()" />
                <q-select v-model="model.scheduled_pickup_time" :label="$t('order.scheduledPickupTime')"
                  :invalid="$v.scheduled_pickup_time" :options="availableTimes" emit-value map-options outlined
                  class="q-mt-md" options-cover />
                <q-stepper-navigation>
                  <q-btn @click="stepMove(4)" color="primary" label="Continue"
                    :disable="!model.scheduled_pickup_date || !model.scheduled_pickup_time" />
                </q-stepper-navigation>
              </q-step>
              <q-step :name="4" title="Choose lady or lad" :done="!!model.contractor_user_id" icon="account_circle">
                <div class="q-mt-md" style="min-height:100px;">
                  <OrderContractorManagement :scheduled_pickup_date="model.scheduled_pickup_date"
                    :scheduled_pickup_time="model.scheduled_pickup_time" v-model="model.contractor_user_id"
                    :reassign="true" :productcategories="model.productcategories.filter(o => o.active)"
                    :suburb_postcode_region_id="model.suburb_postcode_region_id"
                    v-if="model.suburb_postcode_region_id && model.scheduled_pickup_date && model.scheduled_pickup_time && model.productcategories.filter(o => o.active).length" />
                  <div
                    v-if="!model.suburb_postcode_region_id || !model.scheduled_pickup_date || !model.scheduled_pickup_time || !model.productcategories.filter(o => o.active).length">
                    Please complete the selections in the previous steps.</div>
                </div>
                <q-stepper-navigation>
                  <q-btn @click="stepMove(5)" color="primary" label="Continue" />
                </q-stepper-navigation>
              </q-step>
              <q-step :name="5" title="Finalise">
                <q-input v-model="model.special_instructions" label="Special Instructions" autogrow outlined
                  class="q-mt-md" />
                <q-stepper-navigation>
                  <q-btn @click="step = 2" color="primary" label="Continue" />
                </q-stepper-navigation>
              </q-step>
            </q-stepper>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import moment from 'moment-timezone'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { categoryDisplay } from 'src/mixins/help'
import { productCategoriesVisibleBooking } from 'src/services/helpers'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import AppLogo from '../../components/AppLogo.vue'
import { Order, QDateNavigation } from '../../components/models'
import OrderContractorManagement from '../../components/order/OrderContractorManagement.vue'

const step = ref(1)
const washingAndIroning = ref(false)
const categories = ref()
const availableDates = ref<string[]>([])
const availableTimes = ref<string[]>([])
const schema = {
  contractor_user_id: null,
  scheduled_pickup_date: null,
  scheduled_pickup_time: null,
  special_instructions: null,
  recurring_order: false,
  recurring: null,
  productcategories: []
}
const model = reactive<Order>(JSON.parse(JSON.stringify(schema)))
const bus = inject('bus') as EventBus
const minDate = (date: string) => {
  return date >= moment().add(1, 'day').format('YYYY/MM/DD') && availableDates.value.indexOf(date) !== -1
}
const currentBookingDate = ref(moment())
const rules = {
  suburb_postcode_region_id: { required },
  scheduled_pickup_date: { required },
  scheduled_pickup_time: { required },
  contractor_user_id: { required },
  productcategories: { required }
}

const $v = useVuelidate(rules, model)

const toggleWashingAndIroning = () => {
  model.productcategories.forEach(o => {
    o.active = washingAndIroning.value
  })
}

const stepMove = (nextStep: number) => {
  sessionStorage.setItem('public-order', JSON.stringify(model))
  if (nextStep === 3) {
    getAvailableContractorsDates()
  } else {
    step.value = nextStep
  }
}

const handleScheduledPickupDateNav = (view: QDateNavigation) => {
  currentBookingDate.value = moment(`${view.year}-${view.month}-01`)
  getAvailableContractorsDates()
}

const getAvailableContractorsDates = () => {
  availableDates.value = []
  api.post('/public/order/findcontractorsdates', {
    suburb_postcode_region_id: model.suburb_postcode_region_id,
    scheduled_pickup_date: currentBookingDate.value.format('DD/MM/YYYY'),
    productcategories: model.productcategories
  }).then(response => {
    availableDates.value = response.data
    step.value = 3
  }).catch(error => {
    useMixinDebug(error)
  })
}

const getAvailableContractorsTimes = () => {
  availableTimes.value = []
  api.post('/public/order/findcontractorstimes', {
    suburb_postcode_region_id: model.suburb_postcode_region_id,
    scheduled_pickup_date: currentBookingDate.value.format('DD/MM/YYYY'),
    productcategories: model.productcategories
  }).then(response => {
    availableTimes.value = response.data
    step.value = 3
  }).catch(error => {
    useMixinDebug(error)
  })
}

onMounted(async () => {
  Object.assign(model, JSON.parse(JSON.stringify(schema)))
  categories.value = await productCategoriesVisibleBooking()
  model.productcategories = []
  for (const c of categories.value) {
    model.productcategories.push({ product_category_id: c.value, active: false })
  }
  washingAndIroning.value = false
  // check for continuing order
  const publicOrderCheck = sessionStorage.getItem('public-order')
  if (publicOrderCheck) {
    Object.assign(model, JSON.parse(publicOrderCheck))
  }
  if (model.productcategories.filter(o => o.active).length && model.scheduled_pickup_date) {
    getAvailableContractorsDates()
    getAvailableContractorsTimes()
  }
})

onBeforeUnmount(() => {
  bus.off('newOrder')
})
</script>
