<template>
  <div v-if="model.id" class="q-mt-md">
    <GlobalNotes :notable_id="model.id" notable_type="Team" :nobox="true" />
    <q-list class="q-mt-lg">
      <q-expansion-item label="Customer Details" header-class="bg-grey-2 text-h6" group="customerDetails">
        <q-card>
          <q-card-section>
            <p v-if="isEditLocked"><a @click="isEditLocked = false" class="link">Click
                here</a> to unlock the customer
              details and make changes.
            </p>
            <p v-if="!isEditLocked">Once you've finished updating the customer details, click "UPDATE" to save
              the changes.</p>
            <FormValidationInclude :errors="$v" v-if="!isEditLocked" />
            <div class="row q-col-gutter-sm">
              <div class="col-xs-12">
                <q-select v-model="localModel.type" :label="$t('team.type')" :options="customerTypes" map-options
                  emit-value outlined disable bottom-slots />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.first_name" :error="$v.first_name.$invalid" label="Contact First Name"
                  outlined :disable="isEditLocked" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.last_name" :error="$v.last_name.$invalid" label="Contact Last Name" outlined
                  :disable="isEditLocked" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.mobile" :error="$v.mobile.$invalid"
                  :label="common?.operating_country === 'aud' ? 'Australian mobile number' : 'Your contact mobile'"
                  outlined :disable="isEditLocked" :mask="common?.operating_country === 'aud' ? '#### ### ###' : ''"
                  unmasked-value />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.other_phone" :error="$v.other_phone.$invalid"
                  label="Alternative contact number" outlined :disable="isEditLocked" unmasked-value />
                <q-input v-model="localModel.email" label="Email" outlined bottom-slots :error="$v.email.$invalid"
                  @blur="checkEmail()" :disable="isEditLocked" />
              </div>
              <div class="col-xs-12">
                <q-input v-model="localModel.name" :error="$v.name.$invalid" label="Customer Name" outlined
                  :disable="isEditLocked" />
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right" v-if="!isEditLocked">
            <q-btn @click="cancelEdit()" label="Cancel" flat color="secondary" rounded />
            <q-btn @click="save()" :disable="$v.$invalid || loading" :label="$t('actions.update')" color="primary" rounded
              :loading="loading" />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item :label="$t('team.ndis')" header-class="bg-grey-3 text-h6" v-if="localModel.type === 'NDIS'">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-sm">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.ndis_number" disable :label="$t('team.ndisNumber')" outlined
                  bottom-slots><template v-slot:prepend>
                    <img src="~assets/images/logos/ndis_heart.svg" style="height:32px" />
                  </template>
                </q-input>
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-select v-model="localModel.ndis_type" :label="$t('team.ndisType')" outlined bottom-slots
                  :options="['Self managed', 'Plan managed', 'NDIA registered']" disable />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.ndis_plan_manager_email" :label="$t('team.ndisPlanManagerEmail')"
                  bottom-slots disable outlined />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.ndis_support_coordinator_email"
                  :label="$t('team.ndisSupportCoordinatorEmail')" bottom-slots disable outlined />
              </div>
              <div class="col-xs-12 col-sm-6">
                <DateField v-model="localModel.ndis_plan_start" :label="$t('team.ndisPlanStart')" outlined :disable="true"
                  bottom-slots />
              </div>
              <div class="col-xs-12 col-sm-6">
                <DateField v-model="localModel.ndis_plan_end" :label="$t('team.ndisPlanEnd')" outlined :disable="true"
                  bottom-slots />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item label="Pickup Address" header-class="bg-grey-2 text-h6" group="customerDetails"
        :class="{ 'text-negative': !model.postcode || !model.address2 || !model.suburb_postcode_region_id }"
        :icon="(!model.postcode || !model.address2 || !model.suburb_postcode_region_id) ? 'warning' : ''">
        <q-card>
          <q-card-section>
            <p v-if="isEditLocked"><a @click="isEditLocked = false" class="link">Click
                here</a> to unlock the customer
              pickup address and make changes.
            </p>
            <p v-if="!isEditLocked">Once you've finished updating the customer pickup address, click "UPDATE" to
              save
              the changes.</p>
            <FormValidationInclude :errors="$v" v-if="!isEditLocked" />
            <AddressSearch :model="localModel" :filled="true"
              :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'country_id', postcode: 'postcode' }"
              :placeholder="$t('address.search')" v-if="!isEditLocked" />
            <q-input v-model="localModel.address1" :label="$t('address.line1')" bottom-slots outlined
              :disable="isEditLocked" />
            <q-input v-model="localModel.address2" :error="$v.address2.$invalid" :label="$t('address.line2')" outlined
              :disable="isEditLocked" />
            <div class="row q-col-gutter-md q-mb-md">
              <div class="col-xs-12 col-sm-6">
                <PostcodeRegionField v-model="localModel.suburb_postcode_region_id" :outlined="true"
                  :invalid="$v.suburb_postcode_region_id.$invalid" :label="$t('address.suburb')" :disable="isEditLocked"
                  :clearable="true" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.postcode" :label="$t('address.postcode')" :disable="isEditLocked" outlined
                  :error="$v.postcode.$invalid" />
              </div>
            </div>
            <CountryField v-model="localModel.country_id" :label="$t('address.country')" :outlined="true"
              :invalid="$v.country_id.$invalid" :disable="true" />
          </q-card-section>
          <q-card-actions align="right" v-if="!isEditLocked">
            <q-btn @click="cancelEdit()" label="Cancel" flat color="secondary" rounded />
            <q-btn @click="save()" :disable="$v.$invalid || loading" :label="$t('actions.update')" color="primary" rounded
              :loading="loading" />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
      <q-expansion-item label="Invoice Details" header-class="bg-grey-2 text-h6" group="customerDetails">
        <q-card>
          <q-card-section>
            <p v-if="isEditLocked"><a @click="isEditLocked = false" class="link">Click
                here</a> to unlock the customer
              invoice detrails and make changes.
            </p>
            <p v-if="!isEditLocked">Once you've finished updating the customer invoice details, click "UPDATE" to
              save
              the changes.</p>
            <FormValidationInclude :errors="$v" v-if="!isEditLocked" />
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.invoice_name" label="Name on invoice" outlined :disable="isEditLocked" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.invoice_po" label="Purchase order number on invoice" outlined
                  :disable="isEditLocked" bottom-slots />
              </div>
            </div>
            <q-input v-model="localModel.finance_email" label="Finance email - separate with a comma for multiple"
              class="q-mb-lg" outlined :disable="isEditLocked" />
            <AddressSearch :model="localModel" :filled="true"
              :addressfields="{ address1: 'invoice_address1', address2: 'invoice_address2', suburb_postcode_region_id: 'invoice_address_suburb_postcode_region_id', lat: '', lng: '', country_id: 'invoice_address_country_id', postcode: 'invoice_address_postcode' }"
              :placeholder="$t('address.search')" v-if="!isEditLocked" />
            <q-input v-model="localModel.invoice_address1" :label="$t('address.line1')" bottom-slots outlined
              :disable="isEditLocked" />
            <q-input v-model="localModel.invoice_address2" :label="$t('address.line2')" outlined :disable="isEditLocked"
              bottom-slots />
            <div class="row q-col-gutter-md q-mb-md">
              <div class="col-xs-12 col-sm-6">
                <PostcodeRegionField v-model="localModel.invoice_address_suburb_postcode_region_id" :outlined="true"
                  :label="$t('address.suburb')" :disable="isEditLocked" :clearable="true" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.invoice_address_postcode" :label="$t('address.postcode')"
                  :disable="isEditLocked" outlined />
              </div>
            </div>
            <CountryField v-model="localModel.country_id" :label="$t('address.country')" :outlined="true"
              :disable="isEditLocked" />
          </q-card-section>
          <q-card-actions align="right" v-if="!isEditLocked">
            <q-btn @click="cancelEdit()" label="Cancel" flat color="secondary" rounded />
            <q-btn @click="save()" :disable="$v.$invalid || loading" :label="$t('actions.update')" color="primary" rounded
              :loading="loading" />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
  <q-dialog v-model="emailError.show">
    <q-card class="modal-sm">
      <q-toolbar>
        <q-toolbar-title>Email Found</q-toolbar-title>
        <q-btn v-close-popup icon="close" flat round dense />
      </q-toolbar>
      <q-card-section>A customer with that email address already exists.
        <router-link :to="{ name: 'team-dashboard', params: { id: emailError.id } }" class="link">Click here to view
          customer: {{ emailError.name
          }}</router-link>
      </q-card-section>
    </q-card></q-dialog>
</template>

<script setup lang="ts">
import { Team } from 'src/components/models'
import GlobalNotes from 'src/components/note/GlobalNotes.vue'
import { computed, inject, onMounted, ref } from 'vue'
import { required, requiredIf } from '@vuelidate/validators'
import { api } from 'src/boot/axios'
import { doNotify } from 'src/mixins/help'
import { EventBus } from 'quasar'
import { useMixinDebug } from 'src/mixins/debug'
import useVuelidate from '@vuelidate/core'
import { useMixinCommon } from 'src/mixins/common'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateField from 'src/components/form/DateField.vue'
import FormValidationInclude from 'src/components/form/FormValidationInclude.vue'

interface Props {
  model: Team
}
const props = defineProps<Props>()
const localModel = computed(() => props.model)
const emailError = ref({ show: false, id: null, name: null })
const loading = ref(false)
const isEditLocked = ref(true)
const bus = inject('bus') as EventBus
const common = useMixinCommon()
const originalModel = ref()

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
  name: { required },
  first_name: { required },
  last_name: { required },
  email: { required },
  mobile: { requiredIf: requiredIf(() => !localModel.value.other_phone) },
  other_phone: { requiredIf: requiredIf(() => !localModel.value.mobile) },
  address2: { required },
  suburb_postcode_region_id: { required },
  postcode: { required },
  country_id: { required }
}

const $v = useVuelidate(rules, localModel, { $scope: false })

const save = () => {
  loading.value = true
  api.put(`/public/team/${props.model.id}`, localModel.value).then(() => {
    doNotify('positive', 'Saved')
    bus.emit('getTeam')
    loading.value = false
    isEditLocked.value = true
  }).catch((response) => {
    useMixinDebug(response)
    loading.value = false
  })
}

const checkEmail = () => {
  emailError.value = { show: false, id: null, name: null }
  if (!localModel.value.email || localModel.value.email === originalModel.value.email) { return }
  api.post(`/public/team/checkemail/${localModel.value.id}`, { email: localModel.value.email }).then().catch((error) => {
    emailError.value.id = error.response.data.id
    emailError.value.name = error.response.data.name
    emailError.value.show = true
    localModel.value.email = ''
  })
}

const cancelEdit = () => {
  bus.emit('getTeam')
  isEditLocked.value = true
}

onMounted(() => {
  originalModel.value = JSON.parse(JSON.stringify(props.model))
})
</script>
