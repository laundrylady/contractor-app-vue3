<template>
  <q-table :rows="data" :columns="columns" row-key="id" :loading="loading" v-model:pagination="serverPagination"
    @request="request" :rows-per-page-options="rowsPerPageOptions" hide-header flat>
    <template v-slot:body-cell-commission_paid_date="props">
      <q-td :props="props">
        <div class="flex items-center no-wrap">
          <div>
            <div class="text-h6">{{ currencyFormat(props.row.commission_paid_amount_grand) }}</div>
            <div>Week: {{ dbDateDisplay(props.row.start) }} -> {{ dbDateDisplay(props.row.end) }}</div>
            <a class="link items-center flex"
              @click="openURL(`/api/public/usercommissionpaid/statement/${props.row.id}`)"><q-icon name="print"
                class="q-mr-xs" />
              Statement</a>
          </div>
        </div>
      </q-td>
    </template>
  </q-table>
</template>
<script setup lang="ts">
import { QTableProps, openURL } from 'quasar'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat, dbDateDisplay, getRowsPerPage, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { onMounted, ref } from 'vue'

const data = ref()
const loading = ref(false)
const columns: QTableProps['columns'] = [{
  name: 'commission_paid_date',
  sortable: true,
  label: '',
  field: 'commission_paid_date',
  align: 'left',
  style: 'width:100px'
}]

const serverPagination = ref({
  page: 1,
  rowsNumber: getRowsPerPage(),
  rowsPerPage: getRowsPerPage(),
  sortBy: 'id',
  descending: true
})

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
    page = serverPagination.value.page
    rowsPerPage = serverPagination.value.rowsPerPage
    sortBy = serverPagination.value.sortBy
    descending = serverPagination.value.descending
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

onMounted(() => {
  request()
})
</script>
