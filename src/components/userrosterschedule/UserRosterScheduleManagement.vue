<template>
  <div>
    <UserRosterScheduleEdit />
    <UserRosterScheduleCreate />
    <div class="flex items-start no-wrap q-mb-md">
      <div>You are scheduled to work on the days with an <span class="text-positive">active</span>
        timeslot</div>
      <q-space />
      <q-btn @click="newUserRosterSchedule()" icon="add" dense color="primary" round />
    </div>
    <div class="row q-col-gutter-md items-center q-mb-sm">
      <div class="col-xs-12 col-sm-6 text-h7">{{ selectedMonth }}</div>
      <q-space v-if="!$q.screen.xs" />
      <div calss="col-xs-6 col-sm-3">
        <q-select v-model="calendarView"
          :options="[{ label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]" emit-value map-options dense
          filled label="View" class="q-mr-sm" />
      </div>
      <q-space v-if="$q.screen.xs" />
      <div calss="col-xs-6 col-sm-3">
        <q-btn @click="onPrev()" icon="chevron_left" color="secondary" flat dense round v-if="canPrev" />
        <q-btn @click="onToday()" label="Today" color="secondary" flat rounded />
        <q-btn @click="onNext()" icon="chevron_right" color="secondary" flat dense round />
      </div>
    </div>
    <div style="overflow:auto;">
      <div style="min-width:1000px;max-width:100%;" v-if="calendarView === 'month'">
        <q-calendar-month ref="calendarRef" v-model="selectedDate" :weekdays="[1, 2, 3, 4, 5, 6, 0]" hoverable bordered
          animated month-label-size="md" date-align="right">
          <template #day="{ scope }">
            <div @mouseenter="currentHover = scope.timestamp.date" style="height:100%;">
              <div v-if="hasEvents(scope.timestamp)"
                style="display: flex; justify-content: space-evenly; flex-wrap: wrap; align-items: center; font-weight: 400; font-size: 12px; height: auto;">
                <template v-for="event in getEvents(scope.timestamp)" :key="event.time">
                  <q-badge :label="`${hourDisplay(event.start_time)} - ${hourDisplay(event.end_time)}`"
                    class="q-mb-xs cursor-pointer" @click="editUserRosterSchedule(event.id)"
                    :color="event.active ? 'positive' : 'negative'" style="font-size:10px;min-height:20px;" />
                </template>
              </div>
            </div>
          </template>
        </q-calendar-month>
      </div>
      <div style="min-width:1000px;max-width:100%;" v-if="calendarView === 'week'">
        <q-calendar-day ref="calendarRef" v-model="selectedDate" view="week" animated bordered
          transition-next="slide-left" transition-prev="slide-right" no-active-date :interval-start="6"
          interval-height="20" :interval-count="18" :weekdays="[1, 2, 3, 4, 5, 6, 0]">
          <template #day-body="{ scope: { timestamp, timeStartPos, timeDurationHeight } }">
            <div @mouseenter="currentHover = timestamp.date" class="order-event full-width">
              <div style="font-weight: 400; font-size: 12px; height: auto;">
                <template v-for="(event, index) in getWeekEvents(timestamp)" :key="event.time">
                  <q-badge :label="`${hourDisplay(event.start_time)} - ${hourDisplay(event.end_time)}`"
                    class="cursor-pointer full-width justify-center" @click="editUserRosterSchedule(event.id)"
                    :color="event.active ? 'positive' : 'negative'" style="font-size:10px;"
                    :style="badgeStyles(event, timeStartPos, timeDurationHeight, index)" />
                </template>
              </div>
            </div>
          </template>
        </q-calendar-day>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { QCalendar, QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar'
import moment from 'moment'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, hourDisplay } from 'src/mixins/help'
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { UserRosterSchedule } from '../models'
import UserRosterScheduleCreate from './UserRosterScheduleCreate.vue'
import UserRosterScheduleEdit from './UserRosterScheduleEdit.vue'

const bus = inject('bus') as EventBus
const schedule = ref()
const loading = ref(false)
const currentHover = ref()
const calendarView = ref('month')

const getSchedule = () => {
  loading.value = true
  const start = moment(selectedDate.value).subtract(1, 'month').startOf('month').format('YYYY-MM-DD')
  const end = moment(selectedDate.value).add(1, 'month').endOf('month').format('YYYY-MM-DD')
  api.get(`/public/userrosterschedule/index?start=${start}&end=${end}`).then(response => {
    schedule.value = response.data
    loading.value = false
  }).catch(error => {
    useMixinDebug(error)
    loading.value = false
  })
}

// calendar
const selectedDate = ref(today())
const calendarRef = ref<QCalendar>()

const selectedMonth = computed(() => {
  return moment(selectedDate.value).format('MMMM YYYY')
})

const canPrev = computed(() => {
  if (moment(selectedDate.value, 'YYYY-MM-DD').startOf('month').isAfter(moment().subtract(1, 'months').startOf('month'))) {
    return true
  }
  return false
})

const onToday = () => {
  if (calendarRef.value) {
    calendarRef.value.moveToToday()
    getSchedule()
  }
}

const onPrev = () => {
  if (calendarRef.value) {
    calendarRef.value.prev()
    getSchedule()
  }
}

const onNext = () => {
  if (calendarRef.value) {
    calendarRef.value.next()
    getSchedule()
  }
}

const eventsMap = computed(() => {
  const map: LooseObject = {}
  // check for orders
  if (!schedule.value) {
    return map
  }
  schedule.value.forEach((scheduleItem: UserRosterSchedule) => {
    const scheduleDate = moment(scheduleItem.day).format('YYYY-MM-DD')
    if (!map[scheduleDate]) {
      map[scheduleDate] = []
    }
    // eslint-disable-next-line
    // @ts-ignore
    let timeStart: string | number = parseFloat(scheduleItem.start_time)
    if (timeStart < 10) {
      timeStart = `0${timeStart}`
    }
    // eslint-disable-next-line
    // @ts-ignore
    scheduleItem.time = `${timeStart}:00`
    // eslint-disable-next-line
    // @ts-ignore
    scheduleItem.duration = 60
    map[scheduleDate].push(scheduleItem)
  })
  return map
})

const getEvents = (timestamp: LooseObject) => {
  if (!schedule.value) {
    return []
  }
  const events = schedule.value.filter((o: UserRosterSchedule) => o.day === timestamp.date)
  if (!events) return []
  return events
}

const hasEvents = (timestamp: LooseObject) => {
  if (!schedule.value) {
    return []
  }
  return schedule.value.filter((o: UserRosterSchedule) => o.day === timestamp.date).length > 0
}

const getWeekEvents = (dt: LooseObject) => {
  // get all events for the specified date
  const events = eventsMap.value[dt.date] || []

  if (events.length === 1) {
    events[0].side = 'full'
  }
  return events
}

const badgeStyles = (event: LooseObject, timeStartPos: (arg0: string) => number, timeDurationHeight: (arg0: number) => string, index: number) => {
  const s: LooseObject = {}
  if (timeStartPos) {
    s['margin-top'] = (timeStartPos(event.time) + (index * 20)) + 'px'
    s.height = '20px'
  }
  return s
}

const editUserRosterSchedule = (id: number) => {
  bus.emit('editUserRosterSchedule', id)
}

const newUserRosterSchedule = () => {
  confirmDelete('This will create a new roster entry').onOk(() => {
    bus.emit('newUserRosterSchedule')
  })
}

onMounted(async () => {
  getSchedule()
  bus.on('getSchedule', () => {
    getSchedule()
  })
})

onBeforeUnmount(() => {
  bus.off('getSchedule')
})
</script>
