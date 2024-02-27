<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page :padding="!iframed" :class="{ 'q-pa-md': $q.screen.xs && !iframed }" v-if="loaded">
        <div class="flex justify-center q-mt-xl" v-if="!$q.screen.xs && !iframed">
          <p class="text-center text-bold">Enter your details:</p>
          <q-card>
            <q-card-section>
              <div class="text-h6 q-mb-sm">Your Details</div>
              <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-6">
                  <q-input v-model="model.first_name" :error="$v.first_name.$invalid" label="Contact first name"
                    outlined />
                </div>
                <div class="col-xs-12 col-sm-6">
                  <q-input v-model="model.last_name" :error="$v.last_name.$invalid" label="Contact last name" outlined />
                </div>
              </div>
              <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-6">
                  <q-input v-model="model.email" :error="$v.email.$invalid" label="Your email address" outlined
                    autocapitalize="off" />
                </div>
                <div class="col-xs-12 col-sm-6">
                  <q-input v-model="model.mobile" :error="$v.mobile.$invalid"
                    :label="common?.operating_country === 'aud' ? 'Your Australian mobile number' : 'Your contact mobile'"
                    outlined :mask="common?.operating_country === 'aud' ? '#### ### ###' : ''" maxlength="20"
                    error-message="Use the alternate contact number field if you do not have an Australian mobile number"
                    hint="Use the alternate contact number field if you do not have an Australian mobile number" />
                </div>
                <div class="col-xs-12 col-sm-6">
                  <q-input v-model="model.other_phone" :error="$v.other_phone.$invalid" label="Alternate contact number"
                    outlined />
                </div>
              </div>
              <div class="row q-col-gutter-md">
                <div class="col-xs-12 col-sm-6">
                  <q-input v-model="model.ndis_number" :label="$t('team.ndisNumber')" outlined
                    :error="$v.ndis_number.$invalid"><template v-slot:prepend>
                      <img src="~assets/images/logos/ndis_heart.svg" style="height:32px" />
                    </template>
                  </q-input>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <q-select v-model="model.ndis_type" :label="$t('team.ndisType')" :error="$v.ndis_type.$invalid" outlined
                    :options="['Self managed', 'Plan managed', 'NDIA registered']" />
                </div>
              </div>
              <div class="row q-col-gutter-md q-mb-md">
                <DateFieldVue v-model="model.ndis_dob" :label="$t('team.ndisDob')" :outlined="true"
                  class="col-xs-12 col-sm-6" :invalid="$v.ndis_dob.$invalid" />
              </div>
              <div class="row q-col-gutter-md">
                <q-input v-model="model.ndis_plan_manager_email" :label="$t('team.ndisPlanManagerEmail')" bottom-slots
                  class="col-xs-12 col-sm-6" outlined />
                <q-input v-model="model.ndis_support_coordinator_email" :label="$t('team.ndisSupportCoordinatorEmail')"
                  class="col-xs-12 col-sm-6" bottom-slots outlined />
              </div>
              <div class="row q-col-gutter-md">
                <DateFieldVue v-model="model.ndis_plan_start" :label="$t('team.ndisPlanStart')" :outlined="true"
                  class="col-xs-12 col-sm-6" />
                <DateFieldVue v-model="model.ndis_plan_end" :label="$t('team.ndisPlanEnd')" :outlined="true"
                  class="col-xs-12 col-sm-6" />
              </div>
              <div class="q-mt-md">
                <q-toggle v-model="model.ndis_line_item"
                  label="Yes I (the client) have item number 01_021_0120_1_1 – Linen Service stated in my current NDIS plan" />
              </div>
              <div>
                <q-toggle v-model="model.ndis_funds"
                  label="Yes I (the client) have sufficient funds available under the Linen code to pay for my services and I agree to inform Laundry Lady if funds run out" />
              </div>
              <div class="q-mb-sm">
                <q-toggle v-model="model.ndis_funds_inform"
                  label="Yes I (the client) agree to inform Laundry Lady if there are any changes to my plan that will affect claiming under this code" />
              </div>
              <q-radio v-model="model.ndis_payment" val="self"
                label="I (the client) will pay for services myself and will be responsible for claiming under the NDIS (self-managed)" />
              <q-radio v-model="model.ndis_payment" val="plan"
                label="The invoice should be sent to my plan manager for payment" />
              <div class="text-h6 q-mt-sm">Pickup Address</div>
              <p>Enter your pickup / delivery address.</p>
              <AddressSearch :model="model" :filled="true"
                :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'country_id', postcode: 'postcode' }"
                :placeholder="$t('address.search')" />
              <q-input v-model="model.address1" :label="$t('address.line1')" outlined class="q-mb-md" />
              <q-input v-model="model.address2" :error="$v.address2.$invalid" :label="$t('address.line2')" outlined />
              <div class="row q-col-gutter-md">
                <PostcodeRegionField v-model="model.suburb_postcode_region_id"
                  :invalid="$v.suburb_postcode_region_id.$invalid" :label="$t('address.suburb')"
                  class="col-xs-12 col-sm-6" :outlined="true" />
                <q-input v-model="model.postcode" :error="$v.postcode.$invalid" :label="$t('address.postcode')" outlined
                  class="col-xs-12 col-sm-6" />
                <CountryField v-model="model.country_id" :label="$t('address.country')" class="col-xs-12 col-sm-6"
                  :outlined="true" :invalid="$v.country_id.$invalid" />
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn @click="save()" color="primary" label="Submit" flat class="q-mr-sm" rounded />
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, required, requiredIf } from '@vuelidate/validators'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateFieldVue from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinCommon } from 'src/mixins/common'
import { confirmDelete } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { TeamNDISForm } from '../../components/models'
import { useRoute } from 'vue-router'

const route = useRoute()
const success = ref(false)
const error = ref(false)
const confirming = ref(false)
const errors = ref<LooseObject[]>([])
const common = useMixinCommon()
const iframed = ref(false)
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
const bus = inject('bus') as EventBus
const rules = {
  first_name: { required },
  last_name: { required },
  email: { required, email },
  mobile: { requiredIf: requiredIf(() => !model.other_phone) },
  other_phone: { requiredIf: requiredIf(() => !model.mobile) },
  ndis_number: { required },
  ndis_type: { required },
  ndis_dob: { required }
}

const $v = useVuelidate(rules, model)
const $q = useQuasar()

const save = () => {
  confirmDelete('This submit the details').onOk(() => {
    $q.loading.show({ message: 'Submitting details...' })
    confirming.value = true
    success.value = false
    error.value = false
    api.post(`/public/team/ndis/update/${route.params.token}`, model).then(() => {
      success.value = true
      $q.loading.hide()
    }).catch(responseError => {
      error.value = true
      errors.value = responseError.response && responseError.response.data ? responseError.response.data.errors : [{ field: 'Unknown Error', message: 'Unknown error occured.' }]
      $q.loading.hide()
    })
  })
}

onMounted(async () => {
  // fetch data
  Object.assign(model, JSON.parse(JSON.stringify(schema)))
})

onBeforeUnmount(() => {
  bus.off('newOrder')
})
</script>
