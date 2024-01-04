<template>
  <div v-if="model.id" class="q-mt-md">
    <GlobalNotes :notable_id="model.id" notable_type="Team" :nobox="true" />
    <q-list class="q-mt-lg">
      <q-expansion-item label="Customer Details" header-class="bg-grey-1 text-h6" group="customerDetails">
        <q-card>
          <q-card-section>
            <p v-if="isEditLocked"><a @click="isEditLocked = false" class="link">Click
                here</a> to unlock the customer
              details and make changes.
            </p>
            <p v-if="!isEditLocked">Once you've finished updating the customer details, click "UPDATE" to save
              the changes.</p>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-select v-model="localModel.type" :label="$t('team.type')" :options="customerTypes" map-options
                  emit-value outlined disable bottom-slots />
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-6">
                <q-input v-model="localModel.first_name" :error="$v.first_name.$invalid" label="Contact First Name"
                  outlined :disable="isEditLocked" />
              </div>
              <div class="col-xs-6">
                <q-input v-model="localModel.last_name" :error="$v.last_name.$invalid" label="Contact Last Name" outlined
                  :disable="isEditLocked" />
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-6">
                <q-input v-model="localModel.mobile" :error="$v.mobile.$invalid" label="Mobile" outlined
                  :disable="isEditLocked" :mask="common?.operating_country === 'aud' ? '#### ### ###' : ''"
                  unmasked-value />
              </div>
            </div>
            <div class="row q-col-gutter-md">
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
      <q-expansion-item label="Pickup Address" header-class="bg-grey-1 text-h6" group="customerDetails">
        <q-card>
          <q-card-section>
            <p v-if="isEditLocked"><a @click="isEditLocked = false" class="link">Click
                here</a> to unlock the customer
              pickup address and make changes.
            </p>
            <p v-if="!isEditLocked">Once you've finished updating the customer pickup address, click "UPDATE" to
              save
              the changes.</p>
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
                <q-input v-model="localModel.postcode" :label="$t('address.postcode')" :disable="isEditLocked" outlined />
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
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { Team } from 'src/components/models'
import GlobalNotes from 'src/components/note/GlobalNotes.vue'
import { computed, inject, ref } from 'vue'
import { required } from '@vuelidate/validators'
import { api } from 'src/boot/axios'
import { doNotify } from 'src/mixins/help'
import { EventBus } from 'quasar'
import { useMixinDebug } from 'src/mixins/debug'
import useVuelidate from '@vuelidate/core'
import { useMixinCommon } from 'src/mixins/common'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import CountryField from 'src/components/form/CountryField.vue'

interface Props {
  model: Team
}
const props = defineProps<Props>()
const localModel = computed(() => props.model)
const loading = ref(false)
const isEditLocked = ref(true)
const bus = inject('bus') as EventBus
const common = useMixinCommon()

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
  mobile: { required },
  address2: { required },
  suburb_postcode_region_id: { required },
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

const cancelEdit = () => {
  bus.emit('getTeam')
  isEditLocked.value = true
}
</script>
