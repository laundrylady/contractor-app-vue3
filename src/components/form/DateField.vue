<template>
  <q-input :filled="filled" :outlined="outlined" :model-value="modelValue" mask="##/##/####" :error="invalid"
    :label="label" error-message="DD/MM/YYYY" hint="DD/MM/YYYY" @update:model-value="handleChange" @blur="checkDate()">
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale" ref="qDateProxy">
          <q-date :model-value="modelValue" @update:model-value="fromCalendar" mask="DD/MM/YYYY" color="secondary"
            :options="minDate">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
<script setup lang="ts">
import moment from 'moment-timezone'
import { QPopupProxy, useQuasar } from 'quasar'
import { ref } from 'vue'

interface Props {
  label?: string
  placeholder?: string
  invalid?: boolean
  modelValue: string | null,
  fdc?: boolean,
  disabled?: boolean,
  dark?: boolean,
  previous?: string,
  after?: string,
  samePrevious?: string,
  borderless?: boolean,
  outlined?: boolean,
  hint?: string,
  year?: number,
  filled?: boolean,
  max?: string
}

const $q = useQuasar()
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])
const hintCurrent = ref()
const qDateProxy = ref<QPopupProxy>()

const minDate = (date: string) => {
  const compareDate = moment(date, 'YYYY/MM/DD')
  let can = true
  if (props.fdc) {
    if (compareDate.isBefore(moment())) {
      can = false
    }
  }
  if (props.max) {
    if (compareDate.isAfter(moment(props.max))) {
      can = false
    }
  }
  return can
}

const fromCalendar = (val: string) => {
  if (qDateProxy.value) {
    qDateProxy.value.hide()
  }
  emits('update:modelValue', val)
}

const handleChange = (val: string | null | number) => {
  emits('update:modelValue', val)
}

const checkDate = () => {
  hintCurrent.value = false
  if (props.modelValue) {
    let dateStr = props.modelValue
    dateStr = dateStr.replace('/', '')
    dateStr = dateStr.replace('/', '')
    dateStr = dateStr.replace(/\D/g, '')
    dateStr = dateStr.replace(' ', '')
    if (dateStr.length < 6) {
      emits('update:modelValue', null)
      hintCurrent.value = 'Please enter a valid date'
    } else {
      const dFm = dateStr
      const dFd = dateStr
      const dFy = dateStr
      let dSday = dFd.slice(0, 2)
      dSday += '/'
      let dSmonth = dFm.slice(2, 4)
      dSmonth += '/'
      let dSyear = dFy.slice(4, 8)
      // Now we check the year to see if it is only 2 digis, if is, add 2 more
      if (dSyear.length !== 4) {
        dSyear = dSyear.slice(0, 2)
        if (props.year) {
          dSyear = props.year + dSyear
        } else {
          dSyear = `20${dSyear}`
        }
      }
      const newDateStr = dSday + dSmonth + dSyear
      if (newDateStr && !newDateStr.match('undefined')) {
        // check if the date can be made into an object
        const mNewDateStr = moment(newDateStr, 'DD/MM/YYYY')
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        if (mNewDateStr.isValid()) {
          // check if future date
          let validDate = true
          let hint = null
          // future date
          if (props.fdc) {
            if (!mNewDateStr.isAfter(today) && !mNewDateStr.isSame(today)) {
              validDate = false
              $q.dialog({
                title: 'Invalid date',
                message: `Please enter a date on or after ${props.after}`
              })
            }
          }
          // after a certain date
          if (props.after) {
            if (!mNewDateStr.isSameOrAfter(moment(props.after, 'DD/MM/YYYY'))) {
              validDate = false
              hint = `Please enter a date on or after ${props.after}`
            }
          }
          // previous date
          if (props.previous) {
            if (mNewDateStr.isAfter(today)) {
              validDate = false
              hint = 'Please enter a previous date'
            }
          }
          // same or previous date
          if (props.samePrevious) {
            if (!mNewDateStr.endOf('day').isSameOrBefore(moment(today).endOf('day'))) {
              validDate = false
              hint = 'Please enter a previous date'
            }
          }
          hintCurrent.value = hint
          if (validDate) {
            emits('update:modelValue', newDateStr)
          } else {
            emits('update:modelValue', null)
          }
        } else {
          emits('update:modelValue', null)
          hintCurrent.value = 'Please enter a valid date'
        }
      }
    }
  }
}

</script>
