<template>
  <q-layout view="lHh Lpr lFf" class="bg-page-background">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn q-pa-md" v-if="contractor">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="text-center q-mb-md" style="min-height:150px;">
            <AppLogo />
          </div>
          <q-card>
            <q-card-section v-if="!success">
              <h4 class="text-h4 q-mt-none q-mb-sm">Account Activation</h4>
              <p>Congratulations and welcome to The Laundry Lady.</p>
              <p>Before you can get started, you need to set a secure
                password for your account.</p>
              <div class="q-pa-md bg-pink-1 q-mb-lg">
                <div class="q-mb-sm">Create a strong password containing at least:</div>
                <ul class="q-mb-none">
                  <li>1 number</li>
                  <li>1 UPPERCASE character</li>
                  <li>1 special character (e.g. !,#,@)</li>
                </ul>
              </div>
            </q-card-section>
            <q-card-section>
              <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOutTop" appear>
                <div class="text-center" v-if="success">
                  <div><q-icon name="check" size="64px" /></div>
                  <p>Your password has been set and account enabled!</p>
                  <q-btn :to="{ name: 'appDashboard' }" color="primary" label="Continue" />
                </div>
              </transition>
              <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOutTop" appear>
                <q-banner class="bg-negative text-white" v-if="error">Error reseting your password</q-banner>
              </transition>
              <div v-if="!success">
                <q-input v-model="model.password" label="Please enter a secure password"
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
              <q-space />
              <q-btn @click="confirm()"
                :disabled="loading || $v.$invalid || (model.password && model.passwordConfirm !== model.password)"
                :loading="loading" color="primary" v-if="!success" label="Activate" aria-label="Activate" rounded />
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import moment from 'moment-timezone'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { authLogin } from 'src/services/auth'
import { useUserStore } from 'src/stores/user'
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const userStore = useUserStore()
const loading = ref(false)
const error = ref(false)
const success = ref(false)
const pwdToggle = reactive({ pwc: true, pw: true })
const route = useRoute()
const contractor = ref()
const model = reactive({
  code: route.params.code,
  password: undefined,
  passwordConfirm: undefined,
  timezone: moment.tz.guess()
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
  api.put(`/public/user/contractor/onboarding/activate/${route.params.code}`, model).then(() => {
    error.value = false
    api.get('/auth/check').then(res => {
      userStore.setUserData(res.data)
      authLogin()
      success.value = true
      loading.value = false
    }).catch(es => {
      useMixinDebug(es)
    })
  }).catch(response => {
    useMixinDebug(response)
    error.value = true
    success.value = false
    loading.value = false
  })
}

onMounted(() => {
  api.get(`/public/user/contractor/onboarding/activate/${route.params.code}`).then(response => {
    contractor.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
})
</script>
