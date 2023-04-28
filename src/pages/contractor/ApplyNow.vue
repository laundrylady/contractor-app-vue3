<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn" padding>
        <q-card class="col-xs-12 col-sm-9 col-md-5 col-lg-4 text-center">
          <q-card-section>
            <AppLogo />
          </q-card-section>
          <q-card-section class="text-left" v-if="success">
            Thanks for your interest in joining The Laundry Lady.<br />Please check your email for the next steps.
          </q-card-section>
          <q-card-section class="text-left" v-if="!success">
            <div class="text-h5">Join the team</div>
            <p>Fill out the form below and we'll send you an info pack all about joining the team.</p>
            <div class="row q-col-gutter-md">
              <q-input v-model="model.first_name" label="First Name" :error="$v.first_name.$invalid"
                class="col-xs-12 col-sm-6" />
              <q-input v-model="model.last_name" label="Last Name" :error="$v.last_name.$invalid"
                class="col-xs-12 col-sm-6" />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="model.email" label="Email" :error="$v.email.$invalid || emailError.error"
                @blur="checkEmail()" :error-message="emailError.msg || ''" :hint="emailError.msg || ''"
                class="col-xs-12 col-sm-6" />
              <q-input v-model="model.mobile" label="Mobile Phone" :error="$v.mobile.$invalid" mask="#### ### ###"
                unmasked-value class="col-xs-12 col-sm-6" />
            </div>
            <div class="text-h6">Address Details</div>
            <AddressSearch :model="model" :outlined="true"
              :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'country_id' }"
              :placeholder="$t('address.search')" />
            <div class="row q-col-gutter-md">
              <q-input v-model="model.address1" :label="$t('address.line1')" bottom-slots class="col-xs-12 col-sm-6" />
              <q-input v-model="model.address2" :error="$v.address2.$invalid" :label="$t('address.line2')"
                class="col-xs-12 col-sm-6" />
            </div>
            <PostcodeRegionField v-model="model.suburb_postcode_region_id" label="Suburb"
              :invalid="$v.suburb_postcode_region_id.$invalid" />
            <div class="bg-grey-1 q-pa-sm q-mt-md">
              <div class="text-h6">Confirm your eligibility requirements:</div>
              <q-toggle v-model="model.contractor_car_licence" label="Reliable car and current drivers licence" />
              <q-toggle v-model="model.contractor_equipment"
                label="Equipment including steam station iron, washing machine, dryer, or willing to purchase these?" />
              <div class="row q-col-gutter-md q-mt-xs q-mb-md">
                <div class="col-xs-12 col-sm-6">
                  <DateField v-model="model.dateofbirth" :label="$t('contractor.dateofbirth')"
                    :invalid="$v.dateofbirth.$invalid" />
                </div>
              </div>
            </div>
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
import AddressSearch from 'src/components/form/AddressSearch.vue'
import DateField from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { reactive, ref } from 'vue'

const loading = ref(false)
const success = ref(false)
const emailError = ref({ error: false, msg: '' })
const model = reactive({
  first_name: null,
  last_name: null,
  dateofbirth: null,
  email: null,
  mobile: null,
  address1: null,
  address2: null,
  suburb_postcode_region_id: null,
  contractor_abn: null,
  contractor_car_licence: false,
  contractor_equipment: false,
  contractor_why_join: null,
  contractor_referral_type: null
})

const rules = {
  first_name: { required },
  last_name: { required },
  dateofbirth: { required },
  email: { required, email },
  mobile: { required },
  address2: { required },
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
