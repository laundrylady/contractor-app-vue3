<template>
  <div v-if="latLng">
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-8">
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-sm-6">
            <q-select v-model="selectedPostcodeRegionGroup" :options="postcodeRegionGroups" option-label="name"
              label="Load from group" @update:model-value="loadFromGroup" outlined clearable>
              <template v-slot:prepend>
                <q-icon name="place" />
              </template>
            </q-select>
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-select label="Search for a suburb" v-model="keyword" @update:model-value="selectKeywordPostcode"
              :options="postcodes" @filter="filterPostcodes" use-input emit-value map-options :dark="dark"
              :color="dark ? 'white' : ''" :error="invalid" hide-dropdown-icon input-debounce="350"
              autocomplete="postcode-filter" outlined :disable="disabled" use-chips ref="qSelectPostcodeRegion"
              :borderless="borderless" :dense="dense" class="q-pb-none" :filled="filled" :loading="loading"
              :multiple="multiple" :placeholder="placeholder" option-label="label">
              <template v-slot:prepend>
                <q-icon name="place" color="info" />
              </template>
              <template v-slot:loading>
                <q-spinner v-if="loading" />
              </template>
            </q-select>
          </div>
        </div>
        <div v-if="currentSuggestions.length" class="q-pt-sm q-pb-sm">
          <span class="text-bold">Suggestions:</span> <q-btn outline size="sm" v-for="(c, ci) in currentSuggestions"
            :key="ci" :label="`${c.locality} (${c.state})`" @click="addFromSuggestion(c)"
            class="cursor-pointer q-mr-sm q-mb-sm" color="grey" /><q-btn @click="addAllSuggestions()" color="primary"
            label="Add all" icon="add_circle" size="sm" class="q-mb-sm" />
        </div>
        <q-btn @click="showMap = !showMap" label="Show map" color="primary" flat icon="public"
          v-if="modelValue && modelValue.length" />
        <div v-if="showMap">
          <p class="q-mt-md"><q-icon name="info" /> Click a suburb on the map to add it to the selected suburbs.</p>
          <GMapMap :center="center" :zoom="realZoom" map-type-id="terrain" style="width: 100%; height: 450px"
            ref="mapRefMarker" @click="logMap">
            <GMapMarker :position="m.latLng" :key="index" :clickable="true" :draggable="false" @click="center = latLng"
              v-for="(m, index) in markers" />
          </GMapMap>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4">
        <div v-if="!modelValue || !modelValue.length">No suburbs selected.</div>
        <div v-if="modelValue && modelValue.length" style="max-height:600px;overflow-x:none;overflow-y:auto;"
          class="bg-grey-1 q-pa-sm">
          <div class="text-bold">Selected ({{ modelValue.length }}):</div>
          <div>
            <q-badge :label="`${p.locality} (${p.state} ${p.postcode})`"
              v-for="p in sortByKey(modelValue, 'locality', 'asc')" :key="p.id" class="q-mr-sm q-mb-sm" color="grey-2"
              text-color="black">
              <q-btn icon="close" @click="removePostcodeRegion(p)" size="sm" round dense flat class="q-ml-xs" />
            </q-badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { sortByKey } from 'src/mixins/help'
import { onMounted, ref, watch, computed } from 'vue'
import { MapMarker, PostcodeRegion } from '../models'

interface Props {
  modelValue?: LooseObject[] | null,
  invalid?: boolean,
  label?: string,
  dark?: boolean,
  outlined?: boolean,
  disabled?: boolean,
  multiple?: boolean
  dense?: boolean,
  borderless?: boolean,
  filled?: boolean,
  placeholder?: string,
  nowatch?: boolean,
  state?: string,
  latLng: LooseObject,
  zoom?: number,
  showMap?: boolean,
  suggestionId?: number
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const showMap = ref(false)
const selectedPostcodeRegionGroup = ref()
const realZoom = ref()
const mapRefMarker = ref<HTMLDivElement>()
const googleObject = ref()
const markers = ref<MapMarker[]>([])
const center = ref()
const loading = ref(false)
const postcodeRegionGroups = ref()
const suggestions = ref()
const keyword = ref()
const postcodes = ref()

const logMap = (event: LooseObject) => {
  if (googleObject.value && !loading.value) {
    const geoCoder = new googleObject.value.maps.Geocoder()
    loading.value = true
    geoCoder.geocode({
      latLng: event.latLng
    }, function (results: LooseObject[], status: string) {
      if (status === 'OK') {
        if (results[0]) {
          const suburb = results[0].address_components.find((o: LooseObject) => o.types.indexOf('locality') !== -1).long_name
          const state = results[0].address_components.find((o: LooseObject) => o.types.indexOf('administrative_area_level_1') !== -1).short_name
          if (suburb && state) {
            api.get(`/public/postcoderegion/index?keyword=${suburb}&state=${state}`).then(response => {
              if (response.data.length && (!props.modelValue || !props.modelValue.find(o => o.id === response.data[0].id))) {
                markers.value.push({ latLng: { lat: event.latLng.lat(), lng: event.latLng.lng() }, id: response.data[0].id })
                updateModelValue({
                  id: response.data[0].id,
                  locality: response.data[0].locality,
                  state: response.data[0].state,
                  postcode: response.data[0].postcode,
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng()
                })
              }
              loading.value = false
            }).catch(error => {
              useMixinDebug(error)
              loading.value = false
            })
          }
        }
      }
    })
  }
}

const updateModelValue = (postcodeRegion: LooseObject) => {
  let currentModelValue = JSON.parse(JSON.stringify(props.modelValue))
  if (currentModelValue) {
    currentModelValue.push({
      id: postcodeRegion.id,
      locality: postcodeRegion.locality,
      state: postcodeRegion.state,
      postcode: postcodeRegion.postcode,
      meta: {
        pivot_lat: postcodeRegion.lat,
        pivot_lng: postcodeRegion.lng
      }
    })
  } else {
    currentModelValue = [{
      id: postcodeRegion.id,
      locality: postcodeRegion.locality,
      state: postcodeRegion.state,
      postcode: postcodeRegion.postcode,
      meta: {
        pivot_lat: postcodeRegion.lat,
        pivot_lng: postcodeRegion.lng
      }
    }]
  }
  emits('update:modelValue', currentModelValue)
}

const removePostcodeRegion = (p: LooseObject) => {
  let currentModelValue = JSON.parse(JSON.stringify(props.modelValue))
  currentModelValue = currentModelValue.filter((o: LooseObject) => o.id !== p.id)
  markers.value = markers.value.filter(o => o.id !== p.id)
  emits('update:modelValue', currentModelValue)
}

const loadFromGroup = () => {
  if (!selectedPostcodeRegionGroup.value) {
    return false
  }
  for (const p of selectedPostcodeRegionGroup.value.postcoderegions) {
    if (!props.modelValue || !props.modelValue.find(o => o.id === p.id)) {
      setTimeout(() => {
        updateModelValue({
          id: p.id,
          locality: p.locality,
          state: p.state,
          postcode: p.postcode,
          lat: p.meta.pivot_lat,
          lng: p.meta.pivot_lng
        })
        markers.value.push({ latLng: { lat: parseFloat(p.meta.pivot_lat), lng: parseFloat(p.meta.pivot_lng) }, id: p.id })
      }, 1)
    }
  }
  // set center
  setTimeout(() => {
    if (markers.value) {
      center.value = markers.value[0].latLng
    }
  }, 1)
  realZoom.value = 12
}

const currentSuggestions = computed(() => {
  if (!suggestions.value || !suggestions.value.length || !props.modelValue) {
    return []
  }
  const currentModelValue = JSON.parse(JSON.stringify(props.modelValue))
  const cmv = currentModelValue.map((o: LooseObject) => o.id)
  return suggestions.value.filter((o: LooseObject) => cmv.indexOf(o.id) === -1)
})

const addFromSuggestion = (p: PostcodeRegion) => {
  if (!props.modelValue || !props.modelValue.find(o => o.id === p.id)) {
    setTimeout(() => {
      updateModelValue({
        id: p.id,
        locality: p.locality,
        state: p.state,
        postcode: p.postcode,
        lat: p.lat,
        lng: p.long
      })
      markers.value.push({ latLng: { lat: parseFloat(p.lat), lng: parseFloat(p.long) }, id: p.id })
    }, 1)
  }
}

const addAllSuggestions = () => {
  for (const p of currentSuggestions.value) {
    if (!props.modelValue || !props.modelValue.find(o => o.id === p.id)) {
      setTimeout(() => {
        updateModelValue({
          id: p.id,
          locality: p.locality,
          state: p.state,
          postcode: p.postcode,
          lat: p.lat,
          lng: p.long
        })
        markers.value.push({ latLng: { lat: parseFloat(p.lat), lng: parseFloat(p.long) }, id: p.id })
      }, 1)
    }
  }
}

watch(mapRefMarker, (googleMap: LooseObject) => {
  if (googleMap) {
    googleMap.$mapPromise.then(() => {
      googleObject.value = window.google
    })
  }
})

watch(() => props.modelValue, (newVal) => {
  if ((!newVal || !newVal.length) && !markers.value) {
    markers.value = []
  }
})

const filterPostcodes = (val: string, update: (fn: () => void) => void) => {
  if (val.length < 2) {
    return
  }
  loading.value = true
  api.get(`/public/postcoderegion/index?keyword=${val}${props.state ? `&state=${props.state}` : ''}`).then(response => {
    update(() => {
      postcodes.value = response.data.map((o: PostcodeRegion) => {
        o.label = `${o.locality} (${o.state} ${o.postcode} - ${o.sa4})`
        return o
      })
      loading.value = false
    })
  }).catch(error => {
    loading.value = false
    useMixinDebug(error)
  })
}

const selectKeywordPostcode = (p: PostcodeRegion) => {
  if (!props.modelValue || !props.modelValue.find(o => o.id === p.id)) {
    setTimeout(() => {
      updateModelValue({
        id: p.id,
        locality: p.locality,
        state: p.state,
        postcode: p.postcode,
        lat: p.lat,
        lng: p.long
      })
      markers.value.push({ latLng: { lat: parseFloat(p.lat), lng: parseFloat(p.long) }, id: p.id })
      center.value = { lat: parseFloat(p.lat), lng: parseFloat(p.long) }
    }, 1)
  }
  keyword.value = null
}

onMounted(() => {
  showMap.value = props.showMap || false
  realZoom.value = props.zoom || 11
  center.value = props.latLng
  api.get(`/postcoderegiongroup/index?state=${props.state || ''}`).then(response => {
    postcodeRegionGroups.value = response.data
  }).catch(error => {
    useMixinDebug(error)
  })
  if (props.modelValue) {
    for (const p of props.modelValue) {
      markers.value.push({
        latLng: { lat: parseFloat(p.meta.pivot_lat), lng: parseFloat(p.meta.pivot_lng) },
        id: p.id
      })
      if (markers.value && markers.value.length) {
        center.value = markers.value[0].latLng
        realZoom.value = 11
      }
    }
  }
  if (props.suggestionId) {
    api.get(`/public/postcoderegion/localitiesbydc/${props.suggestionId}`).then(response => {
      suggestions.value = response.data
    }).catch(error => {
      useMixinDebug(error)
    })
  }
})
</script>
