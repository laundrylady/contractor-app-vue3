<template>
  <draggable :list="list" class="list-group" ghost-class="ghost" @end="endDrag" item-key="id" :disabled="!drag">
    <template #item="{ element, index }">
      <q-item
        :class="{ 'bg-white': !$q.dark.isActive && (index === 0 || index % 2 === 0), 'bg-grey-1': !$q.dark.isActive && (index !== 0 && index % 2 !== 0) }">
        <q-item-section avatar v-if="!noAvatar && element.contractor">
          <UserAvatar :user="element.contractor" />
        </q-item-section>
        <q-item-section>
          <div class="flex no-wrap">
            <div>
              <div>
                <div v-if="bookingId"> Booking: #{{ element.display_id }}</div>
                <router-link :to="{ name: 'order-edit', params: { id: element.id } }" class="link"><span
                    v-if="element.scheduled_pickup_date">{{
                      displayDateDay(element.scheduled_pickup_date) }}</span> {{ element.scheduled_pickup_date }} (<span
                    v-if="!element.agreed_pickup_time && element.scheduled_pickup_time">{{
                      hourBookingDisplay(element.scheduled_pickup_time)
                    }}</span><span v-if="element.agreed_pickup_time">{{ hourAgreedDisplay(element.agreed_pickup_time)
}}</span>)</router-link>
              </div>
              <div class="text-grey-7">
                <OrderProductCategoryDisplay :o="element" />
              </div>
              <div class="text-grey-7"><q-icon name="place" color="grey-7" /> <span class="q-mr-sm"
                  v-if="element.team.suburbpostcoderegion">{{
                    element.team.suburbpostcoderegion.locality
                  }} {{
  element.team.suburbpostcoderegion.state
}}</span>
              </div>
            </div>
            <q-space />
            <div class="q-ml-xs text-right">
              <div class="q-mb-xs" v-if="status">
                <StatusTag :status="element.status" :small="true" />
              </div>
              <div class="text-right">
                <q-btn flat icon="place" dense round color="grey-8">
                  <q-menu>
                    <q-list>
                      <q-item @click="openMapLink(element.lat, element.lng, 'google')" clickable>
                        <q-item-section>
                          Open in Google Maps
                        </q-item-section>
                      </q-item>
                      <q-item @click="openMapLink(element.lat, element.lng, 'apple')" clickable>
                        <q-item-section>
                          Open in Apple Maps
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
                <q-btn @click="onMyWay(element)" color="primary" round dense icon="directions_car" class="q-ml-xs"
                  title="Notify the customer you are on your way to pickup" v-if="element.status === 'confirmed'" flat />
                <q-btn @click="completeOrder(element)" color="primary" round dense icon="task_alt" class="q-ml-xs"
                  title="Complete the booking" v-if="element.status === 'ready_for_delivery'" flat />
              </div>
            </div>
          </div>
        </q-item-section>
        <q-item-section side v-if="element.grand_total_price > 0">
          <div class="text-h7 q-mt-xs">{{ currencyFormat(element.grand_total_price) }}</div>
        </q-item-section>
      </q-item>
    </template>
  </draggable>
</template>
<script setup lang="ts">
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { Order } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, displayDateDay, hourAgreedDisplay, hourBookingDisplay, openMapLink } from 'src/mixins/help'
import { getLocationPromise } from 'src/services/geolocation'
import { computed, inject } from 'vue'
import draggable from 'vuedraggable'
import StatusTag from '../StatusTag.vue'
import UserAvatar from '../UserAvatar.vue'
import OrderProductCategoryDisplay from './OrderProductCategoryDisplay.vue'

interface Props {
  orders: Order[],
  noAvatar?: boolean,
  dense?: boolean,
  status?: boolean,
  bookingId?: boolean,
  drag?: boolean
}
const props = defineProps<Props>()
const bus = inject('bus') as EventBus

const list = computed(() => props.orders)

const onMyWay = async (o: Order) => {
  // sort out the lat lng
  const currentLoc = await getLocationPromise()
  let latLng: LooseObject = { lat: null, lng: null }
  if (currentLoc.lat && currentLoc.lng) {
    latLng = { lat: currentLoc.lat, lng: currentLoc.lng }
  } else {
    latLng = { lat: o.contractor.lat, lng: o.contractor.lng }
  }
  confirmDelete('This will send an SMS to the customer notifying them you are on your way to pickup').onOk(() => {
    api.post(`/public/order/onmyway/${o.id}`, { origin: latLng }).then(() => {
      bus.emit('orderLoadMore')
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

const completeOrder = async (o: Order) => {
  confirmDelete('This will mark the booking as completed').onOk(() => {
    api.post(`/public/order/complete/${o.id}`).then(() => {
      bus.emit('orderLoadMore')
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

const endDrag = () => {
  api.put('/public/order/updatesortorder', { orders: list.value }).then().catch(error => { useMixinDebug(error, bus) })
}
</script>
