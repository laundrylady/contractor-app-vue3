<template>
  <q-card>
    <q-list>
      <q-expansion-item group="orderEdit" :label="$t('order.details')" header-class="text-h6"
        caption="Update the booking details" @click="bookingTab = 'details'">
        <q-card>
          <q-card-section>
            <q-tabs v-model="bookingTab" align="left" class="q-mb-md">
              <q-tab name="details" label="Details" />
              <q-tab name="notes" label="Notes" />
            </q-tabs>
            <GlobalNotes :notable_id="localModel.id" notable_type="Order" :nobox="true" v-if="bookingTab === 'notes'" />
            <div v-if="bookingTab === 'details'">
              <div class="row q-col-gutter-md q-mb-md">
                <div class="col-xs-6 col-sm-4" v-if="localModel.team.name">
                  <div class="text-bold text-grey q-mt-md">{{ $t('team.name').toUpperCase() }}</div>
                  {{ localModel.team.name }}
                </div>
                <div class="col-xs-6">
                  <div class="text-bold text-grey q-mt-md">{{ $t('contractor.name').toUpperCase() }}</div>
                  <div v-if="localModel.contractor">
                    <UserAvatar :user="localModel.contractor" />
                    {{ localModel.contractor.first_name }} {{ localModel.contractor.last_name }}
                  </div>
                </div>
              </div>
              <div class="row q-col-gutter-md" v-if="localModel.team_id">
                <div class="col-xs-12 col-sm-8">
                  <div class="row q-col-gutter-md q-mb-md">
                    <DateField v-model="localModel.scheduled_pickup_date" :label="$t('order.scheduledPickupDate')"
                      :outlined="true" :invalid="$v.scheduled_pickup_date.$invalid" class="col-xs-6"
                      :disable="!canEdit" />
                    <q-select v-model="localModel.scheduled_pickup_time" :label="$t('order.scheduledPickupTime')"
                      :invalid="$v.scheduled_pickup_time" :options="hourBookingOptions" emit-value map-options
                      class="col-xs-6" :disable="!canEdit" outlined />
                  </div>
                  <div v-if="!localModel.recurring_parent_id">
                    <q-toggle v-model="localModel.recurring_order" :label="$t('order.recurring')" :disable="!canEdit" />
                    <q-select v-model="localModel.recurring" :label="$t('order.recurringFrequency')"
                      :options="['Week', 'Fortnite', 'Month']" bottom-slots v-if="localModel.recurring_order"
                      :disable="!canEdit" outlined />
                  </div>
                  <div class="text-bold text-grey q-mt-md">PICKUP FROM</div>
                  <div v-if="localModel.address1">{{ localModel.address1 }}</div>
                  <div>{{ localModel.address2 }}</div>
                  <div v-if="localModel.suburbpostcoderegion">{{ localModel.suburbpostcoderegion.locality }} {{
                    localModel.suburbpostcoderegion.state }} {{ localModel.suburbpostcoderegion.postcode }}</div>
                  <div class="text-bold text-grey q-mt-md">PRODUCTS</div>
                  <div v-for="c in localModel.productcategories" :key="c.id">
                    <q-checkbox v-model="c.meta.pivot_active" :label="c.name" v-if="c.meta" disable />
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4" v-if="canEdit || localModel.agreed_pickup_time">
                  <div class="text-bold text-grey q-mb-xs">AGREED PICKUP TIME</div>
                  <p>The time below has been agreed upon by the customer and contractor.</p>
                  <div v-if="localModel.agreed_pickup_time"><q-icon name="history" /> Time: {{
                    hourAgreedDisplay(localModel.agreed_pickup_time)
                  }}<a @click="localModel.agreed_pickup_time = null" class="link q-ml-sm"
                      v-if="localModel.agreed_pickup_time && canEdit">Reset</a>
                  </div>
                  <div v-if="canEdit">
                    <div><a @click="showTimePicker = !showTimePicker" class="link">Choose a time</a></div>
                    <q-time v-model="localModel.agreed_pickup_time" color="secondary" v-if="showTimePicker"
                      class="q-mt-xs" />
                  </div>
                </div>
              </div>
            </div>
            <q-input v-model="localModel.special_instructions" label="Special Instruction" outlined type="textarea"
              autogrow class="q-mt-md" :disable="!canEdit" />
          </q-card-section>
          <q-card-actions align="right" v-if="canEdit && bookingTab === 'details'">
            <q-btn :disable="loading || $v.$invalid" :label="$t('actions.update')" color="primary" @click="save()"
              rounded />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="orderEdit"
        :label="`${$t('order.invoice')}${localModel.invoice ? ` - #${localModel.invoice.display_id}` : ''}`"
        caption=" Create, update and delete products" header-class="text-h6" default-opened
        @click="invoiceTab = 'products'">
        <q-card>
          <q-card-section v-if="!localModel.invoice">
            <p>No invoice has been created for this {{ $t('order.name') }}.</p>
            <q-btn label="Create invoice" @click="createInvoice()" color="primary" icon="add_circle" rounded />
          </q-card-section>
          <div v-if="localModel.invoice">
            <q-tabs v-model="invoiceTab" align="left">
              <q-tab name="products" :label="`Products (${localModel.invoice.products.length})`" />
              <q-tab name="config" :label="$t('order.invoiceConfiguration')" v-if="user && user.role === 'customer'" />
              <q-tab name="payments" :label="`${$t('order.payments')} (${localModel.invoice.payments.length})`" />
              <q-tab name="notes" label="Notes" />
            </q-tabs>
            <div v-if="invoiceTab === 'notes'" class="q-pa-md">
              <GlobalNotes notable_type="Invoice" :notable_id="localModel.invoice.id" :nobox="true" />
            </div>
            <InvoiceProductManagement :invoice="localModel.invoice" @update:products="updateProducts"
              :team="localModel.team" @update:order="updateOrder" :categories="localModel.productcategories"
              v-if="invoiceTab === 'products'" />
            <q-card-section v-if="invoiceTab === 'config'">
              <div class="row q-col-gutter-md q-mb-sm">
                <div class="col-xs-12 col-sm-6">
                  <DateField v-model="localModel.invoice.invoice_date" :label="$t('invoice.invoiceDate')" />
                </div>
                <q-input v-model="localModel.invoice.invoice_po" :label="$t('team.invoicePo')" class="col-xs-12 col-sm-6"
                  bottom-slots />
              </div>
              <q-input v-model="localModel.invoice.invoice_name" :label="$t('team.invoiceName')" bottom-slots />
              <AddressSearch :model="localModel.invoice"
                :addressfields="{ address1: 'invoice_address1', address2: 'invoice_address2', suburb_postcode_region_id: 'invoice_address_suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'invoice_address_country_id' }"
                :placeholder="$t('address.search')" :filled="true" />
              <q-input v-model="localModel.invoice.invoice_address1" :label="$t('address.line1')" bottom-slots />
              <q-input v-model="localModel.invoice.invoice_address2" :label="$t('address.line2')" bottom-slots />
              <div class="row q-col-gutter-md">
                <PostcodeRegionField v-model="localModel.invoice.invoice_address_suburb_postcode_region_id"
                  :label="$t('address.suburb')" class="col-xs-12 col-sm-6" />
                <CountryField v-model="localModel.invoice.invoice_address_country_id" :label="$t('address.country')"
                  class="col-xs-12 col-sm-6" />
              </div>
              <div class="q-mt-md text-right">
                <q-btn :disable="loading || $v.$invalid" :label="$t('actions.update')" color="primary"
                  @click="saveInvoice()" rounded />
              </div>
            </q-card-section>
            <AuditTimeline auditable_type="Invoice" :auditable_id="localModel.invoice_id" v-if="invoiceTab === 'audit'"
              :nobox="true" />
            <GlobalNotifications notifiable_type="Invoice" :notifiable_id="localModel.invoice_id"
              v-if="invoiceTab === 'mail'" :flat="true" />
            <q-card-section v-if="invoiceTab === 'payments'" style="min-height:300px;" class="q-pt-sm">
              <q-list separator>
                <q-item v-if="!model.invoice.payments.length" class="q-pa-none">
                  <q-item-section>No payments found</q-item-section>
                </q-item>
                <q-item v-for="p in model.invoice.payments" :key="p.id" class="q-pl-none q-pr-none">
                  <q-item-section>
                    <div>
                      <div><strong>{{ currencyFormat(p.grand_total) }}</strong> - {{ p.method }}</div>
                      <div>{{ dateTimeTz(p.created_at) }}
                      </div>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </div>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-card>
  <q-card v-if="futureRecurring && futureRecurring.length" class="q-mb-md q-mt-md">
    <q-list separator>
      <q-item-label header class="text-grey-8 text-bold">FUTURE BOOKINGS</q-item-label>
      <q-item v-for="o in futureRecurring" :key="o.id">
        <div>
          <div><router-link :to="{ name: 'order-edit', params: { id: o.id } }" class="link">{{
            displayDateDay(o.scheduled_pickup_date) }} {{ o.scheduled_pickup_date }} (<span
                v-if="!o.agreed_pickup_time">{{
                  hourBookingDisplay(o.scheduled_pickup_time)
                }}</span><span v-if="o.agreed_pickup_time">{{ hourAgreedDisplay(o.agreed_pickup_time)
}}</span>)</router-link>
          </div>
          <q-space />
          <div class="text-grey-7 text-caption">
            <q-icon name="settings" color="grey-7" /> <span v-if="o.productcategories"><span
                v-for="(c, index) in o.productcategories" :key="c.id">{{
                  c.name }}<span v-if="index + 1 !== o.productcategories.length" class="q-ml-xs q-mr-xs">&</span>
              </span> pickup with {{ o.team.name }}</span>
          </div>
          <div class="text-grey-7"><q-icon name="place" color="grey-7" /> <span class="q-mr-sm"
              v-if="o.team.suburbpostcoderegion">{{
                o.team.suburbpostcoderegion.locality
              }} {{
  o.team.suburbpostcoderegion.state
}}</span>
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
import UserAvatar from 'src/components/UserAvatar.vue'
import AuditTimeline from 'src/components/audit/AuditTimeline.vue'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateField from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import InvoiceProductManagement from 'src/components/invoiceproduct/InvoiceProductManagement.vue'
import { Order } from 'src/components/models'
import GlobalNotes from 'src/components/note/GlobalNotes.vue'
import GlobalNotifications from 'src/components/notification/GlobalNotifications.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, dateTimeTz, displayDateDay, doNotify, hourAgreedDisplay, hourBookingDisplay, hourBookingOptions } from 'src/mixins/help'
import { useMixinSecurity } from 'src/mixins/security'
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
const invoiceTab = ref('products')
const bookingTab = ref('details')
const tax = ref()
const showTimePicker = ref(false)
const localModel = computed(() => props.model)
const { user } = useMixinSecurity()

const rules = {
  team_id: { required },
  scheduled_pickup_date: { required },
  scheduled_pickup_time: { required },
  status: { required },
  productcategories: { required }
}
const loading = ref(false)

const $v = useVuelidate(rules, localModel, { $scope: false })

const canEdit = computed(() => {
  if (['sent_for_payment', 'PAID'].indexOf(props.model.status) !== -1 && !props.model.recurring) {
    return false
  }
  return true
})

const save = () => {
  loading.value = true
  api.put(`/public/order/${props.model.id}`, localModel.value).then(() => {
    doNotify('positive', 'Saved')
    emits('update:order')
    bus.emit('getDashboardStats')
    loading.value = false
  }).catch(error => {
    loading.value = false
    useMixinDebug(error, bus)
  })
}

const saveInvoice = () => {
  if (localModel.value && localModel.value.invoice) {
    loading.value = true
    api.put(`/public/invoice/${localModel.value.invoice.id}`, localModel.value.invoice).then(() => {
      doNotify('positive', 'Saved')
      emits('update:order')
      bus.emit('getDashboardStats')
      loading.value = false
    }).catch(error => {
      loading.value = false
      useMixinDebug(error, bus)
    })
  }
}

const updateProducts = () => {
  emits('update:order', { onlyTotals: true })
}

const updateOrder = () => {
  emits('update:order')
}

const createInvoice = () => {
  confirmDelete(`This will create an invoice for the ${i18n.t('order.name')}`).onOk(() => {
    api.post(`/public/invoice/createfromorder/${props.model.id}`).then(() => {
      emits('update:order')
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

onMounted(async () => {
  categories.value = await productCategoriesVisibleBooking()
  api.get('/public/setting/tax').then(response => {
    tax.value = { tax_enabled: response.data.tax_enabled, tax_rate: response.data.tax_rate }
  }).catch(error => {
    useMixinDebug(error)
  })
})
</script>
