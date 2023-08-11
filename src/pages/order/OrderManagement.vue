<template>
  <OrderCreate />
  <q-layout view="lHh LpR fFf" container class="layout-height">
    <q-header :class="{ 'page-title text-black': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <div class="q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center" style="padding-top:11px;" v-if="!$q.screen.xs">
        <q-breadcrumbs>
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" />
          </template>
          <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
          <q-breadcrumbs-el :label="$t('order.namePlural')" />
        </q-breadcrumbs>
      </div>
      <div :class="{ 'q-pa-md': $q.screen.xs }">
        <div class="flex items-center">
          <div class="text-h6">All {{ $t('order.namePlural') }}</div>
          <q-space />
          <q-btn icon="filter_alt" @click="toggleFilters()" flat />
        </div>
        <div class="row q-col-gutter-md q-mt-xs" v-if="showFilters">
          <div class="col-xs-6">
            <DateField v-model="search.start" label="Start" :dense="true" :outlined="true" />
          </div>
          <div class="col-xs-6">
            <DateField v-model="search.end" label="End" :dense="true" :outlined="true" />
          </div>
          <div class="col-xs-9">
            <TeamField v-model="search.team_id" :label="$t('team.name')" :dense="true" :outlined="true" status="active" />
          </div>
          <div class="col-xs-3">
            <q-btn @click="request()" icon="search" color="primary" />
          </div>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <q-page padding :class="{ 'q-pa-md': $q.screen.xs }">
        <q-card>
          <div ref="topRef"></div>
          <q-table :rows="data" :columns="columns" row-key="id" :loading="loading" v-model:pagination="serverPagination"
            @request="request" class="no-shadow" :rows-per-page-options="rowsPerPageOptions">
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
                <div>
                  <router-link :to="{ name: 'order-edit', params: { id: props.row.id } }" class="link">{{
                    displayDateDay(props.row.scheduled_pickup_date) }} {{ props.row.scheduled_pickup_date }} (<span
                      v-if="!props.row.agreed_pickup_time">{{
                        hourBookingDisplay(props.row.scheduled_pickup_time)
                      }}</span><span v-if="props.row.agreed_pickup_time">{{
  hourAgreedDisplay(props.row.agreed_pickup_time)
}}</span>)</router-link>
                </div>
                <div class="text-grey-7">
                  <q-icon name="settings" color="grey-7" /> <span v-if="props.row.productcategories"><span
                      v-for="(c, index) in props.row.productcategories" :key="c.id">{{
                        c.name }}<span v-if="index + 1 !== props.row.productcategories.length"
                        class="q-ml-xs q-mr-xs">&</span></span> pickup with {{ props.row.team.name }}</span>
                </div>
                <div class="text-grey-7"><q-icon name="place" color="grey-7" /> <span class="q-mr-sm"
                    v-if="props.row.team.suburbpostcoderegion">{{ props.row.team.suburbpostcoderegion.locality }}
                    {{ props.row.team.suburbpostcoderegion.state }}</span>
                </div>
                <div class="q-mt-xs">
                  <StatusTag :status="props.row.status" />
                </div>
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
import StatusTag from 'src/components/StatusTag.vue'
import DateField from 'src/components/form/DateField.vue'
import TeamField from 'src/components/form/TeamField.vue'
import OrderCreate from 'src/components/order/OrderCreate.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, displayDateDay, getRowsPerPage, hourAgreedDisplay, hourBookingDisplay, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const bus = inject('bus') as EventBus
const i8n = useI18n()
const data = ref()
const loading = ref(false)
const showFilters = ref(false)
const topRef = ref<HTMLDivElement | null>(null)
const search = reactive({ team_id: null, start: null, end: null })
const columns: QTableProps['columns'] = [{
  name: 'display_id',
  label: i8n.t('order.id'),
  align: 'left',
  field: 'display_id',
  sortable: true,
  style: 'width:100px'
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
  api.post(`/public/order/datatable/${page}`, {
    sortBy,
    sort_order: descending ? 'desc' : 'asc',
    skip: page,
    rowsPerPage,
    team_id: search.team_id
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

const toggleFilters = () => {
  showFilters.value = !showFilters.value
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
