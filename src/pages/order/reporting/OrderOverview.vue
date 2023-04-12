<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md q-mt-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el label="Reporting" :to="{ name: 'reporting' }" />
      <q-breadcrumbs-el :label="$t('order.namePlural')" />
    </q-breadcrumbs>
    <q-card class="bg-seamless q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md">{{ $t('order.namePlural') }} Overview</div>
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
                  <div>Revenue in Period</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-card class="bg-secondary text-white text-center">
                <q-card-section>
                  <div class="text-h5">{{ data.dateRange.count }}</div>
                  <div>Orders</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <q-list bordered separator>
            <q-item v-for="t in data.dateRange.history" :key="t.week">
              <q-item-section>
                <div>
                  <div class="text-h6">{{ t.week }}</div>
                  {{ dbDateDisplay(t.start) }} -> {{ dbDateDisplay(t.end) }}
                </div>
              </q-item-section>
              <q-item-section side class="text-h6">
                {{ currencyFormat(t.total) }}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-xs-12 col-sm-3">
          <q-card class="bg-positive text-white q-mb-md">
            <q-card-section class="text-center">
              <div class="text-h5">{{ currencyFormat(data.allTime.total) }}</div>
              <div>All Time Revenue</div>
            </q-card-section>
          </q-card>
          <q-card class="bg-seamless q-mb-md">
            <div class="text-center q-pt-md">
              <q-circular-progress :value="parseFloat(data.retainedRebooked.retainedPercentage)" color="primary"
                size="64px" track-color="grey-4" show-value :title="data.retainedRebooked.retained">
                <div class="q-pa-sm text-caption">{{ data.retainedRebooked.retainedPercentage
                }}%</div>
              </q-circular-progress>
            </div>
            <q-card-section class="text-center">
              Retained
            </q-card-section>
          </q-card>
          <q-card class="bg-seamless q-mb-md">
            <div class="text-center q-pt-md">
              <q-circular-progress :value="parseFloat(data.retainedRebooked.rebookedPercentage)" color="primary"
                size="64px" track-color="grey-4" show-value :title="data.retainedRebooked.rebooked">
                <div class="q-pa-sm text-caption">{{ data.retainedRebooked.rebookedPercentage
                }}%</div>
              </q-circular-progress>
            </div>
            <q-card-section class="text-center">
              Rebooked
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
import DateField from 'src/components/form/DateField.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat, dbDateDisplay, getDateRange } from 'src/mixins/help'
import { onMounted, reactive, ref } from 'vue'
import { GChart } from 'vue-google-charts'
import { useI18n } from 'vue-i18n'

const data = ref()
const dataChart = ref()
const i8n = useI18n()
const chartOptions = ref({
  title: `${i8n.t('order.namePlural')} History`,
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
  $q.loading.show({ message: 'Fetching order data...' })
  api.post('/order/reporting/overview', search).then(response => {
    data.value = response.data
    dataChart.value = [['Week', 'Amount']]
    for (const d of response.data.dateRange.history) {
      dataChart.value.push([d.week, d.total])
    }
    data.value.dateRange.history = data.value.dateRange.history.reverse()
    $q.loading.hide()
  }).catch(error => {
    useMixinDebug(error)
    $q.loading.hide()
  })
}

onMounted(() => {
  getReport()
})

</script>
