<template>
  <UserRosterEdit />
  <q-linear-progress indeterminate v-if="loading" />
  <div>
    <div v-if="!loading && (!roster || !roster.length)" class="q-mb-md">
      No roster found.
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
                <div class="q-mr-lg">
                  {{ hourDisplay(rr.start_time) }} to {{ hourDisplay(rr.end_time) }} ({{
                    durationDisplay(rr.duration)
                  }})
                </div>
                <div v-if="rr.postcoderegiongroup && rr.postcoderegiongroup.postcoderegions" class="text-grey q-mr-md">
                  <q-icon name="place" /> {{
                    rr.postcoderegiongroup.postcoderegions.length }}
                </div>
                <div v-for="(c, cindex) in rr.capacity.products" :key="cindex" class="q-mr-md text-grey">
                  <q-icon :name="categoryIcon(c.product_category_id, categories)" /> {{ c.qty }}
                </div>
              </div>
            </q-item-section>
            <q-item-section side>
              <div>
                <q-btn @click="editRoster(rr.id)" icon="edit" flat class="q-mr-xs" />
                <q-btn @click="removeRoster(rr.id)" icon="delete" flat />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
        <q-separator class="q-mb-sm" v-if="(ri + 1) !== roster.length" />
      </div>
    </q-card>
  </div>
  <div class="q-mt-md" v-if="!loading && (!userpostcoderegiongroups || userpostcoderegiongroups.length === 0)">
    <router-link :to="{ name: 'contractor-postcoderegion-groups', params: { id: user.id } }" class="link"><q-icon
        name="warning" /> Please configure the pickup locations before creating the roster.</router-link>
  </div>
  <div class="q-mt-md" v-if="!showNew">
    <q-btn @click="showNew = true" label="Add roster entry" color="primary"
      v-if="userpostcoderegiongroups && userpostcoderegiongroups.length" />
  </div>
  <q-card class="q-mt-lg" v-if="showNew">
    <q-card-section>
      <div class="text-h6 q-mb-sm">Add a new roster entry</div>
      <div class="row q-col-gutter-md">
        <q-select v-model="newRoster.user_postcoderegion_group_id" label="Select the pickup area"
          :options="userpostcoderegiongroups" map-options emit-value :error="$v.user_postcoderegion_group_id.$invalid"
          filled class="col-xs-12 col-sm-6" />
        <q-select v-model="newRoster.day" outlined :options="dayOptions" map-options emit-value label="Days" multiple
          class="col-xs-12 col-md-6">
          <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
            <q-item v-bind="itemProps">
              <q-item-section>
                <q-item-label>{{ opt.label }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-6">
          <div class="q-mb-sm">Start and end times</div>
          <div class="row q-col-gutter-md">
            <q-select v-model="newRoster.start_time" outlined dense :options="hourOptions" map-options emit-value
              label="Start Time" options-cover class="col-xs-12 col-sm-12 col-md-6" />
            <q-select v-model="newRoster.end_time" outlined dense :options="endHourOptions(newRoster.start_time)"
              map-options emit-value label="End Time" options-cover class="col-xs-12 col-sm-12 col-md-6" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="q-mb-sm">Capacity for this timeslot:</div>
          <div v-if="newRoster.capacity.products" class="row q-col-gutter-md">
            <div v-for="(c, cindex) in newRoster.capacity.products" :key="cindex" class="col-xs-12 col-sm-6">
              <q-input v-model="c.qty" outlined dense :label="categoryDisplay(c.product_category_id, categories)"
                options-cover @blur="checkQty(c)" class="q-mb-md" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="errors">
        <ul>
          <li v-for="(e, index) in errors.errors" :key="index" class="text-negative">
            {{ e.message }}</li>
        </ul>
      </div>
      <div class="q-mt-lg">
        <q-btn @click="addRoster()" :disable="$v.$invalid || loading" icon="add_circle" label="Add Roster" color="primary"
          class="full-width" :loading="loading" />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { EventBus } from 'quasar'
import { api } from 'src/boot/axios'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'
import { categoryDisplay, categoryIcon, confirmDelete, dayDisplay, dayOptions, durationDisplay, groupBy, hourDisplay, hourOptions } from 'src/mixins/help'
import { productCategoriesVisibleCapacity } from 'src/services/helpers'
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { User, UserPostcodeRegionGroup } from '../models'
import UserRosterEdit from './UserRosterEdit.vue'

interface Props {
  user: User
}
const props = defineProps<Props>()
const bus = inject('bus') as EventBus
const showNew = ref(false)
const errors = ref()
const roster = ref()
const categories = ref()
const userpostcoderegiongroups = ref()
const loading = ref(false)
const schema = {
  user_id: props.user.id,
  day: [],
  start_time: null,
  end_time: null,
  active: true,
  user_postcoderegion_group_id: null,
  capacity: { products: [] }
}
const newRoster = reactive(JSON.parse(JSON.stringify(schema)))
const rules = {
  user_id: { required },
  day: { required },
  start_time: { required },
  end_time: { required },
  user_postcoderegion_group_id: { required },
  capacity: { products: { required } }
}
const $v = useVuelidate(rules, newRoster, { $scope: false })

const addRoster = () => {
  errors.value = false
  loading.value = true
  api.post('/userroster', newRoster).then(() => {
    getRoster()
    Object.assign(newRoster, JSON.parse(JSON.stringify(schema)))
    loading.value = false
    showNew.value = false
  }).catch(error => {
    loading.value = false
    errors.value = error.response.data
    useMixinDebug(error)
  })
}

const removeRoster = (id: number) => {
  confirmDelete('Remove this roster entry?').onOk(() => {
    api.delete(`/userroster/${id}`).then(() => {
      getRoster()
    }).catch(error => {
      useMixinDebug(error)
    })
  })
}

const getRoster = () => {
  loading.value = true
  api.get(`/userroster/index?user_id=${props.user.id}`).then(response => {
    roster.value = groupBy(response.data, 'day')
    loading.value = false
  }).catch(error => {
    useMixinDebug(error)
    loading.value = false
  })
}

const editRoster = (id: number) => {
  bus.emit('editRoster', id)
}

const endHourOptions = (hour: number | null) => {
  if (!hour) {
    return hourOptions
  }
  return hourOptions.filter(o => o.value > hour && o.value <= hour + 3)
}

const checkQty = (val: LooseObject) => {
  if (!val.qty) {
    val.qty = 0
  }
}

onMounted(async () => {
  // product categories
  categories.value = await productCategoriesVisibleCapacity()
  for (const c of categories.value) {
    newRoster.capacity.products.push({ product_category_id: c.value, qty: 0 })
  }
  // postcode region groups
  api.get(`/userpostcoderegiongroup/index/${props.user.id}`).then(response => {
    userpostcoderegiongroups.value = response.data.map((o: UserPostcodeRegionGroup) => {
      return { value: o.id, label: `${o.name} (${o.postcoderegions.length} suburbs)` }
    })
  }).catch(error => {
    useMixinDebug(error)
  })
  // roster
  getRoster()
  bus.on('getRoster', () => {
    getRoster()
  })
})

onBeforeUnmount(() => {
  bus.off('getRoster')
})
</script>
