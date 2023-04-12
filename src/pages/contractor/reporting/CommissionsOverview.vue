<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md q-mt-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el label="Reporting" :to="{ name: 'reporting' }" />
      <q-breadcrumbs-el label="Commissions Overview" />
    </q-breadcrumbs>
    <q-card class="bg-seamless q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md"> Commissions Overview</div>
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-sm-5">
            <date-field v-model="search.start" label="Start" :dense="true" :outlined="true" />
            <q-btn-group flat class="q-mt-xs">
              <q-btn flat @click="populateDateRange('t')" label="T" color="primary" title="Today" />
              <q-btn flat @click="populateDateRange('w')" label="W" color="primary" title="Week" />
              <q-btn flat @click="populateDateRange('m')" label="M" color="primary" title="Month" />
              <q-btn flat @click="populateDateRange('y')" label="Y" color="primary" title="Year" />
            </q-btn-group>
          </div>
          <div class="col-xs-12 col-sm-5">
            <date-field v-model="search.end" label="End" :dense="true" :outlined="true" />
          </div>
          <div class="col-xs-12 col-sm-2">
            <q-btn @click="getReport()" label="Submit" color="primary" />
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div v-if="data && dataChart">
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-9">
          <div style="min-height:200px;">
            <GChart type="LineChart" :data="dataChart" :options="chartOptions" class="q-mb-md" />
          </div>
          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-xs-12 col-sm-6">
              <q-card class="bg-secondary text-white text-center">
                <q-card-section>
                  <div class="text-h5">{{ currencyFormat(data.dateRange.total) }}</div>
                  <div>Paid in Period</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-card class="bg-secondary text-white text-center">
                <q-card-section>
                  <div class="text-h5">{{ data.dateRange.top.length }}</div>
                  <div>Earners</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <q-list bordered separator>
            <q-item v-for="t in data.dateRange.top" :key="t.contractor.id">
              <q-item-section avatar>
                <user-avatar :user="t.contractor" />
              </q-item-section>
              <q-item-section>
                <router-link :to="{ name: 'contractor-dashboard', params: { id: t.contractor.id } }" class="link text-h6"
                  target="_blank">{{ t.contractor.fullname }}</router-link>
              </q-item-section>
              <q-item-section side class="text-h6">
                {{ currencyFormat(t.amount) }}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-xs-12 col-sm-3">
          <q-card class="bg-positive text-white q-mb-md">
            <q-card-section class="text-center">
              <div class="text-h5">{{ currencyFormat(data.allTime.total) }}</div>
              <div>Total Commissions Paid</div>
            </q-card-section>
          </q-card>
          <q-card class="bg-negative text-white q-mb-md" v-if="dataOwing">
            <q-card-section class="text-center">
              <div class="text-h5">{{ currencyFormat(dataOwing.total.total) }}</div>
              <div>Total Commissions Owing</div>
            </q-card-section>
          </q-card>
          <q-card class="bg-seamless">
            <q-card-section>
              <div class="text-h5 q-mb-md">Top Earners</div>
              <q-list separator class="bg-white">
                <q-item v-for="t in data.allTime.top" :key="t.contractor.id">
                  <q-item-section avatar>
                    <user-avatar :user="t.contractor" />
                  </q-item-section>
                  <q-item-section>
                    <router-link :to="{ name: 'contractor-dashboard', params: { id: t.contractor.id } }" class="link"
                      target="_blank">{{ t.contractor.fullname }}</router-link>
                  </q-item-section>
                  <q-item-section side class="text-h6">
                    {{ currencyFormat(t.amount) }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts" setup>
import moment from 'moment-timezone'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import UserAvatar from 'src/components/UserAvatar.vue'
import DateField from 'src/components/form/DateField.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat, getDateRange } from 'src/mixins/help'
import { onMounted, reactive, ref } from 'vue'
import { GChart } from 'vue-google-charts'

const data = ref()
const dataOwing = ref()
const dataChart = ref()
const chartOptions = ref({
  title: 'Commission Payment History',
  height: 200,
  backgroundColor: { fill: 'transparent' }
})
const $q = useQuasar()
const search = reactive({ start: moment().startOf('isoWeek').format('DD/MM/YYYY'), end: moment().endOf('isoWeek').format('DD/MM/YYYY') })

const populateDateRange = (val: string) => {
  const dates = getDateRange(val)
  search.start = dates.start
  search.end = dates.end
}

const getReport = () => {
  $q.loading.show({ message: 'Fetching commission data...' })
  api.post('/user/contractor/reporting/commissionsoverview', search).then(response => {
    data.value = response.data
    dataChart.value = [['Week', 'Amount']]
    for (const d of response.data.dateRange.history) {
      dataChart.value.push([d.week, d.amount])
    }
    $q.loading.hide()
  }).catch(error => {
    useMixinDebug(error)
    $q.loading.hide()
  })
}

onMounted(() => {
  getReport()
  api.post('/user/contractor/reporting/commissionsowing').then(response => {
    dataOwing.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
})

</script>
