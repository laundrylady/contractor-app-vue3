<template>
  <div class="q-pl-sm q-pr-sm">
    <div class="row q-pt-md q-pb-md q-col-gutter-xs"
      v-for="(p, index) in localModel.products.filter(o => o.name !== 'Service Fee')" :key="index"
      :class="{ 'bg-grey-1': index % 2 !== 0 }">
      <div class="col-xs-7 col-sm-9">
        <div>{{ p.name }}
          <div>
            <span class="text-grey q-mr-sm">{{ currencyFormat(p.price) }}</span>
            <a @click="removeProduct(p.id)" class="link text-caption"
              v-if="p.id && nonEditableProducts.indexOf(p.product_id) === -1 && nonEditableProductCategories.indexOf(p.product.product_category_id) === -1 && canEdit && p.product_id !== 26">Remove</a>
          </div>
        </div>
      </div>
      <div class="col-xs-5 col-sm-3"
        v-if="nonEditableProducts.indexOf(p.product_id) === -1 && nonEditableProductCategories.indexOf(p.product.product_category_id) === -1 && p.name !== 'Pickup No Show'">
        <q-input v-model="p.qty" type="number" min="1" borderless :label="`${p.product.unit_measurement.toUpperCase()}S`"
          filled @update:model-value="manualQty" :debounce="500" :disable="loading || !canEdit" dense
          style="max-width:150px;">
          <template v-slot:prepend v-if="canEdit">
            <q-btn @click="minusQty(p)" color="primary" icon="remove" dense size="sm" :disable="loading || !canEdit" round
              style="margin-right:1px;" />
          </template>
          <template v-slot:append v-if="canEdit">
            <q-btn @click="plusQty(p)" color="primary" icon="add" dense size="sm" :disable="loading || !canEdit" round />
          </template>
        </q-input>
      </div>
    </div>
    <div v-if="localModel.id && canEdit" class="q-mt-md q-mb-sm">
      <q-btn :label="!newProduct.product_id ? `Add a ${$t('product.name')}` : `${newProduct.name}`" outline no-caps
        color="primary" icon="add_circle" :disable="loading" class="full-width" rounded v-if="!hasPickupNoShow">
        <q-menu anchor="center middle" self="center middle" class="soft-shadow add-product-menu">
          <div class="row">
            <div class="col-xs-12" v-for="p in productListFiltered" :key="p.key">
              <div class="text-h6 q-pa-sm bg-grey-2">
                <q-icon :name="p.data[0].productcategory.icon" size="32px" />
                {{ p.key }}
              </div>
              <q-list separator style="max-height:300px;overflow:auto;">
                <q-item @click="selectProduct(d)" clickable v-for="d in p.data" :key="d.id" v-close-popup>
                  <q-item-section>
                    <div class="text-primary">{{ d.name }}</div>
                    <div class="text-grey">{{ currencyFormat(d.unit_price) }} per {{ d.unit_measurement }}</div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-menu>
      </q-btn>
    </div>
    <div v-if="localModel.id">
      <q-separator class="q-mb-sm" />
      <div class="text-right">
        <div>Subtotal: {{ currencyFormat(serviceFeeOther ? localModel.grand_total_price : 0) }}</div>
        <div v-if="serviceFee && serviceFeeOther">Service Fee: {{ currencyFormat(serviceFee.price) }}</div>
        <div>
          Total GST: {{ currencyFormat(serviceFeeOther ? localModel.total_price_gst : 0) }}
        </div>
        <div> <span v-if="localModel.sent_for_payment && localModel.status !== 'PAID' && localModel.due_date"
            class="text-grey q-mr-sm">
            Due: {{ localModel.due_date }}</span><span class="text-h6">Total: {{
              currencyFormat(serviceFeeOther ? localModel.grand_total_price : 0) }}</span></div>
      </div>
    </div>
    <div v-if="canEdit">
      <div v-if="localModel.total_price > 0"> <q-input v-model="gfDcCode" label="Gift voucher / Discount code" outlined
          dense>
          <template v-slot:append>
            <q-btn @click="checkGvDc()" label="Apply" color="primary" :disable="!gfDcCode" size="sm" rounded />
          </template>
        </q-input>
      </div>
    </div>
    <q-input v-model="localModel.invoice_po" :label="$t('team.invoicePo')" outlined dense class="q-mt-md">
      <template v-slot:append>
        <q-btn @click="saveDetail()" label="Save" color="primary" size="sm" rounded />
      </template>
    </q-input>
    <div class="q-mt-md items-center q-pb-md">
      <div class="flex">
        <q-btn @click="openURL(`/invoice/print/${localModel.id}`)" icon="picture_as_pdf" title="Download Invoice PDF" flat
          round class="q-mr-xs" />
        <q-btn @click="!hasPickupNoShow ? doSendPaymentRequest('sms') : sendPaymentRequestSms()" icon="chat"
          title="Send SMS Payment Request" flat v-if="canSend" :disable="sendingPaymentRequest" round />
        <q-space />
        <q-btn @click="doSendPaymentRequest('email')" icon="mail" label="Send Payment Request" push color="primary"
          v-if="canSend" :disable="sendingPaymentRequest" rounded />
      </div>
      <div v-if="notificationHistory && notificationHistory.length">
        <q-separator class="q-mt-md q-mb-sm" />
        <div v-for="n in notificationHistory" :key="n.id" class="text-grey">
          {{ dateTimeTz(n.created_at) }} -
          <span v-if="n.subject && n.subject.match('Ready For Payment')">Sent for payment </span>
          <span v-if="n.subject && n.subject.match('reminder')">Payment reminder </span>
          <span v-if="n.subject && !n.subject.match('reminder') && !n.subject.match('Ready For Payment')">Invoice
            emailed
          </span> to <span class="text-wrap">{{ n.to }}<span v-if="n.cc && n.cc.length"><span v-for="(c, index) in n.cc"
                :key="`${c}-${index}`">, {{ c }}</span></span></span>
          <q-separator class="q-mt-sm q-mb-sm" v-if="$q.screen.xs" />
        </div>
      </div>
    </div>
  </div>
  <q-dialog v-model="sendPaymentModal.show">
    <q-card class="modal">
      <q-toolbar class="bg-primary text-white"><q-toolbar-title>Send for payment</q-toolbar-title></q-toolbar>
      <q-card-section>
        <div v-if="!hasPickupNoShow">
          <p>Please confirm the scheduled delivery date & time below:</p>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-6">
              <date-field v-model="sendPaymentModal.scheduled_delivery_date" label="Scheduled delivery date"
                :outlined="true" :invalid="!hasPickupNoShow && !sendPaymentModal.scheduled_delivery_date" />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-select v-model="sendPaymentModal.scheduled_delivery_time" label="Scheduled delivery time"
                :outlined="true" :options="hourBookingOptions"
                :error="!hasPickupNoShow && !sendPaymentModal.scheduled_delivery_time" map-options emit-value />
            </div>
          </div>
        </div>
        <q-input v-model="sendPaymentModal.content" type="textarea" outlined rows="3"
          label="Enter any notes for the customer" class="q-mt-md" />
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="secondary" label="Cancel" v-close-popup rounded />
        <q-space />
        <q-btn @click="sendPaymentRequest()" color="primary" label="Send via email" rounded
          :disable="sendingPaymentRequest || (!hasPickupNoShow && (!sendPaymentModal.scheduled_delivery_date || !sendPaymentModal.scheduled_delivery_time))" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="sendPaymentModalSms.show">
    <q-card class="modal">
      <q-toolbar class="bg-primary text-white"><q-toolbar-title>Send for payment</q-toolbar-title></q-toolbar>
      <q-card-section>
        <p>Please confirm the scheduled delivery date & time below:</p>
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-sm-6">
            <date-field v-model="sendPaymentModalSms.scheduled_delivery_date" label="Scheduled delivery date"
              :outlined="true" :invalid="!sendPaymentModalSms.scheduled_delivery_date" />
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-select v-model="sendPaymentModalSms.scheduled_delivery_time" label="Scheduled delivery time"
              :outlined="true" :options="hourBookingOptions" :error="!sendPaymentModalSms.scheduled_delivery_time"
              map-options emit-value />
          </div>
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="secondary" label="Cancel" v-close-popup rounded />
        <q-space />
        <q-btn @click="sendPaymentRequestSms()" color="primary" label="Send via SMS" rounded
          :disable="sendingPaymentRequest || !sendPaymentModalSms.scheduled_delivery_date || !sendPaymentModalSms.scheduled_delivery_time" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { EventBus, openURL } from 'quasar'
import { api } from 'src/boot/axios'
import { Invoice, InvoicePayment, InvoiceProduct, Order, OrderProductCategory, Product, Team, Notification } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, dateTimeTz, doNotify, groupBy, hourBookingOptions } from 'src/mixins/help'
import { computed, inject, onMounted, reactive, ref } from 'vue'
import DateField from '../form/DateField.vue'
import { useMixinSecurity } from 'src/mixins/security'

interface Props {
  invoice: Invoice,
  team: Team,
  categories: OrderProductCategory[],
  order: Order
}

const notificationHistory = ref<Notification[]>([])

const sendPaymentModal = ref({
  show: false,
  content: null,
  scheduled_delivery_date: '',
  scheduled_delivery_time: ''
})
const sendPaymentModalSms = ref({
  show: false,
  scheduled_delivery_date: '',
  scheduled_delivery_time: ''
})
const props = defineProps<Props>()
const emits = defineEmits(['update:products', 'update:order'])
const localModel = computed(() => props.invoice)
const productList = ref()
const nonEditableProducts = ref([35, 36])
const nonEditableProductCategories = ref([6])
const rawProductList = ref()
const gfDcCode = ref()
const sendingPaymentRequest = ref(false)
const bus = inject('bus') as EventBus
const { user } = useMixinSecurity()
const schema = {
  order_id: null,
  name: null,
  product_id: null,
  cost: null,
  price: null,
  qty: 1,
  notes: null,
  product: {},
  tax: false
}
const loading = ref(false)
const newProduct = reactive<InvoiceProduct>(JSON.parse(JSON.stringify(schema)))
const productCategoryOrder = ['Washing', 'Ironing', 'Other', 'Delivery']
const sortByObject = productCategoryOrder
  .reduce((obj: LooseObject, item, index) => {
    return {
      ...obj,
      [item]: index
    }
  }, {})
const sendOnceTypes = ['NDIS', 'Home Care', 'Aged Care', 'Veteran Affairs', 'Sporting Group']

const hasPickupNoShow = computed(() => {
  if (!props.invoice || !props.invoice.products || !props.invoice.products.length) {
    return false
  }
  if (props.invoice.products.find((o: InvoiceProduct) => o.name === 'Pickup No Show')) {
    return true
  }
  return false
})

const canEdit = computed(() => {
  if (props.order.contractor_user_id !== user.value?.id) {
    return false
  }
  if (localModel.value.status === 'DRAFT') {
    return true
  }
  if (localModel.value.status === 'AUTHORISED') {
    // check if total payments > 0
    const totalPaymentAmount = localModel.value.payments.reduce((current: number, obj: InvoicePayment) => {
      return current + parseFloat(obj.total.toString())
    }, 0)
    if (totalPaymentAmount > 0) {
      return false
    } else {
      return true
    }
  }
  return false
})

const canSend = computed(() => {
  if (localModel.value.total_price <= 0) {
    return false
  }
  // paid check
  if (localModel.value.status === 'PAID') {
    return false
  }
  // customer check
  if (sendOnceTypes.indexOf(props.team.type) !== -1 && localModel.value.sent_for_payment) {
    return false
  }
  // products check
  if (!serviceFeeOther.value) {
    return false
  }
  return true
})

const productListFiltered = computed(() => {
  if (productList.value) {
    const productListTmp = JSON.parse(JSON.stringify(productList.value))
    const currentProductIds = localModel.value.products.map(o => o.product_id)
    for (const g of productListTmp) {
      g.data = g.data.filter((o: Product) => currentProductIds.indexOf(o.id) === -1)
    }
    return productListTmp.filter((o: LooseObject) => o.data.length).sort((a: LooseObject, b: LooseObject) => sortByObject[a.key] - sortByObject[b.key])
  }
  return []
})

const serviceFee = computed(() => {
  if (!localModel.value.products || !localModel.value.products.length) {
    return false
  }
  return localModel.value.products.find(o => o.name === 'Service Fee')
})

const serviceFeeOther = computed(() => {
  if (!localModel.value.products || !localModel.value.products.length) {
    return false
  }
  return !!localModel.value.products.find(o => o.name !== 'Service Fee')
})

const addProduct = () => {
  const delivery = localModel.value.products.findIndex((o: InvoiceProduct) => o.product_id === 26)
  if (delivery !== -1) {
    localModel.value.products.splice(delivery, 0, {
      product: newProduct.product,
      name: newProduct.name,
      product_id: newProduct.product_id,
      cost: newProduct.cost,
      price: newProduct.price,
      qty: newProduct.qty,
      notes: newProduct.notes,
      tax: newProduct.tax
    })
  } else {
    localModel.value.products.push({
      product: newProduct.product,
      name: newProduct.name,
      product_id: newProduct.product_id,
      cost: newProduct.cost,
      price: newProduct.price,
      qty: newProduct.qty,
      notes: newProduct.notes,
      tax: newProduct.tax
    })
  }
}

const removeProduct = (index: number) => {
  confirmDelete('This will remove the product from the order permenantly').onOk(() => {
    const pindex = localModel.value.products.findIndex(o => o.id === index)
    if (pindex) {
      localModel.value.products.splice(pindex, 1)
      save()
    }
  })
}

const selectProduct = (product: Product) => {
  newProduct.product = product
  newProduct.product_id = product.id
  newProduct.name = product.name
  newProduct.cost = product.unit_cost
  newProduct.price = product.unit_price
  newProduct.qty = product.unit_minimum
  newProduct.tax = product.tax
  setTimeout(() => {
    addProduct()
    // check for delivery
    if (!localModel.value.products.find(o => o.product_id === 26) && !props.team.free_delivery) {
      const delivery = rawProductList.value.find((o: Product) => o.id === 26)
      if (delivery) {
        newProduct.product = delivery
        newProduct.product_id = delivery.id
        newProduct.name = delivery.name
        newProduct.cost = delivery.unit_cost
        newProduct.price = delivery.unit_price
        newProduct.qty = delivery.unit_minimum
        newProduct.tax = delivery.tax
        addProduct()
      }
    }
    save()
    Object.assign(newProduct, JSON.parse(JSON.stringify(schema)))
  }, 100)
}

const minusQty = (product: InvoiceProduct) => {
  if (product.qty > 1) {
    product.qty = parseFloat(product.qty.toString()) - 1
  }
  save()
}

const plusQty = (product: InvoiceProduct) => {
  product.qty = parseFloat(product.qty.toString()) + 1
  save()
}

const manualQty = (qty: number | null | string) => {
  if (!qty) {
    return
  }
  save()
}

const saveDetail = () => {
  if (!localModel.value.id) {
    return true
  }
  loading.value = true
  api.put(`/public/invoice/${localModel.value.id}`, localModel.value).then(() => {
    loading.value = false
    emits('update:products')
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

const save = () => {
  if (!localModel.value.id) {
    return true
  }
  loading.value = true
  api.put(`/public/invoice/products/${localModel.value.id}?cp=true`, localModel.value).then(() => {
    loading.value = false
    emits('update:products')
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

const checkGvDc = () => {
  if (gfDcCode.value) {
    loading.value = true
    api.post('/public/invoice/giftvoucherdiscountcoupon', { code: gfDcCode.value, invoice_id: localModel.value.id }).then(response => {
      if (response.data.result.giftVoucher) {
        doNotify('positive', 'Gift voucher payment applied')
        emits('update:order')
      } else if (response.data.result.discountCode) {
        if (!response.data.error) {
          doNotify('positive', 'Discount applied')
          emits('update:order')
        } else {
          doNotify('negative', response.data.error)
        }
      } else {
        doNotify('negative', 'No discount code or gift voucher found for that code')
      }
      gfDcCode.value = null
      loading.value = false
    }).catch(error => {
      loading.value = false
      useMixinDebug(error)
    })
  }
}

const doSendPaymentRequest = (type: string) => {
  if (type === 'sms') {
    // check if delivery date already specified
    if (props.order.scheduled_delivery_date) {
      sendPaymentModalSms.value.scheduled_delivery_date = props.order.scheduled_delivery_date
    }
    if (props.order.scheduled_delivery_time) {
      sendPaymentModalSms.value.scheduled_delivery_time = props.order.scheduled_delivery_time
    }
    sendPaymentModalSms.value.show = true
  } else {
    // check if delivery date already specified
    if (props.order.scheduled_delivery_date) {
      sendPaymentModal.value.scheduled_delivery_date = props.order.scheduled_delivery_date
    }
    if (props.order.scheduled_delivery_time) {
      sendPaymentModal.value.scheduled_delivery_time = props.order.scheduled_delivery_time
    }
    sendPaymentModal.value.content = null
    sendPaymentModal.value.show = true
  }
}

const sendPaymentRequest = () => {
  const message = 'PLEASE NOTE: This will send the invoice for payment'
  confirmDelete(message).onOk(() => {
    sendingPaymentRequest.value = true
    api.post(`/public/invoice/sendpaymentrequest/${localModel.value.id}`, sendPaymentModal.value).then(() => {
      doNotify('positive', 'Invoice sent for payment')
      sendingPaymentRequest.value = false
      emits('update:order')
      sendPaymentModal.value = {
        show: false,
        content: null,
        scheduled_delivery_date: '',
        scheduled_delivery_time: ''
      }
      getNotificationHistory()
    }).catch(error => {
      sendingPaymentRequest.value = false
      useMixinDebug(error, bus)
    })
  })
}

const sendPaymentRequestSms = () => {
  const message = 'PLEASE NOTE: This will send the invoice for payment'
  confirmDelete(message).onOk(() => {
    sendingPaymentRequest.value = true
    api.post(`/public/invoice/sendpaymentrequestsms/${localModel.value.id}`, sendPaymentModalSms.value).then(() => {
      doNotify('positive', 'Invoice sent for payment')
      sendingPaymentRequest.value = false
      sendPaymentModalSms.value = {
        show: false,
        scheduled_delivery_date: '',
        scheduled_delivery_time: ''
      }
      emits('update:order')
    }).catch(error => {
      sendingPaymentRequest.value = false
      useMixinDebug(error, bus)
    })
  })
}

const getNotificationHistory = () => {
  api.post(`/public/notification/index/Invoice/${localModel.value.id}`).then(response => {
    notificationHistory.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
}

onMounted(() => {
  api.get('/public/product/index').then(response => {
    response.data = response.data.filter((o: Product) => o.active && o.name !== 'Pickup No Show')
    rawProductList.value = response.data
    productList.value = groupBy(response.data.filter((o: Product) => props.categories.find(p => p.id === o.product_category_id) || ['Delivery', 'Other'].indexOf(o.productcategory.name) !== -1), 'productcategory.name')
  }).catch(error => {
    useMixinDebug(error)
  })
  getNotificationHistory()
})

</script>
