<template>
  <q-layout view="lHh Lpr lFf" container class="layout-height" v-if="model && model.id">
    <q-header :class="{ 'text-black page-title': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }" bordered>
      <div class="q-pl-md q-pr-md q-pt-md">
        <div class="flex">
          <q-breadcrumbs class="q-mb-md">
            <template v-slot:separator>
              <q-icon size="1.5em" name="chevron_right" />
            </template>
            <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
            <q-breadcrumbs-el :label="$t('team.namePlural')" :to="{ name: 'teams' }" />
            <q-breadcrumbs-el :label="model.name" />
          </q-breadcrumbs>
        </div>
        <div class="q-mb-lg">
          <div class="row items-center q-mb-lg">
            <div class="col-xs-12 col-sm-9">
              <div class="flex items-center">
                <div class="text-h4">
                  <q-btn @click="drawer.left = !drawer.left" icon="menu" color="primary" outline v-if="$q.screen.lt.lg"
                    class="q-mr-md" />
                  <span class="q-mr-sm">#{{ model.id }}</span> {{ model.name }} <q-badge v-if="model.status === 'blocked'"
                    label="Blocked" color="negative" />
                </div>
              </div>
            </div>
            <div class="col-xs-2 col-sm-3 text-right" v-if="!$q.screen.xs">
              <div>
                Last data update<br /><strong>{{ fromNowTz(model.updated_at) }}</strong>
              </div>
            </div>
          </div>
          <TeamNav :model="model" />
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
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            {{ model.name }}
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
            <q-icon name="place" />
          </q-item-section>
          <q-item-section>
            <PostcodeRegionDisplay :postcoderegions="[model.suburbpostcoderegion]" v-if="model.suburbpostcoderegion" />
          </q-item-section>
        </q-item>
        <q-item v-if="model.type === 'NDIS'">
          <q-item-section side>
            <img src="~assets/images/logos/ndis_heart.svg" style="height:32px" />
          </q-item-section>
          <q-item-section>
            {{ model.ndis_number }}
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator class="q-mt-sm q-mb-sm" />
      <div v-if="model.contractors && model.contractors.length">
        <q-list>
          <q-item-label header>SERVICED BY</q-item-label>
          <q-item v-for="c in model.contractors" :key="c.id">
            <q-item-section avatar>
              <UserAvatar :user="c" />
            </q-item-section>
            <q-item-section><router-link :to="{ name: 'contractor-dashboard', params: { id: c.id } }" target="_blank"
                class="link">{{ c.fullname }}</router-link>
              <div class="text-grey">{{ c.email }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div v-if="model.feed">
        <div v-if="model.feed.length">
          <q-list>
            <q-item-label header>
              FEED</q-item-label>
            <q-item v-for="(f, index) in model.feed" :key="index">
              <q-item-section avatar>
                <UserAvatar :user="f.user" v-if="f.user && !f.sendingUser" />
                <UserAvatar :user="f.sendingUser" v-if="f.sendingUser && !f.user" />
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
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import MapWithMarker from 'src/components/maps/MapWithMarker.vue'
import { Team } from 'src/components/models'
import PostcodeRegionDisplay from 'src/components/PostcodeRegionDisplay.vue'
import UserAvatar from 'src/components/UserAvatar.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { fromNowTz } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import TeamNav from './TeamNav.vue'

const route = useRoute()
const bus = inject('bus') as EventBus
const drawer = reactive({ left: true, right: true })
const model = ref<Team>()

const getTeam = async () => {
  api.get(`/team/${route.params.id}?feed=true`).then((response) => {
    model.value = response.data
    document.title = response.data.name
  }).catch((response) => {
    useMixinDebug(response)
  })
}

onMounted(async () => {
  await getTeam()
  bus.on('getTeam', () => { getTeam() })
})

onBeforeUnmount(() => {
  bus.off('getTeam')
})

watch(() => route.params.id, (newVal) => {
  if (route.name === 'team-dashboard') {
    if (newVal) { getTeam() }
  }
})
</script>
