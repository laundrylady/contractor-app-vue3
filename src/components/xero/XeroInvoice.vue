<template>
  <div class="q-pa-md">
    <XeroInvoiceView />
    <div class="row q-col-gutter-md items-center">
      <div class="col-xs-12 col-sm-2">
        <img src="~assets/images/integrations/xero.webp" style="max-width:100%;" />
      </div>
      <div class="col-xs-12 col-sm-10">
        <div v-if="loading">
          <q-spinner />
          Loading Xero invoice...
        </div>
        <div v-if="!loading && model">
          <div class="q-mb-xs">Xero Invoice ID:<br />{{ invoiceId }}</div>
          <a class="link" @click="viewInvoice(invoiceId)">#{{ model.invoiceNumber }}</a>
          <div class="q-mt-xs" v-if="!error">
            <StatusTag :status="model.status" />
            <q-btn @click="requeue()" label="Re-push to Xero" color="grey" class="q-ml-xs" flat />
          </div>
          <div class="q-mt-xs text-negative" v-if="error">
            Error retrieving invoice:
            <div>{{ error }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { XeroInvoice } from 'src/components/models'
import StatusTag from 'src/components/StatusTag.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, doNotify } from 'src/mixins/help'
import { inject, onMounted, ref } from 'vue'
import XeroInvoiceView from './XeroInvoiceView.vue'

interface Props {
  invoiceId: string,
  type: string,
  type_id: string | number,
  dataType?: string
}

const bus = inject('bus') as EventBus
const props = defineProps<Props>()
const error = ref(false)
const loading = ref(false)
const model = ref<XeroInvoice>()

const getInvoice = () => {
  loading.value = true
  error.value = false
  api.get(`/xero/invoice/${props.invoiceId}`).then(response => {
    if (response.data.data && response.data.data[0]) {
      model.value = response.data.data[0]
    } else {
      error.value = response.data.error
    }
    loading.value = false
  })
}

const requeue = () => {
  confirmDelete('This will repush this to invoice to Xero').onOk(() => {
    api.post('/xeroqueue/requeue', {
      type: props.type,
      type_id: props.type_id,
      data: props.dataType ? { type: props.dataType } : null
    }).then(() => {
      doNotify('positive', 'Xero invoice push queued')
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

const viewInvoice = (invoiceID: string) => {
  bus.emit('xeroInvoiceView', invoiceID)
}

onMounted(() => {
  getInvoice()
})
</script>
