<template>
  <div>
    <q-select v-model.trim="keyword" placeholder="Keyword search" :disabled="loading" :loading="loading" borderless dark
      class="gt-xs" style="width:500px;" use-input :options="results" @filter="filter" @update:model-value="handleChange"
      hide-dropdown-icon :input-debounce="300">
      <template v-slot:loading>
        <q-spinner v-if="loading" />
      </template>
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
      <template v-slot:option="scope">
        <q-separator />
        <q-item v-bind="scope.itemProps">
          <q-item-section avatar v-if="scope.opt.type === 'contractor'">
            <q-icon name="engineering" size="32px" />
          </q-item-section>
          <q-item-section avatar v-if="scope.opt.type === 'user'">
            <q-icon name="account_circle" size="32px" />
          </q-item-section>
          <q-item-section avatar v-if="scope.opt.type === 'team'">
            <q-icon name="group" size="32px" />
          </q-item-section>
          <q-item-section avatar v-if="scope.opt.type === 'order'">
            <q-icon name="shopping_cart" size="32px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ scope.opt.label }}</q-item-label>
            <q-item-label caption>{{ scope.opt.sublabel }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const keyword = ref()
const loading = ref()
const results = ref()
const router = useRouter()

interface SearchResultModel {
  value: number,
  type: string,
  label: string,
  sublabel?: string
}

const doNav = (model: SearchResultModel, type: string) => {
  if (type === 'contractor') {
    router.push({ name: 'contractor-dashboard', params: { id: model.value } }).catch()
  }
  if (type === 'team') {
    router.push({ name: 'team-dashboard', params: { id: model.value } }).catch()
  }
  if (type === 'order') {
    router.push({ name: 'order-edit', params: { id: model.value } }).catch()
  }
  keyword.value = null
  loading.value = false
}

const search = async (update: (fn: () => void) => void, searchKeyword: string) => {
  loading.value = true
  const result = await api.post('/search', { keyword: searchKeyword })
  if (result.data.length === 1) {
    doNav(result.data[0], result.data[0].type)
    return true
  }
  if (update) {
    update(() => {
      results.value = result.data
      loading.value = false
    })
  }
}

const filter = (val: string, update: (fn: () => void) => void) => {
  if (val.length < 2) {
    return false
  }
  search(update, val)
}

const handleChange = (newVal: SearchResultModel) => {
  doNav(newVal, newVal.type)
  keyword.value = null
}
</script>
