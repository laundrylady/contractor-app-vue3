<template>
  <div>
    <q-badge :label="`${s.locality} (${s.state} ${s.postcode})`" v-for="s in postcoderegions" :key="s.id"
      :color="white ? 'transparent' : 'grey-2'" :text-color="white ? 'white' : 'grey-8'"
      class="q-mr-xs q-mb-xs q-pa-sm" />
  </div>
</template>
<script setup lang="ts">
import { PostcodeRegion } from './models'

interface Props {
  postcoderegions: PostcodeRegion[],
  white?: boolean
}
defineProps<Props>()
</script>
