<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn" padding>
        <q-card class="col-xs-12 col-sm-8 col-md-5 text-center">
          <q-card-section>
            <AppLogo />
          </q-card-section>
          <q-card-section class="text-left" v-if="success">
            Thanks for your interest in joining The Laundry Lady.<br />Please check your email for the next
            steps.
          </q-card-section>
          <q-card-section class="text-left" v-if="!success">
            <div class="text-h5">Contractor Application Form</div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.first_name" label="Applicant One First Name" :error="$v.first_name.$invalid" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.last_name" label="Applicant One Last Name" :error="$v.last_name.$invalid" />
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.first_name_2" label="Applicant Two First Name" bottom-slots />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.last_name_2" label="Applicant Two Last Name" bottom-slots />
              </div>
            </div>
            <div class="text-h6">Your contact details</div>
            <p>Please enter your current home / business address</p>
            <AddressSearch :model="model" :filled="true"
              :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'country_id' }"
              :placeholder="$t('address.search')" />
            <q-input v-model="model.address1" :label="$t('address.line1')" bottom-slots />
            <q-input v-model="model.address2" :error="$v.address2.$invalid" :label="$t('address.line2')" />
            <div class="row q-col-gutter-md q-mb-md">
              <PostcodeRegionField v-model="model.suburb_postcode_region_id"
                :invalid="$v.suburb_postcode_region_id.$invalid" :label="$t('address.suburb')"
                class="col-xs-12 col-sm-6" />
              <CountryField v-model="model.country_id" :label="$t('address.country')" :invalid="$v.country_id.$invalid"
                class="col-xs-12 col-sm-6" />
            </div>
            <DateField v-model="model.dateofbirth" :invalid="$v.dateofbirth.$invalid" label="Date of Birth" />
            <div class="text-h6 q-mt-md">Emergency Contact Details</div>
            <p>Please ensure if these change in future you let us know</p>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ec_first_name" label="Emergency Contact First Name"
                  :error="$v.contractor_ec_first_name.$invalid" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ec_last_name" label="Emergency Contact Last Name"
                  :error="$v.contractor_ec_last_name.$invalid" />
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ec_phone" label="Emergency Contact Phone"
                  :error="$v.contractor_ec_phone.$invalid" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ec_relationship" label="Emergency Contact Relationship to you"
                  :error="$v.contractor_ec_relationship.$invalid" />
              </div>
            </div>
            <div class="text-h6 q-mt-md">Your References</div>
            <p>Please include contact details of 2 referees. These can be personal or work referees. By including their
              details you agree to us contacting them for a reference check. Your formal offer will not be made until we
              have completed a satisfactory reference check.</p>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ref_first_name" label="Referee One First Name"
                  :error="$v.contractor_ref_first_name.$invalid" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ref_last_name" label="Referee One Last Name"
                  :error="$v.contractor_ref_last_name.$invalid" />
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ref_email" label="Referee One Email"
                  :error="$v.contractor_ref_email.$invalid" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ref_phone" label="Referee One Phone"
                  :error="$v.contractor_ref_phone.$invalid" />
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ref2_first_name" label="Referee Two First Name"
                  :error="$v.contractor_ref2_first_name.$invalid" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ref2_last_name" label="Referee Two Last Name"
                  :error="$v.contractor_ref2_last_name.$invalid" />
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ref2_email" label="Referee Two Email"
                  :error="$v.contractor_ref2_email.$invalid" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_ref2_phone" label="Referee Two Phone"
                  :error="$v.contractor_ref2_phone.$invalid" />
              </div>
            </div>
            <div class="text-h6 q-mt-md">Your business details</div>
            <p>If you do not have an ABN, you can register at: <a href="https://www.abr.gov.au/" target="_blank"
                class="link">Australian Government Australian Business Register</a></p>
            <q-input v-model="model.abn" label="ABN" bottom-slots />
            <div class="text-bold">Are you registered for GST?</div>
            <p>If you are unsure if you need to register for GST talk to your accountant or check out the ATO site for
              more information. If your GST status changes while you are working with The Laundry Lady please let us know
              immediately. <a href="https://www.ato.gov.au/Business/GST/Registering-for-GST/" target="_blank"
                class="link">Click here for ATO Registering for GST</a></p>
            <q-toggle v-model="model.contractor_gst_registered" label="I am registered for GST" />
            <div class="text-h6 q-mt-md">Your Commission Payments</div>
            <p>Commission will be paid to your nominated account. Please ensure this is completed or advised prior to any
              commission being due.</p>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_bd_name" label="Account Name"
                  :error="$v.contractor_bd_name.$invalid" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_bd_bank" label="Bank / Financial Institution"
                  :error="$v.contractor_bd_bank.$invalid" />
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_bd_bsb" label="Branch / BSB Number"
                  :error="$v.contractor_bd_bsb.$invalid" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="model.contractor_bd_number" label="Account Number"
                  :error="$v.contractor_bd_number.$invalid" />
              </div>
            </div>
            <div class="text-h6 q-mt-md">Documents Upload</div>
            <p>Please upload copies of the following documents.</p>
            <div class="text-h6 q-mt-md">Requirements Checklist</div>
            <div class="text-bold">Your Equipment</div>
            <div>
              <q-toggle v-model="model.contractor_clothing_rack" label="Car with clothing rack or clothing bar secured"
                true-value="Yes" false-value="No" />
            </div>
            <div>
              <q-toggle v-model="model.contractor_smartphone_type" label="Smartphone with data plan" true-value="Yes"
                false-value="No" />
            </div>
            <div>
              <q-toggle v-model="model.contractor_computer_type" label="Computer or Laptop with internet access"
                true-value="Yes" false-value="No" />
            </div>
            <div>
              <q-toggle v-model="model.contractor_ironing_steam_station" label="Ironing steam station" true-value="Yes"
                false-value="No" />
            </div>
            <div>
              <q-toggle v-model="model.contractor_washing_machine_dryer" label="Washing Machine and Dryer"
                true-value="Yes" false-value="No" />
            </div>
            <div class="text-h6 q-mt-md">Contractor Declaration</div>
            <div class="text-bold">Please check the following</div>
            <div>
              <q-toggle v-model="model.contractor_declaration_agreement"
                label="I have read and agree with the Contractor Agreement and will submit a signed agreement" />
            </div>
            <div>
              <q-toggle v-model="model.contractor_declaration_training"
                label="I agree to undertake the Laundry Lady Training Program and follow Laundry Lady policies and procedures" />
            </div>
            <div>
              <q-toggle v-model="model.contractor_declaration_abn"
                label="I agree to register and maintain an ABN and for the Laundry Lady to create recepient created tax invoices for weekly commissions" />
            </div>
            <div>
              <q-toggle v-model="model.contractor_declaration_pl"
                label="I agree to take out public liability coverage to $5million and keep the policy current at all times" />
            </div>
            <q-btn :loading="loading" @click="update()" v-bind:disabled="$v.$invalid" color="primary" label="Submit"
              class="full-width q-mt-md" />
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateField from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import { ContractorApplicationForm } from 'src/components/models'
import { useMixinDebug } from 'src/mixins/debug'
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(false)
const success = ref(false)
const model = reactive<ContractorApplicationForm>({
  first_name: null,
  last_name: null,
  first_name_2: null,
  last_name_2: null,
  contractor_badge_name: null,
  contractor_start_date: null,
  dateofbirth: null,
  address1: null,
  address2: null,
  suburb_postcode_region_id: null,
  country_id: 13,
  contractor_ec_first_name: null,
  contractor_ec_last_name: null,
  contractor_ec_phone: null,
  contractor_ec_relationship: null,
  contractor_ref_first_name: null,
  contractor_ref_last_name: null,
  contractor_ref_email: null,
  contractor_ref_phone: null,
  contractor_ref2_first_name: null,
  contractor_ref2_last_name: null,
  contractor_ref2_email: null,
  contractor_ref2_phone: null,
  abn: null,
  contractor_gst_registered: false,
  contractor_bd_name: null,
  contractor_bd_bank: null,
  contractor_bd_bsb: null,
  contractor_bd_number: null,
  contractor_clothing_rack: 'No',
  contractor_smartphone_type: 'No',
  contractor_computer_type: 'No',
  contractor_ironing_steam_station: 'No',
  contractor_washing_machine_dryer: 'No',
  contractor_declaration_agreement: false,
  contractor_declaration_training: false,
  contractor_declaration_abn: false,
  contractor_declaration_pl: false,
  contractor_declaration_inform: false,
  contractor_declaration_kit: false,
  contractor_declaration_information: false
})

const rules = {
  first_name: { required },
  last_name: { required },
  dateofbirth: { required },
  contractor_badge_name: { required },
  contractor_start_date: { required },
  address2: { required },
  suburb_postcode_region_id: { required },
  country_id: { required },
  contractor_ec_first_name: { required },
  contractor_ec_last_name: { required },
  contractor_ec_phone: { required },
  contractor_ec_relationship: { required },
  contractor_ref_first_name: { required },
  contractor_ref_last_name: { required },
  contractor_ref_email: { required },
  contractor_ref_phone: { required },
  contractor_ref2_first_name: { required },
  contractor_ref2_last_name: { required },
  contractor_ref2_email: { required },
  contractor_ref2_phone: { required },
  contractor_gst_registered: { required },
  contractor_bd_name: { required },
  contractor_bd_bank: { required },
  contractor_bd_bsb: { required },
  contractor_bd_number: { required },
  contractor_clothing_rack: { required },
  contractor_smartphone_type: { required },
  contractor_computer_type: { required },
  contractor_ironing_steam_station: { required },
  contractor_washing_machine_dryer: { required },
  contractor_declaration_agreement: { required },
  contractor_declaration_training: { required },
  contractor_declaration_abn: { required },
  contractor_declaration_pl: { required },
  contractor_declaration_inform: { required },
  contractor_declaration_kit: { required },
  contractor_declaration_information: { required }
}

const $v = useVuelidate(rules, model, { $scope: false })

const update = () => {
  loading.value = true
  success.value = false
  api.post('/auth/contractor/application', model).then(() => {
    success.value = true
  }).catch(error => {
    useMixinDebug(error)
  })
}

onMounted(() => {
  api.get(`/public/user/contractor/onboarding/application/${route.params.id}`).then(response => {
    Object.assign(model, response.data)
  }).catch(error => {
    useMixinDebug(error)
  })
})
</script>
