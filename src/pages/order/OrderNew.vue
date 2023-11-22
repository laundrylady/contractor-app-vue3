<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page :padding="!iframed" :class="{ 'q-pa-md': $q.screen.xs && !iframed }" v-if="loaded">
        <div class="flex justify-center q-mt-xl" v-if="!$q.screen.xs && !iframed">
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
          <div class="order-new-step" :class="{ 'active': step === 5 || !$v.$invalid }">
            Enter your details
          </div>
          <div class="flex items-end"><img src="~assets/images/illustrations/bot_arrow.png" /></div>
          <div class="order-new-step" :class="{ 'active': step === 6 }">
            Confirm booking
          </div>
        </div>
        <div class="row q-mt-xl q-mb-lg" v-if="!iframed">
          <div class="col-xs-12 col-md-6 offset-md-3 text-center">
            <AppLogo />
          </div>
        </div>
        <div class="row text-lg q-mb-lg" v-if="!iframed">
          <div class="col-xs-12 col-md-6 offset-md-3 text-center">
            Book your mobile Laundry service. Washing, Ironing, Pickup and Delivery.
          </div>
        </div>
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-md-6 offset-md-3">
            <q-card flat class="bg-page q-mb-md" v-if="step !== 6 && model.scheduled_pickup_date">
              <q-card-section>
                <OrderNewSummary :suburb_postcode_region_id="model.suburb_postcode_region_id"
                  :contractor_user_id="model.contractor_user_id" :scheduled_pickup_date="model.scheduled_pickup_date"
                  :scheduled_pickup_time="model.scheduled_pickup_time" :productcategories="model.productcategories"
                  :categories="categories" v-if="categories && model.suburb_postcode_region_id" />
              </q-card-section>
            </q-card>
            <q-card flat class="bg-page">
              <q-card-section v-if="step === 1">
                <p class="text-center text-bold">Select your pickup location:</p>
                <PostcodeRegionField v-model="model.suburb_postcode_region_id" label="Enter your pickup suburb" outlined
                  :invalid="$v.suburb_postcode_region_id.$invalid" @update:model-value="checkContractors()"
                  :clearable="true" />
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
                    <div>
                      <q-checkbox v-model="washingAndIroning" @update:model-value="toggleWashingAndIroning()"
                        label="Washing & Ironing" />
                    </div>
                    <div>
                      <q-checkbox v-model="washingOnly" @update:model-value="toggleWashingOnly()" label="Washing" />
                    </div>
                    <div>
                      <q-checkbox v-model="ironingOnly" @update:model-value="toggleIroningOnly()" label="Ironing" />
                    </div>
                    <div class="hidden">
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
                    @navigation="handleScheduledPickupDateNav"
                    @update:model-value="[model.scheduled_pickup_time = null, model.contractor_user_id = null]" />
                </div>
                <div class="q-mt-xl text-center">
                  <q-btn @click="stepMove(2)" color="primary" label="Previous" flat class="q-mr-sm" rounded />
                  <q-btn @click="stepMove(4)" color="primary" label="Continue" :disable="!model.scheduled_pickup_date"
                    rounded />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 4">
                <p class="text-center text-bold">Select your Laundry Lady or Lad:</p>
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
                  <q-btn @click="stepMove(5)" color="primary" label="Continue"
                    :disable="!model.contractor_user_id || !model.scheduled_pickup_time" rounded />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 5">
                <p class="text-center text-bold">Enter your details:</p>
                <q-card>
                  <q-card-section>
                    <div class="text-h6 q-mb-sm">Your Details</div>
                    <div class="row q-col-gutter-md q-mb-sm">
                      <div class="col-xs-12 col-sm-6">
                        <q-select v-model="model.team.type" :error="$v.team.type.$invalid" :label="$t('team.type')"
                          :options="customerTypes" outlined />
                      </div>
                      <div class="col-xs-12 col-sm-6" v-if="model.team.type === 'Business'">
                        <q-select v-model="model.team.payment_terms" :options="['Credit Card', 'Bank Transfer']"
                          label="Payment via" outlined :error="$v.team.payment_terms.$invalid" />
                      </div>
                    </div>
                    <div class="row q-col-gutter-md"
                      v-if="['Business', 'Aged Care', 'Sporting Group'].indexOf(model.team.type || '') !== -1">
                      <div class="col-xs-12 col-sm-6">
                        <q-input v-model="model.team.name" :label="$t('team.teamName')" :error="$v.team.name.$invalid"
                          outlined />
                      </div>
                      <div class="col-xs-12 col-sm-6"
                        v-if="['Business', 'Aged Care', 'Sporting Group'].indexOf(model.team.type || '') !== -1">
                        <q-input v-model="model.team.abn" :label="common?.operating_country === 'nzd' ? 'NZBN' : 'ABN'"
                          :error="$v.team.abn.$invalid" outlined />
                      </div>
                    </div>
                    <div class="row q-col-gutter-md" v-if="model.team.type === 'NDIS'">
                      <div class="col-xs-12 col-sm-6">
                        <q-input v-model="model.team.ndis_number" :label="$t('team.ndisNumber')" outlined
                          :error="$v.team.ndis_number.$invalid"><template v-slot:prepend>
                            <img src="~assets/images/logos/ndis_heart.svg" style="height:32px" />
                          </template>
                        </q-input>
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <q-select v-model="model.team.ndis_type" :label="$t('team.ndisType')"
                          :error="$v.team.ndis_type.$invalid" outlined
                          :options="['Self managed', 'Plan managed', 'NDIA registered']" />
                      </div>
                    </div>
                    <div class="row q-col-gutter-md">
                      <div class="col-xs-12 col-sm-6">
                        <q-input v-model="model.team.first_name" :error="$v.team.first_name.$invalid"
                          label="Contact first name" outlined />
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <q-input v-model="model.team.last_name" :error="$v.team.last_name.$invalid"
                          label="Contact last name" outlined />
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <q-input v-model="model.team.email" :error="$v.team.email.$invalid" label="Your email address"
                          outlined autocapitalize="off" />
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <q-input v-model="model.team.mobile" :error="$v.team.mobile.$invalid"
                          label="Your contact mobile number" outlined
                          :mask="common?.operating_country === 'aud' ? '#### ### ###' : ''" maxlength="20" />
                      </div>
                    </div>
                    <div class="text-h6 q-mt-sm">Pickup Address</div>
                    <p>Enter your pickup / delivery address.</p>
                    <AddressSearch :model="model" :filled="true"
                      :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'country_id', postcode: 'postcode' }"
                      :placeholder="$t('address.search')" />
                    <q-input v-model="model.address1" :label="$t('address.line1')" outlined class="q-mb-md" />
                    <q-input v-model="model.address2" :error="$v.address2.$invalid" :label="$t('address.line2')"
                      outlined />
                    <div class="row q-col-gutter-md">
                      <PostcodeRegionField v-model="model.suburb_postcode_region_id"
                        :invalid="$v.suburb_postcode_region_id.$invalid" :label="$t('address.suburb')"
                        class="col-xs-12 col-sm-6" :outlined="true" />
                      <q-input v-model="model.postcode" :error="$v.postcode.$invalid" :label="$t('address.postcode')"
                        outlined class="col-xs-12 col-sm-6" />
                      <CountryField v-model="model.country_id" :label="$t('address.country')" class="col-xs-12 col-sm-6"
                        :outlined="true" :invalid="$v.country_id.$invalid" />
                    </div>
                  </q-card-section>
                </q-card>
                <div class="q-mt-xl text-center">
                  <q-btn @click="stepMove(4)" color="primary" label="Previous" flat class="q-mr-sm" rounded />
                  <q-btn @click="stepMove(6)" color="primary" label="Continue" :disable="$v.$invalid" rounded />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 6">
                <p class="text-center text-bold" v-if="!success && !error && !confirming">Confirm your booking:</p>
                <q-card>
                  <q-card-section v-if="!success && !error && !confirming">
                    <div class="text-bold">Your contact details</div>
                    <div>{{ model.team.email }}</div>
                    <div class="q-mb-md">{{ model.team.mobile }}</div>
                    <OrderNewSummary :suburb_postcode_region_id="model.suburb_postcode_region_id"
                      :contractor_user_id="model.contractor_user_id" :scheduled_pickup_date="model.scheduled_pickup_date"
                      :scheduled_pickup_time="model.scheduled_pickup_time" :productcategories="model.productcategories"
                      :categories="categories" v-if="categories && model.suburb_postcode_region_id" />
                    <q-input v-model="model.special_instructions" class="q-mt-lg" type="textarea"
                      label="Please enter any special instructions for this booking" outlined rows="3" />
                    <q-toggle v-model="model.recurring_order" label="Would you like to make this a recurring booking?"
                      class="q-mt-md" />
                    <q-select v-model="model.recurring" :label="$t('order.recurringFrequency')"
                      :options="['Week', 'Fortnite', 'Month']" v-if="model.recurring_order" outlined class="q-mt-sm" />
                    <div>
                      <q-toggle v-model="model.team.marketing_subscribed"
                        label="I want to receive emails with the latest news and updates from The Laundry Lady" />
                    </div>
                    <div>
                      <div class="q-mt-sm q-mb-xs">No cancellations or changes allowed within 3 hours of the appointment.
                        Charges will be applied if clothes are not ready at pickup. By booking this appointment you agree
                        to our Terms and Conditions which can be found online here:
                        <a href="https://thelaundrylady.co.nz/terms-and-conditions/"
                          v-if="common?.operating_country === 'nzd'" target="_blank"
                          class="link">https://thelaundrylady.co.nz/terms-and-conditions/</a>
                        <a href="https://thelaundrylady.com.au/terms-and-conditions/"
                          v-if="common?.operating_country === 'aud'" target="_blank"
                          class="link">https://thelaundrylady.com.au/terms-and-conditions/</a>
                      </div>
                      <div>
                        <q-toggle v-model="model.cancellation_terms" label="I agree to the Cancellation policy" />
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section v-if="error">
                    <p>The following problems were found when trying to submit the booking:</p>
                    <div v-for="(e, index) in errors" :key="index">
                      <div class="text-bold">{{ e.message }}</div>
                    </div>
                  </q-card-section>
                  <q-card-section v-if="success">
                    <div class="text-center"><q-icon name="o_check_circle" size="64px" color="green" /></div>
                    <div class="text-h5 text-center q-mt-sm">Booking Confirmed</div>
                    <p class="text-center">Great news, your booking has been confirmed!</p>
                    <p>An email with all of the details is on its way. While you wait, check out our
                      FAQs page for all the details to get ready for your service. <a
                        href="https://thelaundrylady.co.nz/faqs/" target="_blank"
                        class="link">https://thelaundrylady.co.nz/faqs/</a>
                    </p>
                    <OrderNewSummary :suburb_postcode_region_id="model.suburb_postcode_region_id"
                      :contractor_user_id="model.contractor_user_id" :scheduled_pickup_date="model.scheduled_pickup_date"
                      :scheduled_pickup_time="model.scheduled_pickup_time" :productcategories="model.productcategories"
                      :categories="categories" v-if="categories && model.suburb_postcode_region_id" />
                  </q-card-section>
                </q-card>
                <div class="q-mt-xl text-center" v-if="!success && !confirming">
                  <q-btn @click="stepMove(5)" color="primary" label="Previous" flat class="q-mr-sm" rounded />
                  <q-btn @click="save()" color="primary" label="Confirm booking"
                    :disable="$v.$invalid || !model.cancellation_terms" rounded />
                </div>
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
import { email, required, requiredIf } from '@vuelidate/validators'
import moment from 'moment-timezone'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import OrderNewSummary from 'src/components/order/OrderNewSummary.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { categoryDisplay, confirmDelete } from 'src/mixins/help'
import { productCategoriesVisibleBooking } from 'src/services/helpers'
import { inject, onBeforeUnmount, onMounted, reactive, ref, computed } from 'vue'
import AppLogo from '../../components/AppLogo.vue'
import { Order, QDateNavigation } from '../../components/models'
import OrderContractorManagement from '../../components/order/OrderContractorManagement.vue'
import { useMixinCommon } from 'src/mixins/common'
import { useRoute } from 'vue-router'
import { LooseObject } from 'src/contracts/LooseObject'

const step = ref(1)
const washingAndIroning = ref(false)
const washingOnly = ref(false)
const ironingOnly = ref(false)
const categories = ref()
const availableDates = ref<string[]>([])
const success = ref(false)
const error = ref(false)
const confirming = ref(false)
const errors = ref<LooseObject[]>([])
const common = useMixinCommon()
const route = useRoute()
const iframed = ref(false)
const loaded = ref(false)
const schema = {
  address1: null,
  address2: null,
  suburb_postcode_region_id: null,
  postcode: null,
  lat: null,
  lng: null,
  country_id: common.value?.operating_country_id,
  contractor_user_id: null,
  scheduled_pickup_date: null,
  scheduled_pickup_time: null,
  special_instructions: null,
  recurring_order: false,
  recurring: null,
  cancellation_terms: false,
  productcategories: [],
  team: {
    id: null,
    name: null,
    first_name: null,
    last_name: null,
    type: null,
    email: null,
    mobile: null,
    ndis_number: null,
    ndis_type: null,
    abn: null,
    marketing_subscribed: true,
    payment_terms: 'Credit Card'
  }
}

const toggleWashingAndIroning = () => {
  ironingOnly.value = false
  washingOnly.value = false
  model.productcategories.forEach(o => {
    o.active = true
  })
  model.contractor_user_id = null
  model.scheduled_pickup_date = null
  model.scheduled_pickup_time = null
}

const toggleWashingOnly = () => {
  washingAndIroning.value = false
  ironingOnly.value = false
  const washingObj = model.productcategories.find(o => o.product_category_id === 1)
  if (washingObj) {
    washingObj.active = washingOnly.value
  }
  const ironingObj = model.productcategories.find(o => o.product_category_id === 2)
  if (ironingObj) {
    ironingObj.active = false
  }
  model.contractor_user_id = null
  model.scheduled_pickup_date = null
  model.scheduled_pickup_time = null
}

const toggleIroningOnly = () => {
  washingAndIroning.value = false
  washingOnly.value = false
  const washingObj = model.productcategories.find(o => o.product_category_id === 1)
  if (washingObj) {
    washingObj.active = false
  }
  const ironingObj = model.productcategories.find(o => o.product_category_id === 2)
  if (ironingObj) {
    ironingObj.active = ironingOnly.value
  }
  model.contractor_user_id = null
  model.scheduled_pickup_date = null
  model.scheduled_pickup_time = null
}

const customerTypes = computed(() => {
  if (common?.value?.operating_country === 'aud') {
    return ['Residential', 'Business', 'NDIS', 'Home Care', 'Aged Care', 'Veteran Affairs', 'Sporting Group', 'Other']
  }
  if (common?.value?.operating_country === 'nzd') {
    return ['Residential', 'Business', 'Disability Services', 'Home Care', 'Aged Care', 'Veteran Affairs', 'Sporting Group', 'Other']
  }
  return []
})

const model = reactive<Order>(JSON.parse(JSON.stringify(schema)))
const bus = inject('bus') as EventBus
const minDate = (date: string) => {
  return date >= moment().add(1, 'day').format('YYYY/MM/DD') && availableDates.value.indexOf(date) !== -1
}
const currentBookingDate = ref(moment())
const noContractors = ref(false)
const rules = {
  suburb_postcode_region_id: { required },
  postcode: { required },
  address2: { required },
  country_id: { required },
  scheduled_pickup_date: { required },
  scheduled_pickup_time: { required },
  contractor_user_id: { required },
  productcategories: { required },
  recurring: { requiredIf: requiredIf(() => model.recurring_order) },
  team: {
    name: { requiredIf: requiredIf(() => ['Business', 'Aged Care', 'Sporting Group'].indexOf(model.team.type || '') !== -1) },
    first_name: { required },
    last_name: { required },
    type: { required },
    email: { required, email },
    mobile: { required },
    ndis_number: { requiredIf: requiredIf(() => model.team.type === 'NDIS') },
    ndis_type: { requiredIf: requiredIf(() => model.team.type === 'NDIS') },
    abn: { requiredIf: requiredIf(() => ['Business', 'Aged Care', 'Sporting Group'].indexOf(model.team.type || '') !== -1) },
    payment_terms: { required }
  }
}

const $v = useVuelidate(rules, model)
const $q = useQuasar()

const stepMove = (nextStep: number) => {
  if (nextStep === 3) {
    getAvailableContractorsDates()
  } else {
    step.value = nextStep
  }
}

const resetModel = () => {
  Object.assign(model, JSON.parse(JSON.stringify(schema)))
  washingAndIroning.value = false
  washingOnly.value = false
  ironingOnly.value = false
  for (const c of categories.value) {
    model.productcategories.push({ product_category_id: c.value, active: false })
  }
}

const checkContractors = () => {
  if (!model.suburb_postcode_region_id) {
    noContractors.value = false
    resetModel()
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

const save = () => {
  confirmDelete('This will confirm the booking').onOk(() => {
    $q.loading.show({ message: 'Confirming booking...' })
    confirming.value = true
    success.value = false
    error.value = false
    api.post('/public/order/new', model).then(() => {
      success.value = true
      confirming.value = false
      $q.loading.hide()
    }).catch(responseError => {
      confirming.value = false
      error.value = true
      errors.value = responseError.response && responseError.response.data ? responseError.response.data.errors : [{ field: 'Unknown Error', message: 'Unknown error occured.' }]
      $q.loading.hide()
    })
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
  // check for location
  if (route.query.location) {
    model.suburb_postcode_region_id = parseFloat(route.query.location.toString())
  }
  // check for iframe
  if (route.query.iframed) {
    iframed.value = true
  }
  loaded.value = true
})

onBeforeUnmount(() => {
  bus.off('newOrder')
})
</script>
