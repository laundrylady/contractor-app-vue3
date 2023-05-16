<template>
  <q-page padding v-if="user">
  </q-page>
</template>
<script setup lang="ts">
import { useMixinSecurity } from 'src/mixins/security'
import { onBeforeUnmount, onMounted } from 'vue'

const user = useMixinSecurity()

onMounted(() => {
  console.log('mounted')
})

onBeforeUnmount(() => {
  console.log('unmounted')
})
</script>
