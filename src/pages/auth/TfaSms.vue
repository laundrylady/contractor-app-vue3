<template>
  <q-layout view="lHh Lpr lFf" class="bg-page-background">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn q-pa-md" v-if="userStore && userStore.data">
        <q-card class="col-xs-12 col-sm-6 col-md-4 col-xl-3">
          <q-card-section class="text-center" style="min-height:165px;">
            <AppLogo />
          </q-card-section>
          <q-card-section>
            <h4 class="text-h5 q-mt-none q-mb-none">Account Protection</h4>
            <div>Enter the security code that was sent via SMS.</div>
          </q-card-section>
          <q-card-section>
            <div class="q-mb-md"><q-btn @click="sendSms" :label="sentSms ? 'Resend security code' : 'Send security code'"
                :disable="sending" color="primary" rounded /></div>
            <p v-if="error">
              There was an error verifying the security code. Please try again.
            </p>
            <q-input v-model="smsCode" label="Enter the security code" :error="sentSms && !smsCode" outlined bottom-slots>
            </q-input>
          </q-card-section>
          <q-card-actions>
            <q-space />
            <q-btn v-if="sentSms && smsCode" @click="checkSms()" label="Continue" color="primary" rounded
              :disable="loading" :loading="loading" />
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { useUserStore } from 'src/stores/user'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const sentSms = ref(false)
const smsCode = ref()
const error = ref(false)
const loading = ref(false)
const router = useRouter()
const sending = ref(false)

const sendSms = () => {
  if (userStore.data) {
    sending.value = true
    api.post('/auth/tfa/sms/send')
      .then(() => {
        sentSms.value = true
        sending.value = false
      })
      .catch((error) => {
        sending.value = false
        useMixinDebug(error)
      })
  }
}
const checkSms = () => {
  if (userStore.data) {
    error.value = false
    loading.value = true
    api.post('/auth/tfa/sms/check', { code: smsCode.value })
      .then((response) => {
        userStore.setUserData(response.data)
        router.push({ name: 'appDashboard' })
      })
      .catch(() => {
        error.value = true
        loading.value = false
        useMixinDebug(error)
      })
  }
}

onMounted(() => {
  sendSms()
})

</script>
