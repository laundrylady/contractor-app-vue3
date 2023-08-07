<template>
  <OrderCreate />
  <q-layout view="lHh LpR fFf" container class="layout-height">
    <q-header :class="{ 'page-title text-black': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <div class="q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center" style="padding-top:11px;">
        <q-breadcrumbs>
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" />
          </template>
          <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
          <q-breadcrumbs-el :label="$t('order.namePlural')" />
        </q-breadcrumbs>
        <q-input v-model="search.keyword" :debounce="500" :placeholder="`Search ${$t('order.namePlural').toLowerCase()}`"
          borderless dense class="q-ml-lg">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-space />
        <q-btn :to="{ name: 'bookingmanager' }" label="Manager" color="secondary" class="q-mr-sm" rounded outline />
        <q-btn @click="newOrder()" round icon="add" color="primary" />
      </div>
    </q-header>
    <q-page-container>
      <q-page padding>
        <q-card>
          <div ref="topRef"></div>
          <q-table :rows="data" :columns="columns" row-key="id" :filter="search.keyword" :loading="loading"
            v-model:pagination="serverPagination" @request="request" class="no-shadow"
            :rows-per-page-options="rowsPerPageOptions">
            <template v-slot:body-cell-scheduled_pickup_date="props">
              <q-td :props="props">
                <router-link :to="{ name: 'order-edit', params: { id: props.row.id } }" class="link">{{
                  props.row.scheduled_pickup_date
                }} ({{ hourBookingDisplay(props.row.scheduled_pickup_time) }}) <q-icon v-if="props.row.recurring_order"
                    name="sync" title="Recurring" />
                </router-link>
              </q-td>
            </template>
            <template v-slot:body-cell-display_id="props">
              <q-td :props="props">
                <router-link :to="{ name: 'order-edit', params: { id: props.row.id } }" class="link">#{{
                  props.row.display_id
                }}
                </router-link>
              </q-td>
            </template>
            <template v-slot:body-cell-team_id="props">
              <q-td :props="props">
                <router-link :to="{ name: 'team-dashboard', params: { id: props.row.team_id } }" class="link"
                  target="_blank">
                  {{ props.row.team.name }}
                </router-link>
              </q-td>
            </template>
            <template v-slot:body-cell-contractor_user_id="props">
              <q-td :props="props">
                <div v-if="props.row.contractor">
                  <router-link :to="{ name: 'contractor-dashboard', params: { id: props.row.contractor_user_id } }"
                    class="link" target="_blank">
                    <UserAvatar :user="props.row.contractor" /><span class="q-ml-sm">{{ props.row.contractor.fullname
                    }}</span>
                  </router-link>
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <div class="flex items-center no-wrap">
                  <div>
                    <StatusTag :status="props.row.status" />
                  </div>
                  <div v-if="props.row.invoice && props.row.invoice.meta.refunds > 0" class="q-ml-sm" title="Has Refunds">
                    <q-icon name="sync" color="negative" size="22px" />
                  </div>
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-total_price="props">
              <q-td :props="props">
                {{ currencyFormat(props.row.grand_total_price) }}
              </q-td>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn flat icon="more_vert" round>
                  <q-menu>
                    <q-list>
                      <q-item clickable v-close-popup :to="{ name: 'contractor-edit', params: { id: props.row.id } }">
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
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { EventBus, QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import OrderCreate from 'src/components/order/OrderCreate.vue'
import StatusTag from 'src/components/StatusTag.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, getRowsPerPage, hourBookingDisplay, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const bus = inject('bus') as EventBus
const i8n = useI18n()
const data = ref()
const loading = ref(false)
const topRef = ref<HTMLDivElement | null>(null)
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
  name: 'status',
  label: 'Status',
  align: 'left',
  field: 'status',
  sortable: true
}, {
  label: 'Actions',
  name: 'actions',
  sortable: false,
  field: 'actions'
}]

const serverPagination = ref({
  page: 1,
  rowsNumber: getRowsPerPage(),
  rowsPerPage: getRowsPerPage(),
  sortBy: 'display_id',
  descending: true
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
  api.post(`/order/datatable/${page}`, {
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

const deleteOrder = (id: number) => {
  confirmDelete('This action is not reversible').onOk(() => {
    api.delete(`/order/${id}`).then(() => {
      request()
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

const newOrder = () => {
  bus.emit('newOrder')
}

onMounted(() => {
  bus.on('orderLoadMore', () => {
    request()
  })
  request()
})

onBeforeUnmount(() => {
  bus.off('orderLoadMore')
})
</script>
