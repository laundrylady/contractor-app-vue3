<template>
  <q-layout view="lHh LpR fFf" v-if="user && user.id">
    <q-header class="bg-white text-black shadow">
      <q-toolbar style="height:65px;">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" v-if="$q.screen.lt.lg">
          <q-icon name="menu" size="24px" />
        </q-btn>
        <HeaderSearch class="q-ml-md" />
        <q-space />
        <q-btn flat @click="logout()" title="Sign Out">
          <q-icon name="exit_to_app" size="24px" />
        </q-btn>
        <q-btn flat class="q-mr-xs gt-sm" :title="user.email" :to="{ name: 'profile' }">
          <q-avatar>
            <q-img src="/api/user/useravatar?fetch=thumb" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" :mini="leftMini" :width="200" class="bg-dark text-white" bordered>
      <div class="q-pa-md text-center">
        <router-link :to="{ name: 'appDashboard' }" class="link text-black">
          <img src="../assets/images/logos/logo.png" style="max-width:100%;max-height:115px" /></router-link>
      </div>
      <q-list no-border>
        <q-item :to="{ name: 'appDashboard' }" clickable title="Dashboard"
          :class="{ 'text-white': route.name !== 'appDashboard' }">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>
        <q-item :to="{ name: 'contractors' }" clickable :title="$t('contractor.namePlural')" active-class="text-primary"
          :class="{ 'text-primary': currentRoute && currentRoute.match('contractor') && !currentRoute.match('reporting') }">
          <q-item-section avatar>
            <q-icon name="engineering" />
          </q-item-section>
          <q-item-section>{{ $t('contractor.namePlural') }}</q-item-section>
        </q-item>
        <q-item :to="{ name: 'teams' }" clickable :title="$t('team.namePlural')" active-class="text-primary"
          :class="{ 'text-primary': currentRoute && currentRoute.match('team') }">
          <q-item-section avatar>
            <q-icon name="group" />
          </q-item-section>
          <q-item-section>{{ $t('team.namePlural') }}</q-item-section>
        </q-item>
        <q-item :to="{ name: 'orders' }" clickable :title="$t('order.namePlural')" active-class="text-primary"
          :class="{ 'text-primary': currentRoute && (currentRoute.match('order') || currentRoute.match('bookingmanager')) && !currentRoute.match('team') && !currentRoute.match('contractor') && !currentRoute.match('reporting') }">
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>
          <q-item-section>{{ $t('order.namePlural') }}</q-item-section>
        </q-item>
        <q-item :to="{ name: 'userrosterscheduler' }" clickable :title="$t('scheduler.name')" active-class="text-primary"
          :class="{ 'text-primary': currentRoute && currentRoute.match('scheduler') && !currentRoute.match('team') && !currentRoute.match('contractor') }">
          <q-item-section avatar>
            <q-icon name="calendar_month" />
          </q-item-section>
          <q-item-section>{{ $t('scheduler.name') }}</q-item-section>
        </q-item>
        <q-item :to="{ name: 'reporting' }" clickable title='Reporting' active-class="text-primary"
          :class="{ 'text-primary': currentRoute && currentRoute.match('reporting') }">
          <q-item-section avatar>
            <q-icon name="bar_chart" />
          </q-item-section>
          <q-item-section>Reporting</q-item-section>
        </q-item>
        <q-item :to="{ name: 'settings' }" clickable title='Settings' active-class="text-primary">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>Settings</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <q-ajax-bar position="top" color="primary" size="2px" />
      <router-view />
    </q-page-container>
    <q-dialog v-model="isLocked" persistent>
      <q-card style="min-width:30vw">
        <q-card-section class="row">
          <AppLogo />
          <q-space />
          <q-icon name="lock" size="24px" class="text-grey" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <p>Your session has timed out!</p>
          <p>Please refresh the page.</p>
        </q-card-section>
      </q-card>
    </q-dialog>
    <MediaViewer />
    <q-dialog v-model="isLocked" persistent>
      <q-card style="min-width:30vw">
        <q-card-section class="row">
          <AppLogo />
          <q-space />
          <q-icon name="lock" size="24px" class="text-grey" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <p>Your session has timed out.</p>
          <q-btn :to="{ name: 'signin' }" color="primary" label="Sign In" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>
<script setup lang="ts">
import moment from 'moment-timezone'
import { useQuasar } from 'quasar'
import AppLogo from 'src/components/AppLogo.vue'
import HeaderSearch from 'src/components/HeaderSearch.vue'
import MediaViewer from 'src/components/MediaViewer.vue'
import { useMixinSecurity } from 'src/mixins/security'
import { socket } from 'src/services/socketio'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const { user } = useMixinSecurity()
const $q = useQuasar()
const route = useRoute()
const leftDrawerOpen = ref(!$q.screen.xs)
const leftMini = ref(false)
const isLocked = ref(false)

// check for lockout
setInterval(() => {
  isLocked.value = !!(user.value && user.value.lastRequest && moment().diff(user.value.lastRequest, 'minutes') >= 120)
}, 1000)

const currentRoute = computed(() => {
  return route.name?.toString()
})

const logout = () => {
  window.location.href = '/api/auth/logout?from=portal'
}

socket.on('newRelease', () => {
  setTimeout(() => {
    $q.notify({
      icon: 'warning',
      message:
        'A new version of the system has been deployed.<br/>Click refresh below to ensure you have the most up-to-date version of the system.',
      html: true,
      color: 'primary',
      multiLine: true,
      timeout: 0,
      actions: [
        {
          label: 'Refresh Now',
          color: 'white',
          handler: () => {
            window.location.reload()
          }
        }
      ]
    })
  }, 5000)
})

</script>
