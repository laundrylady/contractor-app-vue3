<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding :class="{ 'q-pa-md': $q.screen.xs }">
        <div class="flex justify-center q-mt-xl" v-if="!$q.screen.xs">
          <div class="order-new-step" :class="{ 'active': step === 1 || model.suburb_postcode_region_id }"
            @click="stepMove(1)">
            Select your suburb
          </div>
          <div class="flex items-end"><img src="~assets/images/illustrations/bot_arrow.png" /></div>
          <div class="order-new-step"
            :class="{ 'active': step === 2 || model.productcategories.filter(o => o.active).length }">
            Select your service
          </div>
          <div class="flex items-start"><img src="~assets/images/illustrations/top_arrow.png" /></div>
          <div class="order-new-step" :class="{ 'active': step === 3 || model.scheduled_pickup_date }">
            Select pickup date
          </div>
          <div class="flex items-end"><img src="~assets/images/illustrations/bot_arrow.png" /></div>
          <div class="order-new-step" :class="{ 'active': step === 4 || model.contractor_user_id }">
            Select your Laundry Lady or Lad
          </div>
          <div class="flex items-start"><img src="~assets/images/illustrations/top_arrow.png" /></div>
          <div class="order-new-step">
            Enter your details
          </div>
          <div class="flex items-end"><img src="~assets/images/illustrations/bot_arrow.png" /></div>
          <div class="order-new-step">
            Confirm booking
          </div>
        </div>
        <div class="row q-mt-xl q-mb-lg">
          <div class="col-xs-12 col-sm-6 offset-sm-3 text-center">
            <AppLogo />
          </div>
        </div>
        <div class="row text-lg q-mb-xl">
          <div class="col-xs-12 col-sm-6 offset-sm-3 text-center">
            Book your mobile Laundry service. Washing, Ironing, Pickup and Delivery.
          </div>
        </div>
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-sm-6 offset-sm-3">
            <q-card flat class="bg-page">
              <q-card-section v-if="step === 1">
                <p class="text-center text-bold">Select your pickup location:</p>
                <PostcodeRegionField v-model="model.suburb_postcode_region_id" label="Enter your pickup suburb" outlined
                  :invalid="$v.suburb_postcode_region_id.$invalid" @update:model-value="checkContractors()" />
                <div class="text-lg text-center q-mt-lg" v-if="noContractors">Sorry, there is currently no availability in
                  this
                  area.</div>
                <div class="text-center q-mt-xl">
                  <q-btn @click="stepMove(2)" color="primary" label="Continue" rounded
                    :disable="!model.suburb_postcode_region_id" />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 2">
                <p class="text-center text-bold">Choose the services you require:</p>
                <div class="flex justify-center">
                  <div>
                    <div class="q-mr-sm">
                      <q-checkbox v-model="washingAndIroning" @update:model-value="toggleWashingAndIroning()"
                        label="Washing & Ironing" />
                    </div>
                    <div v-if="!washingAndIroning">
                      <div v-for="c in model.productcategories" :key="c.product_category_id" class="q-mr-sm">
                        <q-checkbox v-model="c.active" :label="categoryDisplay(c.product_category_id, categories)"
                          @update:model-value="[model.scheduled_pickup_date = null, model.scheduled_pickup_time = null, model.contractor_user_id = null]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center q-mt-xl">
                  <q-btn @click="stepMove(1)" color="primary" label="Previous" flat class="q-mr-sm" rounded /><q-btn
                    @click="stepMove(3)" color="primary" label="Continue"
                    :disable="!model.productcategories.filter(o => o.active).length" rounded />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 3">
                <p class="text-center text-bold">Choose the desired pickup date:</p>
                <div class="text-center">
                  <q-date v-model="model.scheduled_pickup_date" mask="DD/MM/YYYY" :options="minDate" class="q-mt-md"
                    @navigation="handleScheduledPickupDateNav" />
                </div>
                <div class="q-mt-xl text-center">
                  <q-btn @click="stepMove(2)" color="primary" label="Previous" flat class="q-mr-sm" rounded />
                  <q-btn @click="stepMove(4)" color="primary" label="Continue" :disable="!model.scheduled_pickup_date"
                    rounded />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 4">
                <p class="text-center text-bold">Select your Laundry Lad or Lad:</p>
                <q-card>
                  <q-card-section>
                    <OrderContractorManagement :scheduled_pickup_date="model.scheduled_pickup_date"
                      :scheduled_pickup_time="model.scheduled_pickup_time" v-model="model.contractor_user_id"
                      :reassign="true" :productcategories="model.productcategories.filter(o => o.active)"
                      :suburb_postcode_region_id="model.suburb_postcode_region_id"
                      v-if="model.suburb_postcode_region_id && model.scheduled_pickup_date && model.productcategories.filter(o => o.active).length"
                      @update:modelValueTime="updateScheduledPickupTime" />
                  </q-card-section>
                </q-card>
                <div class="q-mt-xl text-center">
                  <q-btn @click="stepMove(3)" color="primary" label="Previous" flat class="q-mr-sm" rounded />
                  <q-btn @click="stepMove(4)" color="primary" label="Continue" :disable="!model.contractor_user_id"
                    rounded />
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-3">
            <q-card flat class="bg-page">
              <q-card-section>
                <OrderNewSummary :suburb_postcode_region_id="model.suburb_postcode_region_id"
                  :contractor_user_id="model.contractor_user_id" :scheduled_pickup_date="model.scheduled_pickup_date"
                  :scheduled_pickup_time="model.scheduled_pickup_time" :productcategories="model.productcategories"
                  :categories="categories" v-if="categories && model.suburb_postcode_region_id" />
              </q-card-section>
            </q-card>
          </div>
        </div>
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
import OrderNewSummary from 'src/components/order/OrderNewSummary.vue'
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
const schema = {
  suburb_postcode_region_id: null,
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
const noContractors = ref(false)
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
  model.scheduled_pickup_date = null
  model.scheduled_pickup_time = null
  model.contractor_user_id = null
}

const stepMove = (nextStep: number) => {
  if (nextStep === 3) {
    getAvailableContractorsDates()
  } else {
    step.value = nextStep
  }
}

const checkContractors = () => {
  if (!model.suburb_postcode_region_id) {
    noContractors.value = false
  } else {
    api.post('/public/order/findcontractorsinsuburbpostcoderegion', { suburb_postcode_region_id: model.suburb_postcode_region_id }).then(response => {
      noContractors.value = !response.data.found
      if (noContractors.value) {
        model.suburb_postcode_region_id = null
      }
    }).catch(error => {
      useMixinDebug(error)
    })
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

const updateScheduledPickupTime = (val: string | null) => {
  model.scheduled_pickup_time = val
}

onMounted(async () => {
  Object.assign(model, JSON.parse(JSON.stringify(schema)))
  categories.value = await productCategoriesVisibleBooking()
  model.productcategories = []
  for (const c of categories.value) {
    model.productcategories.push({ product_category_id: c.value, active: false })
  }
  washingAndIroning.value = false
})

onBeforeUnmount(() => {
  bus.off('newOrder')
})
</script>
