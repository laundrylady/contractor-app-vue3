<template>
  <div>
    <q-badge :label="`${s.locality}${common?.operating_country === 'aud' ? ` (${s.state})` : ` (${s.region})`}`"
      v-for="s in postcoderegions" :key="s.id" :color="white ? 'transparent' : 'grey-2'"
      :text-color="white ? 'white' : 'grey-8'" class="q-mr-xs q-mb-xs q-pa-sm" />
  </div>
</template>
<script setup lang="ts">
import { useMixinCommon } from 'src/mixins/common'
import { PostcodeRegion } from './models'

const common = useMixinCommon()

interface Props {
  postcoderegions: PostcodeRegion[],
  white?: boolean
}
defineProps<Props>()
</script>
