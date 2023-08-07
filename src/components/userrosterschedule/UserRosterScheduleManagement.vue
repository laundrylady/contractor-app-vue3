<template>
  <div>
    <UserRosterScheduleEdit />
    <UserRosterScheduleCreate />
    <div class="flex">
      <div class="text-h5">{{ $t('schedule.name') }}</div>
      <q-space />
      <q-btn @click="newUserRosterSchedule()" icon="add" dense color="primary" round />
    </div>
    <p>Below are your current pickup timeslots.</p>
    <div class="flex items-center q-mb-sm">
      <span class="text-h7 text-primary">{{ selectedMonth }}</span>
      <q-space />
      <q-btn-group>
        <q-btn @click="onPrev()" icon="chevron_left" color="secondary" />
        <q-btn @click="onToday()" label="Today" color="secondary" />
        <q-btn @click="onNext()" icon="chevron_right" color="secondary" />
      </q-btn-group>
    </div>
    <q-calendar-month ref="calendarRef" v-model="selectedDate" :weekdays="[1, 2, 3, 4, 5, 6, 0]" hoverable bordered
      animated :day-min-height="80" :day-height="80" month-label-size="md" date-align="right">
      <template #day="{ scope }">
        <div @mouseenter="currentHover = scope.timestamp.date" style="height:100%;">
          <div v-if="hasEvents(scope.timestamp)"
            style="display: flex; justify-content: space-evenly; flex-wrap: wrap; align-items: center; font-weight: 400; font-size: 12px; height: auto;">
            <template v-for="event in getEvents(scope.timestamp)" :key="event.time">
              <q-badge :label="`${hourDisplay(event.start_time)} - ${hourDisplay(event.end_time)}`"
                class="q-mb-xs cursor-pointer" @click="editUserRosterSchedule(event.id)"
                :color="event.active ? 'positive' : 'negative'" style="font-size:10px;" />
            </template>
          </div>
        </div>
      </template>
    </q-calendar-month>
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

const editUserRosterSchedule = (id: number) => {
  bus.emit('editUserRosterSchedule', id)
}

const newUserRosterSchedule = () => {
  confirmDelete('This will create a new schedule entry').onOk(() => {
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
