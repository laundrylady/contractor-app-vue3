<template>
  <div v-if="model.id">
    <UserPostcodeRegionGroupManagement :user="model" />
  </div>
</template>
<script setup lang="ts">
import { User } from 'src/components/models'
import UserPostcodeRegionGroupManagement from 'src/components/userpostcoderegiongroup/UserPostcodeRegionGroupManagement.vue'

interface Props {
  model: User
}
defineProps<Props>()
</script>
