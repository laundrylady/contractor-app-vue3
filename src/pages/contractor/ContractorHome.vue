<template>
  <q-layout view="lHh Lpr lFf" container class="layout-height" v-if="model && model.id">
    <q-header :class="{ 'page-title text-black': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <div class="q-pl-md q-pr-md q-pt-md">
        <div class="flex">
          <q-breadcrumbs class="q-mb-md">
            <template v-slot:separator>
              <q-icon size="1.5em" name="chevron_right" />
            </template>
            <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
            <q-breadcrumbs-el :label="$t('contractor.namePlural')" :to="{ name: 'contractors' }" />
            <q-breadcrumbs-el :label="model.fullname" />
          </q-breadcrumbs>
        </div>
        <div class="q-mb-lg">
          <div class="row items-center q-mb-lg">
            <div class="col-xs-12 col-sm-9">
              <div class="flex items-center">
                <UserAvatar :user="model" class="q-mr-sm" size="48px" />
                <div>
                  <div class="text-h4">
                    <q-btn @click="drawer.left = !drawer.left" icon="menu" color="primary" outline v-if="$q.screen.lt.lg"
                      class="q-mr-md" />
                    {{ model.fullname }}
                  </div>
                  <div><span v-if="model.contractor_start_date" class="q-mr-sm">Since {{ model.contractor_start_date
                  }}</span> <q-badge color="positive" v-if="model.contractor_status === 'active'" label="Active"
                      class="q-mr-sm" /><q-badge
                      v-if="model.contractor_insurance_expiry && moment(model.contractor_insurance_expiry, 'DD/MM/YYYY').isBefore(moment())"
                      color="negative">
                      <q-icon name="warning" class="q-mr-sm" /> Insurance Expired</q-badge>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-2 col-sm-3 text-right" v-if="!$q.screen.xs">
              <div>
                Last data update<br /><strong>{{ fromNowTz(model.updated_at) }}</strong>
              </div>
            </div>
          </div>
          <ContractorNav :model="model" />
        </div>
      </div>
    </q-header>
    <q-drawer v-model="drawer.left" :width="300" side="left" bordered>
      <div class="text-right q-pa-sm" v-if="$q.screen.xs">
        <q-btn @click="drawer.left = false" icon="close" flat round dense />
      </div>
      <MapWithMarker :lat-lng="{ lat: parseFloat(model.lat), lng: parseFloat(model.lng) }"
        v-if="model.lat && model.lng" />
      <q-list dense class="q-mt-md">
        <q-item>
          <q-item-section side>
            <q-icon name="engineering" />
          </q-item-section>
          <q-item-section>
            {{ model.fullname }}
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-icon name="mail" />
          </q-item-section>
          <q-item-section>
            <a :href="`mailto:${model.email}`" class="link">{{ model.email }}</a>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-icon name="phone" />
          </q-item-section>
          <q-item-section>
            <a :href="`tel:${model.mobile}`" class="link">{{ model.mobile }}</a>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-icon name="attach_money" />
          </q-item-section>
          <q-item-section>
            Commission rate {{ model.contractor_commission_rate }}%
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-icon name="place" />
          </q-item-section>
          <q-item-section>
            <PostcodeRegionDisplay :postcoderegions="[model.postcoderegionsuburb]" v-if="model.postcoderegionsuburb" />
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator class="q-mt-sm q-mb-sm" />
      <div v-if="model.teams && model.teams.length">
        <q-list>
          <q-item-label header class="text-uppercase">{{ $t('team.namePlural') }}</q-item-label>
          <q-item v-for="t in model.teams" :key="t.id">
            <q-item-section><router-link :to="{ name: 'team-dashboard', params: { id: t.id } }" target="_blank"
                class="link">{{ t.name }}</router-link>
              <div v-if="t.suburbpostcoderegion">
                <PostcodeRegionDisplay :postcoderegions="[t.suburbpostcoderegion]" />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div v-if="model.feed">
        <div v-if="model.feed.length">
          <q-list>
            <q-item-label header>FEED</q-item-label>
            <q-item v-for="(f, index) in model.feed" :key="index">
              <q-item-section avatar>
                <UserAvatar :user="f.user" v-if="!f.sendingUser" />
                <UserAvatar :user="f.sendingUser" v-if="f.sendingUser" />
              </q-item-section>
              <q-item-section>
                <div class="text-grey">{{ fromNowTz(f.created_at) }}
                </div>
                {{ f.activity }}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <q-page padding>
        <router-view :model="model" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import moment from 'moment-timezone'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import MapWithMarker from 'src/components/maps/MapWithMarker.vue'
import PostcodeRegionDisplay from 'src/components/PostcodeRegionDisplay.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { fromNowTz } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ContractorNav from './ContractorNav.vue'

const route = useRoute()
const bus = inject('bus') as EventBus
const drawer = reactive({ left: true, right: true })
const model = ref()

const getContractor = async () => {
  api.get(`/user/${route.params.id}?feed=true`).then((response) => {
    model.value = response.data
    document.title = model.value.fullname
  }).catch((response) => {
    useMixinDebug(response)
  })
}

onMounted(async () => {
  await getContractor()
  bus.on('getContractor', () => { getContractor() })
})

onBeforeUnmount(() => {
  bus.off('getContractor')
})

watch(() => route.params.id, (newVal) => {
  if (route.name === 'contractor-dashboard') {
    if (newVal) { getContractor() }
  }
})
</script>
