<template>
  <div v-if="user && user.id">
    <OrderCreate />
    <div class="flex q-mb-md">
      <div class="text-h6">Hi {{ user.first_name }}</div>
      <q-space />
      <q-btn :to="{ name: 'orders' }" label="View All" flat color="primary" class="q-mr-xs" />
      <q-btn round icon="add" @click="newOrder()" color="primary" dense />
    </div>
    <div v-if="dashboard">
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-6">
          <q-card class="bg-seamless q-mb-lg">
            <q-card-section>
              <div class="text-h6 q-mb-md">Pickups</div>
              <q-tabs v-model="pickupTab" class="q-mb-md">
                <q-tab name="today" :label="`Today (${dashboard.pickupsToday.length})`" />
                <q-tab name="week" :label="`Upcoming (${dashboard.pickupsWeek.length})`" />
                <q-tab name="missed" :label="`Missed (${dashboard.pickupsMissed.length})`" />
              </q-tabs>
              <div v-if="pickupTab === 'today'">
                <div v-if="!dashboard.pickupsToday.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                </div>
                <OrderListFormat :orders="dashboard.pickupsToday" :no-avatar="true" />
              </div>
              <div v-if="pickupTab === 'week'">
                <div v-if="!dashboard.pickupsWeek.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                </div>
                <OrderListFormat :orders="dashboard.pickupsWeek" :no-avatar="true" />
              </div>
              <div v-if="pickupTab === 'missed'">
                <div v-if="!dashboard.pickupsMissed.length">No {{ $t('order.namePlural').toLowerCase() }} found.
                </div>
                <OrderListFormat :orders="dashboard.pickupsMissed" :no-avatar="true" />
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-card class="bg-seamless q-mb-lg">
            <q-card-section>
              <div class="text-h6 q-mb-md">In Progress</div>
              <div v-if="!dashboard.ordersInprogress.length">No {{ $t('order.namePlural').toLowerCase() }} found.
              </div>
              <OrderListFormat :orders="dashboard.ordersInprogress" :no-avatar="true" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-card class="bg-seamless q-mb-lg">
            <q-card-section>
              <div class="text-h6 q-mb-md">Sent for Payment</div>
              <div v-if="!dashboard.sentForPayment.length">No {{ $t('order.namePlural').toLowerCase() }} found.
              </div>
              <OrderListFormat :orders="dashboard.sentForPayment" :no-avatar="true" />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-card class="bg-seamless q-mb-lg">
            <q-card-section>
              <div class="text-h6 q-mb-md"><q-icon name="sync" /> Recurring {{ $t('order.namePlural') }}</div>
              <div v-if="!recurringOrders || !recurringOrders.length">No {{ $t('order.namePlural').toLowerCase() }} found.
              </div>
              <OrderRecurringBookingFormat :orders="recurringOrders" v-if="recurringOrders" :no-avatar="true" />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { Order } from 'src/components/models'
import OrderCreate from 'src/components/order/OrderCreate.vue'
import OrderListFormat from 'src/components/order/OrderListFormat.vue'
import OrderRecurringBookingFormat from 'src/components/order/OrderRecurringBookingFormat.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { useMixinSecurity } from 'src/mixins/security'
import { onMounted, onBeforeUnmount, ref, inject } from 'vue'

const { user } = useMixinSecurity()
const dashboard = ref()
const pickupTab = ref('today')
const recurringOrders = ref<Order[]>()
const bus = inject('bus') as EventBus

const getDashboard = () => {
  api.get('/public/user/contractor/dashboard?bare=true').then(response => {
    dashboard.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
}

const getRecurringOrders = () => {
  api.get('/public/user/contractor/recurring').then(response => {
    recurringOrders.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
}

const newOrder = () => {
  bus.emit('newOrder')
}

onMounted(() => {
  getDashboard()
  getRecurringOrders()
  bus.on('orderLoadMore', () => {
    getDashboard()
    getRecurringOrders()
  })
})

onBeforeUnmount(() => {
  bus.off('orderLoadMore')
})
</script>
