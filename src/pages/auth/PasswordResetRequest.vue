<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn" padding>
        <q-card class="col-xs-12 col-sm-6 col-md-3 text-center">
          <q-card-section class="text-center" style="min-height:92px;">
            <AppLogo />
          </q-card-section>
          <q-card-section>
            <div class="text-h5 text-bold">Password Reset</div>
            <div>Enter your registered email address to start the process.</div>
          </q-card-section>
          <q-card-section>
            <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOutTop" appear>
              <div class="text-positive q-mb-md" v-if="success || error">
                Please go to your email account and click the password reset link we've sent for your account.
                It could take a few minutes to appear, and be sure to check any spam and promotional folders—just in case!
              </div>
            </transition>
            <q-input v-model="model.email" :error="$v.email.$error" label="Enter your registered email address" autofocus
              aria-label="Enter your email address" outlined />
            <q-btn @click="send()" :disabled="loading || $v.$invalid" :loading="loading" color="primary" rounded
              label="Send" aria-label="Send reset password email" class="full-width" />
            <div class="text-left q-mt-lg">
              <q-btn :to="{ name: 'signIn' }" class="link" aria-label="Go back to Sign In" label="Back to Sign In" flat
                no-caps color="primary" rounded />
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { required, email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { reactive, ref } from 'vue'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import AppLogo from 'src/components/AppLogo.vue'

const loading = ref(false)
const error = ref(false)
const success = ref(false)
const model = reactive({ email: undefined })
const rules = { email: { required, email } }
const $v = useVuelidate(rules, model)

const send = () => {
  if (model.email) {
    loading.value = true
    api.post('/auth/password/reset/request?from=portal', model).then(() => {
      loading.value = false
      error.value = false
      success.value = true
      model.email = undefined
    }).catch(response => {
      useMixinDebug(response)
      loading.value = false
      error.value = true
      success.value = false
    })
  }
}

</script>
