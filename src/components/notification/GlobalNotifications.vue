<template>
  <q-dialog v-model="showModal">
    <q-card class="modal">
      <q-toolbar>
        <q-toolbar-title>{{ shown.subject }}</q-toolbar-title>
        <q-btn icon="close" flat round dense v-close-popup />
      </q-toolbar>
      <q-card-section>
        <div v-html="shown.html_content"></div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-card>
    <q-table :rows="data" :columns="columns" row-key="id" :filter="search.keyword" :loading="loading"
      v-model:pagination="serverPagination" @request="request" flat :rows-per-page-options="rowsPerPageOptions">
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
      <template v-slot:body-cell-to="props">
        <q-td :props="props">
          <span v-if="!props.row.amazonemails.length">{{ props.row.to }}</span>
          <template v-if="props.row.amazonemails">
            <span v-for="a in props.row.amazonemails" :key="a.email">
              {{ a.email }}
              <AmazonSesStatus :status="props.row.amazon_ses_status" />
            </span>
          </template>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn @click="showNotification(props.row)" icon="visibility" flat />
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>
<script setup lang="ts">
import { EventBus, QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { dateTimeTz, fromNowTz, getRowsPerPage, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import AmazonSesStatus from '../AmazonSesStatus.vue'

interface Props {
  notifiable_id: number | string,
  notifiable_type: string,
  bulk?: boolean
}
const props = defineProps<Props>()

const bus = inject('bus') as EventBus
const data = ref()
const loading = ref(false)
const shown = ref()
const showModal = ref(false)
const search = reactive({ keyword: null })
const columns: QTableProps['columns'] = [{
  name: 'created_at',
  label: 'Sent',
  align: 'left',
  field: 'created_at',
  sortable: true
}, {
  name: 'to',
  sortable: true,
  label: 'To',
  field: 'to',
  align: 'left'
}, {
  name: 'subject',
  sortable: true,
  label: 'Subject',
  field: 'subject',
  align: 'left'
}, {
  name: 'actions',
  sortable: false,
  label: '',
  field: 'actions',
  align: 'right'
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
  api.post(`/notification/datatable/${page}`, {
    sortBy,
    sort_order: descending ? 'desc' : 'asc',
    skip: page,
    rowsPerPage,
    keyword: search.keyword,
    notifiable_id: props.notifiable_id,
    notifiable_type: props.notifiable_type,
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

// TODO: Type notification
const showNotification = (notification: LooseObject) => {
  shown.value = notification
  showModal.value = true
}

onMounted(() => {
  request()
  bus.on('getNotifications', () => {
    request()
  })
})

onBeforeUnmount(() => {
  bus.off('getNotifications')
})
</script>
