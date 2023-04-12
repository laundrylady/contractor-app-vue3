<template>
  <q-page padding>
    <q-breadcrumbs class="q-mb-md q-mt-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el label="Reporting" />
    </q-breadcrumbs>
    <div class="text-h4 q-mb-md">
      Reporting
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 q-mb-md">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">{{ $t('contractor.namePlural')
            }}</div>
            <q-list separator>
              <q-item>
                <q-item-section>
                  <router-link :to="{ name: 'reporting-contractor-commissions-overview' }" class="link">Commissions
                    Overview</router-link>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <router-link :to="{ name: 'reporting-contractor-commissions-owing' }" class="link">Commissions
                    Owing</router-link>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <router-link :to="{ name: 'reporting-contractor-commissions-paid' }" class="link">Commissions
                    Paid</router-link>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 q-mb-md">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">{{ $t('order.namePlural')
            }}</div>
            <q-list separator>
              <q-item>
                <q-item-section>
                  <router-link :to="{ name: 'reporting-order-overview' }" class="link">Overview</router-link>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
