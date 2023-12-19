<template>
  <div v-if="!$q.screen.xs">
    <q-breadcrumbs class="q-mb-md">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" />
      </template>
      <q-breadcrumbs-el label="Home" icon="home" :to="{ name: 'appDashboard' }" />
      <q-breadcrumbs-el label="Profile" :to="{ name: 'contractor-dashboard' }" />
      <q-breadcrumbs-el label="Details" />
    </q-breadcrumbs>
  </div>
  <q-card>
    <q-list v-if="model.id">
      <q-expansion-item group="contractor" :label="$t('contractor.information')" default-opened header-class="text-h6">
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-xs-4 col-md-3 col-lg-2 text-center">
                <UserAvatar :user="localModel" size="55px" />
                <div class="q-mt-xs text-center">
                  <q-btn flat @click="showAvatarUpload = !showAvatarUpload" label="Update" rounded />
                </div>
              </div>
              <div class="col-xs-8 col-md-9 col-lg-10">
                <div class="text-h5">{{ localModel.fullname }} <span
                    v-if="localModel.fullname !== localModel.contractor_badge_name">({{ localModel.contractor_badge_name
                    }})</span></div>
                <div class="text-grey"><q-icon name="mail" /> {{ localModel.email }}</div>
                <div class="text-grey"><q-icon name="phone" /> {{ localModel.mobile }}</div>
              </div>
            </div>
            <div v-if="showAvatarUpload" class="q-mt-md">
              <q-uploader color="grey-7" :url="uploadConfig.url" :headers="uploadConfig.headers" @uploaded="successUpload"
                label="Upload image" auto-expand auto-upload :accept="uploadConfig.images"
                :field-name="uploadConfig.fieldName" ref="avatarUploader" v-if="!loading" />
            </div>
            <div class="row q-col-gutter-md q-mt-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.email" label="Email" :error="$v.email.$invalid || emailError.error"
                  @blur="checkEmail()" :error-message="emailError.msg || ''" :hint="emailError.msg || ''" outlined
                  autocapitalize="off" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.mobile" label="Mobile Phone" :error="$v.mobile.$invalid"
                  :mask="common?.operating_country === 'aud' ? '#### ### ###' : ''" unmasked-value outlined />
              </div>
            </div>
            <q-select v-model="localModel.timezone" label="Timezone" :options="getTimeZones()" map-options emit-value
              :error="$v.timezone.$invalid" outlined />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn @click="save()" :label="$t('actions.update')" color="primary" :disabled="$v.$invalid" rounded />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="contractor" :label="$t('contractor.addressDetails')" header-class="text-h6">
        <q-card>
          <q-card-section>
            <AddressSearch :model="localModel" :filled="true"
              :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', postcode: 'postcode', lat: 'lat', lng: 'lng', country_id: 'country_id' }"
              :placeholder="$t('address.search')" />
            <q-input v-model="localModel.address1" :label="$t('address.line1')" bottom-slots outlined />
            <q-input v-model="localModel.address2" :error="$v.address2.$invalid" :label="$t('address.line2')" outlined />
            <div class="row q-col-gutter-md">
              <PostcodeRegionField v-model="localModel.suburb_postcode_region_id"
                :invalid="$v.suburb_postcode_region_id.$invalid" :label="$t('address.suburb')" class="col-xs-12"
                :outlined="true" :clearable="true" />
              <q-input v-model="localModel.postcode" :error="$v.postcode.$invalid" :label="$t('address.postcode')"
                outlined class="col-xs-12 col-sm-6" />
              <CountryField v-model="localModel.country_id" :label="$t('address.country')"
                :invalid="$v.country_id.$invalid" class="col-xs-12 col-sm-6" :outlined="true" />
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn @click="save()" :label="$t('actions.update')" color="primary" :disabled="$v.$invalid" rounded />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="contractor" :label="$t('contractor.financials')" header-class="text-h6">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-xs-6">
                <DateField v-model="localModel.contractor_insurance_expiry" :label="$t('contractor.insuranceExpiry')"
                  :outlined="true" :disable="true" />
              </div>
              <div class="col-xs-6">
                <q-input v-model="localModel.contractor_target" :label="$t('contractor.target')"
                  :error="$v.contractor_target.$invalid" class="col-xs-12" :outlined="true" />
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn @click="save()" :label="$t('actions.update')" color="primary" :disabled="$v.$invalid" rounded />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="contractor" :label="$t('contractor.bd.label')" header-class="text-h6">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_bd_name" :label="$t('contractor.bd.name')"
                class="col-xs-12 col-sm-6" :error="$v.contractor_bd_name.$invalid" :outlined="true" />
              <q-input v-model="localModel.contractor_bd_bank" :label="$t('contractor.bd.bank')"
                class="col-xs-12 col-sm-6" :error="$v.contractor_bd_bank.$invalid" :outlined="true" />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_bd_bsb" :label="$t('contractor.bd.bsb')" class="col-xs-6"
                :error="$v.contractor_bd_bsb.$invalid" :outlined="true" />
              <q-input v-model="localModel.contractor_bd_number" :label="$t('contractor.bd.number')" class="col-xs-6"
                :error="$v.contractor_bd_number.$invalid" :outlined="true" />
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn @click="save()" :label="$t('actions.update')" color="primary" :disabled="$v.$invalid" rounded />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item group="contractor" :label="$t('contractor.ec.label')" header-class="text-h6">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_ec_first_name" :label="$t('contractor.ec.firstName')"
                class="col-xs-6" :error="$v.contractor_ec_first_name.$invalid" outlined />
              <q-input v-model="localModel.contractor_ec_last_name" :label="$t('contractor.ec.lastName')" class="col-xs-6"
                :error="$v.contractor_ec_last_name.$invalid" outlined />
            </div>
            <div class="row q-col-gutter-md">
              <q-input v-model="localModel.contractor_ec_phone" :label="$t('contractor.ec.phone')" class="col-xs-6"
                :error="$v.contractor_ec_phone.$invalid" outlined />
              <q-input v-model="localModel.contractor_ec_relationship" :label="$t('contractor.ec.relationship')"
                class="col-xs-6" :error="$v.contractor_ec_relationship.$invalid" outlined />
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn @click="save()" :label="$t('actions.update')" color="primary" :disabled="$v.$invalid" rounded />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-card>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateField from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import { ContractorForm } from 'src/components/models'
import UserAvatar from 'src/components/UserAvatar.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinCommon } from 'src/mixins/common'
import { useMixinDebug } from 'src/mixins/debug'
import { doNotify, getTimeZones, uploadConfig } from 'src/mixins/help'
import { computed, inject, ref } from 'vue'

interface Props {
  model: ContractorForm
}
const props = defineProps<Props>()

const common = useMixinCommon()
const localModel = computed(() => props.model)
const loading = ref(false)
const showAvatarUpload = ref(false)
const emailError = ref({ error: false, msg: '' })

const bus = inject('bus') as EventBus

const rules = {
  address2: { required },
  suburb_postcode_region_id: { required },
  postcode: { required },
  country_id: { required },
  email: { required, email },
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
  contractor_target: { required }
}

const $v = useVuelidate(rules, localModel, { $scope: false })

const save = () => {
  loading.value = true
  api.put('/public/user/contractor/profile', localModel.value).then(() => {
    doNotify('positive', 'Saved')
    bus.emit('getContractor')
    loading.value = false
  }).catch((response) => {
    useMixinDebug(response)
    loading.value = false
  })
}

const successUpload = (file: LooseObject) => {
  localModel.value.avatar = file.xhr.response
  save()
}

const checkEmail = () => {
  emailError.value = { error: false, msg: '' }
  if (localModel.value.email) {
    api.post(`/user/checkemail/${localModel.value.id}`, { email: localModel.value.email }).then(response => {
      if (parseFloat(response.data.found[0].count) > 0) {
        emailError.value.error = true
        emailError.value.msg = 'That email address is already in use'
        localModel.value.email = null
      }
    }).catch(error => { useMixinDebug(error) })
  }
}

</script>
