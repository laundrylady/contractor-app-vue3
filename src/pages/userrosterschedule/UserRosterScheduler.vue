<template>
  <UserRosterScheduleEdit />
  <UserRosterScheduleCreate />
  <q-layout view="lHh LpR fFf" container class="layout-height">
    <q-header :class="{ 'page-title text-black': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <div class="q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center" style="padding-top:11px;">
        <q-breadcrumbs>
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" />
          </template>
          <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
          <q-breadcrumbs-el label="Scheduler" />
        </q-breadcrumbs>
        <q-space />
        <q-btn icon="place" :label="`${selectedLocation || 'Location'}`" flat color="grey" no-caps
          class="form-field-padding-dense">
          <q-menu>
            <div class="q-pa-lg" style="width:500px">
              <div class="text-h6">Suburb Group</div>
              <PostcodeRegionGroupField v-model="search.postcode_region_group_id" label="Choose an area" :outlined="true"
                :dense="true" class="q-mb-md" @selected-location="setSelectedLocation" />
              <div class="text-h6">Individual Suburb</div>
              <PostcodeRegionField v-model="search.postcode_region_id" label="Specific Suburb" :dense="true"
                :outlined="true" @selected-location="setSelectedLocation" />
            </div>
          </q-menu>
        </q-btn>
        <DateFieldSlim v-model="search.start" :invalid="$v.start.$invalid" label="Start date" :dense="true"
          :outlined="true" :no-hint="true" class="q-mr-sm q-ml-sm" />
        <DateFieldSlim v-model="search.end" :invalid="$v.end.$invalid" label="End date" :dense="true" :outlined="true"
          :no-hint="true" class="q-mr-sm" />
        <q-btn @click="getSchedule()"
          :disable="$v.$invalid || (!search.postcode_region_group_id && !search.postcode_region_id)" icon="search"
          label="Search" color="primary" />
      </div>
    </q-header>
    <q-page-container>
      <q-page padding>
        <div v-if="!loaded" class="text-center text-grey" style="margin-top:200px;">
          <div class="q-mb-lg"><img src="../../assets/images/illustrations/code_thinking.svg" style="max-height:150px;" />
          </div>
          <q-icon name="place" /> Select a location above to get started
        </div>
        <div v-show="loaded">
          <q-card class="bg-seamless q-mt-md">
            <q-card-section>
              <div class="flex">
                <q-space />
                <div v-if="landingData" class="flex">
                  <div v-for="l in landingData" :key="l.name" class="q-mr-lg">
                    <div class="flex items-center">
                      <q-circular-progress :value="l.per" size="32px" color="primary" track-color="grey-5" />
                      <div class="q-ml-sm">
                        <div class="text-bold" style="line-height:0.9rem">{{ l.name }} Bookings</div>
                        <div>
                          {{ l.oc }}/{{ l.cc }} - {{ l.per }}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <q-btn-group>
                    <q-btn @click="onPrev()" icon="chevron_left" color="secondary" />
                    <q-btn @click="onToday()" label="Today" color="secondary" />
                    <q-btn @click="onNext()" icon="chevron_right" color="secondary" />
                  </q-btn-group>
                </div>
              </div>
              <div class="q-mt-sm">
                <q-calendar-scheduler ref="calendarRef" v-model="selectedDate" v-model:model-resources="dataResources"
                  view="week" short-weekday-label animated bordered :weekdays="[1, 2, 3, 4, 5, 6, 0]" :style="styles"
                  @change="onChange">
                  <template #resource-label="{ scope }">
                    <div class="text-center q-pa-xs">
                      <UserAvatar :user="scope.resource" />
                      <div class="q-mt-xs"><router-link
                          :to="{ name: 'contractor-dashboard', params: { id: scope.resource.id } }" target="_blank"
                          class="link">{{ scope.resource.fullname }}</router-link></div>
                    </div>
                  </template>
                  <template #day="{ scope }">
                    <div @mouseenter="currentHover = { resource: scope.resource.id, date: scope.timestamp.date }"
                      style="height:100%;">
                      <div v-if="hasEvents(scope)"
                        style="display: flex; justify-content: space-evenly; flex-wrap: wrap; align-items: center; font-weight: 400; font-size: 12px; height: auto;">
                        <template v-for="event in getEvents(scope)" :key="event.time">
                          <div class="q-mt-xs">
                            <q-badge
                              :label="`${hourDisplay(event.start_time)} - ${hourDisplay(event.end_time)} (${event.orders})`"
                              class="q-mb-xs cursor-pointer" @click="editUserRosterSchedule(event.id)"
                              :color="event.active ? 'positive' : 'negative'" />
                          </div>
                        </template>
                      </div>
                      <div class="text-center q-mt-sm"
                        v-if="isAfterToday(scope) && currentHover && currentHover.resource === scope.resource.id && currentHover.date === scope.timestamp.date">
                        <q-btn @click="newUserRosterSchedule(scope)" icon="add_circle" flat size="sm" dense
                          :label="$t('schedule.create')" color="grey-6" />
                      </div>
                    </div>
                  </template>
                </q-calendar-scheduler>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { QCalendar, today } from '@quasar/quasar-ui-qcalendar'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import moment from 'moment-timezone'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import DateFieldSlim from 'src/components/form/DateFieldSlim.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import PostcodeRegionGroupField from 'src/components/form/PostcodeRegionGroupField.vue'
import { PostcodeRegionGroup } from 'src/components/models'
import UserAvatar from 'src/components/UserAvatar.vue'
import UserRosterScheduleCreate from 'src/components/userrosterschedule/UserRosterScheduleCreate.vue'
import UserRosterScheduleEdit from 'src/components/userrosterschedule/UserRosterScheduleEdit.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, hourDisplay } from 'src/mixins/help'
import { getCurrentLocation } from 'src/services/geolocation'
import { computed, inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const $q = useQuasar()
const bus = inject('bus') as EventBus
const latLng = ref()
const data = ref()
const loaded = ref(false)
const dataResources = ref([])
const currentHover = ref()
const selectedDate = ref(today())
const calendarRef = ref<QCalendar>()
const postcodeRegionGroups = ref()
const selectedLocation = ref()
const landingData = ref()
const styles = computed(() => {
  return {
    '--calendar-resources-width': 150 + 'px'
  }
})
const schema = {
  keyword: null,
  start: moment().startOf('isoWeek').format('DD/MM/YYYY'),
  end: moment().endOf('isoWeek').format('DD/MM/YYYY'),
  postcode_region_group_id: null,
  postcode_region_id: null
}
const search = reactive(JSON.parse(JSON.stringify(schema)))

const rules = {
  start: { required },
  end: { required }
}
const $v = useVuelidate(rules, search, { $scope: false })

const getSchedule = () => {
  $q.loading.show({ message: 'Fetching schedule...' })
  api.post('/userrosterschedule/scheduler', search).then(response => {
    data.value = response.data
    dataResources.value = response.data.map((o: LooseObject) => o.user)
    loaded.value = true
    getLandingData()
  }).catch(error => {
    $q.loading.hide()
    useMixinDebug(error)
  })
}

const getLandingData = () => {
  api.post('/user/contractor/landing', { start: search.start, end: search.end, postcode_region_group_id: search.postcode_region_group_id, postcode_region_id: search.postcode_region_id }).then(response => {
    landingData.value = response.data
    $q.loading.hide()
  }).catch(error => {
    useMixinDebug(error)
    $q.loading.hide()
  })
}

const setSelectedLocation = (val: string) => {
  selectedLocation.value = val
}

const onToday = () => {
  if (calendarRef.value) {
    calendarRef.value.moveToToday()
  }
}

const onPrev = () => {
  if (calendarRef.value) {
    calendarRef.value.prev()
  }
}

const onNext = () => {
  if (calendarRef.value) {
    calendarRef.value.next()
  }
}

const onChange = (event: LooseObject) => {
  const startFormatted = moment(event.start).format('DD/MM/YYYY')
  const endFormatted = moment(event.end).format('DD/MM/YYYY')
  if (search.start !== startFormatted && search.end !== endFormatted) {
    search.start = startFormatted
    search.end = endFormatted
    getSchedule()
  }
}

const isAfterToday = (resource: LooseObject) => {
  const today = moment()
  const compare = moment(resource.timestamp.date)
  if (compare.isSameOrAfter(today)) {
    return true
  }
  return false
}

const getEvents = (resource: LooseObject) => {
  if (!data.value) {
    return []
  }
  const record = data.value.find((o: LooseObject) => o.user.id === resource.resource.id)
  if (record) {
    return record.schedule.filter((o: LooseObject) => o.day === resource.timestamp.date)
  }
  return []
}

const hasEvents = (resource: LooseObject) => {
  if (!data.value) {
    return false
  }
  const record = data.value.find((o: LooseObject) => o.user.id === resource.resource.id)
  if (record) {
    return record.schedule.filter((o: LooseObject) => o.day === resource.timestamp.date).length > 0
  }
  return []
}

const editUserRosterSchedule = (id: number) => {
  bus.emit('editUserRosterSchedule', id)
}

const newUserRosterSchedule = (resource: LooseObject) => {
  confirmDelete('This will create a new entry for this day').onOk(() => {
    bus.emit('newUserRosterSchedule', { day: resource.timestamp.date, user: resource.resource })
  })
}

onMounted(async () => {
  latLng.value = await getCurrentLocation()
  api.get('/postcoderegiongroup/index').then(response => {
    postcodeRegionGroups.value = response.data.map((o: PostcodeRegionGroup) => {
      return { value: o.id, label: o.name }
    })
  }).catch(error => {
    useMixinDebug(error)
  })
  bus.on('getSchedule', () => {
    getSchedule()
  })
})

onBeforeUnmount(() => {
  bus.off('getSchedule')
})
</script>
