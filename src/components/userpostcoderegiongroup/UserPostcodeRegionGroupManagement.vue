<template>
  <UserPostcodeRegionGroupCreate />
  <UserPostcodeRegionGroupEdit />
  <div class="flex items-center q-mb-sm">
    <div>
      <div class="text-h5">Pickup Locations</div>
      <p>Configure the pickup locations for this {{ $t('contractor.name').toLowerCase() }}.</p>
    </div>
    <q-space />
    <q-btn @click="newUserPostcodeRegionGroup()" icon="add" color="primary" round />
  </div>
  <q-card>
    <q-table :rows="data" :columns="columns" row-key="id" :filter="search.keyword" :loading="loading"
      v-model:pagination="serverPagination" @request="request" flat wrap-cells
      :rows-per-page-options="rowsPerPageOptions">
      <template v-slot:top-left>
        <q-input v-model="search.keyword" :debounce="500" placeholder="Keyword">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <a @click="editUserPostcodeRegionGroup(props.row.id)" class="link text-h6">{{ props.row.name }}</a>
          <div class="q-mt-sm">
            <PostcodeRegionDisplay :postcoderegions="props.row.postcoderegions" />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn flat icon="more_vert">
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup @click="editUserPostcodeRegionGroup(props.row.id)">
                  <q-item-section>Edit record</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="deleteUserPostcodeRegionGroup(props.row.id)">
                  <q-item-section>Delete</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>
<script setup lang="ts">
import { EventBus, QTableProps } from 'quasar'
import { api } from 'src/boot/axios'
import PostcodeRegionDisplay from 'src/components/PostcodeRegionDisplay.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, getRowsPerPage, rowsPerPageOptions, setRowsPerPage } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { User } from '../models'
import UserPostcodeRegionGroupCreate from './UserPostcodeRegionGroupCreate.vue'
import UserPostcodeRegionGroupEdit from './UserPostcodeRegionGroupEdit.vue'

interface Props {
  user: User
}
const props = defineProps<Props>()

const bus = inject('bus') as EventBus
const data = ref()
const loading = ref(false)
const search = reactive({ keyword: null })
const columns: QTableProps['columns'] = [{
  name: 'name',
  label: 'Name',
  align: 'left',
  field: 'name',
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
  sortBy: 'name',
  descending: false
})

const request = (qtProps: Parameters<NonNullable<QTableProps['onRequest']>>[0] | null = null) => {
  let page: number
  let rowsPerPage: number
  let sortBy: string
  let descending: boolean
  if (qtProps && qtProps.pagination) {
    page = qtProps.pagination.page
    rowsPerPage = qtProps.pagination.rowsPerPage
    sortBy = qtProps.pagination.sortBy
    descending = qtProps.pagination.descending
  } else {
    page = serverPagination.value.page
    rowsPerPage = serverPagination.value.rowsPerPage
    sortBy = serverPagination.value.sortBy
    descending = serverPagination.value.descending
  }
  loading.value = true
  api.post(`/userpostcoderegiongroup/datatable/${page}/${props.user.id}`, {
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
    }).catch((response) => {
      useMixinDebug(response)
    })
}

const deleteUserPostcodeRegionGroup = (id: number) => {
  confirmDelete('This will remove the postcode region group').onOk(() => {
    api.delete(`/userpostcoderegiongroup/${id}`).then(() => {
      request()
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

const newUserPostcodeRegionGroup = () => {
  bus.emit('newUserPostcodeRegionGroup', { user_id: props.user.id, state: props.user.postcoderegionsuburb ? props.user.postcoderegionsuburb.state : null })
}

const editUserPostcodeRegionGroup = (id: number) => {
  bus.emit('editUserPostcodeRegionGroup', { id, state: props.user.postcoderegionsuburb ? props.user.postcoderegionsuburb.state : null })
}

onMounted(() => {
  bus.on('userPostcodeRegionGroupLoadMore', () => {
    request()
  })
  request()
})

onBeforeUnmount(() => {
  bus.off('userPostcodeRegionGroupLoadMore')
})
</script>
