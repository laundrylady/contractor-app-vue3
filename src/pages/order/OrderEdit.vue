<template>
  <q-card>
    <q-list>
      <q-expansion-item group="orderEdit" :label="$t('order.details')" header-class="text-h6 bg-grey-1"
        caption="Update the booking details" @click="bookingTab = 'details'"
        :default-opened="localModel.status === 'cancelled'">
        <q-card>
          <q-card-section>
            <q-tabs v-model="bookingTab" align="left" class="q-mb-md">
              <q-tab name="details" label="Details" />
              <q-tab name="notes" label="Notes" />
            </q-tabs>
            <GlobalNotes :notable_id="localModel.id" notable_type="Order" :nobox="true" v-if="bookingTab === 'notes'" />
            <div v-if="bookingTab === 'details'">
              <q-input v-model="localModel.special_instructions" label="Special Instructions" outlined type="textarea"
                autogrow class="q-mt-md" :disable="!canEdit" />
              <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-6" v-if="localModel.team.name">
                  <div class="text-bold text-grey q-mt-md">{{ $t('team.name').toUpperCase() }}</div>
                  <div>{{ localModel.team.name }} <q-badge :label="localModel.team.type" color="grey-7" class="q-ml-sm" />
                  </div>
                  <div>
                    <div></div>
                    <div>{{ localModel.team.payment_terms === 'Credit Card' ? 'Credit Card' : 'Account'
                    }}</div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <div class="text-bold text-grey q-mt-md">PICKUP & DELIVERY</div>
                  <div v-if="localModel.address1">{{ localModel.address1 }}</div>
                  <div>{{ localModel.address2 }}</div>
                  <div v-if="localModel.suburbpostcoderegion">{{ localModel.suburbpostcoderegion.locality }} {{
                    localModel.suburbpostcoderegion.state }} {{ localModel.postcode }}</div>
                </div>
              </div>
              <div class="row q-col-gutter-md q-mt-sm" v-if="localModel.team_id">
                <div class="col-xs-12 col-sm-6">
                  <div class="text-bold text-grey">PICKUP DATE</div>
                  <div v-if="!changes.date">{{ localModel.scheduled_pickup_date }}<q-btn v-if="canEdit"
                      @click="changes.date = true" icon="edit" flat round size="sm" color="grey-7" class="q-ml-xs" />
                  </div>
                  <div v-if="changes.date">
                    <DateField v-model="changes.date_model" label="Choose a pickup date" :outlined="true"
                      :invalid="!changes.date_model" :disable="!canEdit" />
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <div class="text-bold text-grey">PICKUP BETWEEN</div>
                  <div v-if="!changes.time && localModel.scheduled_pickup_time">{{
                    hourBookingDisplay(localModel.scheduled_pickup_time) }}<q-btn v-if="canEdit"
                      @click="changes.time = true" icon="edit" flat round size="sm" color="grey-7" class="q-ml-xs" />
                    <div v-if="localModel.agreed_pickup_time">Agreed: {{
                      hourAgreedDisplay(localModel.agreed_pickup_time) }}
                    </div>
                  </div>
                  <div v-if="changes.time">
                    <q-select v-model="changes.time_model" :label="$t('order.scheduledPickupTime')"
                      :invalid="!changes.time_model" :options="hourBookingOptions" emit-value map-options
                      :disable="!canEdit" outlined />
                    <div v-if="(canEdit && changes.time) || localModel.agreed_pickup_time">
                      <div class="text-bold text-grey q-mb-xs q-mt-md">AGREED PICKUP TIME <a
                          @click="changes.agreed_time_model = null" class="link"
                          v-if="changes.agreed_time_model && changes.time">[RESET]</a></div>
                      <div v-if="!changes.time && localModel.agreed_pickup_time">{{
                        hourAgreedDisplay(localModel.agreed_pickup_time) }}<q-btn @click="changes.time = true" icon="edit"
                          flat round size="sm" color="grey-7" class="q-ml-xs" v-if="canEdit" /></div>
                      <q-select v-model="changes.agreed_time_model" :options="agreedTimeOptions" label="Choose a time"
                        outlined map-options emit-value />
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="localModel.scheduled_delivery_date || ['ready_for_delivery', 'awaiting_payment'].indexOf(localModel.status) !== -1"
                class="row q-col-gutter-md q-mt-sm">
                <div class="col-xs-12 col-sm-6">
                  <div class="text-bold text-grey">SCHEDULED DELIVERY DATE</div>
                  <div v-if="!changes.dateDelivery">{{ localModel.scheduled_delivery_date }}<q-btn v-if="canEditDelivery"
                      @click="changes.dateDelivery = true" icon="edit" flat round size="sm" color="grey-7"
                      class="q-ml-xs" />
                  </div>
                  <div v-if="changes.dateDelivery">
                    <DateField v-model="changes.dateDelivery_model" label="Choose a delivery date" :outlined="true"
                      :invalid="!changes.dateDelivery_model" :disable="!canEditDelivery" />
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <div class="text-bold text-grey">DELIVER BETWEEN</div>
                  <div v-if="!changes.timeDelivery"><span v-if="localModel.scheduled_delivery_time">{{
                    hourBookingDisplay(localModel.scheduled_delivery_time) }}</span><q-btn v-if="canEditDelivery"
                      @click="changes.timeDelivery = true" icon="edit" flat round size="sm" color="grey-7"
                      class="q-ml-xs" />
                    <div v-if="localModel.agreed_delivery_time">Agreed: {{
                      hourAgreedDisplay(localModel.agreed_delivery_time) }}
                    </div>
                  </div>
                  <div v-if="changes.timeDelivery">
                    <q-select v-model="changes.timeDelivery_model" :label="$t('order.scheduledDeliveryTime')"
                      :invalid="!changes.timeDelivery_model" :options="hourBookingOptions" emit-value map-options
                      :disable="!canEditDelivery" outlined />
                    <div v-if="(canEdit && changes.timeDelivery) || localModel.agreed_delivery_time">
                      <div class="text-bold text-grey q-mb-xs q-mt-md">AGREED DELIVERY TIME <a
                          @click="changes.agreed_timeDelivery_model = null" class="link"
                          v-if="changes.agreed_timeDelivery_model && changes.timeDelivery">[RESET]</a></div>
                      <div v-if="!changes.timeDelivery && localModel.agreed_delivery_time">{{
                        hourAgreedDisplay(localModel.agreed_delivery_time) }}<q-btn @click="changes.timeDelivery = true"
                          icon="edit" flat round size="sm" color="grey-7" class="q-ml-xs" v-if="canEditDelivery" /></div>
                      <q-select v-model="changes.agreed_timeDelivery_model" :options="agreedTimeOptions"
                        label="Choose a time" outlined map-options emit-value />
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-bold text-grey q-mt-md">PRODUCTS</div>
              <div v-for="c in localModel.productcategories" :key="c.id">
                <q-checkbox v-model="c.meta.pivot_active" :label="c.name" v-if="c.meta" :disable="!canEdit" />
              </div>
              <div v-if="!localModel.recurring_parent_id" class="q-mt-md">
                <q-toggle v-model="localModel.recurring_order" :label="$t('order.recurring')" />
                <div v-if="localModel.recurring_order" class="q-pa-md q-mt-sm"
                  :class="{ 'bg-grey-1': !$q.dark.isActive }">
                  <div class="row q-col-gutter-md">
                    <div class="col-xs-12 col-sm-6 col-lg-3">
                      <q-select v-model="localModel.recurring" :label="$t('order.recurringFrequency')"
                        :options="['Week', 'Month', 'Day']" bottom-slots :error="$v.recurring.$invalid" outlined
                        @update:model-value="localModel.recurring_end = ''" />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-4" v-if="model.recurring">
                      <q-select v-model="localModel.recurring_every" label="Repeat every"
                        :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]"
                        :error="$v.recurring_every.$invalid" outlined>
                        <template v-slot:append>
                          <q-badge :label="`${localModel.recurring}s`" color="grey" />
                        </template>
                      </q-select>
                    </div>
                  </div>
                  <div v-if="localModel.recurring === 'Week'" class="q-mb-lg">
                    <p>If the booking needs to occur multiple times a week, choose the days below:</p>
                    <q-btn v-for="d in localModel.recurring_days.days" :key="d.day" color="primary"
                      @click="d.active = !d.active" :label="d.label" :flat="!d.active" class="q-mr-xs" size="sm" />
                  </div>
                  <div class="row q-col-gutter-md" v-if="model.recurring">
                    <div class="col-xs-12 col-sm-6 col-lg-3">
                      <q-select v-model="localModel.recurring_end_type" label="Ends" :options="['After', 'On', 'Never']"
                        :error="$v.recurring_end_type.$invalid" @update:model-value="localModel.recurring_end = ''"
                        outlined />
                    </div>
                    <div class="col-xs-12 col-sm-6 col-lg-4">
                      <q-select v-model="localModel.recurring_end" v-if="localModel.recurring_end_type === 'After'"
                        label="Choose the amount" :error="$v.recurring_end.$invalid" :options="recurringOccurenceOptions"
                        outlined>
                        <template v-slot:append><q-badge label="occurences" color="grey" /></template>
                      </q-select>
                      <DateField v-model="localModel.recurring_end" label="Choose an end date" :outlined="true"
                        :invalid="$v.recurring_end.$invalid" :disable="!canEdit"
                        v-if="localModel.recurring_end_type === 'On'" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-actions v-if="bookingTab === 'details'">
            <q-btn @click="showCancelOrder = true" color="red" :label="$t('order.cancel')" rounded flat
              v-if="localModel.status !== 'cancelled' && (!localModel.invoice || (localModel.invoice && localModel.invoice.status !== 'PAID'))" />
            <q-space />
            <q-btn :label="$t('actions.cancel')" flat color="secondary" @click="resetChangeModel()" rounded
              v-if="changes.time || changes.date || changes.timeDelivery || changes.dateDelivery || changes.contractor" />
            <q-btn :disable="loading || $v.$invalid" :label="$t('actions.update')" color="primary" @click="save()"
              rounded />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="orderEdit"
        :label="`${$t('order.invoice')}${localModel.invoice ? ` - #${localModel.invoice.display_id}` : ''}`"
        caption=" Create, update and delete products" header-class="text-h6 bg-grey-1" default-opened
        @click="invoiceTab = 'products'" v-if="localModel.status !== 'cancelled'">
        <q-card>
          <q-card-section v-if="!localModel.invoice">
            <p>No invoice has been created for this {{ $t('order.name') }}.</p>
            <div class="flex">
              <q-btn label="Create invoice" @click="createInvoice()" color="primary" icon="add_circle" rounded
                :class="{ 'q-mb-lg': $q.screen.xs }" />
              <q-space /><q-btn label="Create No Show invoice" @click="createInvoicePickupNoShow()" color="red"
                icon="add_circle" rounded flat />
            </div>
          </q-card-section>
          <div v-if="localModel.invoice">
            <q-tabs v-model="invoiceTab" align="left">
              <q-tab name="products" :label="`${$t('product.namePlural')} (${localModel.invoice.products.length})`" />
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
                :addressfields="{ address1: 'invoice_address1', address2: 'invoice_address2', suburb_postcode_region_id: 'invoice_address_suburb_postcode_region_id', postcode: 'invoice_address_postcode', lat: 'lat', lng: 'lng', country_id: 'invoice_address_country_id' }"
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
          <div><router-link :to="{ name: 'order-edit', params: { id: o.id } }" class="link">
              <span v-if="o.scheduled_pickup_date">{{
                displayDateDay(o.scheduled_pickup_date) }}</span> {{ o.scheduled_pickup_date }} (<span
                v-if="!o.agreed_pickup_time && o.scheduled_pickup_time">{{
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
  <q-dialog v-model="showCancelOrder">
    <q-card class="modal">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>Booking #{{ localModel.display_id }} - Cancellation</q-toolbar-title>
      </q-toolbar>
      <q-card-section>
        <q-select v-model="localModel.cancel_reason" label="Reason for cancellation" outlined
          :options="cancelOrderReasons" bottom-slots />
        <q-input v-model="localModel.cancel_notes" label="Extra notes for the customer" type="textarea" rows="3" outlined
          bottom-slots />
        <q-checkbox v-model="localModel.cancel_rebook" label="Booking needs rescheduling" /> </q-card-section>
      <q-card-actions>
        <q-btn v-close-popup flat color="secondary" label="Close" rounded />
        <q-space />
        <q-btn @click="cancelOrder()" :disable="!localModel.cancel_reason || loadingCancel" :loading="loadingCancel"
          label="Cancel Booking" color="primary" rounded />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="showChangesOrder">
    <q-card class="modal">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>Booking #{{ localModel.display_id }} - Changes</q-toolbar-title>
        <q-space />
        <q-btn round flat v-close-popup icon="close" />
      </q-toolbar>
      <q-card-section>
        <div class="row q-col-gutter-md q-mb-md" v-if="!model.scheduled_delivery_date">
          <div class="col-xs-12 col-sm-6">
            <div class="text-grey text-bold">PICKUP DATE</div>
            <div>{{ changes.date_model }}</div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="text-grey text-bold">PICKUP TIME</div>
            <div v-if="!changes.agreed_time_model">{{ hourBookingDisplay(changes.time_model) }}</div>
            <div v-if="changes.agreed_time_model">{{ hourAgreedDisplay(changes.agreed_time_model) }}</div>
          </div>
        </div>
        <div class="row q-col-gutter-md q-mb-md" v-if="model.scheduled_delivery_date || model.scheduled_delivery_time">
          <div class="col-xs-12 col-sm-6">
            <div class="text-grey text-bold">DELIVERY DATE</div>
            <div>{{ changes.dateDelivery_model }}</div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="text-grey text-bold">DELIVERY TIME</div>
            <div v-if="!changes.agreed_timeDelivery_model">{{ hourBookingDisplay(changes.timeDelivery_model) }}</div>
            <div v-if="changes.agreed_timeDelivery_model">{{ hourAgreedDisplay(changes.agreed_timeDelivery_model) }}</div>
          </div>
        </div>
        <q-select v-model="localModel.changes_reason" label="Reason for change" outlined :options="activeChangeReasons"
          bottom-slots />
        <q-input v-model="localModel.changes_notes" label="Extra notes for the customer" type="textarea" rows="3" outlined
          bottom-slots />
      </q-card-section>
      <q-card-actions>
        <q-btn v-close-popup flat color="secondary" label="Close" rounded />
        <q-space />
        <q-btn @click="doSave()"
          :disable="!localModel.changes_reason || loadingChanges || !changes.date_model || !changes.time_model"
          :loading="loadingChanges" label="Update Booking" color="primary" rounded />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, requiredIf } from '@vuelidate/validators'
import { Dialog, EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import AuditTimeline from 'src/components/audit/AuditTimeline.vue'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateField from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import InvoiceProductManagement from 'src/components/invoiceproduct/InvoiceProductManagement.vue'
import { Order } from 'src/components/models'
import GlobalNotes from 'src/components/note/GlobalNotes.vue'
import GlobalNotifications from 'src/components/notification/GlobalNotifications.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { agreedTimes, arrayRange, cancelOrderReasons, changeOrderReasons, changeOrderReasonsDelivery, confirmDelete, currencyFormat, dateTimeTz, displayDateDay, doNotify, hourAgreedDisplay, hourBookingDisplay, hourBookingOptions } from 'src/mixins/help'
import { useMixinSecurity } from 'src/mixins/security'
import { productCategoriesVisibleBooking } from 'src/services/helpers'
import { computed, inject, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

interface Props {
  model: Order,
  noNotes?: boolean,
  futureRecurring?: Order[]
}
const props = defineProps<Props>()
const router = useRouter()
const emits = defineEmits(['update:order'])
const bus = inject('bus') as EventBus
const i18n = useI18n()
const categories = ref()
const invoiceTab = ref('products')
const bookingTab = ref('details')
const tax = ref()
const agreedTimeOptions = ref<LooseObject[]>([])
const localModel = computed(() => props.model)
const { user } = useMixinSecurity()
const showCancelOrder = ref(false)
const loadingCancel = ref(false)
const showChangesOrder = ref(false)
const loadingChanges = ref(false)

const changes: LooseObject = ref({
  date: false,
  date_model: null,
  time: false,
  time_model: null,
  agreed_time_model: null,
  contractor: false,
  dateDelivery: false,
  dateDelivery_model: null,
  timeDelivery: false,
  timeDelivery_model: null,
  agreed_timeDelivery_model: null
})

const activeChangeReasons = ref()

const rules = {
  team_id: { required },
  scheduled_pickup_date: { required },
  scheduled_pickup_time: { required },
  status: { required },
  productcategories: { required },
  recurring: { requiredIf: requiredIf(() => localModel.value.recurring_order) },
  recurring_every: { requiredIf: requiredIf(() => localModel.value.recurring_order) },
  recurring_end_type: { requiredIf: requiredIf(() => localModel.value.recurring_order) },
  recurring_end: { requiredIf: requiredIf(() => localModel.value.recurring_order && localModel.value.recurring_end_type !== 'Never') }
}
const loading = ref(false)

const $v = useVuelidate(rules, localModel, { $scope: false })

const canEdit = computed(() => {
  if (['awaiting_payment', 'PAID', 'completed', 'cancelled'].indexOf(props.model.status) !== -1 && !props.model.recurring) {
    return false
  }
  return true
})

const canEditDelivery = computed(() => {
  if (['PAID', 'completed', 'cancelled'].indexOf(props.model.status) !== -1 && !props.model.recurring) {
    return false
  }
  return true
})

const recurringOccurenceOptions = computed(() => {
  if (localModel.value && localModel.value.recurring === 'Day') {
    return arrayRange(1, 50, 1, true)
  }
  if (localModel.value && localModel.value.recurring === 'Week') {
    return arrayRange(1, 12, 1, true)
  }
  if (localModel.value && localModel.value.recurring === 'Month') {
    return arrayRange(1, 3, 1, true)
  }
  return arrayRange(1, 50, 1, true)
})

const doSavePut = () => {
  loading.value = true
  // pickup
  if (changes.value.date) {
    localModel.value.scheduled_pickup_date = changes.value.date_model
  }
  if (changes.value.time) {
    localModel.value.scheduled_pickup_time = changes.value.time_model
  }
  localModel.value.agreed_pickup_time = changes.value.agreed_time_model
  // delivery
  if (changes.value.dateDelivery) {
    localModel.value.scheduled_delivery_date = changes.value.dateDelivery_model
  }
  if (changes.value.timeDelivery) {
    localModel.value.scheduled_delivery_time = changes.value.timeDelivery_model
  }
  localModel.value.agreed_delivery_time = changes.value.agreed_timeDelivery_model
  api.put(`/public/order/${props.model.id}`, localModel.value).then(() => {
    doNotify('positive', 'Saved')
    emits('update:order')
    bus.emit('getDashboardStats')
    loading.value = false
    // pickup
    changes.value.date_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_date))
    changes.value.time_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_time))
    changes.value.date = false
    changes.value.time = false
    // delivery
    changes.value.dateDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_date))
    changes.value.timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_time))
    changes.value.dateDelivery = false
    changes.value.timeDelivery = false
    changes.value.contractor = false
    showChangesOrder.value = false
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

const doSave = () => {
  if (localModel.value.recurring_parent_id) {
    Dialog.create({
      title: 'Recurring Booking',
      message: 'This will only update the details of this booking. To make changes to all future recurring bookings, click "Edit Master Booking"',
      ok: {
        color: 'primary',
        rounded: true,
        label: 'Update'
      },
      cancel: {
        color: 'secondary',
        flat: true,
        rounded: true,
        label: 'Edit Master Booking'
      }
    }).onOk(() => {
      doSavePut()
    }).onCancel(() => {
      router.push({ name: 'order-edit', params: { id: localModel.value.recurring_parent_id } })
    })
  } else {
    doSavePut()
  }
}

const save = () => {
  // check for change in date or time
  if (
    changes.value.date_model !== localModel.value.scheduled_pickup_date ||
    changes.value.time_model !== localModel.value.scheduled_pickup_time ||
    changes.value.agreed_time_model !== localModel.value.agreed_pickup_time ||
    changes.value.dateDelivery_model !== localModel.value.scheduled_delivery_date ||
    changes.value.timeDelivery_model !== localModel.value.scheduled_delivery_time ||
    changes.value.agreed_timeDelivery_model !== localModel.value.agreed_delivery_time) {
    // delivery change
    if (changes.value.dateDelivery_model !== localModel.value.scheduled_delivery_date ||
      changes.value.timeDelivery_model !== localModel.value.scheduled_delivery_time ||
      changes.value.agreed_timeDelivery_model !== localModel.value.agreed_delivery_time) {
      activeChangeReasons.value = changeOrderReasonsDelivery
    } else {
      activeChangeReasons.value = changeOrderReasons
    }
    showChangesOrder.value = true
  } else {
    doSave()
  }
}

const cancelOrder = () => {
  confirmDelete('This will cancel the order').onOk(() => {
    loadingCancel.value = true
    api.put(`/public/order/cancel/${props.model.id}`, localModel.value).then(() => {
      emits('update:order')
      bus.emit('getDashboardStats')
      showCancelOrder.value = false
      loadingCancel.value = false
    }).catch(error => {
      useMixinDebug(error)
    })
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

const createInvoicePickupNoShow = () => {
  confirmDelete(`This will create a no show invoice for the ${i18n.t('order.name')}`).onOk(() => {
    api.post(`/public/invoice/createfromorderpickupnoshow/${props.model.id}`).then(() => {
      emits('update:order')
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

const resetChangeModel = () => {
  changes.value.date = false
  changes.value.time = false
  changes.value.dateDelivery = false
  changes.value.timeDelivery = false
  changes.value.contractor = false
  // pickup
  changes.value.date_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_date))
  changes.value.time_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_time))
  changes.value.agreed_time_model = JSON.parse(JSON.stringify(localModel.value.agreed_pickup_time))
  // delivery
  changes.value.dateDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_date))
  changes.value.timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_time))
  changes.value.agreed_timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.agreed_delivery_time))
}

onMounted(async () => {
  categories.value = await productCategoriesVisibleBooking()
  api.get('/public/setting/tax').then(response => {
    tax.value = { tax_enabled: response.data.tax_enabled, tax_rate: response.data.tax_rate }
  }).catch(error => {
    useMixinDebug(error)
  })
  if (localModel.value.scheduled_pickup_time && !hourBookingOptions.find(o => o.value === localModel.value.scheduled_pickup_time)) {
    hourBookingOptions.unshift({ value: '', label: '-----------', disable: true })
    hourBookingOptions.unshift({ value: localModel.value.scheduled_pickup_time, label: hourBookingDisplay(localModel.value.scheduled_pickup_time), disable: false })
  }
  // pickup
  changes.value.date_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_date))
  changes.value.time_model = JSON.parse(JSON.stringify(localModel.value.scheduled_pickup_time))
  changes.value.agreed_time_model = JSON.parse(JSON.stringify(localModel.value.agreed_pickup_time))
  // delivery
  changes.value.dateDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_date))
  changes.value.timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.scheduled_delivery_time))
  changes.value.agreed_timeDelivery_model = JSON.parse(JSON.stringify(localModel.value.agreed_delivery_time))
  agreedTimeOptions.value = agreedTimes()
})
</script>
