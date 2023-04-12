<template>
  <q-dialog v-model="show">
    <q-card class="modal">
      <q-toolbar>
        <q-toolbar-title>Add a new {{ $t('schedule.name') }} entry</q-toolbar-title>
        <q-space />
        <q-btn v-close-popup icon="close" flat round dense />
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <div class="row q-col-gutter-md q-mb-lg">
          <q-select v-model="newSchedule.user_postcoderegion_group_id" label="Select the pickup area"
            :options="userpostcoderegiongroups" map-options emit-value :error="$v.user_postcoderegion_group_id.$invalid"
            filled class="col-xs-12 col-sm-6" />
          <div class="col-xs-12 col-sm-6">
            <DateField v-model="newSchedule.day" label="Date" :invalid="$v.day.$invalid" :outlined="true" />
          </div>
        </div>
        <div class="row q-col-gutter-md ">
          <div class="col-xs-12 col-sm-6">
            <div class="q-mb-sm">Start and end times</div>
            <div class="row q-col-gutter-md">
              <q-select v-model="newSchedule.start_time" outlined dense :options="hourOptions" map-options emit-value
                label="Start Time" options-cover class="col-xs-12 col-sm-6" />
              <q-select v-model="newSchedule.end_time" outlined dense :options="endHourOptions(newSchedule.start_time)"
                map-options emit-value label="End Time" options-cover class="col-xs-12 col-sm-6" />
            </div>

          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="q-mb-sm">Capacity for this timeslot:</div>
            <div v-if="newSchedule.capacity.products" class="row q-col-gutter-md">
              <div v-for="(c, cindex) in newSchedule.capacity.products" :key="cindex" class="col-xs-12 col-sm-6">
                <q-input v-model="c.qty" outlined dense :label="categoryDisplay(c.product_category_id, categories)"
                  options-cover @blur="checkQty(c)" class="q-mb-md" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="errors">
          <ul>
            <li v-for="(e, index) in errors.errors" :key="index" class="text-negative">
              {{ e.message }}</li>
          </ul>
        </div>
        <div class="q-mt-lg flex">
          <q-btn @click="addSchedule()" :disable="$v.$invalid || loading" icon="add_circle" label="Add" color="primary"
            class="full-width" :loading="loading" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import moment from 'moment-timezone'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { categoryDisplay, hourOptions } from 'src/mixins/help'
import { productCategoriesVisibleCapacity } from 'src/services/helpers'
import { inject, onMounted, reactive, ref } from 'vue'
import DateField from '../form/DateField.vue'
import { UserPostcodeRegionGroup } from '../models'

const user = ref()
const bus = inject('bus') as EventBus
const show = ref(false)
const categories = ref()
const userpostcoderegiongroups = ref()
const errors = ref()
const loading = ref(false)
const schema = {
  user_id: null,
  day: null,
  start_time: null,
  end_time: null,
  active: true,
  user_postcoderegion_group_id: null,
  capacity: { products: [] }
}
const newSchedule = reactive(JSON.parse(JSON.stringify(schema)))
const rules = {
  user_id: { required },
  day: { required },
  start_time: { required },
  end_time: { required },
  user_postcoderegion_group_id: { required }
}
const $v = useVuelidate(rules, newSchedule, { $scope: false })

const addSchedule = () => {
  errors.value = false
  loading.value = true
  api.post('/userrosterschedule', newSchedule).then(() => {
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
}

onMounted(async () => {
  bus.on('newUserRosterSchedule', async (data: LooseObject) => {
    user.value = data.user
    errors.value = null
    categories.value = await productCategoriesVisibleCapacity()
    // postcode region groups
    api.get(`/userpostcoderegiongroup/index/${user.value.id}`).then(response => {
      userpostcoderegiongroups.value = response.data.map((o: UserPostcodeRegionGroup) => {
        return { value: o.id, label: o.name }
      })
    }).catch(error => {
      useMixinDebug(error)
    })
    Object.assign(newSchedule, JSON.parse(JSON.stringify(schema)))
    for (const c of categories.value) {
      newSchedule.capacity.products.push({ product_category_id: c.value, qty: 0 })
    }
    newSchedule.day = moment(data.day).format('DD/MM/YYYY')
    newSchedule.user_id = user.value.id
    show.value = true
  })
})
</script>
