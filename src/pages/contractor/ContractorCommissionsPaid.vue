<template>
  <div v-if="model.id">
    <div v-if="!$q.screen.xs">
      <q-breadcrumbs class="q-mb-md">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" />
        </template>
        <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
        <q-breadcrumbs-el label="Profile" :to="{ name: 'contractor-dashboard' }" />
        <q-breadcrumbs-el label="Commissions" />
      </q-breadcrumbs>
    </div>
    <q-card>
      <q-tabs align="left" class="q-mb-sm">
        <q-route-tab :to="{ name: 'contractor-commission-paid' }" label="Commissions" />
        <q-route-tab :to="{ name: 'contractor-invoices' }" label="Invoices" />
      </q-tabs>
      <UserCommissionPaidManagementContractor />
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { User } from 'src/components/models'
import UserCommissionPaidManagementContractor from 'src/components/usercommissionpaid/UserCommissionPaidManagementContractor.vue'

interface Props {
  model: User
}
defineProps<Props>()
</script>
