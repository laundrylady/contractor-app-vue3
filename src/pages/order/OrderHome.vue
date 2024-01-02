<template>
  <q-layout view="lHh Lpr lFf" container class="layout-height layout-container" v-if="model && model.id">
    <q-drawer v-model="drawer.left" :width="300" side="left" :class="{ 'bg-page-background': !$q.screen.xs }">
      <div class="bg-white q-ma-sm rounded-borders">
        <div class="text-right q-pa-sm" v-if="$q.screen.lt.lg">
          <q-btn @click="drawer.left = false" icon="close" flat round dense v-close-popup />
        </div>
        <q-list dense class="q-ml-sm q-mr-sm q-pb-md">
          <q-item-label header>{{ $t('team.name') }}</q-item-label>
          <q-item>
            <q-item-section side>
              <q-icon name="account_circle" />
            </q-item-section>
            <q-item-section>
              {{ model.team.name }}
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section side>
              <q-icon name="phone" />
            </q-item-section>
            <q-item-section>
              <a :href="`tel:${model.team.mobile}`" class="link">{{ model.team.mobile }}</a>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section side>
              <q-icon name="payments" />
            </q-item-section>
            <q-item-section>
              {{ model.team.payment_terms }} - {{
                model.team.payment_terms_days }} days
            </q-item-section>
          </q-item>
          <q-item-label header>{{ $t('team.pickupAddress') }}</q-item-label>
          <q-item>
            <q-item-section side>
              <q-icon name="place" />
            </q-item-section>
            <q-item-section>
              <div>{{ model.address1 }} {{ model.address2 }}</div>
              <PostcodeRegionDisplay :postcoderegions="[model.suburbpostcoderegion]" v-if="model.suburbpostcoderegion" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section side>
              <q-icon name="event" />
            </q-item-section>
            <q-item-section>
              <div v-if="model.scheduled_pickup_date">{{ displayDateOrder(model.scheduled_pickup_date) }}</div> <span
                v-if="model.scheduled_pickup_time">({{
                  hourBookingDisplay(model.scheduled_pickup_time) }})</span>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="q-pa-sm">
          <MapWithMarker :lat-lng="{ lat: parseFloat(model.lat), lng: parseFloat(model.lng) }"
            v-if="model.lat && model.lng" />
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <q-page padding class="q-pa-md">
        <div class="q-mb-md">
          <div class="flex" v-if="!$q.screen.xs">
            <q-breadcrumbs class="q-mb-md">
              <template v-slot:separator>
                <q-icon size="1.5em" name="chevron_right" />
              </template>
              <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
              <q-breadcrumbs-el :label="$t('order.namePlural')" :to="{ name: 'appDashboard' }" />
              <q-breadcrumbs-el :label="`#${model.display_id.toString()}`" />
            </q-breadcrumbs>
          </div>
          <div class="q-mb-xs bg-white q-pa-md rounded-borders">
            <div class="row items-center">
              <div class="col-xs-12 col-sm-8">
                <div class="flex items-center">
                  <q-btn @click="drawer.left = !drawer.left" icon="menu" outline v-if="$q.screen.lt.lg" flat
                    class="q-pl-none q-pr-sm" />
                  <div class="text-h5">
                    <span class="q-mr-sm">{{ $t('order.name') }} #{{ model.display_id }}</span>
                  </div>
                  <router-link :to="{ name: 'order-edit', params: { id: model.recurring_parent_id } }" class="link"
                    v-if="model.recurring_parent_id"><q-icon name="sync" size="18px" /></router-link>
                  <q-space />
                  <StatusTag :status="model.status" v-if="$q.screen.xs" :small="true" />
                </div>
                <div class="flex items-start">
                  <div>
                    <div>
                      <q-icon name="attach_money" v-if="teamHasOutstandings" title="Has unpaids"
                        color="negative" /><router-link :to="{ name: 'team-dashboard', params: { id: model.team_id } }"
                        class="link">{{
                          model.team.name }} <span
                          v-if="model.team.name !== `${model.team.first_name} ${model.team.last_name}`">({{
                            model.team.first_name }} {{
    model.team.last_name }})</span></router-link><br /><q-icon name="event" /> {{
    model.scheduled_pickup_date ? displayDateOrder(model.scheduled_pickup_date) : '' }}
                      <span v-if="model.scheduled_pickup_time">
                        ({{ hourBookingDisplay(model.scheduled_pickup_time) }})
                      </span>
                      <q-icon name="sync" v-if="model.recurring_order" size="18px" />
                    </div>
                  </div>
                </div>
                <div v-if="model.team"><q-icon name="payments" /> {{ model.team.payment_terms }} - {{
                  model.team.payment_terms_days }} days <q-badge
                    v-if="model.team.owing_no_booking || model.team.status === 'blocked'" label="Blocked from bookings"
                    title="Blocked from bookings" /></div>
              </div>
              <div class="col-xs-2 col-sm-4 text-right" v-if="!$q.screen.xs">
                <div v-if="model.recurring_order && model.scheduled_pickup_time" class="q-mb-xs">
                  <q-badge class="q-pa-sm" color="secondary"><q-icon name="sync" class="q-mr-xs" />Recurring
                  </q-badge>
                </div>
                <StatusTag :status="model.status" /><span v-if="model.status === 'cancelled'"> by {{ model.cancel_by
                }}</span>
                <div v-if="model.cancel_reason" class="text-italic">{{ model.cancel_reason
                }}</div>
                <div>
                  Updated <strong>{{ fromNowTz(model.updated_at) }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-view :model="model" @update:order="getOrder" :futureRecurring="futureRecurring" />
        <div class="q-mb-md q-mt-xl">
          <div class="text-bold q-mb-xs">Internal Customer Notes</div>
          <GlobalNotes notable_type="Team" :notable_id="model.team_id" :nobox="true" :alert="true" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import PostcodeRegionDisplay from 'src/components/PostcodeRegionDisplay.vue'
import StatusTag from 'src/components/StatusTag.vue'
import MapWithMarker from 'src/components/maps/MapWithMarker.vue'
import { Order } from 'src/components/models'
import GlobalNotes from 'src/components/note/GlobalNotes.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { displayDateOrder, fromNowTz, hourBookingDisplay } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const $q = useQuasar()
const bus = inject('bus') as EventBus
const drawer = reactive({ left: $q.screen.gt.md, right: true })
const futureRecurring = ref<Order[]>()
const model = ref<Order>()
const teamHasOutstandings = ref(false)

const getOrder = async (data: LooseObject = {}) => {
  api.get(`/public/order/${route.params.id}`).then((response) => {
    if (data.onlyTotals && model.value && model.value.invoice) {
      model.value.invoice.total_price = response.data.invoice.total_price
      model.value.invoice.total_price_gst = response.data.invoice.total_price_gst
      model.value.invoice.grand_total_price = response.data.invoice.grand_total_price
      // check for min order line item
      model.value.invoice.products = response.data.invoice.products
      model.value.invoice.status = response.data.invoice.status
      model.value.status = response.data.status
    } else {
      model.value = response.data
      if (model.value) {
        api.get(`/public/team/hasoutstandings/${model.value.team_id}`).then(res => {
          teamHasOutstandings.value = res.data.has
        }).catch(error => {
          useMixinDebug(error)
        })
      }
    }
    document.title = `Booking #${response.data.display_id}`
    if (model.value?.recurring_order) {
      api.get(`/public/order/futurerecurring/${model.value.id}`).then(res => {
        futureRecurring.value = res.data
      }).catch(err => {
        useMixinDebug(err)
      })
    }
  }).catch((response) => {
    useMixinDebug(response)
  })
}

onMounted(async () => {
  await getOrder()
  bus.on('getOrder', (data: LooseObject) => { if (model.value && model.value.id === data.id) { getOrder() } })
  bus.on('invoice:refresh', (data: LooseObject) => {
    if (model.value && model.value.invoice_id === data.id) {
      getOrder()
    }
  })
})

onBeforeUnmount(() => {
  bus.off('getOrder')
  bus.off('invoice:refresh')
})

watch(() => route.params.id, (newVal) => {
  if (newVal && route.name === 'order-edit') { getOrder() }
})
</script>
