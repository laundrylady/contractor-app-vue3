<template>
  <div>
    <q-markup-table dense separator="cell" flat>
      <thead>
        <tr>
          <th></th>
          <th v-for="(h, hindex) in hourOptions" :key="hindex">
            {{ h.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d, dindex) in dayOptions" :key="dindex">
          <td> {{ d.label.slice(0, 1) }}</td>
          <td v-for="(h, hindex) in hourOptions" :key="hindex" :class="{ 'bg-positive': isActive(h.value, d.value) }">
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { UserRoster } from 'src/components/models'
import { useMixinDebug } from 'src/mixins/debug'
import { dayOptions, hourOptions } from 'src/mixins/help'
import { onMounted, ref } from 'vue'

const roster = ref<UserRoster[]>()

const isActive = (h: number, d: number) => {
  if (!roster.value) {
    return false
  }
  return roster.value.find((o: UserRoster) => {
    if (o.start_time && o.end_time) {
      return o.day === d && h >= o.start_time && h <= o.end_time
    }
    return false
  })
}

onMounted(() => {
  api.get('/public/userroster/index').then(response => {
    roster.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
})
</script>
