<template>
  <OrderMove />
  <q-layout view="lHh LpR fFf" container class="layout-height">
    <q-header :class="{ 'page-title text-black': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <div class="q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center" style="padding-top:11px;">
        <q-breadcrumbs>
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" />
          </template>
          <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
          <q-breadcrumbs-el label="Booking Manager" />
        </q-breadcrumbs>
        <q-space />
        <q-btn icon="place" :label="`${selectedLocation || 'Location'}`" color="grey" no-caps flat
          class="form-field-padding-dense q-mr-sm">
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
        <UserField v-model="search.contractor_user_id" :outlined="true" :dense="true" label="Choose a contractor"
          role="contractor" @update:model-value="selectContractor" class="q-mr-sm" />
        <TeamField v-model="search.team_id" :outlined="true" :dense="true" label="Choose a customer"
          @update:model-value="selectTeam" class="q-mr-sm" status="active" />
        <q-toggle v-model="search.scheduled_only" label="Scheduled only" />
        <q-btn @click="getOrders()"
          :disable="$v.$invalid || (!search.postcode_region_group_id && !search.postcode_region_id && !search.contractor_user_id && !search.team_id)"
          icon="search" label="Search" color="primary" class="q-ml-sm" />
      </div>
    </q-header>
    <q-page-container>
      <q-page padding>
        <div v-if="!loaded" class="text-center text-grey" style="margin-top:200px;">
          <div class="q-mb-lg"><img src="../../assets/images/illustrations/code_thinking.svg" style="max-height:150px;" />
          </div>
          <q-icon name="place" /> Select a location or contractor above to get started
        </div>
        <div v-show="loaded">
          <q-card class="bg-seamless q-mt-md">
            <q-card-section>
              <div class="flex items-center">
                <q-btn color="primary" flat icon="filter_alt" v-if="dataResources && dataResources.length"
                  :label="$t('contractor.namePlural')">
                  <q-menu>
                    <q-list style="min-width: 100px">
                      <q-item v-for="u in dataResources" :key="u.id">
                        <q-item-section>
                          <q-checkbox v-model="u.selected" :label="u.fullname" />
                        </q-item-section></q-item></q-list>
                  </q-menu>
                </q-btn>
                <q-space />
                <div class="q-mr-lg text-h6">
                  {{ currentMonth() }}
                </div>
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
                <q-btn-group>
                  <q-btn @click="onPrev()" icon="chevron_left" color="secondary" />
                  <q-btn @click="onToday()" label="Today" color="secondary" />
                  <q-btn @click="onNext()" icon="chevron_right" color="secondary" />
                </q-btn-group>
              </div>
              <div class="q-mt-sm">
                <q-calendar-scheduler ref="calendarRef" v-model="selectedDate"
                  v-model:model-resources="dataResourcesComputed" view="week" short-weekday-label animated bordered
                  :weekdays="[1, 2, 3, 4, 5, 6, 0]" :style="styles" @change="onChange" :drag-over-func="onDragOver">
                  <template #resource-label="{ scope }">
                    <div class="text-center q-pa-xs">
                      <q-circular-progress show-value font-size="10px" class="q-ma-sm"
                        :title="getCategoryCapacity(scope.resource.totalCapacity.categoryCounts)"
                        :value="scope.resource.totalCapacity.percentage" size="80px" :thickness="0.25" color="secondary"
                        track-color="grey-3">
                        <UserAvatar :user="scope.resource" />
                      </q-circular-progress>
                      <div class="text-center"><router-link
                          :to="{ name: 'contractor-dashboard', params: { id: scope.resource.id } }" target="_blank"
                          class="link">{{ scope.resource.fullname }}</router-link></div>
                    </div>
                  </template>
                  <template #day="{ scope }">
                    <div @mouseenter="currentHover = { resource: scope.resource.id, date: scope.timestamp.date }"
                      style="height:100%;">
                      <div
                        style="display: flex; justify-content: space-evenly; flex-wrap: wrap; align-items: center; font-weight: 400; font-size: 12px; height: auto;">
                        <template v-for="o in getOrderEvents(scope)" :key="o.id">
                          <div>
                            <q-badge
                              :label="`#${o.display_id}: ${o.team.name.slice(0, 17)} - ${o.agreed_pickup_time ? hourAgreedDisplay(o.agreed_pickup_time) : hourBookingDisplay(o.scheduled_pickup_time)}`"
                              class="cursor-pointer q-pa-sm q-mt-xs" @click="viewOrder(o.id)"
                              :color="orderColor(o.productcategories)" :draggable="true" :outline="o.status === 'draft'"
                              @dragstart="(e: Event) => onDragStart(e, o)" @dragend="(e: Event) => onDragEnd(e, scope)" />

                            <div v-if="orderViewId === o.id" :class="`bg-${orderColor(o.productcategories)} text-white`">
                              <OrderViewModal :model="o" />
                            </div>
                          </div>
                        </template>
                      </div>
                      <div
                        style="display: flex; justify-content: space-evenly; flex-wrap: wrap; align-items: center; font-weight: 400; font-size: 12px; height: auto;">
                        <template v-for="event in getEvents(scope)" :key="event.time">
                          <div class="q-mt-sm">
                            <q-btn no-caps flat size="sm" class="q-mb-xs" dense>
                              <q-linear-progress size="25px" :value="event.capacity.percentage" color="grey-4"
                                track-color="grey-2" style="width:100px;">
                                <div class="absolute-full flex flex-center">
                                  <q-badge color="transparent" text-color="black"
                                    :label="`${hourDisplay(event.start_time)} - ${hourDisplay(event.end_time)}`" />
                                </div>
                              </q-linear-progress>
                              <q-menu anchor="center middle" self="center middle">
                                <div style="max-width:400px;">
                                  <div :class="{ 'bg-positive': event.active, 'bg-negative': !event.active }"
                                    class="q-pa-sm text-white">
                                    <div class="flex q-mb-sm items-start">
                                      <div>
                                        {{ scope.resource.fullname }}
                                        <div class="text-h6">{{ dbDateDisplayDay(event.day) }} - {{
                                          dbDateDisplay(event.day) }}
                                        </div>
                                        <div class="flex">{{ hourDisplay(event.start_time) }} - {{
                                          hourDisplay(event.end_time) }} |
                                          {{ event.orders.length }} booked
                                        </div>
                                      </div>
                                      <q-space />
                                      <q-btn round dense v-close-popup icon="close" flat />
                                    </div>
                                  </div>
                                  <div class="q-pa-md">
                                    <div>Pickup Locations:</div>
                                    <PostcodeRegionDisplay :postcoderegions="event.postcoderegiongroup.postcoderegions" />
                                  </div>
                                </div>
                                <q-linear-progress size="10px" :value="event.capacity.percentage" color="secondary" />
                              </q-menu>
                            </q-btn>
                          </div>
                        </template>
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
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import PostcodeRegionGroupField from 'src/components/form/PostcodeRegionGroupField.vue'
import TeamField from 'src/components/form/TeamField.vue'
import UserField from 'src/components/form/UserField.vue'
import { Order, PostcodeRegionGroup, User } from 'src/components/models'
import OrderMove from 'src/components/order/OrderMove.vue'
import OrderViewModal from 'src/components/order/OrderViewModal.vue'
import PostcodeRegionDisplay from 'src/components/PostcodeRegionDisplay.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { dbDate, dbDateDisplay, dbDateDisplayDay, hourAgreedDisplay, hourBookingDisplay, hourDisplay } from 'src/mixins/help'
import { getCurrentLocation, getPostcodeRegionGroups } from 'src/services/geolocation'
import { orderColor } from 'src/services/helpers'
import { computed, inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const $q = useQuasar()
const bus = inject('bus') as EventBus
const latLng = ref()
const data = ref()
const loaded = ref(false)
const dataResources = ref<User[]>([])
const dataOrders = ref<Order[]>([])
const currentHover = ref()
const selectedDate = ref(today())
const calendarRef = ref<QCalendar>()
const postcodeRegionGroups = ref()
const selectedLocation = ref()
const landingData = ref()
const dragging = ref(false)
const orderViewId = ref()
const draggedEvent = ref()
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
  postcode_region_id: null,
  scheduled_only: true,
  contactor_user_id: null,
  team_id: null
}
const search = reactive(JSON.parse(JSON.stringify(schema)))

const rules = {
  start: { required },
  end: { required }
}
const $v = useVuelidate(rules, search, { $scope: false })

const dataResourcesComputed = computed((): User[] => {
  return dataResources.value.filter((o: User) => o.selected)
})

const setSelectedLocation = (val: string) => {
  selectedLocation.value = val
}

const selectContractor = () => {
  if (search.contractor_user_id) {
    search.postcode_region_group_id = null
  }
}

const selectTeam = () => {
  if (search.team_id) {
    search.postcode_region_group_id = null
    search.contactor_user_id = null
  }
}

const getOrders = () => {
  $q.loading.show({ message: 'Fetching bookings...' })
  api.post('/order/bookingmanager', search).then(response => {
    data.value = response.data.data
    dataOrders.value = response.data.orders
    dataResources.value = response.data.data.map((o: LooseObject) => {
      return {
        id: o.user.id,
        fullname: o.user.fullname,
        first_name: o.user.first_name,
        last_name: o.user.last_name,
        avatar: o.user.avatar,
        email: o.user.email,
        selected: true,
        totalCapacity: o.totalCapacity
      }
    })
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
    getOrders()
  }
}

const onDragStart = (e: Event, order: Order) => {
  dragging.value = true
  draggedEvent.value = JSON.parse(JSON.stringify(order))
}

const onDragEnd = (e: Event, scope: LooseObject) => {
  if (scope && scope.resource) {
    if (draggedEvent.value.scheduled_pickup_date !== scope.timestamp.date || draggedEvent.value.contractor_user_id !== scope.resource.id) {
      bus.emit('orderMove', draggedEvent.value)
    }
    dragging.value = false
  }
}

const onDragOver = (e: Event, type: string, scope: LooseObject) => {
  if (scope && scope.resource) {
    draggedEvent.value.scheduled_pickup_date = scope.timestamp.date
    draggedEvent.value.contractor_user_id = scope.resource.id
  }
}

const getEvents = (scope: LooseObject) => {
  if (!data.value) {
    return []
  }
  const record = data.value.find((o: LooseObject) => o.user.id === scope.resource.id)
  if (record) {
    return record.schedule.filter((o: LooseObject) => o.day === scope.timestamp.date)
  }
  return []
}

const getOrderEvents = (scope: LooseObject) => {
  if (!dataOrders.value) {
    return []
  }
  return dataOrders.value.filter((o: Order) => dbDate(o.scheduled_pickup_date) === scope.timestamp.date && o.contractor_user_id === scope.resource.id)
}

const viewOrder = (id: string) => { if (orderViewId.value && orderViewId.value === id) { orderViewId.value = null } else { orderViewId.value = id } }

const currentMonth = () => {
  return moment(search.start, 'DD/MM/YYYY').format('MMMM YYYY')
}

const getCategoryCapacity = (capacity: LooseObject[]) => {
  const capacityData: string[] = []
  Object.entries(capacity).forEach(([key, value]: [string, LooseObject]) => {
    capacityData.push(`${key}: ${value.percentage}%`)
  })
  return capacityData.join(', ')
}

onMounted(async () => {
  latLng.value = await getCurrentLocation()
  postcodeRegionGroups.value = (await getPostcodeRegionGroups()).map((o: PostcodeRegionGroup) => { return { value: o.id, label: o.name } })
  bus.on('getOrders', () => {
    getOrders()
  })
  bus.on('orderMoved', () => {
    getOrders()
    draggedEvent.value = null
  })
})

onBeforeUnmount(() => {
  bus.off('getOrders')
  bus.off('orderMoved')
})
</script>
