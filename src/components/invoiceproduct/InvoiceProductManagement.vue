<template>
  <div class="q-pl-sm q-pr-sm">
    <div class="row q-pt-md q-pb-md q-col-gutter-xs" v-for="(p, index) in localModel.products" :key="index"
      :class="{ 'bg-grey-1': index % 2 !== 0 }">
      <div class="col-xs-7 col-sm-9">
        <div>{{ p.name }}
          <div>
            <span class="text-grey q-mr-sm">{{ currencyFormat(p.price) }}</span>
            <a @click="removeProduct(index)" class="link text-caption"
              v-if="nonEditableProducts.indexOf(p.product_id) === -1 && nonEditableProductCategories.indexOf(p.product.product_category_id) === -1 && canEdit">Remove</a>
          </div>
        </div>
      </div>
      <div class="col-xs-5 col-sm-3"
        v-if="nonEditableProducts.indexOf(p.product_id) === -1 && nonEditableProductCategories.indexOf(p.product.product_category_id) === -1">
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
    <div v-if="localModel.id">
      <q-separator class="q-mb-sm" />
      <div class="text-right">
        <div>Subtotal: {{ currencyFormat(localModel.grand_total_price) }}</div>
        <div>Total GST: {{ currencyFormat(localModel.total_price_gst) }}</div>
        <div class="text-h6">Total: {{ currencyFormat(localModel.grand_total_price) }}</div>
      </div>
    </div>
    <div v-if="canEdit" class="q-mt-md">
      <div class="row q-col-gutter-md items-center">
        <div class="col-xs-12 col-sm-6">
          <q-btn :label="!newProduct.product_id ? `Add a ${$t('product.name')}` : `${newProduct.name}`" outline no-caps
            color="primary" icon="add_circle" :disable="loading" class="full-width" rounded>
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
        <div class="col-xs-12 col-sm-6" v-if="localModel.total_price > 0"> <q-input v-model="gfDcCode"
            label="Gift voucher / Discount code" outlined dense>
            <template v-slot:append>
              <q-btn @click="checkGvDc()" label="Apply" color="primary" :disable="!gfDcCode" size="sm" rounded />
            </template>
          </q-input>
        </div>
      </div>
      <div class="flex items-center q-mt-sm">
        <xero-invoice :invoice-id="localModel.xero_id" v-if="localModel.xero_id" type="Invoice"
          :type_id="localModel.id" />
        <q-space />
        <div>
          <status-tag :status="localModel.status" class="q-mr-sm" />
          <q-btn @click="emailInvoice()" icon="mail" title="Email a copy of the Invoice" flat :disable="emailingInvoice"
            round />
          <q-btn @click="sendPaymentRequest()" icon="send" title="Send Payment Request" flat
            v-if="localModel.total_price > 0 && localModel.status !== 'PAID'" :disable="sendingPaymentRequest" round />
          <q-btn @click="openURL(`/api/public/invoice/pdf/${localModel.id}`)" icon="print" title="Print Invoice" flat
            round />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { openURL } from 'quasar'
import { api } from 'src/boot/axios'
import { Invoice, InvoicePayment, InvoiceProduct, OrderProductCategory, Product, Team } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, doNotify, groupBy } from 'src/mixins/help'
import { computed, onMounted, reactive, ref } from 'vue'
import StatusTag from '../StatusTag.vue'
import XeroInvoice from '../xero/XeroInvoice.vue'

interface Props {
  invoice: Invoice,
  team: Team,
  categories: OrderProductCategory[]
}

const props = defineProps<Props>()
const emits = defineEmits(['update:products', 'update:order'])
const localModel = computed(() => props.invoice)
const productList = ref()
const nonEditableProducts = ref([26, 35, 36])
const nonEditableProductCategories = ref([6])
const rawProductList = ref()
const gfDcCode = ref()
const sendingPaymentRequest = ref(false)
const emailingInvoice = ref(false)
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

const canEdit = computed(() => {
  if (localModel.value.xero_override) {
    return true
  }
  if (localModel.value.status === 'DRAFT') {
    return true
  }
  if (localModel.value.status === 'AUTHORISED') {
    // check if total payments > 0
    const totalPaymentAmount = localModel.value.payments.reduce((current: number, obj: InvoicePayment) => {
      return current + parseFloat(obj.total.toString())
    }, 0)
    if (totalPaymentAmount > 0 || props.team.type === 'NDIS') {
      return false
    } else {
      return true
    }
  }
  return false
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
    localModel.value.products.splice(index, 1)
    save()
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

const manualQty = () => {
  save()
}

const save = () => {
  if (!localModel.value.id) {
    return true
  }
  loading.value = true
  api.put(`/public/invoice/${localModel.value.id}?cp=true`, localModel.value).then(() => {
    loading.value = false
    emits('update:products')
  }).catch(error => {
    useMixinDebug(error)
  })
}

const checkGvDc = () => {
  if (gfDcCode.value) {
    loading.value = true
    api.post('/public/invoice/giftvoucherdiscountcoupon', { code: gfDcCode.value, invoice_id: localModel.value.id }).then(response => {
      if (response.data.giftVoucher) {
        doNotify('positive', 'Gift voucher payment applied')
        emits('update:order')
      } else if (response.data.discountCode) {
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

const sendPaymentRequest = () => {
  confirmDelete('This will send the invoice for payment').onOk(() => {
    sendingPaymentRequest.value = true
    api.post(`/public/invoice/sendpaymentrequest/${localModel.value.id}`).then(() => {
      doNotify('positive', 'Invoice sent for payment')
      sendingPaymentRequest.value = false
      emits('update:order')
    }).catch(error => {
      sendingPaymentRequest.value = false
      useMixinDebug(error)
    })
  })
}

const emailInvoice = () => {
  confirmDelete('This will email the invoice').onOk(() => {
    emailingInvoice.value = true
    api.post(`/public/invoice/emailinvoice/${localModel.value.id}`).then(() => {
      doNotify('positive', 'Invoice sent')
      emailingInvoice.value = false
    }).catch(error => {
      emailingInvoice.value = false
      useMixinDebug(error)
    })
  })
}

onMounted(() => {
  api.get('/public/product/index').then(response => {
    rawProductList.value = response.data
    productList.value = groupBy(response.data.filter((o: Product) => props.categories.find(p => p.id === o.product_category_id) || o.productcategory.name === 'Delivery'), 'productcategory.name')
  }).catch(error => {
    useMixinDebug(error)
  })
})

</script>
