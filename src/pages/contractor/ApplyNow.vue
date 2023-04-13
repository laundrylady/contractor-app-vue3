<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn" padding>
        <q-card class="col-xs-12 col-sm-6 col-md-3 text-center">
          <q-card-section>
            <AppLogo />
          </q-card-section>
          <q-card-section class="text-left" v-if="success">
            Thanks for your interest in joining The Laundry Lady.<br />Please check your email for the next steps.
          </q-card-section>
          <q-card-section class="text-left" v-if="!success">
            <div class="text-h6">Join the team</div>
            <p>Fill out the form below and we'll send you an info pack all about joining the team.</p>
            <q-input v-model="model.first_name" label="First Name" :error="$v.first_name.$invalid" />
            <q-input v-model="model.last_name" label="Last Name" :error="$v.last_name.$invalid" />
            <q-input v-model="model.email" label="Email" :error="$v.email.$invalid || emailError.error"
              @blur="checkEmail()" :error-message="emailError.msg || ''" :hint="emailError.msg || ''" />
            <q-input v-model="model.mobile" label="Mobile Phone" :error="$v.mobile.$invalid" mask="#### ### ###"
              unmasked-value />
            <PostcodeRegionField v-model="model.suburb_postcode_region_id" label="Suburb"
              :invalid="$v.suburb_postcode_region_id.$invalid" />
            <p class="q-mt-md">Confirm your eligibility requirements:</p>
            <q-toggle v-model="model.contractor_car_licence" label="Reliable car and current drivers licence" />
            <q-toggle v-model="model.contractor_equipment"
              label="Equipment including steam station iron, washing machine, dryer, or willing to purchase these?" />
            <q-input v-model="model.contractor_why_join" label="Why do you want to join our team?" class="q-mt-lg"
              :error="$v.contractor_why_join.$invalid" type="textarea" rows="3" outlined />
            <q-select v-model="model.contractor_referral_type" label="How did you find out about us?"
              :options="['Instagram', 'Facebook', 'Google', 'Gumtree', 'Working Parents Connect', 'Seek', 'Melbourne Mums', 'Word of Mouth', 'Radio', 'Newspaper/Magazine', 'Event', 'Other']"
              :error="$v.contractor_referral_type.$invalid" />
            <q-btn :loading="loading" @click="applyNow()"
              v-bind:disabled="$v.$invalid || !model.contractor_car_licence || !model.contractor_equipment"
              color="primary" label="Apply Now" class="full-width q-mt-md" />
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { reactive, ref } from 'vue'

const loading = ref(false)
const success = ref(false)
const emailError = ref({ error: false, msg: '' })
const model = reactive({
  first_name: null,
  last_name: null,
  email: null,
  mobile: null,
  suburb_postcode_region_id: null,
  contractor_car_licence: false,
  contractor_equipment: false,
  contractor_why_join: null,
  contractor_referral_type: null
})

const rules = {
  first_name: { required },
  last_name: { required },
  email: { required, email },
  mobile: { required },
  suburb_postcode_region_id: { required },
  contractor_why_join: { required },
  contractor_referral_type: { required }
}

const $v = useVuelidate(rules, model)

const applyNow = () => {
  loading.value = true
  success.value = false
  api.post('/auth/contractor/applynow', model).then(() => {
    success.value = true
  }).catch(error => {
    useMixinDebug(error)
  })
}

const checkEmail = () => {
  emailError.value = { error: false, msg: '' }
  if (model.email) {
    api.post('/user/checkemail/0', { email: model.email }).then(response => {
      if (parseFloat(response.data.found[0].count) > 0) {
        emailError.value.error = true
        emailError.value.msg = 'That email address is already in use'
        model.email = null
      }
    }).catch(error => { useMixinDebug(error) })
  }
}
</script>
