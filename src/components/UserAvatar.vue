<template>
  <q-avatar :color="userDetails.color" text-color="white" :title="userDetails.title" :size="size || '32px'">
    <q-img :src="`/api/public/user/useravatar?fetch=thumb&userId=${userDetails.id}&cb=${new Date().getTime()}`"
      fit="contain" no-spinner no-transition v-if="userDetails.avatar" />
    {{ userDetails.initials }}
  </q-avatar>
</template>
<script setup lang="ts">
import { computed } from 'vue'

interface AvatarUser {
  id: number,
  first_name: string,
  last_name: string,
  fullname: string,
  avatar?: string
}

interface Props {
  user: AvatarUser,
  size?: string
}
const props = defineProps<Props>()

const userDetails = computed(() => {
  if (!props.user) {
    return {
      initials: 'LL',
      avatar: null,
      color: 'white',
      title: 'System',
      id: 1
    }
  }
  return {
    initials: props.user && props.user.first_name && props.user.last_name ? `${props.user.first_name.slice(0, 1)}${props.user.last_name.slice(0, 1)}` : 'LL',
    avatar: props.user.avatar,
    color: !props.user.avatar ? 'secondary' : '',
    title: props.user.fullname,
    id: props.user.id
  }
})
</script>
