<template>
  <q-layout view="lHh LpR fFf" v-if="user && user.id">
    <q-header class="bg-white text-black shadow">
      <q-toolbar style="height:65px;">
        <router-link :to="{ name: 'appDashboard' }" class="link text-black">
          <img src="../assets/images/logos/logo.png" style="max-width:100%;max-height:50px" />
        </router-link>
        <HeaderSearch class="q-ml-md" />
        <q-space />
        <q-btn-group flat>
          <q-btn icon="list_alt" :title="$t('order.namePlural')" color="primary" flat />
          <q-btn icon="calendar_month" :title="$t('scheduler.name')" color="primary" flat />
          <q-btn flat>
            <q-avatar>
              <q-img src="/api/user/useravatar?fetch=thumb" />
            </q-avatar>
            <q-menu>
              <q-list>
                <q-item clickable @click="logout()">
                  <q-item-section>Sign Out</q-item-section></q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-btn-group>
      </q-toolbar>
    </q-header>
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
