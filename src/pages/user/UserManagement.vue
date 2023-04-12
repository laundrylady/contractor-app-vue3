<template>
  <q-dialog v-model="showUserTeams">
    <q-card v-if="userTeams && userTeams.user" class="modal-sm">
      <q-card-section>
        <div class="flex items-start">
          <div>
            <div class="text-h6"><q-icon :name="userTeams.role === 'contractor' ? 'engineering' : 'group'"
                class="q-mr-sm" />{{
                  userTeams.user.fullname }}</div>
            <div>{{ userTeams.user.email }}</div>
            <div class="q-mt-xs">
              <PostcodeRegionDisplay :postcoderegions="[userTeams.user.postcoderegionsuburb]"
                v-if="userTeams.user.postcoderegionsuburb" />
            </div>
          </div>
          <q-space />
          <q-btn dense round v-close-popup icon="close" flat />
        </div>
        <div class="text-h6 q-mt-lg"><q-icon name="security" class="q-mr-sm" /> Record Access</div>
        <p>This user account has access to the following customer records.</p>
        <q-list separator dense bordered>
          <q-item v-for="t in userTeams.teams" :key="t.id" :to="{ name: 'team-dashboard', params: { id: t.id } }"
            clickable>
            <q-item-section class="link">{{ t.name }}</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card></q-dialog>
  <q-layout view="lHh LpR fFf" container class="layout-height">
    <q-header :class="{ 'page-title text-black': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <div class="q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center" style="padding-top:11px;">
        <q-breadcrumbs>
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" />
          </template>
          <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
          <q-breadcrumbs-el label="Settings" :to="{ name: 'settings' }" />
          <q-breadcrumbs-el label="Users" />
        </q-breadcrumbs>
        <q-input v-model="search.keyword" :debounce="500" placeholder="Search users" dense borderless class="q-ml-lg"
          clearable>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-space />
        <q-select v-model="search.role" label="Type"
          :options="[{ label: 'Contractor', value: 'contractor' }, { label: 'Customer', value: 'user' }, { label: 'Staff', value: 'admin' }]"
          map-options emit-value @update:model-value="request(null)" outlined dense class="q-mr-sm"
          style="width:150px;" />
        <StateField v-model="search.state" label="State" :outlined="true" @update:model-value="request(null)"
          :dense="true" />
      </div>
    </q-header>
    <q-page-container>
      <q-page padding>
        <div ref="topRef"></div>
        <q-card>
          <q-table :rows="data" :columns="columns" row-key="id" :filter="search.keyword" :loading="loading"
            v-model:pagination="serverPagination" @request="request" class="no-shadow"
            :rows-per-page-options="rowsPerPageOptions">
            <template v-slot:body-cell-avatar="props">
              <q-td :props="props">
                <UserAvatar :user="props.row" />
              </q-td>
            </template>
            <template v-slot:body-cell-email="props">
              <q-td :props="props">
                <div class="text-h6">
                  <a class="link" @click="getUserTeams(props.row)">{{ props.row.email }}</a>
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-first_name="props">
              <q-td :props="props">
                <a @click="dashboardNav(props.row)" class="link">{{
                  props.row.fullname
                }}
                </a>
              </q-td>
            </template>
            <template v-slot:body-cell-contractor_status="props">
              <q-td :props="props">
                <StatusTag :status="props.row.contractor_status" />
              </q-td>
            </template>
            <template v-slot:body-cell-postcoderegionsuburb="props">
              <q-td :props="props">
                <PostcodeRegionDisplay :postcoderegions="[props.row.postcoderegionsuburb]"
                  v-if="props.row.postcoderegionsuburb" />
              </q-td>
            </template>
            <template v-slot:body-cell-enabled="props">
              <q-td :props="props">
                <q-icon name="check" v-if="props.row.enabled" size="24px" />
              </q-td>
            </template>
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn flat icon="more_vert">
                  <q-menu>
                    <q-list>
                      <q-item clickable v-close-popup @click="toggleAccess(props.row)">
                        <q-item-section>{{ `${props.row.enabled ? 'Disable' : 'Enable'}` }}</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="dashboardNav(props.row)">
                        <q-item-section>Edit record</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup @click="deleteContractor(props.row.id)">
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
import { QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import StateField from 'src/components/form/StateField.vue'
import { User } from 'src/components/models'
import PostcodeRegionDisplay from 'src/components/PostcodeRegionDisplay.vue'
import StatusTag from 'src/components/StatusTag.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, fromNowTz, getRowsPerPage, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const i8n = useI18n()
const router = useRouter()
const data = ref()
const topRef = ref<HTMLDivElement | null>(null)
const loading = ref(false)
const userTeams = ref()
const showUserTeams = ref(false)
const search = reactive({ keyword: null, status: 'active', role: null, state: null })
const columns: QTableProps['columns'] = [{
  name: 'avatar',
  label: '',
  align: 'center',
  field: 'avatar',
  sortable: false,
  style: 'width:65px'
}, {
  name: 'email',
  label: 'Email',
  align: 'left',
  field: 'email',
  sortable: true
}, {
  name: 'first_name',
  label: 'Name',
  align: 'left',
  field: 'first_name',
  sortable: true
}, {
  name: 'postcoderegionsuburb',
  sortable: false,
  label: `Home ${i8n.t('address.suburb')}`,
  field: 'postcoderegionsuburb',
  align: 'left'
}, {
  name: 'role',
  sortable: true,
  label: 'Type',
  field: 'role',
  align: 'left',
  format: val => val ? userMap[val] : ''
}, {
  name: 'current_sign_in_at',
  sortable: true,
  label: 'Last Signin',
  field: 'current_sign_in_at',
  align: 'left',
  format: val => val ? fromNowTz(val) : ''
}, {
  name: 'enabled',
  sortable: true,
  label: 'Can Sign In',
  field: 'enabled',
  align: 'left'
}, {
  label: 'Actions',
  name: 'actions',
  sortable: false,
  field: 'actions'
}]

const userMap: LooseObject = {
  user: 'Customer',
  contractor: 'Contractor',
  admin: 'Staff'
}

const serverPagination = ref({
  page: 1,
  rowsNumber: getRowsPerPage(),
  rowsPerPage: getRowsPerPage(),
  sortBy: 'first_name',
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
  api.post(`/user/datatable/${page}`, {
    sortBy,
    sort_order: descending ? 'desc' : 'asc',
    skip: page,
    rowsPerPage,
    keyword: search.keyword,
    status: search.status,
    role: search.role,
    state: search.state
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

const deleteContractor = (id: number) => {
  confirmDelete('This will remove the user permenantly').onOk(() => {
    api.delete(`/user/${id}`).then(() => {
      request(null)
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

const toggleAccess = (row: User) => {
  if (row.enabled) {
    confirmDelete('This will disable access for this user').onOk(() => {
      api.get(`/user/toggleenabled/${row.id}/0`).then(() => {
        request(null)
      }).catch(error => {
        useMixinDebug(error)
      })
    })
  } else {
    confirmDelete('This will enable access for this user').onOk(() => {
      api.get(`/user/toggleenabled/${row.id}/1`).then(() => {
        request(null)
      }).catch(error => {
        useMixinDebug(error)
      })
    })
  }
}

const dashboardNav = (row: User) => {
  if (row.role === 'user') {
    router.push({ name: 'team-dashboard', params: { id: row.current_team_id } })
  }
  if (row.role === 'contractor') {
    router.push({ name: 'contractor-dashboard', params: { id: row.id } })
  }
  if (row.role === 'admin') {
    window.open('https://myaccount.google.com/')
  }
}

const getUserTeams = (row: User) => {
  if (row.role === 'contractor') {
    router.push({ name: 'contractor-dashboard', params: { id: row.id } })
    return
  }
  api.get(`/teamuser/teamsbyuserid/${row.id}`).then(response => {
    userTeams.value = { user: row, teams: response.data }
    showUserTeams.value = true
  }).catch(error => useMixinDebug(error))
}

onMounted(() => {
  request()
})
</script>
