<template>
  <q-list separator bordered>
    <q-item v-for="(p, index) in model.products" :key="index" :class="{ 'bg-grey-1': index % 2 !== 0 }">
      <q-item-section avatar class="cursor-move">
        <q-avatar :icon="p.product.productcategory.icon" size="48px" />
      </q-item-section>
      <q-item-section>
        {{ p.name }}
        <div class="text-grey">Price per {{ p.product.unit_measurement }}: {{ currencyFormat(p.price) }}</div>
      </q-item-section>
      <q-item-section class="col-xs-12 col-sm-3" v-if="nonEditableProducts.indexOf(p.product_id) === -1">
        <q-input v-model="p.qty" type="number" min="1" borderless :label="`${p.product.unit_measurement.toUpperCase()}S`"
          filled @update:model-value="manualQty" :debounce="500">
          <template v-slot:prepend>
            <q-btn @click="minusQty(p)" color="primary" icon="remove" dense :disable="loading" />
          </template>
          <template v-slot:append>
            <q-btn @click="plusQty(p)" color="primary" icon="add" dense :disable="loading" />
          </template>
        </q-input>
      </q-item-section>
      <q-item-section side v-if="nonEditableProducts.indexOf(p.product_id) === -1">
        <q-btn @click="removeProduct(index)" icon="delete" color="negative" title="Remove Product" flat
          :disable="loading" />
      </q-item-section>
    </q-item>
    <q-item v-if="model.id">
      <q-item-section></q-item-section>
      <q-item-section class="text-right">
        <div>
          <div>Subtotal: {{ currencyFormat(model.total_price) }}</div>
          <div>GST: {{ currencyFormat(model.total_price_gst) }}</div>
          <div class="text-h6">Total: {{ currencyFormat(model.grand_total_price) }}</div>
        </div>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-btn :label="!newProduct.product_id ? `Add a ${$t('product.name')}` : `${newProduct.name}`" outline no-caps
          color="primary" icon="add_circle" :disable="loading">
          <q-menu anchor="center middle" self="center middle" class="soft-shadow">
            <div class="row">
              <div class="col-xs-12" v-for="p in productListFiltered" :key="p.key">
                <div class="text-h6 q-pa-sm bg-grey-2">
                  <q-icon :name="p.data[0].productcategory.icon" size="32px" />
                  {{ p.key }}
                </div>
                <q-list separator>
                  <q-item @click="selectProduct(d)" clickable v-for="d in p.data" :key="d.id" v-close-popup>
                    <q-item-section>
                      {{ d.name }}
                      <div class="text-grey">{{ currencyFormat(d.unit_price) }} per {{ d.unit_measurement }}</div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios'
import { Order, OrderProduct, Product } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, groupBy } from 'src/mixins/help'
import { computed, onMounted, reactive, ref } from 'vue'

interface Props {
  model: Order
}

const props = defineProps<Props>()
const emits = defineEmits(['update:products'])
const localModel = computed(() => props.model)
const productList = ref()
const nonEditableProducts = ref([26, 35, 36])
const rawProductList = ref()
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
const newProduct = reactive<OrderProduct>(JSON.parse(JSON.stringify(schema)))
const productCategoryOrder = ['Washing', 'Ironing', 'Other', 'Delivery']
const sortByObject = productCategoryOrder
  .reduce((obj: LooseObject, item, index) => {
    return {
      ...obj,
      [item]: index
    }
  }, {})

const productListFiltered = computed(() => {
  if (productList.value) {
    const productListTmp = JSON.parse(JSON.stringify(productList.value))
    const currentProductIds = props.model.products.map(o => o.product_id)
    for (const g of productListTmp) {
      g.data = g.data.filter((o: Product) => currentProductIds.indexOf(o.id) === -1)
    }
    return productListTmp.filter((o: LooseObject) => o.data.length).sort((a: LooseObject, b: LooseObject) => sortByObject[a.key] - sortByObject[b.key])
  }
  return []
})

const addProduct = () => {
  const delivery = localModel.value.products.findIndex((o: OrderProduct) => o.product_id === 26)
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
    if (!localModel.value.products.find(o => o.product_id === 26)) {
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

const minusQty = (product: OrderProduct) => {
  if (product.qty > 1) {
    product.qty = parseFloat(product.qty.toString()) - 1
  }
  save()
}

const plusQty = (product: OrderProduct) => {
  product.qty = parseFloat(product.qty.toString()) + 1
  save()
}

const manualQty = () => {
  save()
}

const save = () => {
  if (!props.model.id) {
    return true
  }
  loading.value = true
  api.put(`/order/${props.model.id}?cp=true`, localModel.value).then(() => {
    loading.value = false
    emits('update:products')
  }).catch(error => {
    useMixinDebug(error)
  })
}

onMounted(() => {
  api.get('/product/index').then(response => {
    rawProductList.value = response.data
    productList.value = groupBy(response.data.filter((o: Product) => props.model.productcategories.find(p => p.id === o.product_category_id) || o.productcategory.name === 'Delivery'), 'productcategory.name')
  }).catch(error => {
    useMixinDebug(error)
  })
})

</script>
