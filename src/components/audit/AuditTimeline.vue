<template>
  <div v-if="!nobox">
    <div class="text-h5">Audit History</div>
    <p>Below is the audit trail for the module.</p>
  </div>
  <q-card>
    <q-table :rows="data" :columns="columns" row-key="id" :filter="search.keyword" :loading="loading"
      v-model:pagination="serverPagination" @request="request" :rows-per-page-options="rowsPerPageOptions">
      <template v-slot:top-left>
        <q-input v-model="search.keyword" :debounce="500" placeholder="Keyword">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <span v-if="col.name === 'user_id' && props.row.user">{{ props.row.user.fullname }}</span>
            <span v-if="col.name === 'auditable'">{{ props.row.auditable }}</span>
            <span v-if="col.name === 'created_at'">{{ fromNowTz(props.row.created_at) }} -
              <span class="text-grey">{{ dateTimeTz(props.row.created_at) }}</span></span>
            <span v-if="col.name === 'event'" class="text-bold"> <q-btn size="sm" color="primary" round dense
                @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" class="q-mr-xs" /> {{
                  col.value }} ({{
    props.row.changes.length }})</span>
            <span v-if="col.name === 'ip'">{{ col.value }}</span>
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <q-list dense>
              <template v-if="props.row.event === 'update'">
                <q-item v-for="(n, index) in props.row.changes" :key="index">
                  <q-item-section side>
                    <q-icon name="chevron_right" />
                  </q-item-section>
                  <q-item-section>
                    <div><strong class="text-capitalize text-grey-6">{{ n.field }}</strong> changed from "{{
                      n.oldValue
                    }}" to "{{ n.value }}"
                    </div>
                  </q-item-section>
                </q-item>
              </template>
              <template v-if="props.row.event === 'create'">
                <q-item v-for="(n, index) in props.row.changes" :key="index">
                  <q-item-section side>
                    <q-icon name="chevron_right" />
                  </q-item-section>
                  <q-item-section>
                    <div><strong class="text-capitalize text-grey-6">{{ n.field }}</strong> set to "{{ n.value }}"</div>
                  </q-item-section>
                </q-item>
              </template>
            </q-list>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card>
</template>
<script setup lang="ts">
import { QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { dateTimeTz, fromNowTz, getRowsPerPage, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { onMounted, reactive, ref } from 'vue'

interface Props {
  auditable_id: number | string,
  auditable_type: string,
  nobox?: boolean
}
const props = defineProps<Props>()

const data = ref()
const loading = ref(false)
const search = reactive({ keyword: null, user_id: null })
const columns: QTableProps['columns'] = [{
  name: 'event',
  sortable: true,
  label: 'Event',
  field: 'event',
  align: 'left',
  format: val => val.toUpperCase()
}, {
  name: 'created_at',
  sortable: true,
  label: 'When',
  field: 'created_at',
  align: 'left'
}, {
  name: 'user_id',
  sortable: true,
  label: 'User',
  field: 'user_id',
  align: 'left'
}, {
  name: 'ip',
  sortable: true,
  label: 'IP',
  field: 'ip',
  align: 'left'
}]

const serverPagination = reactive({
  page: 1,
  rowsNumber: getRowsPerPage(),
  rowsPerPage: getRowsPerPage(),
  sortBy: 'id',
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
    page = serverPagination.page
    rowsPerPage = serverPagination.rowsPerPage
    sortBy = serverPagination.sortBy
    descending = serverPagination.descending
  }
  loading.value = true
  api.post(`/audit/datatable/${page}`, {
    sortBy,
    sort_order: descending ? 'desc' : 'asc',
    skip: page,
    rowsPerPage,
    keyword: search.keyword,
    user_id: search.user_id,
    auditable_id: props.auditable_id,
    auditable: props.auditable_type
  })
    .then((response) => {
      serverPagination.rowsNumber = response.data.total
      data.value = response.data.rows
      loading.value = false
      setRowsPerPage(rowsPerPage)
    }).catch((response) => {
      useMixinDebug(response)
    })
}

onMounted(() => {
  request()
})
</script>
