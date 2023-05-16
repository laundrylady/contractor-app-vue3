<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn q-pa-md" v-if="userStore && userStore.data">
        <q-card class="col-xs-12 col-sm-6 col-md-4">
          <q-card-section class="row" style="min-height:92px;">
            <AppLogo />
          </q-card-section>
          <q-card-section>
            <h4 class="text-h4 q-mt-none q-mb-sm">Account Protection</h4>
            <p>Enter the security code that was sent to via SMS.</p>
          </q-card-section>
          <q-card-section>
            <div v-if="error">
              There was an error verifying the security code sent. Please try again.</div>
            <q-input v-model="smsCode" label="Enter your security code" hint="Click the button to receive your code"
              :error="sentSms && !smsCode" outlined bottom-slots>
              <template v-slot:append>
                <q-btn @click="sendSms" :label="sentSms ? 'Resend code' : 'Send code'" :disable="sending" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions>
            <q-space />
            <q-btn v-if="sentSms && smsCode" @click="checkSms()" label="Continue" color="primary" />
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
    api.post('/auth/tfa/sms/check', { code: smsCode.value })
      .then((response) => {
        userStore.setUserData(response.data)
        router.push({ name: 'appDashboard' })
      })
      .catch((error) => {
        error.value = true
        useMixinDebug(error)
      })
  }
}

onMounted(() => {
  sendSms()
})

</script>
