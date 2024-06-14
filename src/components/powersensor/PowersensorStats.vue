<template>
  <q-card class="q-mt-md">
    <q-card-section>
      <div class="flex q-mb-lg">
        <div class="col-shrink">
          <div class="text-h6">Powersensor Usage</div>
        </div>
        <q-space />
        <div class="col-shrink">
          <div class="flex">
            <q-space />
            <div class="flex q-col-gutter-xs no-wrap">
              <div class="col-xs-1">
                <q-btn @click="weekNav('prev')" icon="chevron_left" round flat :disable="loading" />
              </div>
              <div class="col-shrink">
                <date-field v-model="search.start" label="Start" :dense="true" :outlined="true" :disable="true" />
              </div>
              <div class="col-shrink">
                <date-field v-model="search.end" label="End" :dense="true" :outlined="true" :disable="true" />
              </div>
              <div class="col-xs-1">
                <q-btn @click="weekNav('next')" icon="chevron_right" round flat :disable="loading" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!loading && (!data || !data.power_data)">No Powersensor data found.</div>
      <div class="row q-col-gutter-md" v-if="data && data.power_data">
        <div class="col-xs-12 col-md-3" v-for="d in data.power_data.deviceData" :key="d.id">
          <div class="text-h6 text-center">{{ d.value.toFixed(2) }} kw</div>
          <div class="text-center">{{ d.label }}</div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="text-h6 text-center">{{ data.power_data.solar.toFixed(2) }} kw</div>
          <div class="text-center">Solar generation</div>
        </div>
        <div class="col-xs-12 col-md-3">
          <div class="text-h6 text-center">{{ data.power_data.household.toFixed(2) }} kw</div>
          <div class="text-center">Household Total</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
  <pre></pre>
</template>
<script setup lang="ts">
import moment from 'moment-timezone'
import { api } from 'src/boot/axios'
import DateField from 'src/components/form/DateField.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { onMounted, ref } from 'vue'

const loading = ref(false)
const data = ref()
const search = ref({ start: moment().startOf('isoWeek').format('DD/MM/YYYY'), end: moment().endOf('isoWeek').format('DD/MM/YYYY') })

const getData = () => {
  loading.value = true
  api.post('/public/powersensor/usage', search.value).then(response => {
    data.value = response.data
    loading.value = false
  }).catch(error => {
    useMixinDebug(error)
  })
  loading.value = false
}

const weekNav = (dir: string) => {
  if (dir === 'prev') {
    search.value.start = moment(search.value.start, 'DD/MM/YYYY').subtract(1, 'week').startOf('isoWeek').format('DD/MM/YYYY')
    search.value.end = moment(search.value.end, 'DD/MM/YYYY').subtract(1, 'week').endOf('isoWeek').format('DD/MM/YYYY')
  }
  if (dir === 'next') {
    search.value.start = moment(search.value.start, 'DD/MM/YYYY').add(1, 'week').startOf('isoWeek').format('DD/MM/YYYY')
    search.value.end = moment(search.value.end, 'DD/MM/YYYY').add(1, 'week').endOf('isoWeek').format('DD/MM/YYYY')
  }
  getData()
}

onMounted(() => {
  getData()
})
</script>
