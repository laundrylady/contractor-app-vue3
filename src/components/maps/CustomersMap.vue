<template>
  <div>
    <div class="q-pb-sm row q-col-gutter-md">
      <div class="col-xs-12 col-sm-4">
        <q-input v-model="search.keyword" placeholder="Keyword search" outlined dense clearable>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 col-sm-6">
        <PostcodeRegionGroupField v-model="search.postcode_region_group_id" label="Choose an area" :outlined="true"
          :dense="true" class="q-mb-md" />
      </div>
      <div class="col-xs-12 col-sm-2">
        <q-btn @click="getCustomers()" icon="search" color="primary"
          :disable="loading || (!search.keyword && !search.postcode_region_group_id)" />
      </div>
    </div>
    <div class="q-pa-md text-center" v-if="(!data || !data.length) && !loading">
      <NoRecords />
    </div>
    <div style="height:400px;">
      <GMapMap :center="center" :zoom="4" map-type-id="terrain" style="width: 100%; height: 650px" ref="mapRef"
        v-if="markers && markers.length">
        <GMapCluster>
          <GMapMarker :position="m.position" :clickable="true" :draggable="false" @click="toggleInfoWindow(m, index)"
            v-for="(m, index) in
                                                                                                                                  markers"
            :key="index">
            <GMapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="currentMidx === index" />
          </GMapMarker>
        </GMapCluster>
      </GmapMap>
    </div>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { PostcodeRegion } from 'src/components/models'
import { useMixinDebug } from 'src/mixins/debug'
import { reactive, ref } from 'vue'
import PostcodeRegionGroupField from '../form/PostcodeRegionGroupField.vue'
import NoRecords from '../NoRecords.vue'

const loading = ref(false)
const data = ref()
const search = reactive({ keyword: null, postcode_region_group_id: null })
const markers = ref()
const center = reactive({
  lat: -26.6851157,
  lng: 153.1074659
})
const infoWindowPos = ref()
const currentMidx = ref()
const infoOptions = reactive({
  content: '',
  pixelOffset: {
    width: 0,
    height: 0
  }
})

interface MarkerObjModel {
  name: string,
  address2: string,
  suburbpostcoderegion: PostcodeRegion
}

interface MarkerObjPosition {
  lat: string,
  lng: string
}

interface MarkerObj {
  lat: string,
  lng: string,
  name: string,
  model: MarkerObjModel,
  position: MarkerObjPosition
}

const getMarkers = () => {
  markers.value = []
  data.value.forEach((obj: MarkerObj) => {
    if (obj.lat && obj.lng) {
      markers.value.push({
        position: {
          lat: parseFloat(obj.lat), lng: parseFloat(obj.lng)
        },
        model: obj,
        infoText: obj.name
      })
    }
  })
  if (markers.value.length === 1) {
    Object.assign(center, markers.value[0].position)
  }
  loading.value = false
}

const getInfoWindowContent = (marker: MarkerObj) => {
  const html =
    `<div class="text-h5">${marker.model.name}</div><p>${marker.model.address2} ${marker.model.suburbpostcoderegion.locality} ${marker.model.suburbpostcoderegion.state} ${marker.model.suburbpostcoderegion.postcode}</p>`
  return html
}

const toggleInfoWindow = (marker: MarkerObj, idx: number) => {
  infoWindowPos.value = marker.position
  infoOptions.content = getInfoWindowContent(marker)
  currentMidx.value = idx
}

const getCustomers = () => {
  loading.value = true
  api.post('/team/map', { keyword: search.keyword, postcode_region_group_id: search.postcode_region_group_id }).then(response => {
    data.value = response.data
    getMarkers()
  }).catch(error => {
    useMixinDebug(error)
    loading.value = false
  })
}
</script>
