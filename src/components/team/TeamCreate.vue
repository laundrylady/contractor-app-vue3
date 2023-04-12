<template>
  <q-dialog v-model="show">
    <q-card class="modal">
      <q-toolbar>
        <q-toolbar-title>{{ $t('team.create') }}</q-toolbar-title>
        <q-space />
        <q-btn v-close-popup icon="close" flat round dense />
      </q-toolbar>
      <q-separator />
      <q-card-section>
        <q-select v-model="model.type" :error="$v.type.$invalid" :label="$t('team.type')"
          :options="['Residential', 'Business', 'NDIS', 'Aged Care', 'DVA', 'Sporting Group', 'Other']" />
        <div class="row q-col-gutter-md">
          <q-input v-model="model.first_name" :label="$t('team.firstName')" :error="$v.first_name.$invalid"
            class="col-xs-12 col-sm-6" />
          <q-input v-model="model.last_name" :label="$t('team.lastName')" :error="$v.last_name.$invalid"
            class="col-xs-12 col-sm-6" />
        </div>
        <div class="row q-col-gutter-md">
          <q-input v-model="model.email" :label="$t('team.email')" :error="$v.email.$invalid" class="col-xs-12 col-sm-6"
            @blur="checkEmail()" />
          <q-input v-model="model.mobile" :label="$t('team.mobile')" :error="$v.mobile.$invalid" mask="#### ### ###"
            unmasked-value class="col-xs-12 col-sm-6" />
        </div>
        <div v-if="['Business', 'Aged Care', 'Sporting Group'].indexOf(model.type || '') !== -1"
          class="row q-col-gutter-md">
          <q-input v-model="model.name" :label="$t('team.teamName')" :error="$v.name.$invalid"
            class="col-xs-12 col-sm-6" />
          <div class="col-xs-12 col-sm-6">
            <q-input v-model="model.abn" :label="$t('team.abn')" :error="$v.abn.$invalid">
              <template v-slot:append>
                <q-icon name="check" v-if="model.abn_verified" color="positive" />
                <q-btn @click="verifyAbn()" color="primary" v-if="model.abn" label="Verify" flat />
              </template>
            </q-input>
            <div v-if="abnVerifyResult" class="q-mb-md">
              <div v-if="abnVerifyResult.Message" class="text-negative">{{ abnVerifyResult.Message }}</div>
              <div v-if="!abnVerifyResult.Message" class="text-positive">
                <span class="q-mr-sm">ABN Registered to: {{
                  abnVerifyResult.EntityName }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="model.type === 'Aged Care'">
          <q-input v-model="model.aged_care_client_number" :label="$t('team.agedCareClientNumber')"
            :error="$v.aged_care_client_number.$invalid" />
        </div>
        <div v-if="model.type === 'NDIS'" class="row q-col-gutter-md">
          <q-input v-model="model.ndis_number" :label="$t('team.ndisNumber')" :error="$v.ndis_number.$invalid"
            class="col-xs-12 col-sm-6"><template v-slot:prepend>
              <img src="~assets/images/logos/ndis_heart.svg" style="height:32px" />
            </template>
          </q-input>
          <q-select v-model="model.ndis_type" :label="$t('team.ndisType')" :error="$v.ndis_type.$invalid"
            :options="['Self managed', 'Plan managed', 'NDIA registered']" class="col-xs-12 col-sm-6" />
        </div>
        <div class="row q-col-gutter-md">
          <div class="col-xs-6">
            <q-select v-model="model.payment_terms" :error="$v.payment_terms.$invalid" :label="$t('team.paymentTerms')"
              :options="['Credit Card', 'Bank Transfer']" />
          </div>
          <div class="col-xs-6">
            <q-toggle v-model="model.owing_no_booking" :label="$t('team.owingNoBooking')" />
          </div>
        </div>
        <div class="q-mt-lg q-mb-sm text-h6">Pickup Address</div>
        <AddressSearch :model="model"
          :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng' }"
          :placeholder="$t('address.search')" />
        <q-input v-model="model.address1" :label="$t('address.line1')" bottom-slots />
        <q-input v-model="model.address2" :error="$v.address2.$invalid" :label="$t('address.line2')" />
        <div class="row q-col-gutter-md">
          <PostcodeRegionField v-model="model.suburb_postcode_region_id" :invalid="$v.suburb_postcode_region_id.$invalid"
            :label="$t('address.suburb')" class="col-xs-12 col-sm-6" />
          <CountryField v-model="model.country_id" :label="$t('address.country')" class="col-xs-12 col-sm-6"
            :invalid="$v.country_id.$invalid" />
        </div>
        <q-input v-model="model.pickup_instructions" :label="$t('team.pickupInstructions')" autogrow type="textarea"
          class="q-mt-md" />
        <div class="q-mt-sm">
          <q-toggle v-model="model.atl" :label="$t('team.atl')" />
        </div>
        <div class="text-h6 q-mt-lg q-mb-sm">Postal Address (if different from Pickup Address)</div>
        <AddressSearch :model="model"
          :addressfields="{ address1: 'postal_address1', address2: 'postal_address2', suburb_postcode_region_id: 'postal_suburb_postcode_region_id', lat: 'postal_lat', lng: 'postal_lng' }"
          :placeholder="$t('address.search')" />
        <q-input v-model="model.postal_address1" :label="$t('address.line1')" bottom-slots />
        <q-input v-model="model.postal_address2" :label="$t('address.line2')" />
        <div class="row q-col-gutter-md">
          <PostcodeRegionField v-model="model.postal_suburb_postcode_region_id" :label="$t('address.suburb')"
            class="col-xs-12 col-sm-6" />
          <CountryField v-model="model.postal_country_id" :label="$t('address.country')" class="col-xs-12 col-sm-6" />
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup label="Cancel" flat color="secondary" />
        <q-btn :disable="loading || $v.$invalid" label="Save" color="primary" @click="save()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, requiredIf } from '@vuelidate/validators'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { doNotify } from 'src/mixins/help'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import AddressSearch from '../form/AddressSearch.vue'
import CountryField from '../form/CountryField.vue'
import PostcodeRegionField from '../form/PostcodeRegionField.vue'

const show = ref(false)
const model = reactive({
  type: null,
  name: null,
  abn: null,
  abn_verified: false,
  first_name: null,
  last_name: null,
  email: null,
  mobile: null,
  ndis: false,
  ndis_number: null,
  ndis_type: null,
  aged_care_client_number: null,
  finance_phone: null,
  finance_email: null,
  other_phone: null,
  pickup_instructions: null,
  atl: true,
  address1: null,
  address2: null,
  suburb_postcode_region_id: null,
  country_id: 13,
  lat: null,
  lng: null,
  postal_address1: null,
  postal_address2: null,
  postal_suburb_postcode_region_id: null,
  postal_country_id: null,
  postal_lat: null,
  postal_lng: null,
  payment_terms: null,
  owing_no_booking: false
})
const loading = ref(false)
const abnVerified = ref(false)
const abnVerifyResult = ref()
const bus = inject('bus') as EventBus
const $q = useQuasar()
const router = useRouter()
const rules = {
  type: { required },
  name: { requiredIf: requiredIf(() => ['Business', 'Aged Care', 'Sporting Group'].indexOf(model.type || '') !== -1) },
  abn: { requiredIf: requiredIf(() => ['Business', 'Aged Care'].indexOf(model.type || '') !== -1) },
  first_name: { required },
  last_name: { required },
  email: { required },
  mobile: { required },
  ndis_number: { requiredIf: requiredIf(() => model.type === 'NDIS') },
  ndis_type: { requiredIf: requiredIf(() => model.type === 'NDIS') },
  aged_care_client_number: { requiredIf: requiredIf(() => model.type === 'Aged Care') },
  address2: { required },
  suburb_postcode_region_id: { required },
  country_id: { required },
  payment_terms: { required }
}

const $v = useVuelidate(rules, model)

const save = () => {
  loading.value = true
  api.post('/team', model).then((response) => {
    doNotify('positive', 'Customer created')
    router.push({ name: 'team-dashboard', params: { id: response.data.id } })
    show.value = false
    loading.value = false
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

const checkEmail = () => {
  if (model.email) {
    api.post('/user/checkemail/0', { email: model.email }).then((response) => {
      if (response.data.found[0].count > 0) {
        model.email = null
        doNotify('negative', 'That email address is already in use!')
      }
    }).catch((response) => {
      useMixinDebug(response)
    })
  }
}

const verifyAbn = () => {
  if (!model.abn) {
    abnVerified.value = false
  }
  $q.loading.show({ message: 'Verifying ABN with the ATO...' })
  api.post('/verifynest/verifyabn', { keyword: model.abn }).then(response => {
    abnVerified.value = !response.data.data.Message
    model.abn_verified = !response.data.data.Message
    abnVerifyResult.value = response.data.data
    $q.loading.hide()
  }).catch(error => {
    $q.loading.hide()
    useMixinDebug(error)
  })
}

onMounted(() => {
  bus.on('newTeam', () => {
    show.value = true
  })
})

onBeforeUnmount(() => {
  bus.off('newTeam')
})
</script>
