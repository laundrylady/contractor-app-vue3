<template>
  <div v-if="model.id && dashboard">
    <div v-if="!$q.screen.xs">
      <q-breadcrumbs class="q-mb-md">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" />
        </template>
        <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
        <q-breadcrumbs-el label="Profile" :to="{ name: 'orders' }" />
      </q-breadcrumbs>
    </div>
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-xs-12 col-sm-6">
        <q-card class="bg-accent fit" style="height:160px;">
          <q-card-section>
            <div class="text-h6">Weekly Target</div>
            <div class="text-center" style="height:65px;">
              <q-circular-progress :value="dashboard.weeklyOrders.percentage" size="64px" color="primary"
                track-color="pink-1" v-if="dashboard.weeklyOrders.percentage" />
            </div>
            <div class="text-center q-mt-sm">
              {{ currencyFormat(dashboard.weeklyOrders.sum) }} / {{ currencyFormat(model.contractor_target) }} <span
                v-if="dashboard.weeklyOrders.diff === 0">~</span><q-icon name="arrow_downward" color="negative"
                v-if="dashboard.weeklyOrders.diff < 0" /><q-icon name="arrow_upward" color="positive"
                v-if="dashboard.weeklyOrders.diff > 0" /> <span v-if="dashboard.weeklyOrders.diff !== 0"
                :class="{ 'text-positive': dashboard.weeklyOrders.diff > 0, 'text-negative': dashboard.weeklyOrders.diff < 0 }">{{
                  dashboard.weeklyOrders.diff }}%</span> </div>
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
            <div class="text-h6 q-mb-md">{{ $t('team.namePlural') }} Rebooked</div>
            <div class="text-center">
              <q-circular-progress :value="parseFloat(dashboard.retainedRebooked.rebookedPercentage)" size="64px"
                color="secondary" show-value track-color="grey-3" v-if="dashboard.retainedRebooked.rebookedPercentage">
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
                color="secondary" show-value track-color="grey-3"
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
    <div class="text-h6">Current {{ $t('schedule.name') }}</div>
    <p>We are generating your schedule from the roster below. If you need to permenantly make a change to your
      roster, <a href="mailto:support@thelaundrylady.com.au" class="link">click here to let us know!</a></p>
    <q-card><user-roster-view :rosterUser="model" /></q-card>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { Order, User } from 'src/components/models'
import UserRosterView from 'src/components/userroster/UserRosterView.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat } from 'src/mixins/help'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  model: User
}
const route = useRoute()
// eslint-disable-next-line
const props = defineProps<Props>()

const dashboard = ref()
const recurringOrders = ref<Order[]>()

const getDashboard = () => {
  api.get('/public/user/contractor/dashboard').then(response => {
    dashboard.value = response.data
  }).catch(error => {
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
