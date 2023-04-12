<template>
  <div v-if="model.id && dashboard">
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-xs-12 col-sm-6">
        <q-card class="bg-seamless">
          <q-card-section>
            <div class="text-h6 q-mb-md">Awaiting Pickup</div>
            <div v-if="!dashboard.ordersConfirmed.length">No {{ $t('order.namePlural').toLowerCase() }} found.
            </div>
            <OrderListFormat :orders="dashboard.ordersConfirmed" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card class="bg-seamless">
          <q-card-section>
            <div class="text-h6 q-mb-md"><q-icon name="sync" /> Recurring {{ $t('order.namePlural') }}</div>
            <div v-if="!recurringOrders || !recurringOrders.length">No {{ $t('order.namePlural').toLowerCase() }} found.
            </div>
            <OrderRecurringBookingFormat :orders="recurringOrders" v-if="recurringOrders" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card class="bg-seamless">
          <q-card-section>
            <div class="text-h6 q-mb-md">In Progress</div>
            <div v-if="!dashboard.ordersInprogress.length">No {{ $t('order.namePlural').toLowerCase() }} found.
            </div>
            <OrderListFormat :orders="dashboard.ordersInprogress" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card class="bg-seamless">
          <q-card-section>
            <div class="text-h6 q-mb-md">Recently Completed</div>
            <div v-if="!dashboard.ordersRecentCompleted.length">No {{ $t('order.namePlural').toLowerCase() }} found.
            </div>
            <OrderListFormat :orders="dashboard.ordersRecentCompleted" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <GlobalNotes :notable_id="model.id" notable_type="Team" :nobox="true" />
  </div>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios'
import { Order, Team } from 'src/components/models'
import GlobalNotes from 'src/components/note/GlobalNotes.vue'
import OrderListFormat from 'src/components/order/OrderListFormat.vue'
import OrderRecurringBookingFormat from 'src/components/order/OrderRecurringBookingFormat.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { onMounted, ref } from 'vue'

interface Props {
  model: Team
}
const props = defineProps<Props>()

const dashboard = ref()
const recurringOrders = ref<Order[]>()

const getDashboard = () => {
  if (props.model) {
    api.get(`/team/dashboard/${props.model.id}`).then(response => {
      dashboard.value = response.data
    }).catch(error => {
      useMixinDebug(error)
    })
  }
}

const getRecurringOrders = () => {
  api.get(`/team/recurring/${props.model.id}`).then(response => {
    recurringOrders.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
}

onMounted(() => {
  getDashboard()
  getRecurringOrders()
})
</script>
