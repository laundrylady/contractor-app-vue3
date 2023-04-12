<template>
  <q-table :rows="data" :columns="columns" row-key="id" :filter="search.keyword" :loading="loading"
    v-model:pagination="serverPagination" @request="request" :rows-per-page-options="rowsPerPageOptions">
    <template v-slot:top-left>
      <q-input v-model="search.keyword" :debounce="500" placeholder="Keyword">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:body-cell-scheduled_pickup_date="props">
      <q-td :props="props">
        <router-link :to="{ name: 'order-edit', params: { id: props.row.id } }" class="link">{{
          props.row.scheduled_pickup_date
        }} ({{ hourBookingDisplay(props.row.scheduled_pickup_time) }})
        </router-link>
      </q-td>
    </template>
    <template v-slot:body-cell-display_id="props">
      <q-td :props="props">
        <router-link :to="{ name: 'order-edit', params: { id: props.row.id } }" class="link" target="_blank">
          #{{ props.row.display_id }}
        </router-link>
      </q-td>
    </template>
    <template v-slot:body-cell-team_id="props">
      <q-td :props="props">
        <router-link :to="{ name: 'team-dashboard', params: { id: props.row.team_id } }" class="link" target="_blank">
          {{ props.row.team.name }}
        </router-link>
      </q-td>
    </template>
    <template v-slot:body-cell-contractor_user_id="props">
      <q-td :props="props">
        <router-link :to="{ name: 'contractor-dashboard', params: { id: props.row.contractor_user_id } }" class="link"
          target="_blank">
          {{ props.row.contractor.fullname }}
        </router-link>
      </q-td>
    </template>
    <template v-slot:body-cell-total_price="props">
      <q-td :props="props">
        {{ currencyFormat(props.row.grand_total_price) }}
      </q-td>
    </template>
    <template v-slot:body-cell-status="props">
      <q-td :props="props">
        <status-tag :status="props.row.status" />
      </q-td>
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn flat icon="more_vert">
          <q-menu>
            <q-list>
              <q-item clickable v-close-popup :to="{ name: 'order-edit', params: { id: props.row.id } }">
                <q-item-section>Edit record</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="deleteOrder(props.row.id)">
                <q-item-section>Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-td>
    </template>
  </q-table>
</template>
<script setup lang="ts">
import { EventBus, QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import StatusTag from 'src/components/StatusTag.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, getRowsPerPage, hourBookingDisplay, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  team_id?: number,
  contractor_user_id?: number
}
const props = defineProps<Props>()
const bus = inject('bus') as EventBus
const data = ref()
const loading = ref(false)
const i8n = useI18n()
const search = reactive({ keyword: null })
const columns: QTableProps['columns'] = [{
  name: 'display_id',
  label: i8n.t('order.id'),
  align: 'left',
  field: 'display_id',
  sortable: true,
  style: 'width:100px'
}, {
  name: 'scheduled_pickup_date',
  sortable: true,
  label: i8n.t('order.scheduledPickupDate'),
  field: 'scheduled_pickup_date',
  align: 'left',
  style: 'width:100px'
}, {
  name: 'team_id',
  label: i8n.t('team.name'),
  align: 'left',
  field: 'team_id',
  sortable: true
}, {
  name: 'contractor_user_id',
  label: i8n.t('contractor.name'),
  align: 'left',
  field: 'contractor_user_id',
  sortable: true
}, {
  name: 'total_price',
  label: 'Total',
  align: 'left',
  field: 'total_price',
  sortable: true
}, {
  name: 'status',
  label: 'Status',
  align: 'left',
  field: 'status',
  sortable: true
}, {
  name: 'actions',
  label: 'Actions',
  field: 'actions',
  sortable: false
}]

const serverPagination = ref({
  page: 1,
  rowsNumber: getRowsPerPage(),
  rowsPerPage: getRowsPerPage(),
  sortBy: 'display_id',
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
  api.post(`/order/datatable/${page}`, {
    sortBy,
    sort_order: descending ? 'desc' : 'asc',
    skip: page,
    rowsPerPage,
    keyword: search.keyword,
    team_id: props.team_id,
    contractor_user_id: props.contractor_user_id
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

const deleteOrder = (id: number) => {
  confirmDelete('This action is not reversible').onOk(() => {
    api.delete(`/order/${id}`).then(() => {
      request()
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

onMounted(() => {
  request()
  bus.on('orderLoadMore', () => {
    request()
  })
})

onBeforeUnmount(() => {
  bus.off('orderLoadMore')
})
</script>
