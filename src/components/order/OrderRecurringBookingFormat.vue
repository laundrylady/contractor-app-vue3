<template>
  <q-list v-if="orders && orders.length" class="bg-white">
    <q-item v-for="o in orders" :key="o.id">
      <q-item-section v-if="o.contractor && !noAvatar" avatar>
        <UserAvatar :user="o.contractor" />
      </q-item-section>
      <q-item-section>
        <div><router-link :to="{ name: 'order-edit', params: { id: o.id } }" class="link">{{
          displayDateDay(o.scheduled_pickup_date) }} (<span v-if="!o.agreed_pickup_time">{{
    hourBookingDisplay(o.scheduled_pickup_time)
  }}</span><span v-if="o.agreed_pickup_time">{{ hourAgreedDisplay(o.agreed_pickup_time)
}}</span>)</router-link>
          <div class="text-grey-7 text-caption">
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
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script setup lang="ts">
import { displayDateDay, hourAgreedDisplay, hourBookingDisplay } from 'src/mixins/help'
import { Order } from '../models'
import UserAvatar from '../UserAvatar.vue'

interface Props {
  orders: Order[],
  noAvatar?: boolean
}
defineProps<Props>()

</script>
