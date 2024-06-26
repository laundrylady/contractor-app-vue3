<template>
  <q-dialog v-model="show">
    <q-card class="modal" v-if="user">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>{{ $t('order.create') }}</q-toolbar-title>
        <q-btn v-close-popup icon="close" flat round dense />
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <div class="row q-col-gutter-md q-mb-md">
          <TeamField v-model="model.team_id" :label="$t('team.name')" status="active" class="col-xs-12"
            :error="$v.team_id.$invalid" :clearable="true" @update:model-value="handleTeamChange()" :outlined="true" />
        </div>
        <div v-if="addressError"><q-icon name="warning" /> The selected customer has an incomplete or invalid address.
          <router-link :to="{ name: 'team-dashboard', params: { id: model.team_id } }" class="link">Click here to update
            the
            customer record.</router-link>
        </div>
        <div v-if="!addressError">
          <div class="row q-col-gutter-md" v-if="model.team_id">
            <div class="col-xs-12 col-sm-6">
              <DateField v-model="model.scheduled_pickup_date" :label="$t('order.scheduledPickupDate')"
                :invalid="$v.scheduled_pickup_date.$invalid" :outlined="true" @update:model-value="capacityStats" />
              <div v-if="capacityStatsResult && model.scheduled_pickup_date" class="q-mt-sm bg-yellow-1 q-pa-sm">
                <div class="q-mb-xs"><strong>Capacity</strong></div>
                <div v-for="c in capacityStatsResult" :key="c.name">
                  ({{ c.oc }}/{{ c.cc }}) {{ c.name }}: {{ c.per }}%
                </div>
              </div>
            </div>
            <q-select v-model="model.scheduled_pickup_time" :label="$t('order.scheduledPickupTime')"
              :invalid="$v.scheduled_pickup_time" :options="hourBookingOptions" emit-value map-options
              class="col-xs-12 col-sm-6" outlined />
          </div>
          <div v-if="model.team_id && model.scheduled_pickup_date && model.scheduled_pickup_time" class="q-mt-md">
            <div class="text-h6">Products</div>
            <span class="q-mr-sm">
              <q-checkbox v-model="washingAndIroning" @update:model-value="toggleWashingAndIroning()"
                label="Washing & Ironing" /></span>
            <span v-if="!washingAndIroning">
              <span v-for="c in model.productcategories" :key="c.product_category_id" class="q-mr-sm">
                <q-checkbox v-model="c.active" :label="categoryDisplay(c.product_category_id, categories)" />
              </span>
            </span>
          </div>
        </div>
        <div
          v-if="!addressError && model.team_id && model.scheduled_pickup_date && model.scheduled_pickup_time && model.productcategories && model.productcategories.filter(o => o.active).length">
          <OrderContractorManagement :team_id="model.team_id" :scheduled_pickup_date="model.scheduled_pickup_date"
            :scheduled_pickup_time="model.scheduled_pickup_time" v-model="model.contractor_user_id" :reassign="true"
            :productcategories="model.productcategories.filter(o => o.active)" v-if="user.role === 'customer'" />
          <div class="q-mt-md">
            <q-toggle v-model="model.recurring_order" :label="$t('order.recurring')" />
            <div v-if="model.recurring_order" class="q-pa-md q-mt-sm" :class="{ 'bg-grey-1': !$q.dark.isActive }">
              <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-6">
                  <q-select v-model="model.recurring" :label="$t('order.recurringFrequency')"
                    :options="['Week', 'Month', 'Day']" bottom-slots :error="$v.recurring.$invalid" outlined
                    @update:model-value="model.recurring_end = ''" />
                </div>
                <div class="col-xs-12 col-sm-6" v-if="model.recurring">
                  <q-select v-model="model.recurring_every" label="Repeat every"
                    :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]"
                    :error="$v.recurring_every.$invalid" outlined>
                    <template v-slot:append>
                      <q-badge :label="`${model.recurring}s`" color="grey" />
                    </template>
                  </q-select>
                </div>
              </div>
              <div v-if="model.recurring === 'Week'" class="q-mb-lg">
                <p>If the booking needs to occur multiple times a week, choose the days below:</p>
                <q-btn v-for="d in model.recurring_days.days" :key="d.day" color="primary" @click="d.active = !d.active"
                  :label="d.label" :flat="!d.active" class="q-mr-xs" size="sm" />
              </div>
              <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-6" v-if="model.recurring">
                  <q-select v-model="model.recurring_end_type" label="Ends" :options="['After', 'On', 'Never']"
                    :error="$v.recurring_end_type.$invalid" @update:model-value="model.recurring_end = ''" outlined />
                </div>
                <div class="col-xs-12 col-sm-6" v-if="model.recurring">
                  <q-select v-model="model.recurring_end" v-if="model.recurring_end_type === 'After'"
                    label="Choose the amount" :error="$v.recurring_end.$invalid" :options="recurringOccurenceOptions"
                    outlined>
                    <template v-slot:append><q-badge label="occurences" color="grey" /></template>
                  </q-select>
                  <DateField v-model="model.recurring_end" label="Choose an end date" :outlined="true"
                    :invalid="$v.recurring_end.$invalid" v-if="model.recurring_end_type === 'On'" />
                </div>
              </div>
            </div>
          </div>
          <q-input v-model="model.special_instructions" label="Special Instructions" autogrow outlined
            class="q-mt-md" />
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup label="Cancel" flat color="secondary" rounded />
        <q-btn :disable="loading || $v.$invalid || !model.productcategories.filter(o => o.active).length" label="Save"
          color="primary" @click="save()" rounded :loading="loading" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, requiredIf } from '@vuelidate/validators'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { arrayRange, categoryDisplay, doNotify, hourBookingOptions } from 'src/mixins/help'
import { useMixinSecurity } from 'src/mixins/security'
import { productCategoriesVisibleBooking } from 'src/services/helpers'
import { computed, inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import DateField from '../form/DateField.vue'
import TeamField from '../form/TeamField.vue'
import { Order } from '../models'
import OrderContractorManagement from './OrderContractorManagement.vue'

const show = ref(false)
const washingAndIroning = ref(false)
const { user } = useMixinSecurity()
const categories = ref()
const addressError = ref(false)
const capacityStatsResult = ref()
const capacityStatsDate = ref()
const schema = {
  team_id: null,
  contractor_user_id: null,
  scheduled_pickup_date: null,
  scheduled_pickup_time: null,
  special_instructions: null,
  status: 'confirmed',
  recurring_order: false,
  recurring: null,
  recurring_every: null,
  recurring_end: null,
  recurring_days: {
    days: [
      { day: 0, active: false, label: 'Sun' },
      { day: 1, active: false, label: 'Mon' },
      { day: 2, active: false, label: 'Tue' },
      { day: 3, active: false, label: 'Wed' },
      { day: 4, active: false, label: 'Thu' },
      { day: 5, active: false, label: 'Fri' },
      { day: 6, active: false, label: 'Sat' }
    ]
  },
  products: [],
  productcategories: []
}
const model = reactive<Order>(JSON.parse(JSON.stringify(schema)))
const loading = ref(false)
const bus = inject('bus') as EventBus
const i8n = useI18n()
const rules = {
  team_id: { required },
  scheduled_pickup_date: { required },
  scheduled_pickup_time: { required },
  status: { required },
  recurring: { requiredIf: requiredIf(() => model.recurring_order) },
  recurring_every: { requiredIf: requiredIf(() => model.recurring_order) },
  recurring_end_type: { requiredIf: requiredIf(() => model.recurring_order) },
  recurring_end: { requiredIf: requiredIf(() => model.recurring_order && model.recurring_end_type !== 'Never') }
}

const $v = useVuelidate(rules, model)

const toggleWashingAndIroning = () => {
  model.productcategories.forEach(o => {
    o.active = washingAndIroning.value
  })
}

const recurringOccurenceOptions = computed(() => {
  if (model.recurring === 'Day') {
    return arrayRange(1, 50, 1, true)
  }
  if (model.recurring === 'Week') {
    return arrayRange(1, 12, 1, true)
  }
  if (model.recurring === 'Month') {
    return arrayRange(1, 3, 1, true)
  }
  return arrayRange(1, 50, 1, true)
})

const save = () => {
  loading.value = true
  api.post('/public/order', model).then(() => {
    doNotify('positive', `${i8n.t('order.name')} created`)
    bus.emit('orderLoadMore')
    show.value = false
    loading.value = false
  }).catch(error => {
    useMixinDebug(error)
    loading.value = false
  })
}

const handleTeamChange = () => {
  if (model.team_id) {
    api.get(`/public/team/${model.team_id}`).then(response => {
      if (!response.data.address2 || !response.data.suburb_postcode_region_id) {
        addressError.value = true
      } else {
        addressError.value = false
      }
    }).catch(error => {
      useMixinDebug(error)
    })
  }
}

const capacityStats = (newDate: string) => {
  if (capacityStatsDate.value && capacityStatsDate.value === newDate) {
    return
  }
  capacityStatsResult.value = {}
  if (model.scheduled_pickup_date) {
    api.put('/public/order/capacitystats', { scheduled_pickup_date: model.scheduled_pickup_date }).then(response => {
      capacityStatsResult.value = response.data
      capacityStatsDate.value = newDate
    }).catch(error => {
      useMixinDebug(error)
    })
  }
}

onMounted(async () => {
  bus.on('newOrder', async (data: LooseObject) => {
    Object.assign(model, JSON.parse(JSON.stringify(schema)))
    categories.value = await productCategoriesVisibleBooking()
    for (const c of categories.value) {
      model.productcategories.push({ product_category_id: c.value, active: false })
    }
    if (data.team_id) {
      model.team_id = data.team_id
      handleTeamChange()
    }
    show.value = true
    washingAndIroning.value = false
  })
})

onBeforeUnmount(() => {
  bus.off('newOrder')
})
</script>
