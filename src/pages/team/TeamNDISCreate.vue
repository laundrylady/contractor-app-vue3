<template>
  <q-layout view="lHh Lpr lFf" v-if="loaded">
    <HeaderComponent />
    <q-page-container>
      <q-page padding :class="{ 'q-pa-md': $q.screen.xs }">
        <div class="flex justify-center q-mt-xl">
          <div style="min-width:350px;max-width:700px;">
            <div class="flex q-mb-md no-wrap">
              <AppLogo />
              <q-space />
              <img src="~assets/images/logos/ndis_heart.svg" style="max-height:100px;" />
            </div>
            <q-card>
              <q-card-section v-if="error">
                <p>Sorry there was an error with your submission.</p>
                <p>Please <a href="https://thelaundrylady.com.au/contact/" class="link">contact us</a>
                  for support.</p>
              </q-card-section>
              <q-card-section v-if="success">
                <div class="text-center q-mb-md"><q-icon name="o_check_circle" size="64px" color="green" /></div>
                <div class="text-h5 text-center q-mb-sm">Details Submitted</div>
                <div>You have submitted your NDIS details to The Laundry Lady.</div>
                <p>We'll be in contact with further steps if required.</p>
                <p>You may safely close this window.</p>
              </q-card-section>
              <q-card-section v-if="!error && !success">
                <p class="q-mb-none">Register your NDIS details with us to get started!</p>
                <p>Please ensure all details are accurate and up to date:</p>
                <div class="text-h6 q-mt-sm">Pickup Address</div>
                <p>Enter your pickup / delivery address.</p>
                <AddressSearch :model="model" :filled="true"
                  :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'country_id', postcode: 'postcode' }"
                  :placeholder="$t('address.search')" @update:modelValue="checkSuburb()" />
                <q-input v-model="model.address1" :label="$t('address.line1')" outlined class="q-mb-md" />
                <q-input v-model="model.address2" :error="$v.address2.$invalid" :label="$t('address.line2')" outlined />
                <div class="row q-col-gutter-md">
                  <PostcodeRegionField v-model="model.suburb_postcode_region_id"
                    :invalid="$v.suburb_postcode_region_id.$invalid" :label="$t('address.suburb')"
                    class="col-xs-12 col-sm-6" :outlined="true" @update:modelValue="checkSuburb()" clearable />
                  <q-input v-model="model.postcode" :error="$v.postcode.$invalid" :label="$t('address.postcode')"
                    outlined class="col-xs-12 col-sm-6" />
                </div>
                <div class="row q-col-gutter-md q-mb-md">
                  <CountryField v-model="model.country_id" :label="$t('address.country')" :outlined="true"
                    :invalid="$v.country_id.$invalid" class="col-xs-12 col-sm-6" />
                </div>
                <div class="bg-primary text-white q-pa-md q-mt-md" v-if="noSuburb"><q-icon name="warning" /> We
                  currently don't have
                  availability in your area.<br />Please contact <a href="mailto:ndis@thelaundrylady.com.au"
                    class="text-white text-bold" style="text-decoration: none;">ndis@thelaundrylady.com.au</a> for more
                  information.
                </div>
                <div v-if="!noSuburb">
                  <div class="text-h6 q-mt-sm">Particpant Details</div>
                  <p>Please ensure all information is accurate and current.</p>
                  <q-input v-model="model.name" :error="$v.name.$invalid" label="Participant name" outlined />
                  <div class="row q-col-gutter-md">
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.first_name" :error="$v.first_name.$invalid" label="Contact first name"
                        outlined />
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.last_name" :error="$v.last_name.$invalid" label="Contact last name"
                        outlined />
                    </div>
                  </div>
                  <div class="row q-col-gutter-md">
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.email" :error="$v.email.$invalid" label="Your email address" outlined
                        autocapitalize="off" name="email" />
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.mobile" :error="$v.mobile.$invalid"
                        :label="common?.operating_country === 'aud' ? 'Your Australian mobile number' : 'Your contact mobile'"
                        outlined :mask="common?.operating_country === 'aud' ? '#### ### ###' : ''" maxlength="20"
                        error-message="Use the alternate contact number field if you do not have an Australian mobile number"
                        hint="Use the alternate contact number field if you do not have an Australian mobile number" />
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.other_phone" :error="$v.other_phone.$invalid"
                        label="Alternate contact number" outlined />
                    </div>
                  </div>
                  <div class="row q-col-gutter-md">
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.ndis_number" :label="$t('team.ndisNumber')" outlined
                        :error="$v.ndis_number.$invalid" @blur="checkNDISNumber()"><template v-slot:prepend>
                          <img src="~assets/images/logos/ndis_heart.svg" style="height:32px" />
                        </template>
                      </q-input>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <q-select v-model="model.ndis_type" :label="$t('team.ndisType')" :error="$v.ndis_type.$invalid"
                        outlined :options="['Self managed', 'Plan managed', 'NDIA registered']"
                        @update:modelValue="checkNdisPlanType()" />
                    </div>
                  </div>
                  <div class="row q-col-gutter-md q-mb-md">
                    <DateFieldVue v-model="model.ndis_dob" :label="$t('team.ndisDob')" :outlined="true"
                      class="col-xs-12 col-sm-6" :invalid="$v.ndis_dob.$invalid" />
                  </div>
                  <div class="row q-col-gutter-md">
                    <q-input v-model="model.ndis_plan_manager_email" :label="$t('team.ndisPlanManagerEmail')"
                      bottom-slots class="col-xs-12 col-sm-6" outlined :error="$v.ndis_plan_manager_email.$invalid"
                      v-if="model.ndis_type !== 'Self managed'" />
                    <q-input v-model="model.ndis_support_coordinator_email"
                      :label="$t('team.ndisSupportCoordinatorEmail')" class="col-xs-12 col-sm-6" bottom-slots outlined
                      :error="$v.ndis_support_coordinator_email.$invalid" />
                  </div>
                  <div class="row q-col-gutter-md">
                    <DateFieldVue v-model="model.ndis_plan_start" :label="$t('team.ndisPlanStart')" :outlined="true"
                      class="col-xs-12 col-sm-6" :invalid="$v.ndis_plan_start.$invalid" />
                    <DateFieldVue v-model="model.ndis_plan_end" :label="$t('team.ndisPlanEnd')" :outlined="true"
                      class="col-xs-12 col-sm-6" :invalid="$v.ndis_plan_end.$invalid || !ndisPlanEndDateValid"
                      :fdc="true" />
                  </div>
                  <div class="q-mt-lg q-mb-sm">
                    <q-checkbox v-model="model.ndis_line_item"
                      label="Yes I (the client) have item number 01_021_0120_1_1 – Linen Service stated in my current NDIS plan."
                      :color="$v.ndis_line_item.$invalid ? 'negative' : 'primary'" keep-color />
                  </div>
                  <div class="q-mb-sm">
                    <q-checkbox v-model="model.ndis_funds"
                      label="Yes I (the client) have sufficient funds available under the Linen code to pay for my services and I agree to inform Laundry Lady if funds run out."
                      :color="$v.ndis_funds.$invalid ? 'negative' : 'primary'" keep-color />
                  </div>
                  <div class="q-mb-md">
                    <q-checkbox v-model="model.ndis_funds_inform"
                      label="Yes I (the client) agree to inform Laundry Lady if there are any changes to my plan that will affect claiming under this code."
                      :color="$v.ndis_funds_inform.$invalid ? 'negative' : 'primary'" keep-color />
                  </div>
                  <q-radio v-model="model.ndis_payment" val="self"
                    label="I (the client) will pay for services myself and will be responsible for claiming under the NDIS (self-managed)." />
                  <q-radio v-model="model.ndis_payment" val="plan"
                    label="The invoice should be sent to my plan manager for payment." />
                </div>
              </q-card-section>
              <q-card-actions align="right" v-if="!error && !success && !noSuburb">
                <q-btn @click="save()" color="primary" label="Submit" rounded
                  :disable="$v.$invalid || loading || !ndisPlanEndDateValid || noSuburb" :loading="loading" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
      <div class="q-mt-xl">
        <FooterComponent :booking="true" :apply="true" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, required, requiredIf } from '@vuelidate/validators'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import FooterComponent from 'src/components/footer/FooterComponent.vue'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateFieldVue from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import HeaderComponent from 'src/components/header/HeaderComponent.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinCommon } from 'src/mixins/common'
import { confirmDelete, doNotify } from 'src/mixins/help'
import { computed, onMounted, reactive, ref } from 'vue'
import { TeamNDISForm } from '../../components/models'
import { useMixinDebug } from 'src/mixins/debug'
import moment from 'moment-timezone'
import { useRouter } from 'vue-router'

const success = ref(false)
const error = ref(false)
const loading = ref(false)
const errors = ref<LooseObject[]>([])
const noSuburb = ref(false)
const common = useMixinCommon()
const router = useRouter()
const loaded = ref(false)
const schema = {
  id: null,
  name: null,
  first_name: null,
  last_name: null,
  email: null,
  mobile: null,
  other_phone: null,
  // NDIS
  ndis_number: null,
  ndis_type: null,
  ndis_plan_manager_email: null,
  ndis_support_coordinator_email: null,
  ndis_plan_start: null,
  ndis_plan_end: null,
  ndis_line_item: false,
  ndis_funds_inform: false,
  ndis_funds: false,
  ndis_payment: 'self',
  ndis_dob: null
}

const model = reactive<TeamNDISForm>(JSON.parse(JSON.stringify(schema)))
const rules = {
  name: { required },
  first_name: { required },
  last_name: { required },
  email: { required, email },
  address2: { required },
  suburb_postcode_region_id: { required },
  postcode: { required },
  country_id: { required },
  mobile: { requiredIf: requiredIf(() => !model.other_phone) },
  other_phone: { requiredIf: requiredIf(() => !model.mobile) },
  ndis_number: { required },
  ndis_type: { required },
  ndis_dob: { required },
  ndis_plan_start: { required },
  ndis_plan_end: { required },
  ndis_plan_manager_email: { email, requiredIf: requiredIf(() => model.ndis_type === 'Plan managed') },
  ndis_support_coordinator_email: { email },
  ndis_line_item: { checked: (value: boolean) => value === true },
  ndis_funds: { checked: (value: boolean) => value === true },
  ndis_funds_inform: { checked: (value: boolean) => value === true }
}

const $v = useVuelidate(rules, model)
const $q = useQuasar()

const checkNDISNumber = () => {
  if (model.ndis_number) {
    api.post('/public/team/ndis/checknumber', { ndis_number: model.ndis_number }).then(response => {
      if (response.data.found) {
        doNotify('negative', 'That NDIS number is already in use')
        model.ndis_number = ''
      }
    }).catch(error => {
      useMixinDebug(error)
    })
  }
}

const save = () => {
  confirmDelete('This will submit the details to The Laundry Lady').onOk(() => {
    loading.value = true
    success.value = false
    error.value = false
    api.post('/public/team/ndis/create', model).then(() => {
      success.value = true
      loading.value = false
      $q.loading.hide()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }).catch(responseError => {
      error.value = true
      loading.value = false
      errors.value = responseError.response && responseError.response.data ? responseError.response.data.errors : [{ field: 'Unknown Error', message: 'Unknown error occured.' }]
    })
  })
}

const ndisPlanEndDateValid = computed(() => {
  if (!model.ndis_plan_start) {
    return true
  }
  if (!model.ndis_plan_end) {
    return false
  }
  const start = moment(model.ndis_plan_start, 'DD/MM/YYYY')
  const end = moment(model.ndis_plan_end, 'DD/MM/YYYY')
  if (end.isBefore(moment()) || end.isBefore(start)) {
    return false
  }
  return true
})

const checkNdisPlanType = () => {
  if (model.ndis_type === 'Plan managed') {
    model.ndis_payment = 'plan'
  } else {
    model.ndis_payment = 'self'
  }
}

const checkSuburb = () => {
  if (model.suburb_postcode_region_id) {
    api.post('/public/order/findcontractorsinsuburbpostcoderegion', { suburb_postcode_region_id: model.suburb_postcode_region_id }).then(response => {
      if (!response.data.found) {
        noSuburb.value = true
      } else {
        noSuburb.value = false
      }
    }).catch(error => {
      console.log(error)
    })
  }
}

onMounted(async () => {
  // fetch data
  error.value = false
  if (common.value?.operating_country !== 'aud') {
    router.push({ name: 'error404' })
  } else {
    loaded.value = true
  }
})
</script>
