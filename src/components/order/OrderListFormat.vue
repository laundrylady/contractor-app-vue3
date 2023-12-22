<template>
  <div class="flex items-center q-mb-xs">
    <div v-if="label" class="text-h6">{{ label }}</div>
    <q-space />
    <q-btn @click="reorder = !reorder" icon="drag_indicator" title="Re-order" flat round v-if="orders.length && drag"
      :color="reorder ? 'primary' : ''" dense />
    <div v-if="orders.length && optimal"><q-btn @click="optimalRoute()" flat no-caps icon="directions"
        title="Optimal Route" round dense />
    </div>
  </div>
  <q-list separator :dense="dense" v-if="!reorder">
    <q-item v-for="o in list" :key="o.id" :style="dense ? 'padding:0' : ''" :class="orderColor(o)">
      <q-item-section avatar v-if="!noAvatar && o.contractor">
        <UserAvatar :user="o.contractor" />
      </q-item-section>
      <q-item-section>
        <div class="flex no-wrap">
          <div>
            <div v-if="bookingId"> Booking: #{{ o.display_id }} <span class="q-ml-sm" v-if="status">
                <StatusTag :status="o.status" :small="true" />
              </span>
            </div>
            <div>
              <router-link :to="{ name: 'order-edit', params: { id: o.id } }" class="link"
                v-if="o.status !== 'ready_for_delivery' && !forceDeliveryDate"><span v-if="o.scheduled_pickup_date">{{
                  displayDateOrder(o.scheduled_pickup_date) }}</span> (<span
                  v-if="!o.agreed_pickup_time && o.scheduled_pickup_time">{{
                    hourBookingDisplay(o.scheduled_pickup_time)
                  }}</span><span v-if="o.agreed_pickup_time">{{ hourAgreedDisplay(o.agreed_pickup_time)
}}</span>) <q-icon name="sync" v-if="o.recurring_order" /></router-link>
              <router-link :to="{ name: 'order-edit', params: { id: o.id } }" class="link"
                v-if="(o.status === 'ready_for_delivery' || forceDeliveryDate) && o.scheduled_delivery_date"><span
                  v-if="o.scheduled_delivery_date">{{
                    displayDateOrder(o.scheduled_delivery_date) }}</span> (<span
                  v-if="!o.agreed_delivery_time && o.scheduled_delivery_time">{{
                    hourBookingDisplay(o.scheduled_delivery_time)
                  }}</span><span v-if="o.agreed_delivery_time">{{ hourAgreedDisplay(o.agreed_delivery_time)
}}</span>) <q-icon name="sync" v-if="o.recurring_order" /></router-link>
              <div>
                <div>{{ o.status === 'ready_for_delivery' ? 'Delivery' : 'Pickup' }} with {{ o.team.name }} <span
                    v-if="o.team.name !== `${o.team.first_name} ${o.team.last_name}`">({{ o.team.first_name }} {{
                      o.team.last_name }})</span></div>
                <div class="flex items-center">
                  <OrderProductCategoryDisplay :o="o" />
                  <q-badge :label="`DUE: ${displayDateDue(o.invoice.due_date)}`" v-if="o.invoice && o.invoice.due_date" />
                  <div v-if="o.team.suburbpostcoderegion">
                    <q-btn flat dense color="grey-9" v-if="o.suburbpostcoderegion && o.country">
                      <q-icon name="place" size="18px" class="q-mr-xs" /> {{ o.team.suburbpostcoderegion.locality }}
                      <q-menu>
                        <q-list>
                          <q-item
                            @click="openMapLink(o.address2, o.suburbpostcoderegion.locality, o.suburbpostcoderegion.state, o.suburbpostcoderegion.postcode, o.country.name, 'google')"
                            clickable>
                            <q-item-section>
                              Google Maps
                            </q-item-section>
                          </q-item>
                          <q-item
                            @click="openMapLink(o.address2, o.suburbpostcoderegion.locality, o.suburbpostcoderegion.state, o.suburbpostcoderegion.postcode, o.country.name, 'apple')"
                            clickable>
                            <q-item-section>
                              Apple Maps
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <q-space />
          <div class="q-ml-xs text-right" style="width:40px;">
            <div class="text-right">
              <q-btn @click="onMyWay(o)" color="grey-9" round dense icon="o_directions_car" class="q-ml-xs"
                title="Notify the customer you are on your way"
                v-if="['confirmed', 'ready_for_delivery'].indexOf(o.status) !== -1" flat />
              <q-btn @click="completeOrder(o)" round dense icon="task_alt" class="q-ml-xs" title="Complete the booking"
                v-if="o.status === 'ready_for_delivery'" flat />
              <q-btn @click="markReadyForDelivery(o)" round dense icon="keyboard_double_arrow_down" class="q-ml-xs"
                title="Move to Deliveries" v-if="o.status === 'awaiting_payment'" flat />
            </div>
          </div>
        </div>
      </q-item-section>
      <q-item-section side v-if="o.grand_total_price > 0">
        <div class="text-h7 q-mt-xs">{{ currencyFormat(o.grand_total_price) }}</div>
      </q-item-section>
    </q-item>
  </q-list>
  <div v-if="reorder" style="border:#cf1677 1px dashed;">
    <draggable :list="list" class="list-group" ghost-class="ghost" @end="endDrag" item-key="id" :disabled="!drag">
      <template #item="{ element }">
        <q-item :class="orderColor(element)" class="cursor-move">
          <q-item-section avatar v-if="!noAvatar && element.contractor">
            <UserAvatar :user="element.contractor" />
          </q-item-section>
          <q-item-section>
            <div class="flex no-wrap">
              <div>
                <div>
                  <div v-if="bookingId"> Booking: #{{ element.display_id }}</div>
                  <router-link :to="{ name: 'order-edit', params: { id: element.id } }" class="link"
                    v-if="element.status !== 'ready_for_delivery'"><span v-if="element.scheduled_pickup_date">{{
                      displayDateOrder(element.scheduled_pickup_date) }}</span> (<span
                      v-if="!element.agreed_pickup_time && element.scheduled_pickup_time">{{
                        hourBookingDisplay(element.scheduled_pickup_time)
                      }}</span><span v-if="element.agreed_pickup_time">{{ hourAgreedDisplay(element.agreed_pickup_time)
}}</span>)</router-link>
                  <router-link :to="{ name: 'order-edit', params: { id: element.id } }" class="link"
                    v-if="element.status === 'ready_for_delivery' && element.scheduled_delivery_date && (element.agreed_pickup_time || element.scheduled_pickup_time)"><span
                      v-if="element.scheduled_delivery_date">{{
                        displayDateOrder(element.scheduled_delivery_date) }}</span>
                    (<span v-if="!element.agreed_delivery_time && element.scheduled_delivery_time">{{
                      hourBookingDisplay(element.scheduled_delivery_time)
                    }}</span><span v-if="element.agreed_delivery_time">{{
  hourAgreedDisplay(element.agreed_delivery_time)
}}</span>)</router-link>
                </div>
                <div>
                  <div>{{ element.status === 'ready_for_delivery' ? 'Delivery' : 'Pickup' }} with {{ element.team.name }}
                  </div>
                  <div class="flex">
                    <q-badge label="DUE: 20/12" />
                    <OrderProductCategoryDisplay :o="element" />
                    <span v-if="element.team.suburbpostcoderegion">{{
                      element.team.suburbpostcoderegion.locality
                    }} </span>
                  </div>
                </div>
              </div>
              <q-space />
              <div class="q-ml-xs text-right">
                <div class="q-mb-xs" v-if="status">
                  <StatusTag :status="element.status" :small="true" />
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
  </div>
</template>
<script setup lang="ts">
import { EventBus, openURL, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { Order } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, displayDateDue, displayDateOrder, hourAgreedDisplay, hourBookingDisplay, openMapLink, orderColor } from 'src/mixins/help'
import { getLocationPromise } from 'src/services/geolocation'
import { computed, inject, ref } from 'vue'
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
  drag?: boolean,
  label?: string,
  optimal?: boolean,
  nobackground?: boolean,
  forceDeliveryDate?: boolean
}
const props = defineProps<Props>()
const bus = inject('bus') as EventBus
const $q = useQuasar()

const list = computed(() => props.orders)
const reorder = ref(false)

const onMyWay = async (o: Order) => {
  confirmDelete('This will notify the customer you are on your way').onOk(async () => {
    $q.loading.show({ message: 'Getting current location...' })
    // sort out the lat lng
    const currentLoc = await getLocationPromise()
    let latLng: LooseObject = { lat: null, lng: null }
    if (currentLoc.lat && currentLoc.lng) {
      latLng = { lat: currentLoc.lat, lng: currentLoc.lng }
    } else {
      latLng = { lat: o.contractor.lat, lng: o.contractor.lng }
    }
    $q.loading.show({ message: 'Notifying customer of ETA...' })
    api.post(`/public/order/onmyway/${o.id}`, { origin: latLng }).then(() => {
      bus.emit('orderLoadMore')
      $q.loading.hide()
    }).catch(error => {
      useMixinDebug(error)
      $q.loading.hide()
    })
  })
}

const markReadyForDelivery = async (o: Order) => {
  confirmDelete('This will move the booking to deliveries').onOk(() => {
    api.post(`/public/order/readyfordelivery/${o.id}`).then(() => {
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

const optimalRoute = async () => {
  if (!list.value.length) {
    return false
  }
  const workingList = JSON.parse(JSON.stringify(list.value))
  // sort out the lat lng
  const currentLoc = await getLocationPromise()
  let origin = ''
  if (currentLoc.lat && currentLoc.lng) {
    origin = `${currentLoc.lat}, ${currentLoc.lng}`
  } else {
    origin = `${workingList[0].contractor.lat}, ${workingList[0].contractor.lng}`
  }
  const d = workingList.pop()
  let destination = ''
  if (d) {
    destination = `${d.lat},${d.lng}`
  }
  const waypoints = workingList.filter((o: Order) => o.suburbpostcoderegion && o.country).map((o: Order) => `${o.address2} ${o.suburbpostcoderegion.locality} ${o.suburbpostcoderegion.state} ${o.postcode} ${o.country.name}`).join('|')
  const url = `https://maps.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving&waypoints=${waypoints}&optimizeWaypointOrder=true`
  openURL(url)
}
</script>
