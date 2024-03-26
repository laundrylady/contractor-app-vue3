<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding :class="{ 'q-pa-md': $q.screen.xs }">
        <div class="row q-mt-xl q-mb-lg">
          <div class="col-xs-12 col-sm-6 offset-sm-3 text-center">
            <AppLogo />
          </div>
        </div>
        <div v-if="model && model.id">
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6 offset-sm-3">
              <div class="text-center text-h4 q-mb-xl">Booking #{{ model.display_id }}</div>
              <div v-if="!modelOriginal.scheduled_pickup_date" class="bg-red text-white q-pa-md">
                There is an issue with this booking preventing you from making changes. Please contact us to make
                changes
                to this booking.</div>
              <div v-if="modelOriginal.scheduled_pickup_date">
                <q-card>
                  <q-card-section>
                    <div class="text-bold q-mb-xs">Booking Summary</div>
                    <q-card>
                      <q-card-section>
                        <div class="q-mb-sm"><q-icon name="account_circle" size="24px" /> {{
        modelOriginal.team }}</div>
                        <div class="q-mb-sm">
                          <span v-if="modelOriginal.suburb"><q-icon name="place" size="24px" /> {{
        modelOriginal.suburb }}</span>
                        </div>
                        <div
                          v-if="modelOriginal.contractor && modelOriginal.scheduled_pickup_date && modelOriginal.scheduled_pickup_time">
                          <q-icon name="person" size="24px" v-if="!$q.screen.xs" /> Pickup with {{
        modelOriginal.contractor.first_name }}
                          on {{
        modelOriginal.scheduled_pickup_date }} <br v-if="$q.screen.xs" /> ({{
        hourBookingDisplay(modelOriginal.scheduled_pickup_time)
      }})
                        </div>
                      </q-card-section>
                    </q-card>
                    <div v-if="showChangeSuccess" class="bg-green text-white q-pa-md q-mt-md">
                      <q-icon name="check" /> Your {{ $t('order.name') }} has been updated.
                    </div>
                    <div v-if="showCancelSuccess" class="bg-green text-white q-pa-md q-mt-md">
                      <q-icon name="check" /> Your {{ $t('order.name') }} has been cancelled.
                    </div>
                    <div class="q-mt-lg text-center" v-if="!showChange && !showCancel">
                      <q-btn @click="showChangeFunc()" label="Make a change to this booking" rounded flat
                        color="primary" icon="edit" v-if="canChange" />
                      <q-btn @click="showCancelFunc()" label="Cancel this booking" rounded flat color="red"
                        v-if="canCancel" />
                    </div>
                    <div v-if="showChange && !showChangeSuccess" class="q-mt-xl">
                      <div class="row q-col-gutter-md">
                        <div class="col-xs-12 col-sm-5">
                          <p class="text-leftt text-bold text-grey">CHOOSE THE SERVICES YOU REQUIRE:</p>
                          <div class="flex">
                            <div>
                              <div class="q-mr-sm">
                                <q-checkbox v-model="washingAndIroning" @update:model-value="toggleWashingAndIroning()"
                                  label="Washing & Ironing" />
                              </div>
                              <div v-if="!washingAndIroning">
                                <div v-for="c in model.productcategories" :key="c.product_category_id" class="q-mr-sm">
                                  <q-checkbox v-model="c.active"
                                    :label="categoryDisplay(c.product_category_id, categories)"
                                    @update:model-value="[model.scheduled_pickup_date = null, model.scheduled_pickup_time = null, model.contractor_user_id = null]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="text-grey text-bold q-mt-md">SCHEDULED PICKUP DATE</div>
                          <q-date v-model="model.scheduled_pickup_date" mask="DD/MM/YYYY" :options="minDate"
                            class="q-mt-md" @navigation="handleScheduledPickupDateNav"
                            :disable="loadingAvailableDates" />
                        </div>
                        <div class="col-xs-12 col-sm-7">
                          <div class="text-grey text-bold q-mb-md">SCHEDULED PICKUP TIME</div>
                          <OrderContractorManagement :scheduled_pickup_date="model.scheduled_pickup_date"
                            :scheduled_pickup_time="model.scheduled_pickup_time" v-model="model.contractor_user_id"
                            :reassign="true"
                            :productcategories="model.productcategories.filter((o: OrderProductCategory) => o.active)"
                            :suburb_postcode_region_id="model.suburb_postcode_region_id"
                            v-if="model.suburb_postcode_region_id && model.scheduled_pickup_date && model.productcategories.filter((o: OrderProductCategory) => o.active).length"
                            @update:modelValueTime="updateScheduledPickupTime" />
                          <q-input v-model="model.special_instructions" label="Special Instructions" outlined
                            type="textarea" rows="3" class="q-mt-md" bottom-slots />
                          <q-select v-model="model.changes_reason" :options="cancelOrderReasons" outlined
                            label="Reason for change" :error="$v.changes_reason.$invalid" />
                          <q-input v-model="model.changes_notes" label="Notes about the change" type="textarea" rows="3"
                            outlined />
                        </div>
                      </div>
                    </div>
                    <div v-if="showCancel && !showCancelSuccess" class="q-mt-xl">
                      <q-select v-model="model.cancel_reason" :options="cancelOrderReasons" outlined
                        label="Reason for cancellation" :error="$v.cancel_reason.$invalid" />
                      <q-input v-model="model.cancel_notes" label="Notes about the cancellation" type="textarea"
                        rows="3" outlined bottom-slots />
                    </div>
                  </q-card-section>
                  <q-card-actions align="right">
                    <div v-if="showChange && !showChangeSuccess">
                      <q-btn @click="showChange = false" label="Cancel" color="secondary" flat rounded
                        class="q-mr-sm" />
                      <q-btn @click="updateOrder()" :disable="$v.$invalid" label="Update Booking" color="primary"
                        rounded />
                    </div>
                    <div v-if="showCancel && !showCancelSuccess">
                      <q-btn @click="showCancel = false" label="Reset" color="secondary" flat rounded class="q-mr-sm" />
                      <q-btn @click="cancelOrder()" :disable="$v.$invalid" label="Cancel Booking" color="red" rounded />
                    </div>
                  </q-card-actions>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, requiredIf } from '@vuelidate/validators'
import moment from 'moment-timezone'
import { api } from 'src/boot/axios'
import { OrderProductCategory, QDateNavigation } from 'src/components/models'
import OrderContractorManagement from 'src/components/order/OrderContractorManagement.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { categoryDisplay, confirmDelete, hourBookingDisplay } from 'src/mixins/help'
import { productCategoriesVisibleBooking } from 'src/services/helpers'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppLogo from '../../components/AppLogo.vue'

const model = ref()
const modelOriginal = ref()
const categories = ref()
const route = useRoute()
const availableDates = ref()
const loadingAvailableDates = ref(false)
const currentBookingDate = ref()
const washingAndIroning = ref(false)
const minDate = (date: string) => {
  return availableDates.value.indexOf(date) !== -1
}
const showChange = ref(false)
const showChangeSuccess = ref(false)
const showCancel = ref(false)
const showCancelSuccess = ref(false)
const rules = {
  scheduled_pickup_date: { required },
  scheduled_pickup_time: { required },
  changes_reason: { requiredIf: requiredIf(() => showChange.value) },
  cancel_reason: { requiredIf: requiredIf(() => showCancel.value) }
}
const $v = useVuelidate(rules, model)

const cancelOrderReasons = [
  'Appointment made in error',
  'Not available at this time ',
  'Not needed',
  'Holiday / Away',
  'Business closure',
  'Moving to another location',
  'Not happy with service',
  'Not happy with Laundry Lady or Lad',
  'Other'
]

const handleScheduledPickupDateNav = (view: QDateNavigation) => {
  currentBookingDate.value = moment(`${view.year}-${view.month}-01`)
  getAvailableContractorsDates()
}

const getAvailableContractorsDates = () => {
  availableDates.value = []
  loadingAvailableDates.value = true
  api.post('/public/order/findcontractorsdates', {
    suburb_postcode_region_id: modelOriginal.value.suburb_postcode_region_id,
    scheduled_pickup_date: currentBookingDate.value.format('DD/MM/YYYY'),
    productcategories: modelOriginal.value.productcategories
  }).then(response => {
    // ensure selected date is included
    availableDates.value = [moment(modelOriginal.value.scheduled_pickup_date, 'DD/MM/YYYY').format('YYYY-MM-DD')].concat(response.data)
    loadingAvailableDates.value = false
  }).catch(error => {
    loadingAvailableDates.value = false
    useMixinDebug(error)
  })
}

const getOrder = () => {
  api.get(`/public/b/${route.params.id}`).then(response => {
    model.value = response.data
    washingAndIroning.value = model.value.productcategories.length === 2
    modelOriginal.value = JSON.parse(JSON.stringify(response.data))
    currentBookingDate.value = moment(response.data.scheduled_pickup_date, 'DD/MM/YYYY')
    getAvailableContractorsDates()
    setInterval(() => { canChangeFunc() }, 60000)
    setInterval(() => { canCancelFunc() }, 60000)
    canChangeFunc()
    canCancelFunc()
  }).catch(error => {
    useMixinDebug(error)
  })
}

const showChangeFunc = () => {
  showCancel.value = false
  model.value.changes_reason = null
  model.value.changes_notes = null
  showChangeSuccess.value = false
  showChange.value = true
}

const showCancelFunc = () => {
  showChange.value = false
  model.value.cancel_reason = null
  model.value.cancel_notes = null
  showCancel.value = true
}

const toggleWashingAndIroning = () => {
  model.value.productcategories.forEach((o: OrderProductCategory) => {
    o.active = washingAndIroning.value
  })
  model.value.scheduled_pickup_date = null
  model.value.scheduled_pickup_time = null
  model.value.contractor_user_id = null
}

const updateScheduledPickupTime = (val: string | null) => {
  model.value.scheduled_pickup_time = val
}

const updateOrder = () => {
  api.put(`/public/b/${model.value.id}`, model.value).then(() => {
    showChangeSuccess.value = true
    getOrder()
  }).catch(error => {
    useMixinDebug(error)
  })
}

const cancelOrder = () => {
  confirmDelete('This will cancel the booking').onOk(() => {
    api.put(`/public/b/cancel/${model.value.id}`, model.value).then(() => {
      showCancelSuccess.value = true
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

const canChange = ref(false)
const canChangeFunc = () => {
  if (!model.value.scheduled_pickup_date || !model.value.scheduled_pickup_time) {
    canChange.value = true
    return true
  }
  if (model.value.scheduled_pickup_date !== moment().format('DD/MM/YYYY')) {
    canChange.value = true
    return true
  }
  const pickupTime = parseFloat(model.value.scheduled_pickup_time.split('-'))
  const timeNow = parseFloat(moment().format('H'))
  if (!isNaN(pickupTime) && !isNaN(timeNow)) {
    const diff = pickupTime - timeNow
    if (diff <= 3) {
      canChange.value = false
      return false
    } else {
      canChange.value = true
      return true
    }
  }
  canChange.value = false
}

const canCancel = ref(false)
const canCancelFunc = () => {
  if (!model.value.scheduled_pickup_date || !model.value.scheduled_pickup_time) {
    canCancel.value = true
    return false
  }
  if (model.value.scheduled_pickup_date !== moment().format('DD/MM/YYYY')) {
    canCancel.value = true
    return true
  }
  const pickupTime = parseFloat(model.value.scheduled_pickup_time.split('-'))
  const timeNow = parseFloat(moment().format('H'))
  if (!isNaN(pickupTime) && !isNaN(timeNow)) {
    const diff = pickupTime - timeNow
    if (diff <= 3) {
      canCancel.value = false
      return false
    } else {
      canCancel.value = true
      return true
    }
  }
  canCancel.value = false
}

onMounted(async () => {
  categories.value = await productCategoriesVisibleBooking()
  getOrder()
})
</script>
