<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md q-mt-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el label="Reporting" :to="{ name: 'reporting' }" />
      <q-breadcrumbs-el label="Commissions Paid" />
    </q-breadcrumbs>
    <q-card class="bg-seamless q-mb-lg">
      <q-card-section>
        <div class="text-h6 q-mb-md"> Commissions Paid</div>
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-sm-5">
            <date-field v-model="search.start" label="Start" :dense="true" :outlined="true" />
          </div>
          <div class="col-xs-12 col-sm-5">
            <date-field v-model="search.end" label="End" :dense="true" :outlined="true" />
          </div>
          <div class="col-xs-12 col-sm-2">
            <q-toggle v-model="paidOnly" label="Only paid" class="q-mr-md" />
            <q-btn @click="getCommissionsPaid()" label="Submit" color="primary" />
          </div>
        </div>
      </q-card-section>
    </q-card>
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
            <q-list v-if="d.showOrders" dense>
              <q-item v-if="!d.commission.orders.length">
                <q-item-section>No orders found</q-item-section></q-item>
              <q-item v-for="o in d.commission.orders" :key="o.id">
                <q-item-section>
                  <div>
                    <router-link :to="{ name: 'order-edit', params: { id: o.id } }" class="link" target="_blank">#{{
                      o.display_id
                    }}</router-link>
                    - {{ o.team.name }} - {{ o.scheduled_pickup_date }} - {{
                      currencyFormat(o.commission_paid_amount)
                    }} / {{ currencyFormat(o.commission_paid_amount_gst)
}}
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
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
  </q-page>
</template>
<script lang="ts" setup>
import moment from 'moment-timezone'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import DateField from 'src/components/form/DateField.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { currencyFormat } from 'src/mixins/help'
import { computed, onMounted, reactive, ref } from 'vue'

const data = ref()
const $q = useQuasar()
const paidOnly = ref(true)
const search = reactive({ start: moment().startOf('isoWeek').format('DD/MM/YYYY'), end: moment().endOf('isoWeek').format('DD/MM/YYYY') })

const getCommissionsPaid = () => {
  $q.loading.show({ message: 'Fetching commission data...' })
  api.post('/user/contractor/reporting/commissionspaid', search).then(response => {
    data.value = response.data
    $q.loading.hide()
  }).catch(error => {
    useMixinDebug(error)
    $q.loading.hide()
  })
}

const showOrders = (o: LooseObject) => {
  o.showOrders = !o.showOrders
}

const commissionsData = computed(() => {
  if (data.value && data.value) {
    if (paidOnly.value) {
      return data.value.data.filter((o: LooseObject) => o.commission.total > 0)
    }
    return data.value.data
  }
  return []
})

onMounted(() => {
  getCommissionsPaid()
})

</script>
