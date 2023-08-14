<template>
  <q-dialog v-model="show">
    <q-card class="modal-lg">
      <q-card-section>
        <div class="text-right q-mb-sm"><q-btn round dense flat v-close-popup icon="close" rounded /></div>
        <OrderEdit :model="model" v-if="model" @update:order="getOrder" :no-notes="true" rounded />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import OrderEdit from 'src/pages/order/OrderEdit.vue'
import { inject, onMounted, onUnmounted, ref } from 'vue'
import { Order } from '../models'

const bus = inject('bus') as EventBus
const show = ref(false)
const model = ref<Order>()
const futureRecurring = ref<Order>()
const id = ref()

const getOrder = (data: LooseObject = {}) => {
  api.get(`/public/order/${id.value}`).then((response) => {
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

onMounted(() => {
  bus.on('editOrderModal', (orderId: string) => {
    id.value = orderId
    getOrder()
  })
})

onUnmounted(() => {
  bus.off('editOrderModal')
})

</script>
