<template>
  <q-layout view="lHh Lpr lFf" container class="layout-height" v-if="user && user.id">
    <q-header :class="{ 'page-title text-black': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <ContractorNav />
    </q-header>
    <q-page-container>
      <q-page padding class="q-pt-md layout-container q-pa-md">
        <div v-if="user && user.id" class="layout-container">
          <div class="flex q-mb-md items-center">
            <div class="text-h6">Hi {{ user.contractor_badge_name }}</div>
            <q-space />
            <q-btn round icon="add" @click="newOrder()" color="primary" dense title="Add new Booking" />
          </div>
          <div v-if="dashboard">
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-card class="bg-seamless q-mb-lg">
                  <q-card-section>
                    <div class="text-h6 q-mb-md">Pickups <q-btn icon="info" @click="showHelp = !showHelp" size="sm" round
                        dense flat /></div>
                    <p v-if="showHelp">To reorder your bookings, click the <q-icon name="drag_indicator" /> button, drag
                      the
                      bookings, then
                      click
                      the <q-icon name="drag_indicator" /> button again to exit re-order mode.</p>
                    <q-tabs v-model="pickupTab" class="q-mb-md" :align="!$q.screen.xs ? 'left' : 'center'">
                      <q-tab name="today" :label="`Today (${dashboard.pickupsToday.length})`" />
                      <q-tab name="week" :label="`Upcoming (${dashboard.pickupsWeek.length})`" />
                      <q-tab name="missed" :label="`Missed (${dashboard.pickupsMissed.length})`" />
                    </q-tabs>
                    <div v-if="pickupTab === 'today'">
                      <div v-if="!dashboard.pickupsToday.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                      </div>
                      <div v-for="k in dashboard.pickupsToday" :key="k.key" class="q-mb-sm">
                        <OrderListFormat :orders="k.data" :no-avatar="true" :drag="true"
                          :label="hourBookingDisplay(k.key)" :optimal="true" />
                      </div>
                    </div>
                    <div v-if="pickupTab === 'week'">
                      <div v-if="!dashboard.pickupsWeek.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                      </div>
                      <OrderListFormat :orders="dashboard.pickupsWeek" :no-avatar="true" :drag="true" :optimal="true" />
                    </div>
                    <div v-if="pickupTab === 'missed'">
                      <div v-if="!dashboard.pickupsMissed.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                      </div>
                      <OrderListFormat :orders="dashboard.pickupsMissed" :no-avatar="true" :optimal="true" />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-card class="bg-seamless q-mb-lg">
                  <q-card-section>
                    <div class="text-h6 q-mb-md">In Progress ({{ dashboard.ordersInprogress.length }})</div>
                    <div v-if="!dashboard.ordersInprogress.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                    </div>
                    <OrderListFormat :orders="dashboard.ordersInprogress" :no-avatar="true" :booking-id="true" />
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-card class="bg-seamless q-mb-lg">
                  <q-card-section>
                    <div class="text-h6 q-mb-md">Awaiting Payment ({{ dashboard.sentForPayment.length }})</div>
                    <div v-if="!dashboard.sentForPayment.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                    </div>
                    <OrderListFormat :orders="dashboard.sentForPayment" :no-avatar="true" :booking-id="true" />
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-card class="bg-seamless q-mb-lg">
                  <q-card-section>
                    <div class="text-h6 q-mb-md">Deliveries <q-btn icon="info" @click="showHelp = !showHelp" size="sm"
                        round dense flat /></div>
                    <p v-if="showHelp">To reorder your bookings, click the <q-icon name="drag_indicator" /> button, drag
                      the
                      bookings, then
                      click
                      the <q-icon name="drag_indicator" /> button again to exit re-order mode.</p>
                    <div v-if="!dashboard.readyForDelivery.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                    </div>
                    <OrderListFormat :orders="dashboard.readyForDelivery" :no-avatar="true" :optimal="true"
                      :drag="true" />
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-card class="bg-seamless">
                  <q-card-section>
                    <div class="text-h6 q-mb-md">Completed Today</div>
                    <div v-if="!dashboard.completedToday.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                    </div>
                    <OrderListFormat :orders="dashboard.completedToday" :no-avatar="true" :optimal="true"
                      :force-delivery-date="true" :drag="true" />
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
        <div style="height:24px;"></div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import OrderListFormat from 'src/components/order/OrderListFormat.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { hourBookingDisplay } from 'src/mixins/help'
import { useMixinSecurity } from 'src/mixins/security'
import { inject, onBeforeUnmount, onMounted, ref } from 'vue'
import ContractorNav from './contractor/ContractorNav.vue'

const { user } = useMixinSecurity()
const dashboard = ref()
const pickupTab = ref('today')
const showHelp = ref(false)
const bus = inject('bus') as EventBus

const getDashboard = () => {
  api.get('/public/user/contractor/dashboard?bare=true').then(response => {
    dashboard.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
}

const newOrder = () => {
  bus.emit('newOrder', {})
}

onMounted(() => {
  getDashboard()
  bus.on('orderLoadMore', () => {
    getDashboard()
  })
})

onBeforeUnmount(() => {
  bus.off('orderLoadMore')
})
</script>
