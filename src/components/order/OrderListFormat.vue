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
                  v-if="!o.agreed_pickup_time">{{
                    hourBookingDisplay(o.scheduled_pickup_time)
                  }}</span><span v-if="o.agreed_pickup_time">{{ hourAgreedDisplay(o.agreed_pickup_time)
}}</span>)</router-link>
            </div>
            <div class="text-grey-7">
              <q-icon name="settings" color="grey-7" /> <span v-if="o.productcategories"><span
                  v-for="(c, index) in o.productcategories" :key="c.id">{{
                    c.name }}<span v-if="index + 1 !== o.productcategories.length" class="q-ml-xs q-mr-xs">&</span>
                </span> pickup with {{ o.team.name }}</span>
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
          <div v-if="status" class="q-ml-xs">
            <StatusTag :status="o.status" :small="true" />
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
import { currencyFormat, displayDateDay, hourAgreedDisplay, hourBookingDisplay } from 'src/mixins/help'
import UserAvatar from '../UserAvatar.vue'
import StatusTag from '../StatusTag.vue'
interface Props {
  orders: Order[],
  noAvatar?: boolean,
  dense?: boolean,
  status?: boolean,
  bookingId?: boolean
}
defineProps<Props>()
</script>
