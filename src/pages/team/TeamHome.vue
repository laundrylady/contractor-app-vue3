<template>
  <q-layout view="lHh Lpr lFf" container class="layout-height layout-container" v-if="model && model.id">
    <q-drawer v-model="drawer.left" :width="300" side="left" :class="{ 'bg-page-background': !$q.screen.xs }">
      <div class="bg-white q-ma-sm rounded-borders">
        <div class="text-right q-pa-sm" v-if="$q.screen.xs">
          <q-btn @click="drawer.left = false" icon="close" flat round dense />
        </div>
        <div class="q-pa-sm">
          <MapWithMarker :lat-lng="{ lat: parseFloat(model.lat), lng: parseFloat(model.lng) }"
            v-if="model.lat && model.lng" />
        </div>
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
              <q-icon name="phone" />
            </q-item-section>
            <q-item-section>
              <a :href="`tel:${model.mobile}`" class="link">{{ model.mobile }}</a>
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
              <q-icon name="place" />
            </q-item-section>
            <q-item-section>
              <PostcodeRegionDisplay :postcoderegions="[model.suburbpostcoderegion]" v-if="model.suburbpostcoderegion" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
    <q-page-container>
      <q-page padding class="q-pa-md">
        <div>
          <div class="flex" v-if="!$q.screen.xs">
            <q-breadcrumbs class="q-mb-md">
              <template v-slot:separator>
                <q-icon size="1.5em" name="chevron_right" />
              </template>
              <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
              <q-breadcrumbs-el :label="model.name" />
            </q-breadcrumbs>
          </div>
        </div>
        <div class="q-mb-xs bg-white q-pa-md rounded-borders">
          <div class="row q-mb-sm">
            <div class="col-xs-12 col-sm-8">
              <div class="flex">
                <div class="full-width">
                  <div class="text-h5 items-center flex full-width">
                    <div>
                      {{ model.name }}
                    </div>
                    <q-space v-if="$q.screen.xs" />
                    <q-badge :label="model.type" color="grey-7" class="q-mr-sm q-pa-sm" v-if="$q.screen.xs" />
                    <q-btn
                      v-if="model.address2 && model.suburb_postcode_region_id && model.postcode && model.lat && model.lng && $q.screen.xs"
                      @click="newOrder()" round color="primary" icon="add" />
                  </div>
                  <div class="q-mb-xs"><span v-if="`${model.first_name} ${model.last_name}` !== model.name"><q-icon
                        name="account_circle" /> {{
                          model.first_name }} {{
    model.last_name }}</span>
                  </div>
                  <div class="q-mb-xs"><q-icon name="place" /> <span v-if="model.address1">{{ model.address1 }}</span> {{
                    model.address2 }} <span v-if="model.suburbpostcoderegion">{{ model.suburbpostcoderegion.locality
  }}</span>
                    <span v-if="common?.operating_country === 'aud' && model.suburbpostcoderegion" class="q-ml-xs">{{
                      model.suburbpostcoderegion.state }}</span>
                  </div>
                  <div class="q-mb-xs"><q-icon name="phone" /> {{ model.mobile }}</div>
                  <div class="text-wrap q-mb-xs"><q-icon name="mail" /> {{ model.email }}</div>
                  <div class="q-mb-xs"><q-icon name="payments" /> {{ model.payment_terms }} - {{
                    model.payment_terms_days }} days</div>
                </div>
              </div>
            </div>
            <div class="col-xs-2 col-sm-4 text-right" v-if="!$q.screen.xs">
              <div class="q-mb-xs">
                <q-badge :label="model.type" color="grey-7" class="q-mr-sm q-pa-sm" />
                <StatusTag :status="model.status" />
                <q-btn
                  v-if="model.address2 && model.suburb_postcode_region_id && model.postcode && model.lat && model.lng && !$q.screen.xs"
                  @click="newOrder()" round color="primary" icon="add" class="q-ml-sm" />
              </div>
              <div class="q-mb-xs">
                Updated: <strong>{{ dateTimeTz(model.updated_at) }}</strong>
              </div>
            </div>
          </div>
          <TeamNav :model="model" />
        </div>
        <router-view :model="model" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import PostcodeRegionDisplay from 'src/components/PostcodeRegionDisplay.vue'
import StatusTag from 'src/components/StatusTag.vue'
import MapWithMarker from 'src/components/maps/MapWithMarker.vue'
import { Team } from 'src/components/models'
import { useMixinDebug } from 'src/mixins/debug'
import { dateTimeTz } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import TeamNav from './TeamNav.vue'
import { useMixinCommon } from 'src/mixins/common'

const route = useRoute()
const $q = useQuasar()
const common = useMixinCommon()
const bus = inject('bus') as EventBus
const drawer = reactive({ left: !$q.screen.xs, right: true })
const model = ref<Team>()

const getTeam = async () => {
  api.get(`/public/team/${route.params.id}?feed=true`).then((response) => {
    model.value = response.data
    document.title = response.data.name
  }).catch((response) => {
    useMixinDebug(response)
  })
}

const newOrder = () => {
  bus.emit('newOrder', { team_id: model.value?.id })
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
