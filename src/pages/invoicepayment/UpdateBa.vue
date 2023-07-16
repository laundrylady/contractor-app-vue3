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
              <div class="text-h5 q-mb-md">Update your Bank Account Details</div>
              <div v-if="result.success" class="text-positive">We will process your refund within the next 5 business
                days.</div>
              <div v-if="result.error" class="text-negative">There was an error updating your bank account details. Please
                try again.
                days.</div>
              <div v-if="!result.success">
                <p>Before we are able to process your refund, we need to ensure your bank account details are up to date.
                </p>
                <p>Please enter the bank account details for the refund:</p>
                <div class="row q-col-gutter-md">
                  <div class="col-xs-12 col-sm-6">
                    <q-input v-model="model.bsb" label="BSB" :error="$v.bsb.$invalid" type="number" />
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <q-input v-model="model.account_number" label="Account Number" :error="$v.account_number.$invalid"
                      type="number" />
                  </div>
                </div>
                <p class="text-caption">*Please ensure no spaces or dashes (-) are included in the BSB or Account Number
                </p>
              </div>
            </q-card-section>
            <q-card-actions>
              <q-btn @click="update()" label="Update" color="primary" :disable="$v.$invalid || loading" :loading="loading"
                v-if="!result.success" rounded />
            </q-card-actions>
          </q-card>
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
import { UpdateBa } from 'src/components/models'
import { useMixinDebug } from 'src/mixins/debug'
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const loading = ref(false)
const result = ref({ success: false, error: false })
const model = reactive<UpdateBa>({
  bsb: null,
  account_number: null
})

const rules = {
  bsb: { required },
  account_number: { required }
}

const $v = useVuelidate(rules, model, { $scope: false })

const update = () => {
  loading.value = true
  api.post(`/public/invoicepayment/updateba/${$route.params.id}`, model).then(() => {
    result.value.success = true
    loading.value = false
  }).catch(error => {
    useMixinDebug(error)
    loading.value = false
    result.value.error = true
  })
}

onMounted(() => {
  api.get(`/public/invoicepayment/updateba/${$route.params.id}`).then()
    .catch(error => {
      useMixinDebug(error)
    })
})
</script>
