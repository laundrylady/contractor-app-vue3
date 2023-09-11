<template>
  <img src="../assets/images/logos/logo.png" :style="`max-height:${header ? '65' : '176'}px;`" />
</template>
<script setup lang="ts">
interface Props {
  header?: boolean
}
defineProps<Props>()
</script>
