<template>
  <div v-for="(o, oIndex) in travelTime.origin_addresses" :key="oIndex">
    <q-icon name="place" /> Origin: {{ o }}
  </div>
  <div v-for="(d, dIndex) in travelTime.destination_addresses" :key="dIndex">
    <q-icon name="place" /> Desination: {{ d }}
  </div>
  <div v-for="(r, rIndex) in travelTime.rows" :key="rIndex">
    <div v-for="(e, eIndex) in r.elements" :key="eIndex">
      <div><q-icon name="map" /> Distance: {{ e.distance.text }}</div>
      <div><q-icon name="local_taxi" /> Travel time: {{ e.duration.text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TravelTime } from '../models'

interface Props {
  travelTime: TravelTime
}
defineProps<Props>()
</script>
