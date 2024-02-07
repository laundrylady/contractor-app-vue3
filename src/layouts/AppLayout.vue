<template>
  <q-layout view="lHh LpR fFf" v-if="user && user.id" class="bg-page-background">
    <q-header>
      <q-toolbar style="height:65px;">
        <router-link :to="{ name: 'appDashboard' }" class="link">
          <img src="../assets/images/logos/logo_app.png" style="max-width:100%;max-height:50px" />
        </router-link>
        <HeaderSearch class="q-ml-md" />
        <q-space />
        <q-btn @click="openURL('https://support.teamlaundrylady.co/support/tickets/new')" icon="sym_o_help" flat round
          class="q-mr-xs" title="Contact support" />
        <q-btn :to="{ name: 'orders' }" flat round icon="format_list_bulleted" class="q-mr-xs" title="All Bookings" />
        <q-btn icon="event" :title="$t('order.namePlural')" :to="{ name: 'order-calendar' }" flat round class="q-mr-xs" />
        <q-btn icon="shopping_cart" title="Order supplies" flat round class="q-mr-xs"
          @click="openURL(common?.operating_country === 'aud' ? 'https://teamlaundrylady.co/account/login' : 'https://www.teamlaundrylady.co.nz/')" />
        <q-btn flat round>
          <q-avatar size="32px">
            <q-img :src="`/api/user/useravatar?fetch=thumb&cb=${user.updated_at || new Date().getTime()}`" />
          </q-avatar>
          <q-menu>
            <q-list>
              <q-item :to="{ name: 'contractor-edit' }" v-close-popup clickable>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-item @click="logout()" clickable v-close-popup>
                <q-item-section>Sign Out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-ajax-bar color="accent" size="3px" />
      <div v-if="!geolocationEnabled && !hideGeolocationMessage" class="text-center q-pa-md bg-accent">
        <q-icon name="warning" size="20px" /> Access to the location service has been disabled on this device. Some
        features won't work correctly until you enable access. <a @click="dismissGeolocationEnabled()"
          class="link">DISMISS</a>
      </div>
      <router-view />
    </q-page-container>
    <MediaViewer />
    <ValidationsModal />
    <OrderCreate />
    <q-dialog v-model="isLocked" persistent>
      <q-card class="modal-sm">
        <q-card-section class="text-center">
          <AppLogo />
          <p class="q-mt-md">Your session has timed out.</p>
          <q-btn @click="login()" color="primary" label="Sign In" rounded />
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
import OrderCreate from 'src/components/order/OrderCreate.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinCommon } from 'src/mixins/common'
import { useMixinSecurity } from 'src/mixins/security'
import { getLocationPromise } from 'src/services/geolocation'
import { socket } from 'src/services/socketio'
import { inject, onMounted, ref } from 'vue'

const { user } = useMixinSecurity()
const $q = useQuasar()
const isLocked = ref(false)
const bus = inject('bus') as EventBus
const geolocationEnabled = ref(true)
const hideGeolocationMessage = ref(!!localStorage.getItem('hideGeolocationMessage'))
const common = useMixinCommon()

// check for lockout
setInterval(() => {
  isLocked.value = !!(user.value && user.value.lastRequest && moment().diff(user.value.lastRequest, 'minutes') >= 18720)
}, 1000)

const logout = () => {
  window.location.href = '/api/auth/logout?from=portal'
}

const login = () => {
  document.location.reload()
}

const checkGeolocation = async () => {
  const currentLoc = await getLocationPromise()
  if ((!currentLoc.lat || !currentLoc.lng)) {
    geolocationEnabled.value = false
  } else {
    geolocationEnabled.value = true
  }
}

const dismissGeolocationEnabled = () => {
  localStorage.setItem('hideGeolocationMessage', '1')
  hideGeolocationMessage.value = true
}

socket.on('newReleasePortal', () => {
  setTimeout(() => {
    $q.notify({
      icon: 'warning',
      message:
        'A new version is available<br/>Please complete any work in progress and refresh',
      html: true,
      color: 'primary',
      multiLine: true,
      timeout: 0,
      actions: [
        {
          label: 'Refresh',
          color: 'white',
          rounded: true,
          handler: () => {
            window.location.reload()
          }
        }
      ]
    })
  }, 5000)
})

onMounted(async () => {
  socket.on('connect', () => {
    console.log('Socket connected')
    if (user.value && user.value.id) {
      socket.emit('authRoom', user.value.id)
    }
  })
  socket.on('hookContractor', (data: LooseObject) => {
    console.log('hookContractor', data)
    if (data && data.emit) {
      bus.emit(data.emit, data)
    }
  })
  await checkGeolocation()
})

</script>
