<template>
  <q-dialog v-model="show">
    <q-card class="modal-lg">
      <q-card-section>
        <div class="text-right q-mb-sm"><q-btn round dense flat v-close-popup icon="close" /></div>
        <OrderEdit :model="model" v-if="model" @update:order="getOrder" :no-notes="true" />
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
const id = ref()

const getOrder = (data: LooseObject = {}) => {
  api.get(`/order/${id.value}`).then(response => {
    if (data.onlyTotals && model.value) {
      model.value.total_price = response.data.total_price
      model.value.total_price_gst = response.data.total_price_gst
      model.value.grand_total_price = response.data.grand_total_price
      // check for min order line item
      if (response.data.products.length !== model.value.products.length) {
        model.value.products = response.data.products
      }
    } else {
      model.value = response.data
    }
    show.value = true
  }).catch(error => {
    useMixinDebug(error)
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
