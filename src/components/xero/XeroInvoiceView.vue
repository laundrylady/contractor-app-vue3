<template>
  <q-dialog v-model="showModal">
    <q-card class="modal" v-if="model && model.reference">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title class="col-grow">{{ model.reference }}</q-toolbar-title>
        <q-space />
        <StatusTag :status="model.status" class="q-mr-xs" />
        <q-btn dense round flat icon="close" v-close-popup />
      </q-toolbar>
      <q-card-section>
        <div class="row q-col-gutter-md q-mb-lg q-mt-xs">
          <div class="col-xs-12 col-sm-2">
            <div class="text-bold">To</div>
            {{ model.contact.name }}
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="text-bold">Reference</div>
            {{ model.reference }}
          </div>
          <div class="col-xs-12 col-sm-2">
            <div class="text-bold">Invoice Number</div>
            #{{ model.invoiceNumber }}
          </div>
          <div class="col-xs-12 col-sm-2">
            <div class="text-bold">Issue Date</div>
            {{ dateTz(model.date) }}
          </div>
          <div class="col-xs-12 col-sm-2">
            <div class="text-bold">Due Date</div>
            {{ dateTz(model.dueDate) }}
          </div>
        </div>
        <q-markup-table flat bordered wrap-cells>
          <thead>
            <tr>
              <th style="width:60px;">Qty</th>
              <th class="text-left">Product</th>
              <th style="width:85px;">Amount</th>
              <th style="width:80px;">Tax</th>
              <th style="width:100px;">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="l in model.lineItems" :key="l.lineItemID">
              <td class="text-center">{{ l.quantity }}</td>
              <td class="text-left">{{ l.description }}</td>
              <td>{{ currencyFormat(l.lineAmount) }}</td>
              <td>{{ currencyFormat(l.taxAmount) }}</td>
              <td>{{ currencyFormat(l.taxAmount + l.lineAmount) }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="text-bold">{{ currencyFormat(model.subTotal) }}</td>
              <td class="text-bold">{{ currencyFormat(model.totalTax) }}</td>
              <td class="text-bold">{{ currencyFormat(model.total) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><span class="text-bold text-positive">Paid:</span><br />{{ currencyFormat(model.amountPaid) }}</td>
              <td><span class="text-bold text-negative">DUE:</span><br />{{ currencyFormat(model.amountDue) }}</td>
            </tr>
          </tfoot>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat, dateTz } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { XeroInvoice } from 'src/components/models'
import StatusTag from '../StatusTag.vue'

const bus = inject('bus') as EventBus
const showModal = ref(false)
const id = ref()
const model = ref<XeroInvoice>()
const $q = useQuasar()

const getInvoice = () => {
  $q.loading.show({ message: 'Loading invoice...' })
  api.get(`/xero/invoice/${id.value}`).then(response => {
    model.value = response.data.data[0]
    showModal.value = true
    $q.loading.hide()
  }).catch(error => {
    useMixinDebug(error)
    $q.loading.hide()
  })
}

onMounted(() => {
  bus.on('xeroInvoiceView', (invoiceId: string) => {
    id.value = invoiceId
    getInvoice()
  })
})

onBeforeUnmount(() => {
  bus.off('xeroInvoiceView')
})
</script>
