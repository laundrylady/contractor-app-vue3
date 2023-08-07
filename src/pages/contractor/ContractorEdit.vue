<template>
  <div class="text-h5">Your {{ $t('contractor.details') }}</div>
  <p>Please keep your details up to date.</p>
  <q-card>
    <q-list v-if="model.id">
      <q-expansion-item group="contractor" :label="$t('contractor.information')" default-opened header-class="text-h6">
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.first_name" :error="$v.first_name.$invalid" label="First Name" class="col-xs-6"
                disable />
              <q-input v-model="localModel.last_name" :error="$v.last_name.$invalid" label="Last Name" class="col-xs-6"
                disable />
            </div>
            <div class="row q-col-gutter-md q-mb-md">
              <q-input v-model="localModel.first_name_2" label="Second Contact First Name" class="col-xs-6" disable />
              <q-input v-model="localModel.last_name_2" label="Second Contact Last Name" class="col-xs-6" disable />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model.trim="localModel.email" @blur="[checkEmail()]" :error="$v.email.$invalid" label="Email"
                class="col-xs-12" disable />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_badge_name" :label="$t('contractor.badgeName')"
                :error="$v.contractor_badge_name.$invalid" class="col-xs-12 col-sm-6" disable />
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.contractor_abn" :label="$t('contractor.abn')"
                  :error="$v.contractor_abn.$invalid">
                  <template v-slot:append>
                    <q-icon name="check" v-if="localModel.contractor_abn_verified" color="positive" />
                    <q-btn @click="verifyAbn()" label="Verify" color="primary" v-if="localModel.contractor_abn" flat />
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
            <div class="row q-col-gutter-md q-mb-md">
              <q-input v-model="localModel.mobile" label="Mobile" mask="#### ### ###" fill-mask hint="eg. 0412 123 343"
                :error="$v.mobile.$invalid" class="col-xs-12 col-sm-6" />
              <q-select v-model="localModel.timezone" label="Timezone" :options="getTimeZones()" map-options emit-value
                :error="$v.timezone.$invalid" class="col-xs-12 col-sm-6" />
            </div>
            <q-input v-model="localModel.contractor_description" :label="$t('contractor.description')" class="q-mb-md" />
            <div class="text-h6 q-mt-md">Current Avatar</div>
            <p>This is also visible to the customers.</p>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-3 text-center">
                <UserAvatar :user="localModel" size="92px" />
              </div>
              <div class="col-xs-12 col-sm-9">
                <q-uploader color="grey-7" :url="uploadConfig.url" :headers="uploadConfig.headers"
                  @uploaded="successUpload" label="Upload image" auto-expand auto-upload :accept="uploadConfig.images"
                  :field-name="uploadConfig.fieldName" ref="avatarUploader" v-if="!loading" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="contractor" :label="$t('contractor.addressDetails')" header-class="text-h6">
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
              <CountryField v-model="localModel.country_id" :label="$t('address.country')"
                :invalid="$v.country_id.$invalid" class="col-xs-12 col-sm-6" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="contractor" :label="$t('contractor.financials')" header-class="text-h6">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md q-mb-md">
              <div class="col-xs-12">
                <q-toggle v-model="localModel.contractor_gst_registered" label="GST Registered?" disable />
              </div>
              <div class="col-xs-12">
                <DateField v-model="localModel.contractor_insurance_expiry" :label="$t('contractor.insuranceExpiry')" />
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_target" :label="$t('contractor.target')"
                :error="$v.contractor_target.$invalid" class="col-xs-12" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="contractor" :label="$t('contractor.bd.label')" header-class="text-h6">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_bd_name" :label="$t('contractor.bd.name')"
                class="col-xs-12 col-sm-6" :error="$v.contractor_bd_name.$invalid" />
              <q-input v-model="localModel.contractor_bd_bank" :label="$t('contractor.bd.bank')"
                class="col-xs-12 col-sm-6" :error="$v.contractor_bd_bank.$invalid" />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_bd_bsb" :label="$t('contractor.bd.bsb')" class="col-xs-12 col-sm-6"
                :error="$v.contractor_bd_bsb.$invalid" />
              <q-input v-model="localModel.contractor_bd_number" :label="$t('contractor.bd.number')"
                class="col-xs-12 col-sm-6" :error="$v.contractor_bd_number.$invalid" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="contractor" :label="$t('contractor.ec.label')" header-class="text-h6">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_ec_first_name" :label="$t('contractor.ec.firstName')"
                class="col-xs-12 col-sm-6" :error="$v.contractor_ec_first_name.$invalid" />
              <q-input v-model="localModel.contractor_ec_last_name" :label="$t('contractor.ec.lastName')"
                class="col-xs-12 col-sm-6" :error="$v.contractor_ec_last_name.$invalid" />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_ec_phone" :label="$t('contractor.ec.phone')"
                class="col-xs-12 col-sm-6" :error="$v.contractor_ec_phone.$invalid" />
              <q-input v-model="localModel.contractor_ec_relationship" :label="$t('contractor.ec.relationship')"
                class="col-xs-12 col-sm-6" :error="$v.contractor_ec_relationship.$invalid" />
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
import { email, required } from '@vuelidate/validators'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateField from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import { ContractorForm } from 'src/components/models'
import UserAvatar from 'src/components/UserAvatar.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { doNotify, getTimeZones, uploadConfig } from 'src/mixins/help'
import { computed, inject, ref } from 'vue'

interface Props {
  model: ContractorForm
}
const props = defineProps<Props>()

const localModel = computed(() => props.model)
const loading = ref(false)
const abnVerified = ref(false)
const abnVerifyResult = ref()

const $q = useQuasar()
const bus = inject('bus') as EventBus

const rules = {
  first_name: { required },
  last_name: { required },
  email: { required, email },
  address2: { required },
  suburb_postcode_region_id: { required },
  country_id: { required },
  mobile: { required },
  timezone: { required },
  contractor_badge_name: { required },
  contractor_bd_name: { required },
  contractor_bd_bank: { required },
  contractor_bd_bsb: { required },
  contractor_bd_number: { required },
  contractor_ec_first_name: { required },
  contractor_ec_last_name: { required },
  contractor_ec_phone: { required },
  contractor_ec_relationship: { required },
  contractor_abn: { required },
  contractor_target: { required }
}

const $v = useVuelidate(rules, localModel, { $scope: false })

const save = () => {
  loading.value = true
  api.put(`/user/${props.model.id}`, localModel.value).then(() => {
    doNotify('positive', 'Saved')
    bus.emit('getContractor')
    loading.value = false
  }).catch((response) => {
    useMixinDebug(response)
    loading.value = false
  })
}

const checkEmail = () => {
  if (props.model.email) {
    api.post(`/user/checkemail/${props.model.id}`, { email: props.model.email }).then((response) => {
      if (response.data.found[0].count > 0) {
        localModel.value.email = null
        doNotify('negative', 'That email address is already in use!')
      }
    }).catch((response) => {
      useMixinDebug(response)
    })
  }
}

const successUpload = (file: LooseObject) => {
  localModel.value.avatar = file.xhr.response
  save()
}

const verifyAbn = () => {
  if (!localModel.value.contractor_abn) {
    abnVerified.value = false
  }
  $q.loading.show({ message: 'Verifying ABN with the ATO...' })
  api.post('/verifynest/verifyabn', { keyword: localModel.value.contractor_abn }).then(response => {
    abnVerified.value = !response.data.data.Message
    localModel.value.contractor_abn_verified = !response.data.data.Message
    localModel.value.contractor_gst_registered = !!response.data.data.Gst
    if (localModel.value.contractor_abn_verified) {
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
