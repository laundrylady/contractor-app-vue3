<template>
  <q-linear-progress indeterminate v-if="loading" />
  <div>
    <div v-if="!loading && (!roster || !roster.length)" class="q-mb-md">
      No schedule found.
    </div>
  </div>
  <div v-if="roster && roster.length">
    <q-card style="min-height:200px">
      <div v-for="(r, ri) in roster" :key="r.key">
        <q-list separator>
          <q-item-label header class="text-h6 q-pb-none text-black">{{ dayDisplay(parseFloat(r.key))
          }}</q-item-label>
          <q-item v-for="rr in r.data" :key="rr.id">
            <q-item-section>
              <div class="flex items-center">
                <q-icon name="check_circle" v-if="rr.active" color="positive" class="q-mr-sm" />
                <div class="q-mr-lg text-bold">
                  {{ hourDisplay(rr.start_time) }} to {{ hourDisplay(rr.end_time) }} ({{
                    durationDisplay(rr.duration)
                  }})
                </div>
                <div v-for="(c, cindex) in rr.capacity.products" :key="cindex" class="q-mr-md text-grey text-bold">
                  <q-icon :name="categoryIcon(c.product_category_id, categories)" /> {{ c.qty }}
                </div>
              </div>
              <div><q-icon name="place" class="q-mr-sm" />Pickup locations: {{ rr.postcoderegiongroup.name }}</div>
              <div v-if="rr.postcoderegiongroup && rr.postcoderegiongroup.postcoderegions" class="text-grey-7 q-mr-md">
                <span v-for="(p, index) in rr.postcoderegiongroup.postcoderegions" :key="p.id" style="font-size:13px;">
                  {{ p.locality }}{{ index + 1 !== rr.postcoderegiongroup.postcoderegions.length ? ', ' : '' }}</span>
              </div>
              <div>
                <q-btn @click="rr.showMap = !rr.showMap" label="View Map" rounded class="q-mb-md q-mt-sm" color="primary"
                  flat no-caps />
                <map-with-marker-multiple
                  :lat-lng="rr.postcoderegiongroup.postcoderegions.map((o: any) => { return { lat: parseFloat(o.meta.pivot_lat), lng: parseFloat(o.meta.pivot_lng) } })"
                  v-if="rr.showMap" />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
        <q-separator class="q-mb-sm" v-if="(ri + 1) !== roster.length" />
      </div>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios'
import { useMixinDebug } from 'src/mixins/debug'
import { categoryIcon, dayDisplay, durationDisplay, groupBy, hourDisplay } from 'src/mixins/help'
import { productCategoriesVisibleCapacity } from 'src/services/helpers'
import { onMounted, ref } from 'vue'
import MapWithMarkerMultiple from '../maps/MapWithMarkerMultiple.vue'

const roster = ref()
const categories = ref()
const loading = ref(false)

const getRoster = () => {
  loading.value = true
  api.get('/public/userroster/index').then(response => {
    roster.value = groupBy(response.data, 'day')
    loading.value = false
  }).catch(error => {
    useMixinDebug(error)
    loading.value = false
  })
}

onMounted(async () => {
  // product categories
  categories.value = await productCategoriesVisibleCapacity()
  // roster
  getRoster()
})
</script>
