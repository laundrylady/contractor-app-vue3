<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el label="SMS Log" />
    </q-breadcrumbs>
    <div class="text-h4 q-mb-md">
      SMS Log
    </div>
    <q-card>
      <q-table :rows="data" :columns="columns" row-key="id" :filter="search.keyword" :loading="loading"
        v-model:pagination="serverPagination" @request="request" class="no-shadow"
        :rows-per-page-options="rowsPerPageOptions">
        <template v-slot:top-left>
          <q-input v-model="search.keyword" :debounce="500" placeholder="Keyword">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-created_at="props">
          <q-td :props="props">
            {{ fromNowTz(props.row.created_at) }}<br /><small class="text-grey">{{ dateTimeTz(props.row.created_at)
            }}</small>
          </q-td>
        </template>
        <template v-slot:body-cell-sending_user_id="props">
          <q-td :props="props">
            <span v-if="props.row.sendingUser">{{ props.row.sendingUser.fullname }}</span>
          </q-td>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>
<script setup lang="ts">
import { QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { fromNowTz, dateTimeTz, getRowsPerPage, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { onMounted, reactive, ref } from 'vue'

const data = ref()
const topRef = ref<HTMLDivElement | null>(null)
const loading = ref(false)
const search = reactive({ keyword: null, type: 'contractor', status: 'active', role: 'contractor' })
const columns: QTableProps['columns'] = [{
  name: 'created_at',
  label: 'Sent',
  align: 'left',
  field: 'created_at',
  sortable: true
}, {
  name: 'sending_user_id',
  label: 'Sent by',
  align: 'left',
  field: 'sending_user_id',
  sortable: true
}, {
  name: 'mobile',
  sortable: true,
  label: 'Mobile',
  field: 'mobile',
  align: 'left'
}, {
  name: 'message',
  sortable: true,
  label: 'Message',
  field: 'message',
  align: 'left'
}, {
  name: 'message_id',
  sortable: true,
  label: 'Message ID',
  field: 'message_id',
  align: 'left'
}]

const serverPagination = ref({
  page: 1,
  rowsNumber: getRowsPerPage(),
  rowsPerPage: getRowsPerPage(),
  sortBy: 'created_at',
  descending: false
})

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
    page = serverPagination.value.page
    rowsPerPage = serverPagination.value.rowsPerPage
    sortBy = serverPagination.value.sortBy
    descending = serverPagination.value.descending
  }
  loading.value = true
  api.post(`/sms/datatable/${page}`, {
    sortBy,
    sort_order: descending ? 'desc' : 'asc',
    skip: page,
    rowsPerPage,
    keyword: search.keyword
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

onMounted(() => {
  request()
})
</script>
