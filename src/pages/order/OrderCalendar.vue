<template>
  <q-page padding :class="{ 'q-pa-md': $q.screen.xs }">
    <q-breadcrumbs class="q-mb-md" v-if="!$q.screen.xs">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el :label="$t('order.namePlural')" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el label="Calendar" />
    </q-breadcrumbs>
    <div>
      <div class="row q-col-gutter-md q-mb-sm items-center">
        <div class="col-xs-12 col-md-8">
          <span class="text-h7" v-if="calendarView === 'week'">Week {{ selectedWeek }}</span>
          <span class="text-h7" v-if="calendarView === 'month'">{{ selectedMonth }}</span>
          <span class="text-h7" v-if="calendarView === 'day'">{{ dbDateDisplay(selectedDate) }}</span>
          <q-space />
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="flex">
            <q-space v-if="!$q.screen.xs" />
            <q-select v-model="calendarView"
              :options="[{ label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }, { label: 'Day', value: 'day' }]"
              emit-value map-options dense filled label="View" class="q-mr-sm" @update:model-value="getOrders()" />
            <q-select v-model="pickupOrDelivery"
              :options="[{ label: 'Pickups', value: 'pickups' }, { label: 'Deliveries', value: 'deliveries' }]" emit-value
              map-options dense filled label="Mode" class="q-mr-sm" @update:model-value="getOrders()" />
            <q-space v-if="$q.screen.xs" />
            <q-btn @click="onPrev()" icon="chevron_left" color="secondary" flat dense round />
            <q-btn @click="onToday()" label="Today" color="secondary" flat rounded />
            <q-btn @click="onNext()" icon="chevron_right" color="secondary" flat dense round />
          </div>
        </div>
      </div>
      <div v-if="!loading" style="overflow:auto;" class="q-pa-sm">
        <q-card style="min-width:1000px;max-width:100%;" v-if="calendarView === 'month'">
          <q-calendar-month ref="calendarRef" v-model="selectedDate" :weekdays="[1, 2, 3, 4, 5, 6, 0]" hoverable bordered
            month-label-size="md" date-align="right">
            <template #day="{ scope }">
              <div @mouseenter="currentHover = scope.timestamp.date" style="height:100%;">
                <div v-if="hasEvents(scope.timestamp)"
                  style="display: flex; justify-content: space-evenly; flex-wrap: wrap; align-items: center; font-weight: 400; font-size: 12px;">
                  <template v-for="(event, index) in getEvents(scope.timestamp) " :key="`${index}-${event.id}`">
                    <div class="full-width cursor-pointer" @click="orderNav(event.id)" style="font-size:11px;"
                      :class="eventColor(event)">
                      <q-separator dark />
                      <div class="q-pa-sm">
                        <div
                          v-if="pickupOrDelivery === 'pickups' && event.scheduled_pickup_time && (moment(scope.timestamp.date).isSame(moment(event.scheduled_pickup_date, 'DD/MM/YYYY')))">
                          <span v-if="!event.agreed_pickup_time">
                            {{ hourBookingDisplay(event.scheduled_pickup_time) }}
                          </span>
                          <span v-if="event.agreed_pickup_time">
                            {{ hourAgreedDisplay(event.agreed_pickup_time) }}
                          </span>
                        </div>
                        <div
                          v-if="pickupOrDelivery === 'deliveries' && event.scheduled_delivery_time && (moment(scope.timestamp.date).isSame(moment(event.scheduled_delivery_date, 'DD/MM/YYYY')))">
                          <span v-if="!event.agreed_delivery_time">
                            {{ hourBookingDisplay(event.scheduled_delivery_time) }}
                          </span>
                          <span v-if="event.agreed_delivery_time">
                            {{ hourAgreedDisplay(event.agreed_delivery_time) }}
                          </span>
                        </div>
                        <div class="text-bold">{{ event.team.name }}</div>
                        <div class="flex">
                          <div v-if="event.suburbpostcoderegion">{{ event.suburbpostcoderegion.locality }}</div>
                          <q-space />
                          <div class="q-ml-sm"><q-icon name="note" size="14px"
                              v-if="event.invoice && event.invoice.status !== 'PAID'" title="Invoice Open" /><q-icon
                              name="sync" v-if="event.recurring_order" size="14px" class="q-ml-xs"
                              title="Recurring Booking" /></div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </template>
          </q-calendar-month>
        </q-card>
        <q-card style="min-width:1000px;max-width:100%;" v-if="calendarView === 'week'">
          <q-calendar-day ref="calendarRef" v-model="selectedDate" view="week" animated bordered
            transition-next="slide-left" transition-prev="slide-right" no-active-date :interval-start="6"
            :interval-count="18" :interval-height="65" :weekdays="[1, 2, 3, 4, 5, 6, 0]">
            <template #day-body="{ scope: { timestamp, timeStartPos, timeDurationHeight } }">
              <template v-for="(event, index) in getWeekEvents(timestamp.date) " :key="`${index}-${event.id}`">
                <div @click="orderNav(event.id)" class="order-event full-width" style="font-size:11px;"
                  :class="eventColor(event)" :style="badgeStyles(event, timeStartPos, timeDurationHeight, index)">
                  <q-separator dark />
                  <div class="q-pa-sm">
                    <div
                      v-if="pickupOrDelivery === 'pickups' && event.scheduled_pickup_time && (moment(timestamp.date).isSame(moment(event.scheduled_pickup_date, 'DD/MM/YYYY')))">
                      <span v-if="!event.agreed_pickup_time">
                        {{ hourBookingDisplay(event.scheduled_pickup_time) }}
                      </span>
                      <span v-if="event.agreed_pickup_time">
                        {{ hourAgreedDisplay(event.agreed_pickup_time) }}
                      </span>
                    </div>
                    <div
                      v-if="pickupOrDelivery === 'deliveries' && event.scheduled_delivery_time && (moment(timestamp.date).isSame(moment(event.scheduled_delivery_date, 'DD/MM/YYYY')))">
                      <span v-if="!event.agreed_delivery_time">
                        {{ hourBookingDisplay(event.scheduled_delivery_time) }}
                      </span>
                      <span v-if="event.agreed_delivery_time">
                        {{ hourAgreedDisplay(event.agreed_delivery_time) }}<q-icon name="local_shipping"
                          class="q-ml-xs" />
                      </span>
                    </div>
                    <div class="text-bold">{{ event.team.name }}</div>
                    <div class="flex">
                      <div v-if="event.suburbpostcoderegion">{{ event.suburbpostcoderegion.locality }}</div>
                      <q-space />
                      <div class="q-ml-sm"><q-icon name="note" size="14px"
                          v-if="event.invoice && event.invoice.status !== 'PAID'" title="Invoice Open" /><q-icon
                          name="sync" v-if="event.recurring_order" size="14px" class="q-ml-xs"
                          title="Recurring Booking" /></div>
                    </div>
                  </div>
                </div>
              </template>
            </template>
          </q-calendar-day>
        </q-card>
        <q-card v-if="calendarView === 'day'" class="dayView">
          <q-calendar-day ref="calendarRef" v-model="selectedDate" view="day" animated bordered
            transition-next="slide-left" transition-prev="slide-right" :interval-start="6" :interval-count="18"
            :max-days="1" :interval-height="65">
            <template #day-body="{ scope: { timestamp, timeStartPos, timeDurationHeight } }">
              <template v-for="( event, index ) in  getWeekEvents(timestamp.date) " :key="event.id">
                <div @click="orderNav(event.id)" class="order-event full-width" style="font-size:11px;"
                  :class="eventColor(event)" :style="badgeStyles(event, timeStartPos, timeDurationHeight, index)">
                  <q-separator dark />
                  <div class="q-pa-sm">
                    <div
                      v-if="pickupOrDelivery === 'pickups' && event.scheduled_pickup_time && (moment(timestamp.date).isSame(moment(event.scheduled_pickup_date, 'DD/MM/YYYY')))">
                      <span v-if="!event.agreed_pickup_time">
                        {{ hourBookingDisplay(event.scheduled_pickup_time) }}
                      </span>
                      <span v-if="event.agreed_pickup_time">
                        {{ hourAgreedDisplay(event.agreed_pickup_time) }}
                      </span>
                    </div>
                    <div
                      v-if="pickupOrDelivery === 'deliveries' && event.scheduled_delivery_time && (moment(timestamp.date).isSame(moment(event.scheduled_delivery_date, 'DD/MM/YYYY')))">
                      <span v-if="!event.agreed_delivery_time">
                        {{ hourBookingDisplay(event.scheduled_delivery_time) }}<q-icon name="local_shipping"
                          class="q-ml-xs" />
                      </span>
                      <span v-if="event.agreed_delivery_time">
                        {{ hourAgreedDisplay(event.agreed_delivery_time) }}<q-icon name="local_shipping"
                          class="q-ml-xs" />
                      </span>
                    </div>
                    <div class="text-bold">{{ event.team.name }}</div>
                    <div class="flex">
                      <div v-if="event.suburbpostcoderegion">{{ event.suburbpostcoderegion.locality }}</div>
                      <q-space />
                      <div class="q-ml-sm"><q-icon name="note" size="14px"
                          v-if="event.invoice && event.invoice.status !== 'PAID'" title="Invoice Open" /><q-icon
                          name="sync" v-if="event.recurring_order" size="14px" class="q-ml-xs"
                          title="Recurring Booking" /></div>
                    </div>
                  </div>
                </div>
              </template>
            </template>
          </q-calendar-day>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { QCalendar, QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar'
import moment from 'moment'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { dbDateDisplay, hourAgreedDisplay, hourBookingDisplay, sortOrdersByKey } from 'src/mixins/help'
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Order } from '../../components/models'

const orders = ref()
const loading = ref(false)
const currentHover = ref()
const calendarView = ref('week')
const router = useRouter()
const pickupOrDelivery = ref('pickups')

// calendar
const selectedDate = ref(today())
const calendarRef = ref<QCalendar>()

const selectedMonth = computed(() => {
  return moment(selectedDate.value).format('MMMM YYYY')
})

const selectedWeek = computed(() => {
  return moment(selectedDate.value).format('W - MMMM YYYY')
})

const getOrders = () => {
  loading.value = true
  if (calendarView.value) {
    const unit = calendarView.value === 'week' ? 'week' : calendarView.value === 'day' ? 'day' : 'month'
    const start = moment(selectedDate.value).subtract(1, unit).startOf(unit).format('YYYY-MM-DD')
    const end = moment(selectedDate.value).add(1, unit).endOf(unit).format('YYYY-MM-DD')
    api.post(`/public/order/bookingcalendar/${pickupOrDelivery.value}`, { start, end }).then(response => {
      orders.value = response.data
      loading.value = false
    }).catch(error => {
      useMixinDebug(error)
      loading.value = false
    })
  }
}

const onToday = () => {
  if (calendarRef.value) {
    calendarRef.value.moveToToday()
    nextTick(() => {
      getOrders()
    })
  }
}

const onPrev = () => {
  if (calendarRef.value) {
    calendarRef.value.prev()
    nextTick(() => {
      getOrders()
    })
  }
}

const onNext = () => {
  if (calendarRef.value) {
    calendarRef.value.next()
    nextTick(() => {
      getOrders()
    })
  }
}

const getEvents = (timestamp: LooseObject) => {
  if (!orders.value) {
    return []
  }
  if (pickupOrDelivery.value === 'pickups') {
    const events = orders.value.filter((o: Order) => moment(o.scheduled_pickup_date, 'DD/MM/YYYY').format('YYYY-MM-DD') === timestamp.date)
    if (!events) return []
    return sortOrdersByKey(events, 'sortTime', 'asc', 'number')
  } else {
    const events = orders.value.filter((o: Order) => moment(o.scheduled_delivery_date, 'DD/MM/YYYY').format('YYYY-MM-DD') === timestamp.date)
    if (!events) return []
    return sortOrdersByKey(events, 'sortTime', 'asc', 'number')
  }
}

const hasEvents = (timestamp: LooseObject) => {
  if (!orders.value) {
    return false
  }
  if (pickupOrDelivery.value === 'pickups') {
    return orders.value.filter((o: Order) => {
      return moment(o.scheduled_pickup_date, 'DD/MM/YYYY').format('YYYY-MM-DD') === timestamp.date
    }).length > 0
  } else {
    return orders.value.filter((o: Order) => {
      return moment(o.scheduled_delivery_date, 'DD/MM/YYYY').format('YYYY-MM-DD') === timestamp.date
    }).length > 0
  }
}

const eventColor = (order: Order) => {
  if (order.status === 'cancelled') {
    return 'bg-red text-white'
  }
  const isAfter = order.status !== 'confirmed'
  let color = 'bg-primary text-white'
  if (order.productcategories && order.productcategories.filter(q => q.meta && q.meta.pivot_active).length === 1) {
    if (order.productcategories.find(o => o.name === 'Ironing' && o.meta && o.meta.pivot_active)) {
      color = 'bg-yellow-8 text-white'
    }
    if (order.productcategories.find(o => o.name === 'Washing' && o.meta && o.meta.pivot_active)) {
      color = 'bg-blue text-white'
    }
  }
  if (isAfter) {
    if (color === 'bg-primary text-white') {
      color = 'bg-pink-1'
    }
    if (color === 'bg-blue text-white') {
      color = 'bg-blue-1'
    }
    if (color === 'bg-yellow-9 text-white') {
      color = 'bg-yellow-1'
    }
  }
  return color
}

const badgeStyles = (event: LooseObject, timeStartPos: (arg0: string) => number, timeDurationHeight: (arg0: number) => string, index: number) => {
  const s: LooseObject = {}
  if (timeDurationHeight) {
    s.top = ((index * 65)) + 'px'
    s.height = timeDurationHeight(event.duration) + 'px'
  }
  s['align-items'] = 'flex-start'
  return s
}

interface EventMapOrder {
  [key: string]: Order[]
}

const eventsMap = computed(() => {
  const map: EventMapOrder = {}
  // check for orders
  if (!orders.value) {
    return map
  }
  orders.value.forEach((order: Order) => {
    if (pickupOrDelivery.value === 'pickups') {
      const orderDate = moment(order.scheduled_pickup_date, 'DD/MM/YYYY').format('YYYY-MM-DD')
      if (!map[orderDate]) {
        map[orderDate] = []
      }
      let timeStart: string | number = parseFloat(order.scheduled_pickup_time ? order.scheduled_pickup_time.split('-')[0] : '9')
      if (timeStart < 10) {
        timeStart = `0${timeStart}`
      }
      order.time = `${timeStart}:00`
      // set sort time
      order.pickupSortTime = timeStart
      if (!order.scheduled_delivery_date) {
        order.sortTime = order.pickupSortTime
      }
      map[orderDate].push(order)
    } else {
      // delivery
      if (order.scheduled_delivery_date) {
        const deliveryDate = moment(order.scheduled_delivery_date, 'DD/MM/YYYY').format('YYYY-MM-DD')
        if (!map[deliveryDate]) {
          map[deliveryDate] = []
        }
        let timeStart: string | number = parseFloat(order.scheduled_delivery_time ? order.scheduled_delivery_time.split('-')[0] : '9')
        if (timeStart < 10) {
          timeStart = `0${timeStart}`
        }
        order.time = `${timeStart}:00`
        order.deliverySortTime = timeStart
        order.sortTime = moment().isSame(moment(order.scheduled_pickup_date, 'DD/MM/YYYY')) ? order.pickupSortTime : order.deliverySortTime
        map[deliveryDate].push(order)
      }
    }
  })
  return map
})

const getWeekEvents = (dt: string) => {
  // get all events for the specified date
  const events = eventsMap.value[dt]
  if (!events || !Array.isArray(events)) {
    return []
  }
  return events
}

const orderNav = (id: string) => {
  router.push({ name: 'order-edit', params: { id } })
}

onMounted(() => {
  getOrders()
})
</script>
