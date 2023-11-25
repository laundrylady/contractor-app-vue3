<template>
  <q-layout view="lHh Lpr lFf" class="bg-page-background">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn q-pa-md" v-if="userStore && userStore.data">
        <q-card class="col-xs-12 col-sm-6 col-md-4 col-xl-3">
          <q-card-section class="text-center" style="min-height:165px;">
            <AppLogo />
          </q-card-section>
          <q-card-section>
            <h4 class="text-h5 q-mt-none q-mb-none">Protect your account</h4>
            <p>Add an extra layer of security to your Laundry Lady account.</p>
            <div>Click <span class="text-bold text-primary">SEND CODE</span> below and we'll send you a verification code
              to your registered mobile phone number.
            </div>
          </q-card-section>
          <q-card-section>
            <div v-if="error">
              There was an error verifying the security code sent. Please try again.</div>
            <div class="q-mb-md">
              <q-btn @click="sendSms" :label="sentSms ? 'Resend security code' : 'Send security code'" :disable="sending"
                :color="sentSms ? 'secondary' : 'primary'" rounded />
            </div>
            <q-input v-model="smsCode" label="Enter your security code" hint="Click the button to receive your code"
              :error="sentSms && !smsCode" outlined bottom-slots />
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const sentSms = ref(false)
const smsCode = ref()
const tfaEmail = ref()
const error = ref(false)
const router = useRouter()
const sending = ref(false)
const loading = ref(false)

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
    api.post('/auth/tfa/sms/check', { code: smsCode.value, tfa_email: tfaEmail.value, mobile: userStore.data.mobile })
      .then((response) => {
        userStore.setUserData(response.data)
        router.push({ name: 'appDashboard' })
      })
      .catch((error) => {
        loading.value = false
        error.value = true
        useMixinDebug(error)
      })
  }
}

</script>
