<template>
  <div class="text-h5">{{ $t('team.name') }} {{ $t('team.details') }}</div>
  <p>Certain details can be modified by the {{ $t('team.name').toLowerCase() }} in addition to the staff.</p>
  <q-card>
    <q-list v-if="model.id">
      <q-expansion-item group="team" :label="$t('team.information')" default-opened header-class="text-h6">
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <q-select v-model="localModel.type" :error="$v.type.$invalid" :label="$t('team.type')"
                :options="customerTypes" class="col-xs-12 col-sm-8" />
              <q-select v-model="localModel.status" :error="$v.status.$invalid" label="Status" map-options emit-value
                class="col-xs-12 col-sm-4"
                :options="[{ value: 'active', label: 'Active' }, { value: 'blocked', label: 'Blocked' }, { value: 'archived', label: 'Archived' }]" />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.name"
                :label="['Business', 'Aged Care', 'Sporting Group'].indexOf(model.type || '') !== -1 ? $t('team.teamName') : $t('team.name')"
                :error="$v.name.$invalid" class="col-xs-12 col-sm-8" />
              <div class="col-xs-12 col-sm-4"
                v-if="['Business', 'Aged Care', 'Sporting Group'].indexOf(model.type || '') !== -1">
                <q-input v-model="localModel.abn" :label="$t('team.abn')">
                  <template v-slot:append>
                    <q-icon name="check" v-if="localModel.abn_verified" color="positive" />
                    <q-btn @click="verifyAbn()" color="primary" v-if="localModel.abn" label="Verify" flat />
                  </template>
                </q-input>
                <div v-if="abnVerifyResult" class="q-mb-md q-mt-xs">
                  <div v-if="abnVerifyResult.Message" class="text-negative">{{ abnVerifyResult.Message }}</div>
                  <div v-if="!abnVerifyResult.Message" class="text-positive">
                    <span class="q-mr-sm">ABN Registered to: {{
                      abnVerifyResult.EntityName }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.first_name" :label="$t('team.firstName')" :error="$v.first_name.$invalid"
                class="col-xs-12 col-sm-6" />
              <q-input v-model="localModel.last_name" :label="$t('team.lastName')" :error="$v.last_name.$invalid"
                class="col-xs-12 col-sm-6" />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.email" :label="$t('team.email')" :error="$v.email.$invalid"
                class="col-xs-12 col-sm-6" />
              <q-input v-model="localModel.mobile" :label="$t('team.mobile')" :error="$v.mobile.$invalid"
                mask="#### ### ###" unmasked-value class="col-xs-12 col-sm-6" />
            </div>
            <div v-if="model.type === 'Aged Care'">
              <q-input v-model="localModel.aged_care_client_number" :label="$t('team.agedCareClientNumber')"
                :error="$v.aged_care_client_number.$invalid" />
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-6">
                <q-select v-model="localModel.payment_terms" :error="$v.payment_terms.$invalid"
                  :label="$t('team.paymentTerms')" :options="['Credit Card', 'Bank Transfer']" />
              </div>
              <div class="col-xs-6">
                <q-toggle v-model="localModel.owing_no_booking" :label="$t('team.owingNoBooking')" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="team" :label="$t('team.financial')" header-class=" text-h6">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.invoice_name" :label="$t('team.invoiceName')" class="col-xs-12 col-sm-6"
                bottom-slots />
              <q-input v-model="localModel.invoice_po" :label="$t('team.invoicePo')" class="col-xs-12 col-sm-6"
                bottom-slots />
            </div>
            <AddressSearch :model="localModel" :filled="true"
              :addressfields="{ address1: 'invoice_address1', address2: 'invoice_address2', suburb_postcode_region_id: 'invoice_address_suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'invoice_address_country_id' }"
              :placeholder="$t('address.search')" />
            <q-input v-model="localModel.invoice_address1" :label="$t('address.line1')" bottom-slots />
            <q-input v-model="localModel.invoice_address2" :label="$t('address.line2')" bottom-slots />
            <div class="row q-col-gutter-md">
              <PostcodeRegionField v-model="localModel.invoice_address_suburb_postcode_region_id"
                :label="$t('address.suburb')" class="col-xs-12 col-sm-6" />
              <CountryField v-model="localModel.invoice_address_country_id" :label="$t('address.country')"
                class="col-xs-12 col-sm-6" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="team" :label="$t('team.ndis')" header-class=" text-h6" v-if="localModel.type === 'NDIS'">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.ndis_number" :label="$t('team.ndisNumber')" :error="$v.ndis_number.$invalid"
                class="col-xs-12 col-sm-6"><template v-slot:prepend>
                  <img src="~assets/images/logos/ndis_heart.svg" style="height:32px" />
                </template>
              </q-input>
              <q-select v-model="localModel.ndis_type" :label="$t('team.ndisType')" :error="$v.ndis_type.$invalid"
                :options="['Self managed', 'Plan managed', 'NDIA registered']" class="col-xs-12 col-sm-6" />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.ndis_plan_manager_email" :label="$t('team.ndisPlanManagerEmail')" bottom-slots
                class="col-xs-12 col-sm-6" />
              <q-input v-model="localModel.ndis_support_coordinator_email" :label="$t('team.ndisSupportCoordinatorEmail')"
                class="col-xs-12 col-sm-6" bottom-slots />
            </div>
            <div class="row q-col-gutter-md">
              <DateField v-model="localModel.ndis_plan_start" :label="$t('team.ndisPlanStart')"
                class="col-xs-12 col-sm-6" />
              <DateField v-model="localModel.ndis_plan_end" :label="$t('team.ndisPlanEnd')" class="col-xs-12 col-sm-6" />
            </div>
            <div class="q-mt-md">
              <q-toggle v-model="localModel.ndis_line_item"
                label="Yes I (the client) have item number 01_021_0120_1_1 – Linen Service stated in my current NDIS plan" />
            </div>
            <div>
              <q-toggle v-model="localModel.ndis_funds"
                label="Yes I (the client) have sufficient funds available under the Linen code to pay for my services and I agree to inform Laundry Lady if funds run out" />
            </div>
            <div>
              <q-toggle v-model="localModel.ndis_funds_inform"
                label="Yes I (the client) agree to inform Laundry Lady if there are any changes to my plan that will affect claiming under this code" />
            </div>
            <q-select v-model="localModel.ndis_payment" class="q-mt-md q-mb-md"
              :options="[{ value: 'self', label: 'I (the client) will pay for services myself and will be responsible for claiming under the NDIS (self-managed)' }, { value: 'plan', label: 'The invoice should be sent to my plan manager for payment' }]"
              map-options emit-value :label="$t('team.ndisPayment')" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="team" :label="$t('team.pickupAddress')" header-class=" text-h6">
        <q-card>
          <q-card-section>
            <AddressSearch :model="localModel" :filled="true"
              :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'country_id' }"
              :placeholder="$t('address.search')" />
            <q-input v-model="localModel.address1" :label="$t('address.line1')" bottom-slots />
            <q-input v-model="localModel.address2" :error="$v.address2.$invalid" :label="$t('address.line2')" />
            <div class="row q-col-gutter-md">
              <PostcodeRegionField v-model="localModel.suburb_postcode_region_id"
                :invalid="$v.suburb_postcode_region_id.$invalid" :label="$t('address.suburb')"
                class="col-xs-12 col-sm-6" />
              <CountryField v-model="localModel.country_id" :label="$t('address.country')" class="col-xs-12 col-sm-6"
                :invalid="$v.country_id.$invalid" />
            </div>
            <q-input v-model="localModel.pickup_instructions" :label="$t('team.pickupInstructions')" autogrow
              type="textarea" class="q-mt-md" outlined />
            <div class="q-mt-sm">
              <q-toggle v-model="localModel.atl" :label="$t('team.atl')" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="team" label="Postal Address" header-class="text-h6">
        <q-card>
          <q-card-section>
            <AddressSearch :model="localModel" :filled="true"
              :addressfields="{ address1: 'postal_address1', address2: 'postal_address2', suburb_postcode_region_id: 'postal_suburb_postcode_region_id', lat: 'postal_lat', lng: 'postal_lng', country_id: 'postal_country_id' }"
              :placeholder="$t('address.search')" />
            <q-input v-model="localModel.postal_address1" :label="$t('address.line1')" bottom-slots />
            <q-input v-model="localModel.postal_address2" :label="$t('address.line2')" />
            <div class="row q-col-gutter-md">
              <PostcodeRegionField v-model="localModel.postal_suburb_postcode_region_id" :label="$t('address.suburb')"
                class="col-xs-12 col-sm-6" />
              <CountryField v-model="localModel.postal_country_id" :label="$t('address.country')"
                class="col-xs-12 col-sm-6" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <q-separator class="q-mt-md" />
    <q-card-actions class="bg-grey-1" align="right">
      <q-btn @click="save()" :label="$t('actions.save')" color="primary" :disabled="$v.$invalid" />
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, requiredIf } from '@vuelidate/validators'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateField from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import { TeamForm } from 'src/components/models'
import { useMixinCommon } from 'src/mixins/common'
import { useMixinDebug } from 'src/mixins/debug'
import { doNotify } from 'src/mixins/help'
import { computed, inject, ref } from 'vue'

interface Props {
  model: TeamForm
}
const props = defineProps<Props>()

const common = useMixinCommon()
const localModel = computed(() => props.model)
const loading = ref(false)
const abnVerified = ref(false)
const abnVerifyResult = ref()
const $q = useQuasar()
const bus = inject('bus') as EventBus

const customerTypes = computed(() => {
  if (common?.value?.operating_country === 'aud') {
    return ['Residential', 'Business', 'NDIS', 'Home Care', 'Aged Care', 'Veteran Affairs', 'Sporting Group', 'Other']
  }
  if (common?.value?.operating_country === 'nzd') {
    return ['Residential', 'Business', 'Disability Services', 'Home Care', 'Aged Care', 'Veteran Affairs', 'Sporting Group', 'Other']
  }
  return []
})

const rules = {
  type: { required },
  name: { required },
  first_name: { required },
  last_name: { required },
  email: { required },
  mobile: { required },
  ndis_number: { requiredIf: requiredIf(() => localModel.value.type === 'NDIS') },
  ndis_type: { requiredIf: requiredIf(() => localModel.value.type === 'NDIS') },
  aged_care_client_number: { requiredIf: requiredIf(() => localModel.value.type === 'Aged Care') },
  address2: { required },
  suburb_postcode_region_id: { required },
  country_id: { required },
  payment_terms: { required },
  status: { required }
}

const $v = useVuelidate(rules, localModel, { $scope: false })

const save = () => {
  loading.value = true
  api.put(`/team/${props.model.id}`, localModel.value).then(() => {
    doNotify('positive', 'Saved')
    bus.emit('getTeam')
    loading.value = false
  }).catch((response) => {
    useMixinDebug(response)
    loading.value = false
  })
}

const verifyAbn = () => {
  if (!localModel.value.abn) {
    abnVerified.value = false
  }
  $q.loading.show({ message: 'Verifying ABN with the ATO...' })
  api.post('/verifynest/verifyabn', { keyword: localModel.value.abn }).then(response => {
    abnVerified.value = !response.data.data.Message
    localModel.value.abn_verified = !response.data.data.Message
    if (localModel.value.abn_verified) {
      save()
    }
    abnVerifyResult.value = response.data.data
    $q.loading.hide()
  }).catch(error => {
    $q.loading.hide()
    useMixinDebug(error)
  })
}

</script>
