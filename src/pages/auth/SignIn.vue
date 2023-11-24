<template>
  <q-layout view="lHh Lpr lFf" class="bg-page-background">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn" padding :class="{ 'q-pa-md': $q.screen.xs }">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="text-center q-mb-md" style="min-height:150px;">
            <AppLogo />
          </div>
          <q-card>
            <q-card-section>
              <div class="text-h5 text-bold">Sign In</div>
              <p>Welcome back!</p>
              <q-input v-model="login.username" label="Registered Email" bottom-slots autofocus outlined>
                <template v-slot:prepend>
                  <q-icon name="account_circle" />
                </template>
              </q-input>
              <q-input v-model="login.password" :type="isPwd ? 'password' : 'text'" label="Password"
                @keydown.enter="signIn()" :error="error" error-message="Invalid credentials" outlined>
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                    @click="isPwd = !isPwd" />
                </template>
              </q-input>
              <div class="text-right">
                <q-btn :to="{ name: 'passwordResetRequest' }" label="Forgot your password?" no-caps color="primary" flat
                  rounded />
              </div>
              <q-btn :loading="loading" @click="signIn()" :disable="$v.$invalid || loading" color="primary"
                label="Sign In" class="full-width q-mt-md" rounded />
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { authLogin } from 'src/services/auth'
import { useUserStore } from 'src/stores/user'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const login = reactive({
  username: undefined,
  password: undefined
})
const rules = {
  username: { required, email },
  password: { required }
}

const $v = useVuelidate(rules, login)

const loading = ref(false)
const isPwd = ref(true)
const error = ref(false)
const userStore = useUserStore()

const signIn = () => {
  loading.value = true
  if (login.username && login.password) {
    api
      .post('/auth/signin', login)
      .then(() => {
        api.get('/auth/check').then(res => {
          userStore.setUserData(res.data)
          authLogin()
          router.push({ name: 'appDashboard' })
        }).catch(es => {
          useMixinDebug(es)
        })
      })
      .catch((response) => {
        useMixinDebug(response)
        loading.value = false
        error.value = true
      })
  }
}
</script>
