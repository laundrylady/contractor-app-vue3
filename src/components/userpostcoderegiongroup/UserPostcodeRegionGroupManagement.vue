<template>
  <div>
    <UserPostcodeRegionGroupCreate />
    <UserPostcodeRegionGroupEdit />
    <div class="flex items-center q-mb-sm">
      <p>You pickup from the following locations.
      </p>
    </div>
    <q-card>
      <q-list>
        <q-item v-for="d in data" :key="d.id">
          <q-item-section>
            <div>
              <div class="text-h6">{{ d.name }}</div>
              <div>
                <PostcodeRegionDisplay :postcoderegions="d.postcoderegions" />
              </div>
            </div>
          </q-item-section></q-item>
      </q-list>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import PostcodeRegionDisplay from 'src/components/PostcodeRegionDisplay.vue'
import { useMixinDebug } from 'src/mixins/debug'
import { onMounted, ref } from 'vue'
import UserPostcodeRegionGroupCreate from './UserPostcodeRegionGroupCreate.vue'
import UserPostcodeRegionGroupEdit from './UserPostcodeRegionGroupEdit.vue'

const data = ref()
const loading = ref(false)

const request = () => {
  loading.value = true
  api.get('/public/userpostcoderegiongroup/index').then((response) => {
    data.value = response.data
    loading.value = false
  }).catch((response) => {
    useMixinDebug(response)
  })
}

onMounted(() => {
  request()
})
</script>
