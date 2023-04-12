<template>
  <div class="row q-col-gutter-md q-mb-lg" v-if="model && model.products.length">
    <div class="col-xs-12 col-sm-4">
      <q-card class="bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Total Amount</div>
          <div class="text-center q-mt-sm">{{ currencyFormat(model.grand_total_price)
          }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-4">
      <q-card class="text-white"
        :class="{ 'bg-positive': paymentsOwing.owing <= 0, 'bg-negative': paymentsOwing.owing > 0 }">
        <q-card-section>
          <div class="text-h6">Total Owing</div>
          <div class="text-center q-mt-sm">{{ currencyFormat(paymentsOwing.owing)
          }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-xs-12 col-sm-4" v-if="model.commission_paid_amount && model.commission_paid_amount_gst">
      <q-card class="text-white bg-primary">
        <q-card-section>
          <div class="text-h6">Commission Paid</div>
          <div class="text-center q-mt-sm">{{
            currencyFormat(model.commission_paid_amount)
          }} / {{ currencyFormat(model.commission_paid_amount_gst) }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <q-card>
    <q-list>
      <q-expansion-item group="orderEdit" :label="$t('order.details')" header-class="text-h6"
        :default-opened="!model.products || !model.products.length || model.recurring_order"
        caption="Update the booking details">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md q-mb-md">
              <TeamField v-model="localModel.team_id" :label="$t('team.name')" status="active" class="col-xs-12 col-sm-8"
                :error="$v.team_id.$invalid" :disabled="true" />
              <q-select v-model="localModel.status" :label="$t('order.status')" :error="$v.status.$invalid" map-options
                :options="globalStatusList" emit-value class="col-xs-12 col-sm-4" />
            </div>
            <div class="row q-col-gutter-md" v-if="localModel.team_id">
              <div class="col-xs-12 col-sm-8">
                <div class="row q-col-gutter-md q-mb-md">
                  <DateField v-model="localModel.scheduled_pickup_date" :label="$t('order.scheduledPickupDate')"
                    :invalid="$v.scheduled_pickup_date.$invalid" class="col-xs-12 col-sm-6" />
                  <q-select v-model="localModel.scheduled_pickup_time" :label="$t('order.scheduledPickupTime')"
                    :invalid="$v.scheduled_pickup_time" :options="hourBookingOptions" emit-value map-options
                    class="col-xs-12 col-sm-6" />
                </div>
                <div v-if="!localModel.recurring_parent_id">
                  <q-toggle v-model="localModel.recurring_order" :label="$t('order.recurring')" />
                  <q-select v-model="localModel.recurring" :label="$t('order.recurringFrequency')"
                    :options="['Week', 'Fortnite', 'Month']" bottom-slots v-if="localModel.recurring_order" />
                </div>
                <div class="text-bold text-grey q-mt-md">Deliver To</div>
                <div v-if="localModel.address1">{{ localModel.address1 }}</div>
                <div>{{ localModel.address2 }}</div>
                <div v-if="localModel.suburbpostcoderegion">{{ localModel.suburbpostcoderegion.locality }} {{
                  localModel.suburbpostcoderegion.state }} {{ localModel.suburbpostcoderegion.postcode }}</div>
                <div class="text-bold text-grey q-mt-md">Products</div>
                <div v-for="c in localModel.productcategories" :key="c.id">
                  <q-checkbox v-model="c.meta.pivot_active" :label="c.name" v-if="c.meta" />
                </div>
                <div v-if="localModel.scheduled_pickup_time" class="q-mt-lg q-mb-md">
                  <OrderContractorManagement v-model="localModel.contractor_user_id" :team_id="localModel.team_id"
                    :scheduled_pickup_date="localModel.scheduled_pickup_date"
                    :scheduled_pickup_time="localModel.scheduled_pickup_time" :reassign="true"
                    :productcategories="model.productcategories" />
                </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                <div class="text-bold text-grey q-mb-xs">Agreed Pickup Time</div>
                <p>The time below has been agreed upon by the customer and contractor.</p>
                <q-time v-model="localModel.agreed_pickup_time" color="secondary" />
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn :disable="loading || $v.$invalid" :label="$t('actions.update')" color="primary" @click="save()" />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="orderEdit" :label="`${$t('order.products')} (${model.products.length})`"
        caption=" Create, update and delete products for this booking" header-class="text-h6"
        :default-opened="model.products && model.products.length && !model.recurring_order ? true : false">
        <q-card>
          <OrderProductManagement :model="model" @update:products="updateProducts" />
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="orderEdit" :label="$t('order.invoiceConfiguration')" caption="Invoice configuration"
        header-class="text-h6">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.invoice_name" :label="$t('team.invoiceName')" class="col-xs-12 col-sm-6"
                bottom-slots />
              <q-input v-model="localModel.invoice_po" :label="$t('team.invoicePo')" class="col-xs-12 col-sm-6"
                bottom-slots />
            </div>
            <AddressSearch :model="localModel"
              :addressfields="{ address1: 'invoice_address1', address2: 'invoice_address2', suburb_postcode_region_id: 'invoice_address_suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'invoice_address_country_id' }"
              :placeholder="$t('address.search')" :filled="true" />
            <q-input v-model="localModel.invoice_address1" :label="$t('address.line1')" bottom-slots />
            <q-input v-model="localModel.invoice_address2" :label="$t('address.line2')" bottom-slots />
            <div class="row q-col-gutter-md">
              <PostcodeRegionField v-model="localModel.invoice_address_suburb_postcode_region_id"
                :label="$t('address.suburb')" class="col-xs-12 col-sm-6" />
              <CountryField v-model="localModel.invoice_address_country_id" :label="$t('address.country')"
                class="col-xs-12 col-sm-6" />
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn :disable="loading || $v.$invalid" :label="$t('actions.update')" color="primary" @click="save()" />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="orderEdit" :label="$t('order.payments')" caption="Payments" header-class="text-h6"
        v-if="model && model.products.length">
        <q-card>
          <q-card-section>
            <q-list separator>
              <q-item v-if="!model.payments.length">
                <q-item-section>
                  No payments found
                </q-item-section>
              </q-item>
              <q-item v-for="p in model.payments" :key="p.id">
                <q-item-section avatar>
                  <UserAvatar :user="p.user" />
                </q-item-section>
                <q-item-section>
                  <div>{{ dateTimeTz(p.created_at) }}</div>
                </q-item-section>
                <q-item-section side>
                  {{ currencyFormat(p.grand_total) }}
                </q-item-section>
              </q-item>
              <q-item v-if="paymentsOwing.owing > 0">
                <q-item-section>
                  <q-btn @click="doPayment()" label="Make Payment" color="primary" push :disable="loadingPayment"
                    :loading="loadingPayment" />
                </q-item-section>
              </q-item>
              <q-item v-if="model.status === 'paid' && !model.xero_id">
                <q-item-section>
                  <q-btn @click="pushToXero()" label="Push to Xero" color="blue" push />
                </q-item-section>
              </q-item>
            </q-list>
            <div v-if="model.xero_id">
              <q-separator class="q-mt-md" />
              <XeroInvoice :invoice-id="model.xero_id" type="Order" :type_id="model.id" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-card>
  <div class="q-mt-xl" v-if="!noNotes">
    <GlobalNotes :notable_id="model.id" notable_type="Order" :nobox="true" />
  </div>
  <q-card v-if="futureRecurring && futureRecurring.length" class="q-mb-md">
    <q-list separator>
      <q-item-label header>FUTURE BOOKINGS</q-item-label>
      <q-item v-for="o in futureRecurring" :key="o.id">
        <div>
          <div><router-link :to="{ name: 'order-edit', params: { id: o.id } }" target="_blank" class="link">{{
            displayDateDay(o.scheduled_pickup_date) }} {{ o.scheduled_pickup_date }} (<span
                v-if="!o.agreed_pickup_time">{{
                  hourBookingDisplay(o.scheduled_pickup_time)
                }}</span><span v-if="o.agreed_pickup_time">{{ hourAgreedDisplay(o.agreed_pickup_time)
}}</span>)</router-link>
            <StatusTag :status="o.status" :small="true" class="q-ml-xs" />
          </div>
          <div class="text-grey-7 text-caption">
            <q-icon name="settings" color="grey-7" /> <span v-if="o.productcategories"><span
                v-for="(c, index) in o.productcategories" :key="c.id">{{
                  c.name }}<span v-if="index + 1 !== o.productcategories.length" class="q-ml-xs q-mr-xs">&</span>
              </span> pickup with {{ o.team.name }}</span>
          </div>
        </div>
      </q-item>
    </q-list>
  </q-card>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateField from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import TeamField from 'src/components/form/TeamField.vue'
import { Order } from 'src/components/models'
import GlobalNotes from 'src/components/note/GlobalNotes.vue'
import OrderContractorManagement from 'src/components/order/OrderContractorManagement.vue'
import OrderProductManagement from 'src/components/orderproduct/OrderProductManagement.vue'
import StatusTag from 'src/components/StatusTag.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import XeroInvoice from 'src/components/xero/XeroInvoice.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, dateTimeTz, displayDateDay, doNotify, globalStatusList, hourAgreedDisplay, hourBookingDisplay, hourBookingOptions } from 'src/mixins/help'
import { productCategoriesVisibleBooking } from 'src/services/helpers'
import { computed, inject, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  model: Order,
  noNotes?: boolean,
  futureRecurring?: Order[]
}
const props = defineProps<Props>()
const emits = defineEmits(['update:order'])
const bus = inject('bus') as EventBus
const i18n = useI18n()
const categories = ref()

const localModel = computed(() => props.model)
const rules = {
  team_id: { required },
  scheduled_pickup_date: { required },
  scheduled_pickup_time: { required },
  status: { required },
  productcategories: { required }
}
const loading = ref(false)
const loadingPayment = ref(false)

const $v = useVuelidate(rules, localModel, { $scope: false })

const save = () => {
  loading.value = true
  api.put(`/order/${props.model.id}`, localModel.value).then(() => {
    doNotify('positive', 'Saved')
    emits('update:order')
    bus.emit('getDashboardStats')
    loading.value = false
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

const updateProducts = () => {
  emits('update:order', { onlyTotals: true })
}

const paymentsOwing = computed(() => {
  const grandTotal = parseFloat(props.model.grand_total_price.toString())
  const paymentTotal = props.model.payments.reduce((previousValue, currentValue) => {
    return previousValue + (currentValue.total)
  }, 0)
  return { owing: grandTotal - paymentTotal, totalPayments: paymentTotal }
})

const doPayment = () => {
  loadingPayment.value = true
  document.location = `/api/orderpayment/session/${props.model.id}`
}

const pushToXero = () => {
  confirmDelete(`This will push the ${i18n.t('order.name')} to Xero`).onOk(() => {
    api.get(`/order/pushtoxero/${props.model.id}`).then(() => {
      emits('update:order')
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

onMounted(async () => {
  categories.value = await productCategoriesVisibleBooking()
})
</script>
