<template>
  <div v-if="user && user.id">
    <OrderCreate />
    <div class="flex q-mb-md">
      <div class="text-h6">Hi {{ user.first_name }}</div>
      <q-space />
      <q-btn round icon="add" @click="newOrder()" color="primary" dense />
    </div>
    <div v-if="dashboard">
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-6">
          <q-card class="bg-seamless q-mb-lg">
            <q-card-section>
              <div class="text-h6 q-mb-md">Awaiting Pickup</div>
              <div v-if="!dashboard.ordersConfirmed.length">No {{ $t('order.namePlural').toLowerCase() }} found.
              </div>
              <OrderListFormat :orders="dashboard.ordersConfirmed" :no-avatar="true" />
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
              <div class="text-h6 q-mb-md">Recently Completed</div>
              <div v-if="!dashboard.ordersRecentCompleted.length">No {{ $t('order.namePlural').toLowerCase() }} found.
              </div>
              <OrderListFormat :orders="dashboard.ordersRecentCompleted" :no-avatar="true" />
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
const recurringOrders = ref<Order[]>()
const bus = inject('bus') as EventBus

const getDashboard = () => {
  api.get('/public/user/contractor/dashboard').then(response => {
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
