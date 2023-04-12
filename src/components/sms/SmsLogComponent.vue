<template>
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
</template>
<script setup lang="ts">
import { EventBus, QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { fromNowTz, dateTimeTz, getRowsPerPage, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { onMounted, reactive, ref, inject, onBeforeUnmount } from 'vue'

interface Props {
  team_id?: number,
  bulk?: boolean,
  order_id?: string,
  user_id?: number
}
const props = defineProps<Props>()

const bus = inject('bus') as EventBus
const data = ref()
const loading = ref(false)
const search = reactive({ keyword: null })
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
  descending: true
})

const request = (pageProps: Parameters<NonNullable<QTableProps['onRequest']>>[0] | null = null) => {
  let page: number
  let rowsPerPage: number
  let sortBy: string
  let descending: boolean
  if (pageProps && pageProps.pagination) {
    page = pageProps.pagination.page
    rowsPerPage = pageProps.pagination.rowsPerPage
    sortBy = pageProps.pagination.sortBy
    descending = pageProps.pagination.descending
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
    keyword: search.keyword,
    user_id: props.user_id,
    team_id: props.team_id,
    order_id: props.order_id,
    bulk: props.bulk
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
  bus.on('getSmsLog', () => {
    request()
  })
})

onBeforeUnmount(() => {
  bus.off('getSmsLog')
})
</script>
