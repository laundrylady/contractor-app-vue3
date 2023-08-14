<template>
  <div v-if="latLng && center">
    <GMapMap :center="latLng" :zoom="15" map-type-id="terrain" :style="style" ref="mapRefMarker">
      <GMapMarker :position="latLng" :clickable="true" :draggable="false" @click="center = latLng"
        :icon="{ url: 'https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?text=P&size=32&background=cf1677&color=FFF&hoffset=-1' }" />
    </GMapMap>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  latLng: { lat: number, lng: number },
  height?: string
}
const props = defineProps<Props>()
const mapRefMarker = ref<HTMLDivElement>()
const center = ref()
const style = `width:100%;height:${props.height || '300px'};border-radius:12px;`

onMounted(() => {
  center.value = props.latLng
})

</script>
