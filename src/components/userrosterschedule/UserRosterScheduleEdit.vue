<template>
  <q-dialog v-model="show">
    <q-card class="modal" v-if="model.day && model.user">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>{{ dbDateDisplay(model.day, 'dddd DD/MM/YYYY') }}</q-toolbar-title>
        <div class="flex-shrink">
          <q-btn v-close-popup icon="close" flat round dense />
        </div>
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-xs-12">
            <div class="q-mb-sm">Picking up from <q-badge :label="model.postcoderegiongroup.name || ''" color="grey"
                v-if="model.postcoderegiongroup" />
              between:</div>
            <div class="row q-col-gutter-md">
              <q-select v-model="model.start_time" outlined dense :options="hourOptions" map-options emit-value
                label="Start" options-cover class="col-xs-6" :error="$v.start_time.$invalid"
                @update:model-value="model.end_time = null" />
              <q-select v-model="model.end_time" outlined dense :options="endHourOptions(model.start_time)" map-options
                emit-value label="End" options-cover class="col-xs-6" :error="$v.end_time.$invalid" />
            </div>
          </div>
          <div class="col-xs-12">
            <div class="q-mb-sm">Capacity for this timeslot:</div>
            <div v-if="model.capacity.products" class="row q-col-gutter-md">
              <div v-for="(c, cindex) in model.capacity.products" :key="cindex" class="col-xs-6">
                <q-input v-model="c.qty" outlined dense :label="categoryDisplay(c.product_category_id, categories)"
                  options-cover @blur="checkQty(c)" class="q-mb-md" />
              </div>
            </div>
          </div>
        </div>
        <div><q-toggle v-model="model.active" label="I am available" /></div>
        <div v-if="errors">
          <ul>
            <li v-for="(e, index) in errors.errors" :key="index" class="text-negative">
              {{ e.message }}</li>
          </ul>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup label="Cancel" flat color="secondary" rounded />
        <q-btn :disable="loading || $v.$invalid" label="Update" color="primary" @click="save()" rounded
          :loading="loading" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { UserRosterSchedule } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { categoryDisplay, dbDateDisplay, doNotify, hourOptions } from 'src/mixins/help'
import { productCategoriesVisibleCapacity } from 'src/services/helpers'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const show = ref(false)
const model = reactive<UserRosterSchedule>({
  id: null,
  day: null,
  start_time: null,
  end_time: null,
  active: true,
  user_id: null,
  user: null,
  user_postcoderegion_group_id: null,
  capacity: { products: [] }
})
const loading = ref(false)
const categories = ref()
const bus = inject('bus') as EventBus
const errors = ref()
const rules = {
  user_postcoderegion_group_id: { required },
  day: { required },
  start_time: { required },
  end_time: { required }
}

const $v = useVuelidate(rules, model)

const save = () => {
  errors.value = false
  loading.value = true
  api.put(`/public/userrosterschedule/${model.id}`, model).then(() => {
    doNotify('positive', 'Schedule updated')
    bus.emit('getSchedule')
    show.value = false
    loading.value = false
  }).catch(error => {
    loading.value = false
    errors.value = error.response.data
    useMixinDebug(error)
  })
}

const endHourOptions = (hour: number | null) => {
  if (!hour) {
    return hourOptions
  }
  return hourOptions.filter(o => o.value > hour && o.value <= hour + 3)
}

const checkQty = (val: LooseObject) => {
  if (!val.qty) {
    val.qty = 0
  }
  if (parseFloat(val.qty) > 10) {
    val.qty = 10
  }
}

onMounted(() => {
  bus.on('editUserRosterSchedule', async (id: number) => {
    categories.value = await productCategoriesVisibleCapacity()
    api.get(`/public/userrosterschedule/${id}`).then(response => {
      Object.assign(model, response.data)
      show.value = true
    }).catch(error => {
      useMixinDebug(error)
    })
  })
})

onBeforeUnmount(() => {
  bus.off('editUserRosterSchedule')
})
</script>
