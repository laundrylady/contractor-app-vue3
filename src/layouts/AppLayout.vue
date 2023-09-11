<template>
  <q-layout view="lHh LpR fFf" v-if="user && user.id">
    <q-header>
      <q-toolbar style="height:65px;">
        <router-link :to="{ name: 'appDashboard' }" class="link">
          <img src="../assets/images/logos/logo_app.png" style="max-width:100%;max-height:50px" />
        </router-link>
        <HeaderSearch class="q-ml-md" />
        <q-space />
        <q-btn icon="event" :title="$t('order.namePlural')" :to="{ name: 'order-calendar' }" flat round class="q-mr-xs" />
        <q-btn icon="shopping_cart" title="Order supplies" flat round class="q-mr-xs"
          @click="openURL('https://teamlaundrylady.co/account/login')" />
        <q-btn icon="logout" title="Sign Out" @click="logout()" flat round class="q-mr-xs" />
        <q-btn flat round @click="profile()">
          <q-avatar size="32px">
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
    <ValidationsModal />
    <q-dialog v-model="isLocked" persistent>
      <q-card class="modal">
        <q-card-section class="row">
          <AppLogo />
          <q-space />
          <q-icon name="lock" size="24px" class="text-grey" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <p>Your session has timed out.</p>
          <q-btn :to="{ name: 'signin' }" color="primary" label="Sign In" rounded />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>
<script setup lang="ts">
import moment from 'moment-timezone'
import { EventBus, openURL, useQuasar } from 'quasar'
import AppLogo from 'src/components/AppLogo.vue'
import HeaderSearch from 'src/components/HeaderSearch.vue'
import MediaViewer from 'src/components/MediaViewer.vue'
import ValidationsModal from 'src/components/form/ValidationsModal.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinSecurity } from 'src/mixins/security'
import { socket } from 'src/services/socketio'
import { inject, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const { user } = useMixinSecurity()
const $q = useQuasar()
const router = useRouter()
const isLocked = ref(false)
const bus = inject('bus') as EventBus

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
        'A new version is available',
      html: true,
      color: 'primary',
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

onMounted(() => {
  socket.on('connect', () => {
    if (user.value && user.value.id) {
      socket.emit('authRoom', user.value.id)
    }
  })
  socket.on('hookContractor', (data: LooseObject) => {
    console.log('hookContractor', data)
    bus.emit(data.emit, data)
  })
})

</script>
