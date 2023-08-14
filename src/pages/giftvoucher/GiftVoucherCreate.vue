<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row justify-center items-center animated fadeIn" padding>
        <div class="col-xs-12 col-sm-10 col-md-5">
          <q-card>
            <q-card-section class="q-pt-xs q-pb-xs">
              <AppLogo />
            </q-card-section>
            <q-card-section>
              <div class="text-h5 q-mb-md">Purchase a gift voucher</div>
              <q-select v-model="model.value" map-options emit-value :options="voucherOptions"
                label="Gift voucher options" outlined :error="$v.value.$invalid" />
              <p>Can be redeemed online for any Laundry Lady services at any location.</p>
              <div class="q-mb-sm">
                <q-radio v-model="model.send_to" val="purchaser" label="Send the gift voucher to my email address" />
                <div class="text-grey">If you want to print the voucher or email it to the recipient yourself</div>
              </div>
              <q-radio v-model="model.send_to" val="recipient"
                label="Send the gift voucher to recipient's email address" />
              <div class="bg-grey-1 q-pa-md q-mt-md">
                <div class="text-bold">Gift voucher details</div>
                <q-input v-model="model.name_recipient" label="Recipient name" :error="$v.name_recipient.$invalid"
                  :disable="!model.send_to" />
                <q-input v-model="model.email_recipient" label="Recipient email" :error="$v.email_recipient.$invalid"
                  :disable="!model.send_to" />
                <q-input v-model="model.message_recipient" label="Personalised message" type="textarea" rows="3" outlined
                  :error="$v.message_recipient.$invalid" bottom-slots placeholder="Happy birthday, have a wonderful day!"
                  :disable="!model.send_to" />
                <q-input v-model="model.from_recipient" label="Who is this gift from?" :error="$v.from_recipient.$invalid"
                  :disable="!model.send_to" />
              </div>
              <div class="bg-grey-1 q-pa-md q-mt-md">
                <div class="text-bold">Purchaser details</div>
                <div class="row q-col-gutter-md">
                  <div class="col-xs-6">
                    <q-input v-model="model.first_name" label="First name" :error="$v.first_name.$invalid"
                      :disable="!model.send_to" />
                  </div>
                  <div class="col-xs-6">
                    <q-input v-model="model.last_name" label="Last name" :error="$v.last_name.$invalid"
                      :disable="!model.send_to" />
                  </div>
                </div>
                <q-input v-model="model.email" label="Email address" :error="$v.email.$invalid"
                  :disable="!model.send_to" />
              </div>
            </q-card-section>
            <q-card-actions v-if="model.value">
              <q-btn @click="purchase()" :label="`Purchase ($${model.value})`" color="primary"
                :disable="$v.$invalid || loading" :loading="loading" rounded />
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { api } from 'src/boot/axios'
import AppLogo from 'src/components/AppLogo.vue'
import { GiftVoucher } from 'src/components/models'
import { useMixinDebug } from 'src/mixins/debug'
import { reactive, ref } from 'vue'

const loading = ref(false)
const model = reactive<GiftVoucher>({
  first_name: null,
  last_name: null,
  email: null,
  email_recipient: null,
  name_recipient: null,
  message_recipient: null,
  from_recipient: null,
  value: null,
  send_to: null
})

const rules = {
  first_name: { required },
  last_name: { required },
  email: { required, email },
  email_recipient: { required, email },
  name_recipient: { required },
  from_recipient: { required },
  message_recipient: { required },
  value: { required },
  send_to: { required }
}

const voucherOptions = [
  { value: 55, label: '$55 gift voucher' },
  { value: 70, label: '$70 gift voucher' },
  { value: 100, label: '$100 gift voucher' },
  { value: 150, label: '$150 gift voucher' },
  { value: 200, label: '$200 gift voucher' },
  { value: 250, label: '$250 gift voucher' },
  { value: 300, label: '$300 gift voucher' },
  { value: 400, label: '$400 gift voucher' },
  { value: 500, label: '$500 gift voucher' },
  { value: 700, label: '$700 gift voucher' },
  { value: 1000, label: '$1000 gift voucher' }
]

const $v = useVuelidate(rules, model, { $scope: false })

const purchase = () => {
  loading.value = true
  api.post('/public/giftvoucher', model).then(response => {
    document.location.href = `/payments/session/${response.data.invoice_id}`
  }).catch(error => {
    useMixinDebug(error)
    loading.value = false
  })
}
</script>
