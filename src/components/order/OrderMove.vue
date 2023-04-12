<template>
  <q-dialog v-model="show">
    <q-card v-if="model" class="modal">
      <q-toolbar>
        <q-toolbar-title>{{ $t('order.name') }} #{{ model.display_id }}</q-toolbar-title>
        <q-space />
        <q-btn round dense v-close-popup flat icon="close" />
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <div class="text-h7 q-mb-md">Please confirm the following details are correct:</div>
        <div class="text-h6"><q-icon name="group" /> {{ model.team.name }}</div>
        <div>{{ model.team.suburbpostcoderegion.locality }} {{ model.team.suburbpostcoderegion.state }}</div>
        <q-separator class="q-mt-sm q-mb-sm" />
        <div class="row q-col-gutter-md" v-if="model.team_id">
          <div class="col-xs-12 col-sm-8">
            <div class="row q-col-gutter-md q-mb-md">
              <DateField v-model="model.scheduled_pickup_date" :label="$t('order.scheduledPickupDate')"
                class="col-xs-12 col-sm-6" />
              <q-select v-model="model.scheduled_pickup_time" :label="$t('order.scheduledPickupTime')"
                :options="hourBookingOptions" emit-value map-options class="col-xs-12 col-sm-6" />
            </div>
            <div class="q-mt-md">Products</div>
            <div v-for="c in model.productcategories" :key="c.id">
              <q-checkbox v-model="c.meta.pivot_active" :label="c.name" v-if="c.meta" />
            </div>
            <div v-if="model.scheduled_pickup_time" class="q-mt-lg q-mb-md">
              <div class="q-mb-md" style="min-height:100px;">
                <OrderContractorManagement v-model="model.contractor_user_id" :team_id="model.team_id"
                  :scheduled_pickup_date="model.scheduled_pickup_date"
                  :scheduled_pickup_time="model.scheduled_pickup_time" :reassign="true"
                  :productcategories="model.productcategories" />
              </div>
              <div v-if="contractorViability && contractorViability.roster" class="q-mt-sm">
                <q-icon name="warning" /> {{ contractorViability.roster }}
              </div>
              <div v-if="contractorViability && contractorViability.schedule" class="text-negative q-mt-sm">
                <q-icon name="warning" /> {{ contractorViability.schedule }}
              </div>
              <div v-if="contractorViability && contractorViability.capacity" class="text-negative q-mt-sm">
                <q-icon name="warning" /> {{ contractorViability.capacity }}
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="text-bold text-grey q-mb-xs">Agreed Pickup Time</div>
            <p>The time below has been agreed upon by the customer and contractor.</p>
            <q-time v-model="model.agreed_pickup_time" @update:model-value="checkContractorViability()"
              color="secondary" />
            <q-btn class="q-mt-sm" @click="clearPickupTime()" label="Clear pickup time" v-if="model.agreed_pickup_time"
              flat size="sm" color="secondary" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup label="Cancel" flat color="secondary" />
        <q-btn @click="save()" color="primary" label="Confirm changes" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { EventBus, useQuasar } from 'quasar'
import { hourBookingOptions } from 'src/mixins/help'
import { inject, onMounted, onUnmounted, ref } from 'vue'
import DateField from '../form/DateField.vue'
import { Order } from '../models'
import OrderContractorManagement from './OrderContractorManagement.vue'
import moment from 'moment-timezone'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'

const $q = useQuasar()
const model = ref<Order | null>()
const bus = inject('bus') as EventBus
const show = ref(false)
const contractorViability = ref()

const save = () => {
  if (model.value) {
    $q.loading.show({ message: 'Updating booking...' })
    api.put(`/order/${model.value.id}`, model.value).then(() => {
      bus.emit('orderMoved')
      model.value = null
      show.value = false
    }).catch(error => {
      useMixinDebug(error)
    })
  }
}

const clearPickupTime = () => {
  if (model.value) {
    model.value.agreed_pickup_time = null
  }
}

const checkContractorViability = () => {
  if (model.value) {
    api.post('/order/contractorviability', { order_id: model.value.id, contractor_user_id: model.value.contractor_user_id, day: model.value.scheduled_pickup_date, time: model.value.agreed_pickup_time || model.value.scheduled_pickup_time }).then(response => {
      contractorViability.value = response.data
    }).catch(error => {
      useMixinDebug(error)
    })
  }
}

onMounted(() => {
  bus.on('orderMove', (data: Order) => {
    model.value = data
    model.value.scheduled_pickup_date = moment(data.scheduled_pickup_date).format('DD/MM/YYYY')
    contractorViability.value = null
    checkContractorViability()
    show.value = true
  })
})

onUnmounted(() => {
  bus.off('orderMove')
})

</script>
