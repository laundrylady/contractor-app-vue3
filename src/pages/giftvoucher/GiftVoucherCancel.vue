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
              <div class="text-h5 q-mb-md">Your purchase has been cancelled!</div>
            </q-card-section>
            <q-card-actions><q-btn :to="{ name: 'giftVoucherPurchase' }"
                label="Click here to puchase another gift voucher" no-caps flat color="primary" rounded />
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import AppLogo from 'src/components/AppLogo.vue'
</script>
