<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn" padding>
        <div class="col-xs-12 col-sm-8 col-md-5">
          <AppLogo />
          <q-card v-if="success">
            <q-card-section class="text-left">
              Thanks for your interest in joining The Laundry Lady.<br />Please check your email for the next
              steps.
            </q-card-section>
            <q-card-section class="text-left" v-if="!success">
              <div class="text-h5">Contractor Application Form</div>
              <div class="text-h6">Your contact details</div>
              <div class="text-h6 q-mt-md">Your References</div>
              <div class="text-h6 q-mt-md">Your business details</div>

              <div class="text-h6 q-mt-md">Your Commission Payments</div>

              <div class="text-h6 q-mt-md">Documents Upload</div>
              <p>Please upload copies of the following documents.</p>
              <div class="text-h6 q-mt-md">Requirements Checklist</div>

              <div class="text-h6 q-mt-md">Contractor Declaration</div>
              <q-btn :loading="loading" @click="update()" v-bind:disabled="$v.$invalid" color="primary" label="Submit"
                class="full-width q-mt-md" />
            </q-card-section>
          </q-card>
          <div v-if="!success">
            <div class="text-h5">Contractor Application Form</div>
            <p>Please complete form below to proceed to the next steps.</p>
            <q-stepper v-model="step" ref="stepper" color="primary" animated header-nav vertical v-if="!success">
              <q-step :name="1" title="Applicant Details" icon="account_circle" prefix="1" :error="!stepsValid.step1"
                :done="stepsValid.step1" done-color="positive">
                <div class="row q-col-gutter-md q-mt-sm">
                  <div class="col-xs-12 col-sm-6">
                    <q-input v-model="model.first_name" label="Applicant One First Name"
                      :error="$v.first_name.$invalid" />
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
                <div class="row q-col-gutter-md">
                  <div class="col-xs-12 col-sm-6">
                    <q-input v-model="model.contractor_badge_name" label="Preferred Name for Name Badge"
                      :error="$v.contractor_badge_name.$invalid" />
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <DateField v-model="model.contractor_start_date" label="Start Date"
                      :invalid="$v.contractor_start_date.$invalid" />
                  </div>
                </div>
                <q-btn @click="step = 2" label="Next" color="primary" class="q-mt-lg" />
              </q-step>
              <q-step :name="2" title="Your Contact Details" prefix="2" :error="!stepsValid.step2"
                :done="stepsValid.step2" done-color="positive">
                <p>Please enter your current home / business address</p>
                <AddressSearch :model="model" :outlined="true"
                  :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'country_id' }"
                  :placeholder="$t('address.search')" />
                <q-input v-model="model.address1" :label="$t('address.line1')" bottom-slots />
                <q-input v-model="model.address2" :error="$v.address2.$invalid" :label="$t('address.line2')" />
                <div class="row q-col-gutter-md q-mb-md">
                  <PostcodeRegionField v-model="model.suburb_postcode_region_id"
                    :invalid="$v.suburb_postcode_region_id.$invalid" :label="$t('address.suburb')"
                    class="col-xs-12 col-sm-6" />
                  <CountryField v-model="model.country_id" :label="$t('address.country')"
                    :invalid="$v.country_id.$invalid" class="col-xs-12 col-sm-6" />
                </div>
                <DateField v-model="model.dateofbirth" :invalid="$v.dateofbirth.$invalid" label="Date of Birth" />
                <q-btn @click="step = 3" label="Next" color="primary" class="q-mt-lg" />
              </q-step>
              <q-step :name="3" title="Emergency Contact Details" prefix="3" :error="!stepsValid.step3"
                :done="stepsValid.step3" done-color="positive">
                <p class="q-mt-sm">Please ensure if these change in future you let us know</p>
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
                <q-btn @click="step = 4" label="Next" color="primary" class="q-mt-lg" />
              </q-step>
              <q-step :name="4" title="Your References" prefix="4" :error="!stepsValid.step4" :done="stepsValid.step4"
                done-color="positive">
                <p class="q-mt-sm">Please include contact details of 2 referees. These can be personal or work referees.
                  By
                  including their
                  details you agree to us contacting them for a reference check. Your formal offer will not be made until
                  we
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
                <q-btn @click="step = 5" label="Next" color="primary" class="q-mt-lg" />
              </q-step>
              <q-step :name="5" title="Your business details" prefix="5" :error="!stepsValid.step5"
                :done="stepsValid.step5" done-color="positive">
                <p class="q-mt-sm">If you do not have an ABN, you can register at: <a href="https://www.abr.gov.au/"
                    target="_blank" class="link">Australian Government Australian Business Register</a></p>
                <q-input v-model="model.contractor_abn" label="ABN" bottom-slots :error="$v.contractor_abn.$invalid" />
                <div class="text-bold">Are you registered for GST?</div>
                <q-toggle v-model="model.contractor_gst_registered" label="I am registered for GST"
                  class="q-mt-sm q-mb-sm" />
                <p>If you are unsure if you need to register for GST talk to your accountant or check out the ATO site for
                  more information. If your GST status changes while you are working with The Laundry Lady please let us
                  know
                  immediately. <a href="https://www.ato.gov.au/Business/GST/Registering-for-GST/" target="_blank"
                    class="link">Click here for ATO Registering for GST</a></p>
                <q-btn @click="step = 6" label="Next" color="primary" class="q-mt-lg" />
              </q-step>
              <q-step :name="6" title="Your Commission Payments" prefix="6" :error="!stepsValid.step6"
                :done="stepsValid.step6" done-color="positive">
                <p class="q-mt-sm">Commission will be paid to your nominated account. Please ensure this is completed or
                  advised prior to
                  any
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
                <q-btn @click="step = 7" label="Next" color="primary" class="q-mt-lg" />
              </q-step>
              <q-step :name="7" title="Documents Upload" prefix="7" :error="!stepsValid.step7" :done="stepsValid.step7"
                done-color="positive">
                <div class="q-mt-sm">
                  <p>Please upload copies of the following documents.</p>
                  <div class="text-h6 q-mb-xs">Copy of current Drivers Licence (front and back)</div>
                  <TmpAttachments type="Drivers Licence" :documents="model.documents" @attachment:add="addDocument"
                    @attachment:remove="removeDocument" />
                  <div class="text-h6 q-mb-xs q-mt-md">Copy of current Medicare Card</div>
                  <TmpAttachments type="Medicare Card" :documents="model.documents" @attachment:add="addDocument"
                    @attachment:remove="removeDocument" />
                  <div class="text-h6 q-mb-xs q-mt-md">Copy of Certificate of Currency for Public Liability Insuranced
                  </div>
                  <p>You must have public liability insurance to the coverage of $5million and maintain a current
                    certificate of insurance at all times while carrying out services for the Laundry Lady. The
                    certificate
                    should name all applicants including any family members who may help you with deliveries from time to
                    time. You will need to send us an updated certificate of insurance every year. We have a partnership
                    with Bizcover to offer you the best rates through our group buying power, and make it easier for us to
                    track your certificate of currency. To apply for your Bizcover Public Liability Insurance under the
                    Laundry Lady partnership go to:</p>
                  <TmpAttachments type="Certificate of Currency for Public Liability Insurance"
                    :documents="model.documents" @attachment:add="addDocument" @attachment:remove="removeDocument" />
                  <div class="text-h6 q-mb-xs q-mt-md">NDIS Workers Clearance Certificate</div>
                  <p>Please upload your NDIS Workers Clearance Certificate or email confirmation of your application (save
                    your screenshot as one of the allowed file extensions). See below for instructions on how to obtain
                    your
                    NDIS Workers Clearance. Use appropriate state/territory link (listed below) for your location.</p>
                  <p><a
                      href="https://www.qld.gov.au/law/laws-regulated-industries-and-accountability/queensland-laws-and-regulations/regulated-industries-and-licensing/blue-card/applications/combined-disability-worker-screening"
                      class="link" target="_blank">Queensland</a><a
                      href="https://www.service.vic.gov.au/services/national-disability-insurance-scheme?utm_source=vic_gov_au_website&utm_medium=referral&utm_campaign=ndis_worker_screening_check&utm_content=online_application"
                      target="_blank" class="link q-ml-sm">Victoria</a><a
                      href="https://screening.sa.gov.au/types-of-check/ndis-worker-checks" target="_blank"
                      class="link q-ml-sm">South Australia</a><a
                      href="https://www.myaccount.act.gov.au/WWVPNDIS/s/wwvp-ndis-new-application-v2" target="_blank"
                      class="link q-ml-sm">ACT</a><a
                      href="https://online.transport.wa.gov.au/tso/selfservice/public/ndis_wsu_apply_entry.jsf#/embd/preliminary-questions"
                      target="_blank" class="link q-ml-sm">Western Australia</a></p>
                  <TmpAttachments type="NDIS Workers Clearance Certificate" :documents="model.documents"
                    @attachment:add="addDocument" @attachment:remove="removeDocument" />
                  <p class="q-mt-sm">You will need the Laundry Lady employer ID below to complete your application.
                    Laundry Lady details - to use in online application:
                    When completing the application online, please nominate The Laundry Lady Pty Ltd as your employer.
                    Employer ID details are as below.
                    Employer name: The Laundry Lady Pty Ltd Employer ID: 4-GUCBSYQ</p>
                  <div class="text-h6 q-mb-xs q-mt-md">Photo of yourself</div>
                  <p>Upload a head and shoulders photo of yourself in front of a white background. We will use this on
                    your
                    public profile on our website that customers will see when booking. If you are a team (eg husband and
                    wife) please provide a photo of both of you together in front of a white background.</p>
                  <q-uploader color="primary" :url="uploadConfig.url" :headers="uploadConfig.headers"
                    @uploaded="successUpload" label="Upload document" auto-expand auto-upload
                    :accept="uploadConfig.documents" :field-name="uploadConfig.fieldName" class="q-mb-sm"
                    ref="tmpUploader" :max-file-size="uploadConfig['max-file-size']" />
                  <p class="text-caption">Accepted file types: jpg, gif, png, pdf, Max. file size: 5 MB</p>
                </div>
                <q-btn @click="step = 8" label="Next" color="primary" class="q-mt-lg" />
              </q-step>
              <q-step :name="8" title="Requirements Checklist" prefix="8" :error="!stepsValid.step8"
                :done="stepsValid.step8" done-color="positive">
                <div class="text-bold q-mb-sm q-mt-sm">Your Equipment</div>
                <div>
                  <q-checkbox v-model="model.contractor_clothing_rack"
                    label="Car with clothing rack or clothing bar secured" true-value="Yes" false-value="No" />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_smartphone_type" label="Smartphone with data plan"
                    true-value="Yes" false-value="No" />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_computer_type" label="Computer or Laptop with internet access"
                    true-value="Yes" false-value="No" />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_ironing_steam_station" label="Ironing steam station"
                    true-value="Yes" false-value="No" />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_washing_machine_dryer" label="Washing Machine and Dryer"
                    true-value="Yes" false-value="No" />
                </div>
                <q-btn @click="step = 9" label="Next" color="primary" class="q-mt-lg" />
              </q-step>
              <q-step :name="9" title="Contractor Declaration" prefix="9" :error="!stepsValid.step9"
                :done="stepsValid.step9" done-color="positive">
                <div class="text-bold q-mb-sm">Please check the following</div>
                <div>
                  <q-checkbox v-model="model.contractor_declaration_agreement"
                    label="I have read and agree with the Contractor Agreement and will submit a signed agreement" />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_declaration_training"
                    label="I agree to undertake the Laundry Lady Training Program and follow Laundry Lady policies and procedures" />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_declaration_abn"
                    label="I agree to register and maintain an ABN and for the Laundry Lady to create recepient created tax invoices for weekly commissions" />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_declaration_pl"
                    label="I agree to take out public liability coverage to $5million and keep the policy current at all times" />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_declaration_inform"
                    label="I agree to inform the Laundry Lady if any details change in this application form" />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_declaration_kit"
                    label="I agree to purchase the Starter Kit for $399 including GST as detailed in the The Laundry Lady Contractor Package. An invoice will be sent after references are checked and confirmed." />
                </div>
                <div>
                  <q-checkbox v-model="model.contractor_declaration_information"
                    label="I agree that all information included in this application form is true and correct." />
                </div>
                <div class="row q-col-gutter-md q-mt-sm">
                  <div class="col-xs-12 col-sm-6">
                    <div class="text-bold">Applicant One Signature</div>
                    <div style="border:1px solid #efefef">
                      <VueSignaturePad id="signature" width="100%" height="150px" ref="sig1Ref"
                        :options="{ onEnd: saveSig1 }" />
                    </div>
                    <q-btn @click="resetSig1()" icon="sync" flat />
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="text-bold">Applicant Two Signature</div>
                    <div style="border:1px solid #efefef">
                      <VueSignaturePad id="signature" width="100%" height="150px" ref="sig2Ref"
                        :options="{ onEnd: saveSig2 }" />
                    </div>
                    <q-btn @click="resetSig2()" icon="sync" flat />
                  </div>
                </div>
                <q-btn @click="update()" :disable="loading || $v.$invalid" label="Submit" color="primary"
                  class="q-mt-lg" />
              </q-step>
            </q-stepper>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import TmpAttachments from 'src/components/attachment/TmpAttachments.vue'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateField from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import { Attachment, ContractorApplicationForm } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { uploadConfig } from 'src/mixins/help'
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
// eslint-disable-next-line
// @ts-ignore
import { VueSignaturePad } from 'vue-signature-pad'

const $q = useQuasar()
const route = useRoute()
const loading = ref(false)
const success = ref(false)
const step = ref(1)
const sig1Ref = ref()
const sig2Ref = ref()
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
  contractor_abn: null,
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
  contractor_declaration_information: false,
  contractor_applicant_1_sig: null,
  contractor_applicant_2_sig: null,
  documents: [],
  avatar: null
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
  contractor_ref_email: { required, email },
  contractor_ref_phone: { required },
  contractor_ref2_first_name: { required },
  contractor_ref2_last_name: { required },
  contractor_ref2_email: { required, email },
  contractor_ref2_phone: { required },
  contractor_abn: { required },
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
  contractor_declaration_information: { required },
  contractor_applicant_1_sig: { required },
  avatar: { required }
}

const $v = useVuelidate(rules, model, { $scope: false })

const stepsValid = computed(() => {
  const valid = {
    step1: true,
    step2: true,
    step3: true,
    step4: true,
    step5: true,
    step6: true,
    step7: true,
    step8: true,
    step9: true
  }
  // step 1
  if (!model.first_name || !model.last_name || !model.contractor_badge_name || !model.contractor_start_date) {
    valid.step1 = false
  }
  // step 2
  if (!model.address2 || !model.suburb_postcode_region_id || !model.dateofbirth) {
    valid.step2 = false
  }
  // step 3
  if (!model.contractor_ec_first_name || !model.contractor_ec_last_name || !model.contractor_ec_phone || !model.contractor_ec_relationship) {
    valid.step3 = false
  }
  // step 4
  if (!model.contractor_ref_first_name || !model.contractor_ref_last_name || !model.contractor_ref_email || !model.contractor_ref_phone) {
    valid.step4 = false
  }
  // step 5
  if (!model.contractor_abn) {
    valid.step5 = false
  }
  // step 6
  if (!model.contractor_bd_name || !model.contractor_bd_bank || !model.contractor_bd_bsb || !model.contractor_bd_number) {
    valid.step6 = false
  }
  // step 7
  // drivers licence
  const dl = model.documents.filter(o => o.type === 'Drivers Licence')
  if (dl.length < 2) {
    valid.step7 = false
  }
  // medicare card
  const mc = model.documents.filter(o => o.type === 'Medicare Card')
  if (!mc.length) {
    valid.step7 = false
  }
  // certificate of currency for public liability insurance
  const pl = model.documents.filter(o => o.type === 'Certificate of Currency for Public Liability Insurance')
  if (!pl.length) {
    valid.step7 = false
  }
  // step 8
  if (model.contractor_clothing_rack === 'No' && model.contractor_smartphone_type === 'No' && model.contractor_computer_type === 'No' && model.contractor_ironing_steam_station === 'No' && model.contractor_washing_machine_dryer === 'No') {
    valid.step8 = false
  }
  // step 9
  if (!model.contractor_declaration_agreement || !model.contractor_declaration_training || !model.contractor_declaration_abn || !model.contractor_declaration_pl || !model.contractor_declaration_inform || !model.contractor_declaration_kit || !model.contractor_declaration_information) {
    valid.step9 = false
  }
  return valid
})

const saveSig1 = () => {
  const { isEmpty, data } = sig1Ref.value.saveSignature()
  if (!isEmpty) {
    model.contractor_applicant_1_sig = data
  }
}

const resetSig1 = () => {
  model.contractor_applicant_1_sig = null
  sig1Ref.value.clearSignature()
}

const saveSig2 = () => {
  const { isEmpty, data } = sig2Ref.value.saveSignature()
  if (!isEmpty) {
    model.contractor_applicant_2_sig = data
  }
}

const resetSig2 = () => {
  model.contractor_applicant_2_sig = null
  sig2Ref.value.clearSignature()
}

const update = () => {
  loading.value = true
  success.value = false
  $q.loading.show({ message: 'Submitting application, please wait...' })
  api.put(`/public/user/contractor/onboarding/application/${route.params.id}`, model).then(() => {
    success.value = true
    loading.value = false
    $q.loading.hide()
  }).catch(error => {
    loading.value = false
    $q.loading.hide()
    useMixinDebug(error)
  })
}

const addDocument = (a: Attachment) => {
  model.documents.push(a)
}

const removeDocument = (a: Attachment) => {
  model.documents = model.documents.filter((o: Attachment) => o.name !== a.name)
}

const successUpload = (file: LooseObject) => {
  model.avatar = file.xhr.response
}

onMounted(() => {
  api.get(`/public/user/contractor/onboarding/application/${route.params.id}`).then(response => {
    Object.assign(model, response.data)
  }).catch(error => {
    useMixinDebug(error)
  })
})
</script>
