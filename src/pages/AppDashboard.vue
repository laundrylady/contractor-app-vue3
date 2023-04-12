<template>
  <UserRosterApprove />
  <q-page padding v-if="dashboard">
    <q-breadcrumbs class="q-mt-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'dashboard' }" />
    </q-breadcrumbs>
    <div class="text-h4 q-mb-xs q-mt-md">
      Dashboard
    </div>
    <div class="q-mt-lg">
      <q-card class="bg-primary text-white q-mb-lg" v-if="dashboard.rosterApprovals.length">
        <q-card-section>
          <div class="text-h6 q-mb-md">Roster Location Changes</div>
          <q-list separator>
            <q-item v-for="r in dashboard.rosterApprovals" :key="r.id" clickable @click="approveRoster(r.id)">
              <q-item-section>
                <div class="text-h7">{{ r.user.fullname }}</div>
                <div>{{ dayDisplay(r.day) }}s ({{ hourDisplay(r.start_time) }} - {{ hourDisplay(r.end_time) }})</div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
      <q-tabs v-model="currentTab" align="left" class="q-mb-md">
        <q-tab name="orders" label="Overview" />
        <q-tab name="contractors" :label="`${$t('contractor.namePlural')} Map`" />
        <q-tab name="customers" :label="`${$t('team.namePlural')} Map`" />
      </q-tabs>
      <div v-if="currentTab === 'orders'" class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-9">
          <q-card class="bg-seamless q-mb-lg" v-if="dashboard.unAssigned.length">
            <q-card-section>
              <div class="text-h6 q-mb-md text-negative">Unassigned</div>
              <OrderListFormat :orders="dashboard.unAssigned" />
            </q-card-section>
          </q-card>
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-12">
              <q-card class="bg-seamless q-mb-lg" v-if="dashboard.newContractors.length">
                <q-card-section>
                  <div class="text-h6 q-mb-md">Recently Joined</div>
                  <q-list class="bg-white" separator>
                    <q-item v-for="c in dashboard.newContractors" :key="c.id">
                      <q-item-section avatar>
                        <UserAvatar :user="c" />
                      </q-item-section>
                      <q-item-section>
                        <div>
                          <router-link :to="{ name: 'contractor-dashboard', params: { id: c.id } }"
                            class="link text-h6">{{
                              c.fullname }}</router-link>
                          <div v-if="c.postcoderegionsuburb">
                            {{ c.postcoderegionsuburb.locality }} {{ c.postcoderegionsuburb.state }}
                          </div>
                        </div>
                      </q-item-section>
                      <q-item-section side>
                        {{ c.contractor_start_date }}
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-xs-12 col-sm-12">
              <q-card class="bg-seamless q-mb-lg" v-if="dashboard.newCustomers.length">
                <q-card-section>
                  <div class="text-h6 q-mb-md">New {{ $t('team.namePlural') }}</div>
                  <q-list class="bg-white" separator>
                    <q-item v-for="c in dashboard.newCustomers" :key="c.id">
                      <q-item-section avatar>
                        <UserAvatar :user="c" />
                      </q-item-section>
                      <q-item-section>
                        <div>
                          <router-link :to="{ name: 'team-dashboard', params: { id: c.id } }" class="link text-h6">{{
                            c.name }}</router-link>
                          <div v-if="c.suburbpostcoderegion">
                            {{ c.suburbpostcoderegion.locality }} {{ c.suburbpostcoderegion.state }}
                          </div>
                        </div>
                      </q-item-section>
                      <q-item-section side>
                        {{ fromNowTz(c.created_at) }}
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-3">
          <div class="text-bold q-mb-sm text-center" style="font-size:15px;"><q-btn @click="decreaseWeek()" flat
              icon="chevron_left" class="q-mr-sm" round />{{
                search.start }} -> {{
    search.end }}<q-btn @click="increaseWeek()" flat icon="chevron_right" class="q-ml-sm" round /></div>
          <div class="row q-col-gutter-md q-mb-lg" v-if="landingData">
            <div v-if="!landingData.length" class="text-center col-xs-12">No records found for this date range.</div>
            <div class="col-xs-12" v-for="l in landingData" :key="l.name">
              <q-card>
                <q-list class="bg-white">
                  <q-item>
                    <q-item-section side>
                      <q-circular-progress :value="l.per" size="40px" color="primary" track-color="grey-5"
                        :thickness="0.3" />
                    </q-item-section>
                    <q-item-section>
                      <div class="text-h6">{{ l.name }} Bookings</div>
                      <div>
                        {{ l.oc }}/{{ l.cc }} - {{ l.per }}%
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>
            </div>
          </div>
          <q-card class="bg-secondary text-white">
            <q-card-section class="text-h6">Statistics</q-card-section>
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-4">
                  <div class="text-center">
                    <div class="text-h5 text-bold">{{ dashboard.totalOrdersCount[0].count }}</div>
                    {{ $t('order.namePlural') }}
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div class="text-center">
                    <div class="text-h5 text-bold">{{ dashboard.totalContractors[0].count }}</div>
                    {{ $t('contractor.namePlural') }}
                  </div>
                </div>
                <div class="col-xs-12 col-sm-4">
                  <div class="text-center">
                    <div class="text-h5 text-bold">{{ dashboard.totalCustomers[0].count }}</div>
                    {{ $t('team.namePlural') }}
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
          <q-card class="bg-seamless q-mb-md q-mt-sm">
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-6">
                  <div class="text-center q-pt-md">
                    <q-circular-progress :value="parseFloat(dashboard.retainedRebooked.retainedPercentage)"
                      color="secondary" size="64px" track-color="grey-4" show-value
                      :title="dashboard.retainedRebooked.retained">
                      <div class="q-pa-sm text-caption">{{ dashboard.retainedRebooked.retainedPercentage
                      }}%</div>
                    </q-circular-progress>
                    <div class="q-mt-sm">Retained</div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <div class="text-center q-pt-md">
                    <q-circular-progress :value="parseFloat(dashboard.retainedRebooked.rebookedPercentage)"
                      color="secondary" size="64px" track-color="grey-4" show-value
                      :title="dashboard.retainedRebooked.rebooked">
                      <div class="q-pa-sm text-caption">{{ dashboard.retainedRebooked.rebookedPercentage
                      }}%</div>
                    </q-circular-progress>
                    <div class="q-mt-sm">Rebooked</div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <ContractorsMap v-if="currentTab === 'contractors'" />
      <CustomersMap v-if="currentTab === 'customers'" />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import moment from 'moment'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import ContractorsMap from 'src/components/maps/ContractorsMap.vue'
import CustomersMap from 'src/components/maps/CustomersMap.vue'
import OrderListFormat from 'src/components/order/OrderListFormat.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import UserRosterApprove from 'src/components/userroster/UserRosterApprove.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { dayDisplay, fromNowTz, hourDisplay } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, ref } from 'vue'

const bus = inject('bus') as EventBus
const $q = useQuasar()
const dashboard = ref()
const landingData = ref()
const loaded = ref(false)
const currentTab = ref('orders')
const currentDate = ref()
const search = ref({ start: null, end: null })

const getDashboardStats = () => {
  $q.loading.show({ message: 'Fetching data...' })
  api.post('/user/dashboardstats?allFeed=true').then((response) => {
    dashboard.value = response.data
    loaded.value = true
    getLandingData()
  }).catch((response) => {
    useMixinDebug(response)
    loaded.value = true
    $q.loading.hide()
  })
}

const getLandingData = () => {
  api.post('/user/contractor/landing', search.value).then(response => {
    landingData.value = response.data
    $q.loading.hide()
  }).catch(error => {
    useMixinDebug(error)
    $q.loading.hide()
  })
}

const increaseWeek = () => {
  currentDate.value = currentDate.value.add(1, 'weeks')
  search.value = { start: currentDate.value.startOf('isoWeek').format('DD/MM/YYYY'), end: currentDate.value.endOf('isoWeek').format('DD/MM/YYYY') }
  getDashboardStats()
}

const decreaseWeek = () => {
  currentDate.value = currentDate.value.subtract(1, 'weeks')
  search.value = { start: currentDate.value.startOf('isoWeek').format('DD/MM/YYYY'), end: currentDate.value.endOf('isoWeek').format('DD/MM/YYYY') }
  getDashboardStats()
}

const approveRoster = (id: number) => {
  bus.emit('approveRoster', id)
}

onMounted(() => {
  currentDate.value = moment()
  search.value = { start: currentDate.value.startOf('isoWeek').format('DD/MM/YYYY'), end: currentDate.value.endOf('isoWeek').format('DD/MM/YYYY') }
  getDashboardStats()
  bus.on('getDashboardStats', () => {
    getDashboardStats()
  })
})

onBeforeUnmount(() => {
  bus.off('getDashboardStats')
})
</script>
