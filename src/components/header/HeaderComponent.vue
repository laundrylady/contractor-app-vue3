<template>
  <div class="bg-primary text-white q-mb-md">
    <div class="container q-pa-sm">
      <div style="position:relative;height:50px;" class="flex items-center">
        <div style="position:absolute;top:3px;left:10px;">
          <a @click="homeNav()" class="cursor-pointer">
            <img src="~assets/images/logos/logo_header.png" />
          </a>
        </div>
        <q-space />
        <q-btn round color="dark" :label="common?.operating_country === 'aud' ? 'AUD' : 'NZ'">
          <q-menu>
            <q-list>
              <q-item v-if="common?.operating_country === 'aud'" @click="switchCountry()" clickable>
                <q-item-section>New Zealand</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMixinCommon } from 'src/mixins/common'

const common = useMixinCommon()

const homeNav = () => {
  if (common?.value?.operating_country === 'aud') {
    document.location = 'https://www.thelaundrylady.com.au'
  } else {
    document.location = 'https://www.thelaundrylady.co.nz'
  }
}

const switchCountry = () => {
  if (common?.value?.operating_country === 'aud') {
    document.location = 'https://www.thelaundrylady.co.nz'
  } else {
    document.location = 'https://www.thelaundrylady.com.au'
  }
}
</script>
