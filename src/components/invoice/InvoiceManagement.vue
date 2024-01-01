<template>
  <div class="row q-col-gutter-sm q-mt-sm q-mb-sm q-ml-sm q-mr-sm">
    <div class="col-xs-6 col-lg-2">
      <DateFieldSlim v-model="search.start" label="Start" outlined dense class="full-width" :clearable="true" />
    </div>
    <div class="col-xs-6 col-lg-2">
      <DateFieldSlim v-model="search.end" label="End" outlined dense class="full-width" :clearable="true" />
    </div>
    <div class="col-xs-12 col-lg-3">
      <q-select v-model="search.status" outlined dense
        :options="[{ value: 'DRAFT', label: 'Draft' }, { value: 'AUTHORISED', label: 'Awaiting Payment' }, { value: 'PAID', label: 'Paid' }]"
        label="Status" emit-value map-options clearable />
    </div>
    <div class="col-xs-10 col-lg-3">
      <q-input v-model="search.keyword" :debounce="500" :placeholder="`Search ${$t('invoice.namePlural').toLowerCase()}`"
        filled dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="col-xs-2 col-lg-1">
      <q-btn @click="request()" icon="search" color="primary" class="q-ml-sm" round />
    </div>
  </div>
  <q-card>
    <div ref="topRef"></div>
    <q-table :rows="data" :columns="columns" row-key="id" :filter="search.keyword" :loading="loading"
      v-model:pagination="serverPagination" @request="request" class="no-shadow"
      :rows-per-page-options="rowsPerPageOptions" :grid="$q.screen.xs">
      <template v-slot:item="props">
        <q-card class="col-xs-12">
          <q-card-section class="flex">
            <div>#{{ props.row.display_id }} | <router-link
                :to="{ name: 'order-edit', params: { id: props.row.order.id } }" class="link" v-if="props.row.order">{{
                  $t('order.name') }} #{{ props.row.order.display_id }}</router-link>
              <div v-if="props.row.team">
                {{ props.row.team.name }}
              </div>
              <StatusTag :status="props.row.status" v-if="props.row.status !== 'AUTHORISED'" :text-only="true" />
              <StatusTag status="Awaiting Payment" v-if="props.row.status === 'AUTHORISED'" :text-only="true" />
              <q-btn flat @click="openURL(`/api/public/invoice/pdf/${props.row.id} `)" icon="print" title="Print Invoice"
                round size="sm" />
            </div>
            <q-space />
            <div class="text-bold text-h6">{{ currencyFormat(props.row.grand_total_price) }}</div>
          </q-card-section>
        </q-card>
      </template>
      <template v-slot:body-cell-display_id="props">
        <q-td :props="props">
          #{{ props.row.display_id }}
        </q-td>
      </template>
      <template v-slot:body-cell-user_id="props">
        <q-td :props="props">
          <UserAvatar :user="props.row.user" class="q-mr-sm" />
          {{ props.row.user.fullname }}
        </q-td>
      </template>
      <template v-slot:body-cell-total_price="props">
        <q-td :props="props">
          {{ currencyFormat(props.row.grand_total_price) }}
        </q-td>
      </template>
      <template v-slot:body-cell-team_id="props">
        <q-td :props="props">
          <span v-if="props.row.team">
            {{ props.row.team.name }}
          </span>
        </q-td>
      </template>
      <template v-slot:body-cell-order_id="props">
        <q-td :props="props">
          <router-link :to="{ name: 'order-edit', params: { id: props.row.order.id } }" class="link"
            v-if="props.row.order">{{ $t('order.name') }} #{{ props.row.order.display_id }}</router-link>
          <a v-if="props.row.giftvoucher" class="link"
            @click="openURL(`/api/public/giftvoucher/pdf/${props.row.giftvoucher.id}`)">Gift Voucher</a>
        </q-td>
      </template>
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <div class="flex items-center no-wrap">
            <div>
              <StatusTag :status="props.row.status" v-if="props.row.status !== 'AUTHORISED'" />
              <StatusTag status="Awaiting Payment" v-if="props.row.status === 'AUTHORISED'" />
            </div>
            <div v-if="props.row.meta.refunds > 0" class="q-ml-sm" title="Has Refunds"><q-icon name="sync"
                color="negative" size="22px" />
            </div>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn flat @click="openURL(`/api/public/invoice/pdf/${props.row.id} `)" icon="print" title="Print Invoice"
            round />
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>
<script setup lang="ts">
import { QTableProps, openURL } from 'quasar'
import { api } from 'src/boot/axios'
import StatusTag from 'src/components/StatusTag.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import DateFieldSlim from 'src/components/form/DateFieldSlim.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat, getRowsPerPage, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const i8n = useI18n()
const data = ref()
const loading = ref(false)
const topRef = ref<HTMLDivElement | null>(null)
const search = reactive({ keyword: null, start: null, end: null, status: null })
const columns: QTableProps['columns'] = [{
  name: 'invoice_date',
  label: i8n.t('invoice.invoiceDate'),
  align: 'left',
  field: 'invoice_date',
  sortable: true,
  style: 'width:100px'
}, {
  name: 'display_id',
  label: i8n.t('invoice.displayId'),
  align: 'left',
  field: 'display_id',
  sortable: true,
  style: 'width:100px'
}, {
  name: 'order_id',
  label: 'Booking',
  align: 'left',
  field: 'order_id',
  sortable: true
}, {
  name: 'team_id',
  label: 'Customer',
  align: 'left',
  field: 'team_id',
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
  sortable: true,
  style: 'width:110px;'
}, {
  label: '',
  name: 'actions',
  sortable: false,
  field: 'actions'
}]

const originalServerPagination = {
  page: 1,
  rowsNumber: getRowsPerPage(),
  rowsPerPage: getRowsPerPage(),
  sortBy: 'invoice_date',
  descending: true
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
  api.post(`/public/invoice/datatable/${page}`, {
    sortBy,
    sort_order: descending ? 'desc' : 'asc',
    skip: page,
    rowsPerPage,
    keyword: search.keyword,
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

onMounted(() => {
  request()
})
</script>