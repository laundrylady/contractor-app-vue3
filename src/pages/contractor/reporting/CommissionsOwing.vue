<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md q-mt-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el label="Reporting" :to="{ name: 'reporting' }" />
      <q-breadcrumbs-el label="Commissions Owing" />
    </q-breadcrumbs>
    <div class="row q-col-gutter-md">
      <div class="col-xs-9">
        <div class="text-h4 q-mb-md">
          Commissions Owing
        </div>
      </div>
      <div class="col-xs-3 text-right">
        <q-toggle v-model="owingOnly" label="Only show owing" />
      </div>
    </div>
    <q-markup-table v-if="data">
      <thead>
        <tr>
          <th class="text-left">Contractor</th>
          <th style="width:100px;" class="text-left">Total</th>
          <th style="width:100px;" class="text-left">GST</th>
          <th style="width:100px;" class="text-left">Grand</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in commissionsData" :key="d.id">
          <td><a class="link text-h6" @click="showOrders(d)">{{ d.fullname }} <q-badge v-if="d.contractor_gst_registered"
                label="GST" color="secondary" /></a>
            <div v-if="d.showOrders">
              <q-list dense>
                <q-item v-if="!d.commission.orders.length">
                  <q-item-section>No orders found</q-item-section></q-item>
                <q-item v-for="o in d.commission.orders" :key="o.id">
                  <q-item-section>
                    <div>
                      <router-link :to="{ name: 'order-edit', params: { id: o.id } }" class="link" target="_blank">#{{
                        o.display_id
                      }}</router-link>
                      - {{ o.team }} - {{ dbDateDisplay(o.paid_date) }} - {{
                        currencyFormat(o.commissionTotal)
                      }}
                    </div>
                  </q-item-section>
                </q-item>
                <q-item class="text-negative" v-if="d.commission.penalty > 0">
                  <q-item-section>Current Penalty: {{ currencyFormat(d.commission.penalty) }}</q-item-section>
                </q-item>
              </q-list>
            </div>
          </td>
          <td>{{ currencyFormat(d.commission.total) }}</td>
          <td>{{ currencyFormat(d.commission.totalGst) }}</td>
          <td>{{ currencyFormat(d.commission.grandTotal) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="bg-grey-2 text-bold">
          <td></td>
          <td>{{ currencyFormat(data.total.total) }}</td>
          <td>{{ currencyFormat(data.total.gst) }}</td>
          <td>{{ currencyFormat(data.total.grand) }}</td>
        </tr>
      </tfoot>
    </q-markup-table>
    <div class="q-mt-md text-right" v-if="commissionsData.length">
      <q-btn @click="queueCommissionOwing()" label="Queue Xero push" color="primary" />
    </div>
  </q-page>
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { confirmDelete, currencyFormat, doNotify, dbDateDisplay } from 'src/mixins/help'
import { onMounted, ref, computed } from 'vue'

const data = ref()
const $q = useQuasar()
const owingOnly = ref(true)

const getCommissionsOwing = () => {
  $q.loading.show({ message: 'Fetching commission data...' })
  api.post('/user/contractor/reporting/commissionsowing').then(response => {
    data.value = response.data
    $q.loading.hide()
  }).catch(error => {
    useMixinDebug(error)
    $q.loading.hide()
  })
}

const commissionsData = computed(() => {
  if (data.value && data.value) {
    if (owingOnly.value) {
      return data.value.data.filter((o: LooseObject) => o.commission.total > 0)
    }
    return data.value.data
  }
  return []
})

const showOrders = (o: LooseObject) => {
  o.showOrders = !o.showOrders
}

const queueCommissionOwing = () => {
  confirmDelete('This will queue the Xero commissions batch push').onOk(() => {
    api.post('/user/contractor/xero/queuecommissionbatch').then(() => {
      doNotify('positive', 'Commission batch queued for Xero processing')
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

onMounted(() => {
  getCommissionsOwing()
})

</script>
