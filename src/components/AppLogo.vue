<template>
  <img src="../assets/images/logos/logo.png" :style="`max-height:${header ? '65' : '126'}px;`" />
</template>
<script setup lang="ts">
interface Props {
  header?: boolean
}
defineProps<Props>()
</script>
