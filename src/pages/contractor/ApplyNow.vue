<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent v-if="!iframed" />
    <q-page-container>
      <q-page padding>
        <div class="q-pt-xl" :class="{ 'container': !iframed }">
          <div class="row q-col-gutter-xl">
            <div class="col-xs-12 col-sm-6">
              <q-card>
                <q-card-section class="q-pt-md q-pb-xs" v-if="!iframed">
                  <AppLogo />
                </q-card-section>
                <q-card-section class="text-left" v-if="success">
                  <p>Thanks for your interest in joining The Laundry Lady.</p>
                  <p>Please check your email for the next steps.</p>
                </q-card-section>
                <q-card-section class="text-left" v-if="!success">
                  <div class="text-h5">Apply Now</div>
                  <p>Fill out the form below and we'll send you an info pack all about joining the team.</p>
                  <div class="row q-col-gutter-md" :class="{ 'q-mb-md': $q.screen.xs }">
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.first_name" label="First Name" :error="$v.first_name.$invalid" autofocus
                        outlined />
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.last_name" label="Last Name" :error="$v.last_name.$invalid" outlined />
                    </div>
                  </div>
                  <div class="row q-col-gutter-md">
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.email" label="Email" :error="$v.email.$invalid || emailError.error"
                        @blur="checkEmail()" :error-message="emailError.msg || ''" :hint="emailError.msg || ''" outlined
                        autocapitalize="off" />
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.mobile" label="Mobile Phone" :error="$v.mobile.$invalid"
                        :mask="common?.operating_country === 'aud' ? '#### ### ###' : ''" unmasked-value outlined />
                    </div>
                  </div>
                  <q-select label="Are you applying as an individual or a company?" outlined
                    :options="[{ label: 'Individual/Sole Trader', value: 'individual' }, { label: 'Company', value: 'company' }]"
                    map-options emit-value v-model="model.contractor_type" :error="$v.contractor_type.$invalid"
                    class="hidden" />
                  <q-input v-model="model.contractor_business_name" v-if="model.contractor_type === 'company'"
                    :error="$v.contractor_business_name.$invalid" outlined label="Company Name" />
                  <div class="text-h6 q-mt-sm">{{ model.contractor_type === 'company' ? 'Registered Office' : '' }}
                    Address
                    Details</div>
                  <AddressSearch :model="model" :filled="true"
                    :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', postcode: 'postcode', lat: 'lat', lng: 'lng', country_id: 'country_id' }"
                    :placeholder="$t('address.search')" />
                  <q-input v-model="model.address1" :label="$t('address.line1')" bottom-slots outlined /> <q-input
                    v-model="model.address2" :error="$v.address2.$invalid" :label="$t('address.line2')" outlined />
                  <div class="row q-col-gutter-md q-mb-md">
                    <div class="col-xs-12">
                      <PostcodeRegionField v-model="model.suburb_postcode_region_id" label="Suburb"
                        :invalid="$v.suburb_postcode_region_id.$invalid" :outlined="true" :clearable="true" />
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <q-input v-model="model.postcode" :error="$v.postcode.$invalid" :label="$t('address.postcode')"
                        outlined />
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <CountryField v-model="model.country_id" label="Country" :invalid="$v.country_id.$invaluid"
                        :outlined="true" />
                    </div>
                  </div>
                  <div class="bg-grey-1 q-pa-sm q-mt-md">
                    <div class="text-h6">Confirm your eligibility requirements:</div>
                    <q-toggle v-model="model.contractor_car_licence" label="Reliable car and current drivers licence" />
                    <q-toggle v-model="model.contractor_equipment"
                      label="Equipment including steam station iron, washing machine, dryer, or willing to purchase these?" />
                  </div>
                  <q-input v-model="model.contractor_why_join" label="Why do you want to join our team?" class="q-mt-lg"
                    type="textarea" rows="3" outlined bottom-slots />
                  <q-select v-model="model.contractor_referral_type" label="How did you find out about us?"
                    :options="['Instagram', 'Facebook', 'Google', 'Gumtree', 'Working Parents Connect', 'Seek', 'Melbourne Mums', 'Word of Mouth', 'Radio', 'Newspaper/Magazine', 'Event', 'Other']"
                    :error="$v.contractor_referral_type.$invalid" outlined />
                  <q-btn :loading="loading" @click="applyNow()"
                    v-bind:disabled="$v.$invalid || !model.contractor_car_licence || !model.contractor_equipment"
                    color="primary" label="Apply Now" class="full-width q-mt-md" rounded />
                </q-card-section>
              </q-card>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="text-h5 text-primary text-bold">Join The Team</div>
              <div class="text-h4 text-bold">Who it suits?</div>
              <div class="text-h6 text-bold">Our business suits all types of people.</div>
              <ul>
                <li>Work school hours, husband & wife teams</li>
                <li>Stay at home mums & dads and home schooling parents</li>
                <li>Carers of children, elderly parents or sick family members</li>
                <li>People who don't want to work 9-5 and crave work life balance</li>
                <li>Men and women who like to work for themselves</li>
                <li>Who want a franchise opportunity</li>
                <li>Laundromat or beauty salon owners</li>
                <li>And everything in between!</li>
              </ul>
              <div class="text-bold">You're required to:</div>
              <ul>
                <li>have a reliable medium to large car and drivers licence</li>
                <li>have a smartphone with data plan</li>
                <li v-if="common?.operating_country === 'aud'">have a current NDIS Workers Clearance Certificate</li>
                <li>have a current public liability insurance policy</li>
                <li>have an ABN</li>
                <li>have a steam station iron, washing machine and dryer or be willing to purchase these.</li>
                <li>available for morning or afternoon pickups and deliveries (school hours is fine and you can select
                  the
                  days and timeslots)</li>
              </ul>
              <q-carousel animated v-model="carousel.info" infinite class="q-mt-lg">
                <q-carousel-slide name="busy">
                  <q-video class="absolute-full"
                    src="https://www.youtube.com/embed/j_4_WXJUj1o?feature=oembed&autoplay=1&rel=0" />
                </q-carousel-slide>
                <q-carousel-slide name="love">
                  <q-video class="absolute-full"
                    src="https://www.youtube.com/embed/OLVUWLRWiJc?feature=oembed&autoplay=1&rel=0" />
                </q-carousel-slide>
              </q-carousel>
              <div class="row justify-center q-mt-lg">
                <q-btn-toggle v-model="carousel.info" flat no-caps :options="[
      { label: 'Does it suit busy mum/dad life?', value: 'busy' },
      { label: 'What do you love about being a Laundry Lad?', value: 'love' }]" />
              </div>
            </div>
          </div>
        </div>
      </q-page>
      <div v-if="!iframed" class="q-mt-xl">
        <FooterComponent :booking="true" :apply="false" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, required, requiredIf } from '@vuelidate/validators'
import moment from 'moment-timezone'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import FooterComponent from 'src/components/footer/FooterComponent.vue'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import HeaderComponent from 'src/components/header/HeaderComponent.vue'
import { useMixinCommon } from 'src/mixins/common'
import { useMixinDebug } from 'src/mixins/debug'
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const loading = ref(false)
const success = ref(false)
const iframed = ref(false)
const route = useRoute()
const common = useMixinCommon()
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
  postcode: null,
  country_id: common.value?.operating_country_id,
  contractor_type: 'individual',
  contractor_business_name: null,
  contractor_abn: null,
  contractor_car_licence: false,
  contractor_equipment: false,
  contractor_why_join: null,
  contractor_referral_type: null,
  timezone: moment.tz.guess()
})

const rules = {
  contractor_business_name: { requiredIf: requiredIf(() => model.contractor_type === 'company') },
  first_name: { required },
  last_name: { required },
  email: { required, email },
  mobile: { required },
  contractor_type: { required },
  address2: { required },
  suburb_postcode_region_id: { required },
  postcode: { required },
  country_id: { required },
  contractor_referral_type: { required }
}

const carousel = ref({ info: 'busy', test: 'first' })

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
    api.post('/user/checkemail/0?an=true', { email: model.email }).then(response => {
      if (parseFloat(response.data.found[0].count) > 0) {
        emailError.value.error = true
        emailError.value.msg = 'That email address is already in use'
        model.email = null
      }
    }).catch(error => { useMixinDebug(error) })
  }
}

onMounted(() => {
  // check for iframe
  if (route.query.iframed) {
    iframed.value = true
  }
  // FB Meta Pixel
  try {
    let fbmpid = '1797469603884044'
    if (window.location.hostname.match('.nz')) {
      fbmpid = '1885184374985412'
    }
    // eslint-disable-next-line
    // @ts-ignore
    window.fbq('init', fbmpid)
    // eslint-disable-next-line
    // @ts-ignore
    window.fbq('track', 'PageView')
  } catch (error) {
    console.log(error)
  }
})
</script>
