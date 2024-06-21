<template>
  <div v-if="!$q.screen.xs">
    <q-breadcrumbs class="q-mb-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el label="Profile" :to="{ name: 'orders' }" />
    </q-breadcrumbs>
  </div>
  <div class="q-mt-lg text-center" v-if="loading">
    <q-linear-progress indeterminate color="primary" height="2px" />
    <div class="q-mt-md q-mb-lg">
      Loading profile
    </div>
  </div>
  <div v-if="!loading">
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-xs-12 col-sm-6">
        <q-card class="bg-accent fit" style="height:160px;">
          <q-card-section>
            <div class="flex items-center">
              <div class="text-h6">Weekly Target</div>
              <q-space />
              <q-btn icon="edit" flat round size="sm" @click="showWeeklyTargetInput = true" />
              <q-dialog v-model="showWeeklyTargetInput">
                <q-card class="modal-sm">
                  <q-toolbar class="bg-primary text-white">
                    <q-toolbar-title>Update Weekly Target</q-toolbar-title>
                    <q-space />
                    <q-btn v-close-popup icon="close" round dense flat />
                  </q-toolbar>
                  <q-card-section>
                    <q-input v-model="weeklyTarget" autofocus outlined label="Enter a weekly target" type="number" />
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn label="Cancel" flat color="secondary" v-close-popup rounded /> <q-btn
                      @click="updateWeeklyTarget()" label="Update" color="primary" rounded />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
            <div class="text-center" style="height:65px;">
              <q-circular-progress :value="dashboard.weeklyOrders.percentage" size="64px" color="primary"
                track-color="pink-1" v-if="dashboard.weeklyOrders.percentage" />
            </div>
            <div class="text-center text-h6 q-mt-sm">
              {{ currencyFormat(dashboard.weeklyOrders.sum) }} / {{ currencyFormat(model.contractor_target) }} </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card class="bg-secondary text-white fit">
          <q-card-section>
            <div class="text-h6 q-mb-md">Commissions</div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-6">
                <div class="text-h6 text-center">
                  {{ currencyFormat(dashboard.totalCommissionsOwing.grandTotal) }}
                </div>
                <div class="text-center">Owing</div>
              </div>
              <div class="col-xs-6">
                <div class="text-h6 text-center">
                  {{ currencyFormat(dashboard.totalCommissionsPaid.grandTotal) }}
                </div>
                <div class="text-center">
                  Paid
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card class="fit">
          <q-card-section>
            <div class="text-h6 q-mb-md">Current Capacity</div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-6" v-for="c in dashboard.capacity" :key="c.name">
                <div class="text-center">
                  <div class="q-mb-sm"><q-circular-progress :value="parseFloat(c.per)" size="64px" color="secondary"
                      show-value track-color="grey-3" v-if="c.per">
                      <small>{{ c.oc }}/{{ c.cc }}</small>
                    </q-circular-progress>
                  </div>
                  {{ c.name }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card class="fit">
          <q-card-section>
            <div class="text-h6 q-mb-md">Invoicing</div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-6">
                <div class="text-h6 text-center">
                  {{ currencyFormat(dashboard.totalOrdersTotalPrice[0].sum) }}
                </div>
                <div class="text-center">Invoiced</div>
              </div>
              <div class="col-xs-6">
                <div class="text-h6 text-center">
                  {{ currencyFormat(dashboard.totalOrdersTotalOwingGrand) }}
                </div>
                <div class="text-center">
                  <a class="link" @click="showUnpaids = !showUnpaids">Unpaids</a>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section v-if="showUnpaids">
            <q-list bordered separator>
              <q-item v-for="u in dashboard.totalOrdersTotalOwingData" :key="u.id">
                <q-item-section><strong>Booking #{{ u.order.display_id }}</strong><span v-if="u.team">{{ u.team.name
                    }}</span></q-item-section>
                <q-item-section side><span class="text-negative">{{ currencyFormat(u.grand_total_price) }}</span>Due:
                  {{
                    u.due_date
                  }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card class="fit">
          <q-card-section>
            <div class="text-h6 q-mb-md">Bookings</div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-6">
                <div class="text-h6 text-center">
                  {{ dashboard.totalOrdersCount[0].count }}
                </div>
                <div class="text-center">Total</div>
              </div>
              <div class="col-xs-6">
                <div class="text-h6 text-center">
                  {{ dashboard.totalOrdersCountRecurring[0].count }}
                </div>
                <div class="text-center">
                  Recurring
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card class="fit">
          <q-card-section>
            <div class="text-h6 q-mb-md">{{ $t('team.namePlural') }} Rebooked</div>
            <div class="text-center">
              <q-circular-progress :value="parseFloat(dashboard.retainedRebooked.rebookedPercentage)" size="64px"
                color="positive" show-value track-color="grey-3" v-if="dashboard.retainedRebooked.rebookedPercentage">
                {{ dashboard.retainedRebooked.rebooked }}</q-circular-progress>
              <div class="q-mt-sm">Rebooked ({{ dashboard.retainedRebooked.rebookedPercentage }}%)</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card class="fit">
          <q-card-section>
            <div class="text-h6 q-mb-md">{{ $t('team.namePlural') }} Retained</div>
            <div class="text-center">
              <q-circular-progress :value="parseFloat(dashboard.retainedRebooked.retainedPercentage)" size="64px"
                color="positive" show-value track-color="grey-3"
                v-if="dashboard.retainedRebooked.retainedPercentage >= 0">
                {{ dashboard.retainedRebooked.retained }}</q-circular-progress>
              <div class="q-mt-sm">
                Retained ({{ dashboard.retainedRebooked.retainedPercentage }}%)
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <PowersensorStats />
    <div class="text-h6">Current {{ $t('schedule.name') }}</div>
    <p><a href="https://support.teamlaundrylady.co/support/tickets/new" class="link" target="_blank">Click here to let
        us
        know if you need
        to make a
        change.</a></p>
    <q-card><user-roster-view :rosterUser="model" /></q-card>
  </div>
</template>
<script setup lang="ts">
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { Order, User } from 'src/components/models'
import PowersensorStats from 'src/components/powersensor/PowersensorStats.vue'
import UserRosterView from 'src/components/userroster/UserRosterView.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat } from 'src/mixins/help'
import { onMounted, ref, watch, inject } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  model: User
}
const route = useRoute()
const loading = ref(true)
// eslint-disable-next-line
defineProps<Props>()
const bus = inject('bus') as EventBus
const showUnpaids = ref(false)
const weeklyTarget = ref()
const showWeeklyTargetInput = ref(false)

const dashboard = ref()
const recurringOrders = ref<Order[]>()

const getDashboard = () => {
  loading.value = true
  api.get('/public/user/contractor/dashboard').then(response => {
    dashboard.value = response.data
    loading.value = false
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

const getRecurringOrders = () => {
  api.get('/public/user/contractor/recurring').then(response => {
    recurringOrders.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
}

const updateWeeklyTarget = () => {
  console.log(weeklyTarget.value)
  if (weeklyTarget.value) {
    api.put('/public/user/contractor/weeklytarget', { contractor_target: weeklyTarget.value }).then(() => {
      bus.emit('getContractor')
      getDashboard()
      showWeeklyTargetInput.value = false
      weeklyTarget.value = null
    }).catch(error => {
      useMixinDebug(error)
    })
  }
}

onMounted(() => {
  getDashboard()
  getRecurringOrders()
})

watch(() => route.params.id, (newVal) => {
  if (route.name === 'contractor-dashboard') {
    if (newVal) {
      getDashboard()
      getRecurringOrders()
    }
  }
})
</script>
