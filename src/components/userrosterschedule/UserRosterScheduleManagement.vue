<template>
  <UserRosterScheduleEdit />
  <UserRosterScheduleCreate />
  <div class="flex items-center q-mb-sm">
    <span class="text-h7 text-primary">{{ selectedMonth }}</span>
    <q-space />
    <q-btn-group>
      <q-btn @click="onPrev()" icon="chevron_left" color="secondary" />
      <q-btn @click="onToday()" label="Today" color="secondary" />
      <q-btn @click="onNext()" icon="chevron_right" color="secondary" />
    </q-btn-group>
  </div>
  <q-calendar-month ref="calendarRef" v-model="selectedDate" :weekdays="[1, 2, 3, 4, 5, 6, 0]" hoverable bordered animated
    :day-min-height="80" :day-height="80" month-label-size="md" date-align="right">
    <template #day="{ scope }">
      <div @mouseenter="currentHover = scope.timestamp.date" style="height:100%;">
        <div v-if="hasEvents(scope.timestamp)"
          style="display: flex; justify-content: space-evenly; flex-wrap: wrap; align-items: center; font-weight: 400; font-size: 12px; height: auto;">
          <template v-for="event in getEvents(scope.timestamp)" :key="event.time">
            <q-badge :label="`${hourDisplay(event.start_time)} - ${hourDisplay(event.end_time)}`"
              class="q-mb-xs cursor-pointer" @click="editUserRosterSchedule(event.id)"
              :color="event.active ? 'positive' : 'negative'" />
          </template>
        </div>
        <div class="text-center q-mt-sm" v-if="isAfterToday(scope.timestamp) && currentHover === scope.timestamp.date">
          <q-btn @click="newUserRosterSchedule(scope.timestamp)" icon="add_circle" flat size="sm" dense
            :label="$t('schedule.create')" color="grey-6" />
        </div>
      </div>
    </template>
  </q-calendar-month>
</template>
<script setup lang="ts">
import { QCalendar, QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, hourDisplay } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, ref, computed } from 'vue'
import { User, UserRosterSchedule } from '../models'
import UserRosterScheduleEdit from './UserRosterScheduleEdit.vue'
import moment from 'moment'
import UserRosterScheduleCreate from './UserRosterScheduleCreate.vue'

interface Props {
  user: User
}
const props = defineProps<Props>()
const bus = inject('bus') as EventBus
const schedule = ref()
const loading = ref(false)
const currentHover = ref()

const getSchedule = () => {
  loading.value = true
  const start = moment(selectedDate.value).subtract(1, 'month').startOf('month').format('YYYY-MM-DD')
  const end = moment(selectedDate.value).add(1, 'month').endOf('month').format('YYYY-MM-DD')
  api.get(`/userrosterschedule/index?user_id=${props.user.id}&start=${start}&end=${end}`).then(response => {
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

const isAfterToday = (timestamp: LooseObject) => {
  const today = moment()
  const compare = moment(timestamp.date)
  if (compare.isSameOrAfter(today)) {
    return true
  }
  return false
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

const newUserRosterSchedule = (timestamp: LooseObject) => {
  confirmDelete('This will create a new entry for this day').onOk(() => {
    bus.emit('newUserRosterSchedule', { day: timestamp.date, user: props.user })
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
