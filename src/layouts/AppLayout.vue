<template>
  <q-layout view="lHh LpR fFf" v-if="user && user.id">
    <q-header>
      <q-toolbar style="height:65px;">
        <router-link :to="{ name: 'appDashboard' }" class="link text-black">
          <img src="../assets/images/logos/logo.png" style="max-width:100%;max-height:50px" />
        </router-link>
        <HeaderSearch class="q-ml-md" />
        <q-space />
        <q-btn icon="event" :title="$t('order.namePlural')" flat round class="q-mr-xs" />
        <q-btn icon="logout" title="Sign Out" @click="logout()" flat round class="q-mr-xs" />
        <q-btn flat round @click="profile()">
          <q-avatar>
            <q-img src="/api/user/useravatar?fetch=thumb" />
          </q-avatar>
        </q-btn>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { user } = useMixinSecurity()
const $q = useQuasar()
const router = useRouter()
const isLocked = ref(false)

// check for lockout
setInterval(() => {
  isLocked.value = !!(user.value && user.value.lastRequest && moment().diff(user.value.lastRequest, 'minutes') >= 120)
}, 1000)

const profile = () => {
  if (user.value && user.value.role === 'contractor') {
    router.push({ name: 'contractor-dashboard' })
  }
}

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
