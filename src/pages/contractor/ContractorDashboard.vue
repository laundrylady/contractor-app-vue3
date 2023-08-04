<template>
  <div v-if="model.id && dashboard">
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-xs-12 col-sm-4">
        <q-card class="bg-accent" style="height:160px;">
          <q-card-section>
            <div class="text-h6">Weekly Target</div>
            <div class="text-center" style="height:65px;">
              <q-circular-progress :value="dashboard.weeklyOrders.percentage" size="64px" color="primary"
                track-color="pink-1" v-if="dashboard.weeklyOrders.percentage" />
            </div>
            <div class="text-center q-mt-sm">
              {{ currencyFormat(dashboard.weeklyOrders.sum) }} / {{ currencyFormat(model.contractor_target) }} <span
                v-if="dashboard.weeklyOrders.diff === 0">~</span><q-icon name="arrow_downward" color="negative"
                v-if="dashboard.weeklyOrders.diff < 0" /><q-icon name="arrow_upward" color="positive"
                v-if="dashboard.weeklyOrders.diff > 0" /> <span v-if="dashboard.weeklyOrders.diff !== 0"
                :class="{ 'text-positive': dashboard.weeklyOrders.diff > 0, 'text-negative': dashboard.weeklyOrders.diff < 0 }">{{
                  dashboard.weeklyOrders.diff }}%</span> </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-4">
        <q-card class="bg-secondary text-white" style="height:160px;">
          <q-card-section>
            <div class="text-h6 q-mb-md">Commissions</div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <div class="text-h6 text-center">
                  {{ currencyFormat(dashboard.totalCommissionsOwing.grandTotal) }}
                </div>
                <div class="text-center">Owing</div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="text-h6 text-center">
                  {{ currencyFormat(dashboard.totalCommissionsPaid.grandTotal) }}
                </div>
                <div class="text-center">
                  Paid
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-4">
        <q-card class="bg-secondary text-white" style="height:160px;">
          <q-card-section>
            <div class="text-h6 q-mb-md">Statistics</div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <div class="text-h6 text-center">
                  {{ dashboard.totalOrdersCount[0].count }}
                </div>
                <div class="text-center">Total {{ $t('order.namePlural') }}</div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="text-h6 text-center">
                  {{
                    (currencyFormat(dashboard.totalOrdersTotalPrice[0].sum ?
                      (parseFloat(dashboard.totalOrdersTotalPrice[0].sum) +
                        parseFloat(dashboard.totalOrdersTotalPriceGst[0].sum)) : 0))
                  }}
                </div>
                <div class="text-center">
                  Total Revenue
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
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
    <div class="text-h5">Current {{ $t('schedule.name') }}</div>
    <p>Below is the current schedule for the {{ $t('contractor.name').toLowerCase() }}.</p>
    <div class="q-mb-xl">
      <UserRosterScheduleManagement :user="model" />
    </div>
    <Notes notable_type="User" :notable_id="model.id" :nobox="true" />
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { Order, User } from 'src/components/models'
import Notes from 'src/components/note/GlobalNotes.vue'
import OrderListFormat from 'src/components/order/OrderListFormat.vue'
import OrderRecurringBookingFormat from 'src/components/order/OrderRecurringBookingFormat.vue'
import UserRosterScheduleManagement from 'src/components/userrosterschedule/UserRosterScheduleManagement.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat } from 'src/mixins/help'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  model: User
}
const route = useRoute()
const props = defineProps<Props>()

const dashboard = ref()
const recurringOrders = ref<Order[]>()

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

onMounted(() => {
  getDashboard()
  getRecurringOrders()
})

watch(() => route.params.id, (newVal) => {
  if (route.name === 'contractor-dashboard') {
    if (newVal) {
      getDashboard()
      getRecurringOrders()
    }
  }
})
</script>
