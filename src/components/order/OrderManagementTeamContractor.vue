<template>
  <OrderCreate />
  <div class="flex items-center q-mb-md" style="padding-top:11px;" v-if="!$q.screen.xs">
    <q-breadcrumbs>
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el :label="$t('order.namePlural')" />
    </q-breadcrumbs>
  </div>
  <div class="flex q-mt-md">
    <q-select v-model="search.status" dense outlined @update:model-value="request()" label="Booking Status"
      :options="[{ value: 'confirmed', label: 'Confirmed' }, { value: 'in_progress', label: 'In Progress' }, { value: 'AUTHORIZED', label: 'Awaiting Payment' }, { value: 'ready_for_delivery', label: 'Ready for Delivery' }, { value: 'completed', label: 'Completed' }]"
      map-options emit-value class="col-grow" />
    <q-btn icon="filter_alt" @click="toggleFilters()" flat round class="q-ml-xs" />
  </div>
  <div class="row q-col-gutter-md q-mt-xs q-mb-md" v-if="showFilters">
    <div class="col-xs-6">
      <DateField v-model="search.start" label="Start" :dense="true" :outlined="true" :clearable="true"
        @update:model-value="request()" />
    </div>
    <div class="col-xs-6">
      <DateField v-model="search.end" label="End" :dense="true" :outlined="true" :clearable="true"
        @update:model-value="request()" />
    </div>
  </div>
  <q-card>
    <div ref="topRef" class="q-mt-sm"></div>
    <q-table :rows="data" :columns="columns" row-key="id" :loading="loading" v-model:pagination="serverPagination"
      @request="request" class="orders-table" flat :rows-per-page-options="rowsPerPageOptions" wrap-cells hide-header
      grid>
      <template v-slot:item="props">
        <div :class="orderColor(props.row)" class="col-xs-12">
          <div class="q-pa-md">
            <OrderListFormat :orders="[props.row]" :no-avatar="true" :dense="true" :status="true" :booking-id="true"
              :nobackground="true" />
          </div>
        </div>
      </template>
    </q-table>
  </q-card>
</template>
<script setup lang="ts">
import moment from 'moment-timezone'
import { EventBus, QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import DateField from 'src/components/form/DateField.vue'
import OrderCreate from 'src/components/order/OrderCreate.vue'
import OrderListFormat from 'src/components/order/OrderListFormat.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { getRowsPerPage, orderColor, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  team_id: number
}
const props = defineProps<Props>()
const bus = inject('bus') as EventBus
const i8n = useI18n()
const data = ref()
const loading = ref(false)
const showFilters = ref(true)
const topRef = ref<HTMLDivElement | null>(null)
// search interface
interface Search {
  team_id: null | number,
  start: null | string,
  end: null | string,
  status: string
}
const search = reactive<Search>({
  team_id: null,
  start: moment().startOf('isoWeek').format('DD/MM/YYYY'),
  end: moment().endOf('isoWeek').format('DD/MM/YYYY'),
  status: ''
})
const columns: QTableProps['columns'] = [{
  name: 'display_id',
  label: i8n.t('order.name'),
  align: 'left',
  field: 'display_id',
  sortable: true,
  style: 'width:100px'
}]

const originalServerPagination = {
  page: 1,
  rowsNumber: getRowsPerPage(),
  rowsPerPage: getRowsPerPage(),
  sortBy: 'scheduled_pickup_date',
  descending: false
}
const serverPagination = ref(JSON.parse(JSON.stringify(originalServerPagination)))

const request = (props: Parameters<NonNullable<QTableProps['onRequest']>>[0] | null = null) => {
  let page: number
  let rowsPerPage: number
  let sortBy: string
  let descending: boolean
  if (props && props.pagination) {
    page = props.pagination.page
    rowsPerPage = props.pagination.rowsPerPage
    sortBy = props.pagination.sortBy
    descending = props.pagination.descending
  } else {
    page = originalServerPagination.page
    rowsPerPage = originalServerPagination.rowsPerPage
    sortBy = originalServerPagination.sortBy
    descending = originalServerPagination.descending
  }
  loading.value = true
  api.post(`/public/order/datatable/${page}`, {
    sortBy,
    sort_order: descending ? 'desc' : 'asc',
    skip: page,
    rowsPerPage,
    team_id: search.team_id,
    start: search.start,
    end: search.end,
    status: search.status
  })
    .then((response) => {
      data.value = response.data.rows
      loading.value = false
      setRowsPerPage(rowsPerPage)
      serverPagination.value.rowsNumber = response.data.total
      serverPagination.value.page = page
      serverPagination.value.rowsPerPage = rowsPerPage
      serverPagination.value.sortBy = sortBy
      serverPagination.value.descending = descending
      if (props) {
        topRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }).catch((response) => {
      useMixinDebug(response)
    })
}

const toggleFilters = () => {
  showFilters.value = !showFilters.value
}

onMounted(() => {
  bus.on('orderLoadMore', () => {
    request()
  })
  if (props.team_id) {
    search.team_id = props.team_id
  }
  request()
})

onBeforeUnmount(() => {
  bus.off('orderLoadMore')
})
</script>
