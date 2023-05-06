<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding>
        <div class="container q-pt-lg">
          <div class="row q-col-gutter-xl">
            <div class="col-xs-12 col-sm-6 offset-sm-3">
              <q-card>
                <q-card-section class="q-pt-xs q-pb-xs">
                  <AppLogo />
                </q-card-section>
                <q-card-section class="text-left" v-if="success">
                  <div class="text-h5">Thank you!</div>
                  <p>Your response has been submitted</p>
                </q-card-section>
                <q-card-section class="text-left" v-if="!success">
                  <div class="text-h5">Monthly Contractor Pulse Survey</div>
                  <p>This survey will be sent to you every month to help provide Head Office with key information to help
                    us understand your ongoing experience as a Laundry Lady or Lad.</p>
                  <p>We use this information to determine marketing and support distribution.</p>
                  <div class="text-bold">How satisfied are you with your experience as a Laundry Lady or Lad?</div>
                  <q-option-group v-model="model.satisfaction"
                    :options="[{ label: 'Very dissatisfied', value: 'Very dissatisfied' }, { label: 'Dissatisfied', value: 'Dissatisfied' }, { label: 'Neutral', value: 'Neutral' }, { label: 'Satisfied', value: 'Satisifed' }, { label: 'Very satisfied', value: 'Very satisfied' }]"
                    color="primary" inline />
                  <q-separator class="q-mt-md q-mb-md" />
                  <div class="text-bold q-mb-sm">Overall how would you rate your experience as a Laundry Lady or Lad in
                    the following areas?
                  </div>
                  <div class="row q-col-gutter-md items-center q-mb-sm">
                    <div class="col-xs-12 col-sm-4">Dependability of earnings</div>
                    <div class="col-xs-12 col-sm-8">
                      <q-option-group v-model="model.earnings_dependability"
                        :options="[{ label: 'Poor', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: 'Excellent', value: 5 }]"
                        color="primary" inline />
                    </div>
                  </div>
                  <div class="row q-col-gutter-md items-center q-mb-sm">
                    <div class="col-xs-12 col-sm-4">Quantity of new bookings</div>
                    <div class="col-xs-12 col-sm-8">
                      <q-option-group v-model="model.bookings_quality"
                        :options="[{ label: 'Poor', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: 'Excellent', value: 5 }]"
                        color="primary" inline />
                    </div>
                  </div>
                  <div class="row q-col-gutter-md items-center q-mb-sm">
                    <div class="col-xs-12 col-sm-4">Location Service area</div>
                    <div class="col-xs-12 col-sm-8">
                      <q-option-group v-model="model.location_service_area"
                        :options="[{ label: 'Poor', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: 'Excellent', value: 5 }]"
                        color="primary" inline />
                    </div>
                  </div>
                  <div class="row q-col-gutter-md items-center q-mb-sm">
                    <div class="col-xs-12 col-sm-4">Quality of Head Office support</div>
                    <div class="col-xs-12 col-sm-8">
                      <q-option-group v-model="model.head_office_support_quality"
                        :options="[{ label: 'Poor', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: 'Excellent', value: 5 }]"
                        color="primary" inline />
                    </div>
                  </div>
                  <div class="row q-col-gutter-md items-center q-mb-sm">
                    <div class="col-xs-12 col-sm-4">Responsiveness to requests for support</div>
                    <div class="col-xs-12 col-sm-8">
                      <q-option-group v-model="model.support_request_responsiveness"
                        :options="[{ label: 'Poor', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: 'Excellent', value: 5 }]"
                        color="primary" inline />
                    </div>
                  </div>
                  <div class="row q-col-gutter-md items-center">
                    <div class="col-xs-12 col-sm-4">App performance and features</div>
                    <div class="col-xs-12 col-sm-8">
                      <q-option-group v-model="model.app_performance_features"
                        :options="[{ label: 'Poor', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: 'Excellent', value: 5 }]"
                        color="primary" inline />
                    </div>
                  </div>
                  <q-separator class="q-mt-md q-mb-md" />
                  <div class="text-bold">How satisfied are you with your current work-life balance?</div>
                  <q-option-group v-model="model.work_life_balance"
                    :options="[{ label: 'Very dissatisfied', value: 'Very dissatisfied' }, { label: 'Dissatisfied', value: 'Dissatisfied' }, { label: 'Neutral', value: 'Neutral' }, { label: 'Satisfied', value: 'Satisifed' }, { label: 'Very satisfied', value: 'Very satisfied' }]"
                    color="primary" inline />
                  <q-separator class="q-mt-md q-mb-md" />
                  <div class="text-bold">How well are you coping with your current workload?</div>
                  <q-option-group v-model="model.current_work_load"
                    :options="[{ label: 'Not at all', value: 'Not at all' }, { label: 'Slightly', value: 'Slightly' }, { label: 'Moderately', value: 'Moderately' }, { label: 'Very much', value: 'Very much' }, { label: 'Extremely', value: 'Extremely' }]"
                    color="primary" inline />
                  <q-separator class="q-mt-md q-mb-md" />
                  <div class="text-bold">How satisfied are you with the training and knowledge you have to complete
                    bookings assigned to you?</div>
                  <q-option-group v-model="model.training_knowledge"
                    :options="[{ label: 'Not at all', value: 'Not at all' }, { label: 'A little bit', value: 'A little bit' }, { label: 'Somewhat', value: 'Somewhat' }, { label: 'A lot', value: 'A lot' }, { label: 'Very much', value: 'Very much' }]"
                    color="primary" inline />
                  <q-separator class="q-mt-md q-mb-md" />
                  <div class="text-bold">How much do you feel that the company values you?</div>
                  <q-option-group v-model="model.company_value"
                    :options="[{ label: 'Not at all', value: 'Not at all' }, { label: 'Slightly', value: 'Slightly' }, { label: 'Moderately', value: 'Moderately' }, { label: 'Very much', value: 'Very much' }, { label: 'Extremely', value: 'Extremely' }]"
                    color="primary" inline />
                  <q-separator class="q-mt-md q-mb-md" />
                  <div class="text-bold">How satisfied are you with your current earnings?</div>
                  <q-option-group v-model="model.earnings_satisfaction"
                    :options="[{ label: 'Very dissatisfied', value: 'Very dissatisfied' }, { label: 'Dissatisfied', value: 'Dissatisfied' }, { label: 'Neutral', value: 'Neutral' }, { label: 'Satisfied', value: 'Satisifed' }, { label: 'Very satisfied', value: 'Very satisfied' }]"
                    color="primary" inline />
                  <q-separator class="q-mt-md q-mb-md" />
                  <div class="text-bold">What is the weekly $ target you would like to be earning throughout the next
                    month? </div>
                  <q-input v-model="model.weekly_target" :error="$v.weekly_target.$invalid" outlined dense
                    type="number" />
                  <q-separator class="q-mt-md q-mb-md" />
                  <div class="text-bold">Outside of your regular schedule, are you planning to take any time off / block
                    off your roster in the next month? (indicate expected number of days) </div>
                  <q-input v-model="model.time_off" :error="$v.time_off.$invalid" outlined dense type="number" />
                  <q-separator class="q-mt-md q-mb-md" />
                  <div class="text-bold">What can be done to improve your experience as a Laundry Lady or Lad? Please
                    write your comments below. </div>
                  <q-input v-model="model.improve_experience" :error="$v.improve_experience.$invalid" outlined dense
                    type="textarea" />
                  <q-btn :loading="loading" @click="submit()" v-bind:disabled="$v.$invalid" color="primary" label="Submit"
                    class="full-width q-mt-md" />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(false)
const success = ref(false)
const model = reactive({
  satisfaction: null,
  earnings_dependability: null,
  bookings_quality: null,
  location_service_area: null,
  head_office_support_quality: null,
  support_request_responsiveness: null,
  app_performance_features: null,
  work_life_balance: null,
  current_work_load: null,
  training_knowledge: null,
  company_value: null,
  earnings_satisfaction: null,
  weekly_target: null,
  time_off: null,
  improve_experience: null
})

const rules = {
  satisfaction: { required },
  earnings_dependability: { required },
  bookings_quality: { required },
  location_service_area: { required },
  head_office_support_quality: { required },
  support_request_responsiveness: { required },
  app_performance_features: { required },
  work_life_balance: { required },
  current_work_load: { required },
  training_knowledge: { required },
  company_value: { required },
  earnings_satisfaction: { required },
  weekly_target: { required },
  time_off: { required },
  improve_experience: { required }
}
const $v = useVuelidate(rules, model)

const submit = () => {
  loading.value = true
  success.value = false
  api.post(`/public/usermonthlysurvey/${route.params.id}`, model).then(() => {
    success.value = true
  }).catch(error => {
    useMixinDebug(error)
  })
}
</script>
