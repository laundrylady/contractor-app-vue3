<template>
  <q-list separator class="bg-white" :dense="dense">
    <q-item v-for="o in orders" :key="o.id" :style="dense ? 'padding:0' : ''">
      <q-item-section avatar v-if="!noAvatar && o.contractor">
        <UserAvatar :user="o.contractor" />
      </q-item-section>
      <q-item-section>
        <div class="flex no-wrap">
          <div>
            <div>
              <div v-if="bookingId"> Booking: #{{ o.display_id }}</div>
              <router-link :to="{ name: 'order-edit', params: { id: o.id } }" class="link">{{
                displayDateDay(o.scheduled_pickup_date) }} {{ o.scheduled_pickup_date }} (<span
                  v-if="!o.agreed_pickup_time && o.scheduled_pickup_time">{{
                    hourBookingDisplay(o.scheduled_pickup_time)
                  }}</span><span v-if="o.agreed_pickup_time">{{ hourAgreedDisplay(o.agreed_pickup_time)
}}</span>)</router-link>
            </div>
            <div class="text-grey-7">
              <OrderProductCategoryDisplay :o="o" />
            </div>
            <div class="text-grey-7"><q-icon name="place" color="grey-7" /> <span class="q-mr-sm"
                v-if="o.team.suburbpostcoderegion">{{
                  o.team.suburbpostcoderegion.locality
                }} {{
  o.team.suburbpostcoderegion.state
}}</span>
            </div>
          </div>
          <q-space />
          <div class="q-ml-xs text-right">
            <div class="q-mb-xs" v-if="status">
              <StatusTag :status="o.status" :small="true" />
            </div>
            <div v-if="o.status === 'confirmed'">
              <div class="q-mb-sm">
                <q-btn @click="onMyWay(o)" label="On My Way" color="primary" icon="local_shipping" size="sm" />
              </div>
              <q-btn @click="openMapLink(o.lat, o.lng, 'google')" flat label="G" round dense color="secondary"
                title="Open in Google Maps" /><q-btn @click="openMapLink(o.lat, o.lng, 'apple')" round dense flat
                title="Open in Apple Maps" label="A" />
            </div>
          </div>
        </div>
      </q-item-section>
      <q-item-section side v-if="o.grand_total_price > 0">
        <div class="text-h7 q-mt-xs">{{ currencyFormat(o.grand_total_price) }}</div>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script setup lang="ts">
import { Order } from 'src/components/models'
import { confirmDelete, currencyFormat, displayDateDay, hourAgreedDisplay, hourBookingDisplay, openMapLink } from 'src/mixins/help'
import StatusTag from '../StatusTag.vue'
import UserAvatar from '../UserAvatar.vue'
import OrderProductCategoryDisplay from './OrderProductCategoryDisplay.vue'
import { getLocationPromise } from 'src/services/geolocation'
import { LooseObject } from 'src/contracts/LooseObject'
import { api } from 'src/boot/axios'
import { EventBus } from 'quasar'
import { inject } from 'vue'
import { useMixinDebug } from 'src/mixins/debug'

interface Props {
  orders: Order[],
  noAvatar?: boolean,
  dense?: boolean,
  status?: boolean,
  bookingId?: boolean
}
defineProps<Props>()
const bus = inject('bus') as EventBus

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
</script>
