<template>
  <q-card class="q-mt-md">
    <q-card-section>
      <div class="flex q-mb-lg" :class="{ 'no-wrap': !$q.screen.xs }">
        <div class="col-shrink">
          <div class="text-h6">Powersensor Usage</div>
          <div>Support text blurb</div>
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
      <div v-if="!loading && (!data || !data.visible.length)">No Powersensor data found.</div>
      <div v-if="data && data.visible.length" class="row q-col-gutter-md items-center">
        <div class="col-xs-12 col-md-3 text-center">
          <div class="text-h4 text-bold">{{ data.totals.visible.toFixed(2) }} kw</div>
          Total Device Usage
          <div v-if="!$q.screen.xs && data.hiddenDevices.length" class="q-mt-xs">
            <q-btn @click="showHidden = !showHidden" label="Show hidden devices" color="grey" flat rounded size="sm" />
          </div>
        </div>
        <div class="col-xs-12 col-md-9">
          <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-md-3" v-for="d in data.visible" :key="d.id">
              <div class="text-center"><q-knob :modelValue="d.per" color="green" track-color="green-1" show-value
                  size="55px" />
              </div>
              <div class="text-h6 text-center">{{ d.value.toFixed(2) }} kw</div>
              <div class="text-center">{{ d.label }}</div>
              <div class="text-center q-mt-xs"><q-btn @click="hideDevice(d.id)" color="grey" flat size="sm" rounded
                  label="Hide" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showHidden && data.hiddenDevices.length" class="q-mt-md">
        <q-list bordered separator>
          <q-item-label header>HIDDEN DEVICES</q-item-label>
          <q-item v-for="h in data.hiddenDevices" :key="h.id">
            <q-item-section>{{ h.name }}</q-item-section>
            <q-item-section side><q-btn @click="unHideDevice(h.id)" color="grey" label="Unhide" flat
                rounded /></q-item-section>
          </q-item>
        </q-list>
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
const showHidden = ref(false)

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

const hideDevice = (id: string) => {
  api.post('/public/powersensordevicehidden/add', { id }).then(() => {
    getData()
  }).catch(error => { useMixinDebug(error) })
}

const unHideDevice = (id: string) => {
  api.delete(`/public/powersensordevicehidden/${id}`).then(() => {
    getData()
  }).catch(error => { useMixinDebug(error) })
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
