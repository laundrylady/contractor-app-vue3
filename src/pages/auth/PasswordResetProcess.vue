<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn q-pa-md">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="text-center q-mb-md" style="min-height:150px;">
            <AppLogo />
          </div>
          <q-card>
            <q-card-section>
              <h1 class="text-h5 q-mt-none q-mb-none text-bold">Password Reset</h1>
              <div>Enter and confirm your new password below:</div>
            </q-card-section>
            <q-card-section>
              <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOutTop" appear>
                <div class="text-positive q-mb-md" v-if="success">
                  <p class="text-bold q-mb-lg">Your password has been updated!</p>
                  <q-btn :to="{ name: 'signIn' }" color="primary" label="Go To Sign In" class="full-width" />
                </div>
              </transition>
              <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOutTop" appear>
                <div class="bg-negative text-white" v-if="error">Error reseting your password</div>
              </transition>
              <div v-if="!success">
                <q-input v-model="model.password" label="Please enter a strong password"
                  :type="pwdToggle.pw ? 'password' : 'text'"
                  :error="$v.password.$error || (model.password && passwordTest() < 4)" bottom-slots
                  error-message="Your password must contain at least 1 number, 1 uppercase character and 1 special character"
                  aria-label="Enter new password" outlined>
                  <template v-slot:append>
                    <q-icon :name="pwdToggle.pw ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                      @click="pwdToggle.pw = !pwdToggle.pw" />
                  </template>
                </q-input>
                <q-input v-model="model.passwordConfirm" label="Confirm password"
                  :type="pwdToggle.pwc ? 'password' : 'text'"
                  :error="model.password && model.passwordConfirm !== model.password" class="q-mt-md"
                  aria-label="Confirm new password" outlined>
                  <template v-slot:append>
                    <q-icon :name="pwdToggle.pwc ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                      @click="pwdToggle.pwc = !pwdToggle.pwc" />
                  </template>
                </q-input>
              </div>
            </q-card-section>
            <q-card-actions class="row" v-if="!success">
              <q-btn :to="{ name: 'signIn' }" label="Back to Sign In" no-caps flat color="primary" rounded />
              <q-space />
              <q-btn @click="confirm()"
                :disabled="loading || $v.$invalid || (model.password && model.passwordConfirm !== model.password)"
                :loading="loading" color="primary" v-if="!success" label="Confirm" aria-label="Confirm" rounded />
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useMixinDebug } from 'src/mixins/debug'
import { useRoute } from 'vue-router'
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'

const loading = ref(false)
const error = ref(false)
const success = ref(false)
const pwdToggle = reactive({ pwc: true, pw: true })
const route = useRoute()
const model = reactive({
  code: route.params.code,
  password: undefined,
  passwordConfirm: undefined
})
const rules = {
  code: { required },
  password: { required },
  passwordConfirm: { required }
}
const $v = useVuelidate(rules, model)

const passwordTest = () => {
  const pass = model.password ? (model.password as string) : undefined
  const tests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^A-Z-0-9]/i]
  if (pass === undefined) {
    return -1
  }
  let s = 0
  if (pass.length < 6) {
    return 0
  }
  for (const i in tests) {
    if (tests[i].test(pass)) {
      s += 1
    }
  }
  return s
}

const confirm = () => {
  loading.value = true
  api.post('/auth/password/reset/process', model).then(() => {
    error.value = false
    success.value = true
    loading.value = false
  }).catch(response => {
    useMixinDebug(response)
    error.value = true
    success.value = false
    loading.value = false
  })
}
</script>
