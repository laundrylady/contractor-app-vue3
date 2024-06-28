<template>
  <div class="text-right q-pr-md q-mb-sm">
    <q-btn @click="statementAll()" label="Download all" icon="cloud_download" color="primary" :disable="loadingAll"
      :loading="loadingAll" class="q-mr-sm" rounded />
    <q-btn
      @click="openURL('https://teamlaundrylady.co/a/docs/payments-and-commissions/when-and-how-you-will-receive-your-payments')"
      icon="question_mark" round color="primary" size="sm"
      title="Click here for more information regarding commission payments" />
    <div v-if="loadingAll" class="q-mt-sm">Building statements... This may take a while</div>
  </div>
  <q-table :rows="data" :columns="columns" row-key="id" :loading="loading" v-model:pagination="serverPagination"
    @request="request" :rows-per-page-options="rowsPerPageOptions" hide-header flat>
    <template v-slot:body-cell-commission_paid_date="props">
      <q-td :props="props">
        <div class="flex items-center no-wrap">
          <div>
            <div class="text-h6">{{ currencyFormat(props.row.commission_paid_amount_grand) }}</div>
            <div>Week: {{ dbDateDisplay(props.row.start) }} -> {{ dbDateDisplay(props.row.end) }}</div>
            <a class="link items-center flex"
              @click="openURL(`/api/public/usercommissionpaid/statement/${props.row.id}`)"
              v-if="parseFloat(props.row.commission_paid_amount_grand) > 0"><q-icon name="print" class="q-mr-xs" />
              Statement</a>
            <div v-if="parseFloat(props.row.commission_paid_amount_grand) === 0">No payments received</div>
          </div>
        </div>
      </q-td>
    </template>
  </q-table>
</template>
<script setup lang="ts">
import { EventBus, QTableProps, openURL } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat, dbDateDisplay, getRowsPerPage, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { inject, onMounted, ref } from 'vue'

const bus = inject('bus') as EventBus
const data = ref([])
const loading = ref(false)
const loadingAll = ref(false)
const statementAllRef = ref({ start: null, end: null })
const columns: QTableProps['columns'] = [{
  name: 'commission_paid_date',
  sortable: true,
  label: '',
  field: 'commission_paid_date',
  align: 'left',
  style: 'width:100px'
}]

const originalServerPagination = {
  page: 1,
  rowsNumber: getRowsPerPage(),
  rowsPerPage: getRowsPerPage(),
  sortBy: 'id',
  descending: true
}
const serverPagination = ref(JSON.parse(JSON.stringify(originalServerPagination)))

const request = (tableProps: Parameters<NonNullable<QTableProps['onRequest']>>[0] | null = null) => {
  let page: number
  let rowsPerPage: number
  let sortBy: string
  let descending: boolean
  if (tableProps && tableProps.pagination) {
    page = tableProps.pagination.page
    rowsPerPage = tableProps.pagination.rowsPerPage
    sortBy = tableProps.pagination.sortBy
    descending = tableProps.pagination.descending
  } else {
    page = originalServerPagination.page
    rowsPerPage = originalServerPagination.rowsPerPage
    sortBy = originalServerPagination.sortBy
    descending = originalServerPagination.descending
  }
  loading.value = true
  api.post(`/public/usercommissionpaid/datatable/${page}`, {
    sortBy,
    sort_order: descending ? 'desc' : 'asc',
    skip: page,
    rowsPerPage
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
    }).catch((response) => {
      useMixinDebug(response)
    })
}

const statementAll = () => {
  loadingAll.value = true
  api.post('/public/usercommissionpaid/statementall', statementAllRef.value).catch(error => { useMixinDebug(error) })
}

onMounted(() => {
  request()
  bus.on('statementAll', (data: LooseObject) => {
    console.log(data)
    loadingAll.value = false
    document.location.assign(`/api/public/usercommissionpaid/statementall/${data.data.fileName}`)
  })
})
</script>
