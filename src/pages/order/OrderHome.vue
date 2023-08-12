<template>
  <q-layout view="lHh Lpr lFf" container class="layout-height" v-if="model && model.id">
    <q-header :class="{ 'page-title text-black': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <div class="q-pl-md q-pr-md q-pt-md">
        <div class="flex" v-if="!$q.screen.xs">
          <q-breadcrumbs class="q-mb-md">
            <template v-slot:separator>
              <q-icon size="1.5em" name="chevron_right" />
            </template>
            <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
            <q-breadcrumbs-el :label="$t('order.namePlural')" :to="{ name: 'orders' }" />
            <q-breadcrumbs-el :label="`#${model.display_id.toString()}`" />
          </q-breadcrumbs>
        </div>
        <div class="q-mb-xs">
          <div class="row items-center q-mb-md">
            <div class="col-xs-12 col-sm-9">
              <div class="flex items-center">
                <q-btn @click="drawer.left = !drawer.left" icon="menu" outline v-if="$q.screen.lt.lg" flat />
                <div class="text-h5">
                  <span class="q-mr-sm">{{ $t('order.name') }} #{{ model.display_id }}</span>
                </div>
                <q-space />
                <StatusTag :status="model.status" /><router-link
                  :to="{ name: 'order-edit', params: { id: model.recurring_parent_id } }" class="link q-ml-sm"
                  v-if="model.recurring_parent_id" target="_blank">Recurring</router-link>
                <q-badge v-if="model.recurring_order" class="q-ml-sm q-pa-sm"><q-icon name="sync" class="q-mr-xs" />{{
                  `Every
                  ${model.recurring} on ${displayDateDay(model.scheduled_pickup_date)} ${model.agreed_pickup_time ?
                    model.agreed_pickup_time : hourBookingDisplay(model.scheduled_pickup_time)}` }}</q-badge>
              </div>
              <div class="q-mt-xs">{{ model.team.name }} <q-icon name="event" /> {{ model.scheduled_pickup_date }} ({{
                hourBookingDisplay(model.scheduled_pickup_time) }})</div>
            </div>
            <div class="col-xs-2 col-sm-3 text-right" v-if="!$q.screen.xs">
              <div>
                Last updated<br /><strong>{{ fromNowTz(model.updated_at) }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-header>
    <q-drawer v-model="drawer.left" :width="300" side="left" bordered>
      <div class="text-right q-pa-sm" v-if="$q.screen.lt.lg">
        <q-btn @click="drawer.left = false" icon="close" flat round dense v-close-popup />
      </div>
      <MapWithMarker :lat-lng="{ lat: parseFloat(model.lat), lng: parseFloat(model.lng) }"
        v-if="model.lat && model.lng" />
      <q-list dense class="q-mt-md q-ml-sm q-mr-sm">
        <q-item-label header>{{ $t('team.name') }}</q-item-label>
        <q-item>
          <q-item-section side>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <router-link :to="{ name: 'team-dashboard', params: { id: model.team_id } }" class="link">{{ model.team.name
            }}</router-link>
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
            {{ model.scheduled_pickup_date }} ({{
              hourBookingDisplay(model.scheduled_pickup_time) }})
          </q-item-section>
        </q-item>
        <q-item-label header>{{ $t('contractor.name') }}</q-item-label>
        <q-item v-if="model.contractor">
          <q-item-section side>
            <q-icon name="engineering" />
          </q-item-section>
          <q-item-section>
            {{
              model.contractor.contractor_badge_name }}
          </q-item-section>
        </q-item>
        <q-item v-if="model.contractor">
          <q-item-section side>
            <q-icon name="phone" />
          </q-item-section>
          <q-item-section>
            <a :href="`tel:${model.contractor.mobile}`" class="link">{{ model.contractor.mobile }}</a>
          </q-item-section>
        </q-item>
        <q-item v-if="!model.contractor">
          <q-item-section side>
            <q-icon name="warning" color="negative" />
          </q-item-section>
          <q-item-section class="text-negative">NO CONTRACTOR ASSIGNED</q-item-section></q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <q-page padding :class="{ 'q-pa-md': $q.screen.xs }">
        <router-view :model="model" @update:order="getOrder" :futureRecurring="futureRecurring" />
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
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { displayDateDay, fromNowTz, hourBookingDisplay } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const $q = useQuasar()
const bus = inject('bus') as EventBus
const drawer = reactive({ left: $q.screen.gt.md, right: true })
const futureRecurring = ref<Order[]>()
const model = ref<Order>()

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