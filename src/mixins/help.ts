import _ from 'lodash'
import moment from 'moment-timezone'
import { Notify, Dialog, Platform } from 'quasar'
import { SelectOption } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'

const getCookie = (cname:string) => {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

// consts
const rowsPerPageOptions = [5, 10, 15, 25, 50]

const stateOptions = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA']

const uploadConfig = {
  url: '/api/public/upload',
  headers: [{ name: 'X-XSRF-TOKEN', value: getCookie('XSRF-TOKEN') }],
  images: 'image/jpeg,image/png,image/webp',
  documents: 'image/jpeg,.pdf',
  fieldName: 'file',
  'max-file-size': 5000000
}

const dayOptions = [
  { value: 1, label: 'Monday' },
  { value: 2, label: 'Tuesday' },
  { value: 3, label: 'Wednesday' },
  { value: 4, label: 'Thursday' },
  { value: 5, label: 'Friday' },
  { value: 6, label: 'Saturday' },
  { value: 7, label: 'Sunday' }
]

const hourOptions = [
  { value: 5, label: '5am' },
  { value: 6, label: '6am' },
  { value: 7, label: '7am' },
  { value: 8, label: '8am' },
  { value: 9, label: '9am' },
  { value: 10, label: '10am' },
  { value: 11, label: '11am' },
  { value: 12, label: '12pm' },
  { value: 13, label: '1pm' },
  { value: 14, label: '2pm' },
  { value: 15, label: '3pm' },
  { value: 16, label: '4pm' },
  { value: 17, label: '5pm' },
  { value: 18, label: '6pm' },
  { value: 19, label: '7pm' },
  { value: 20, label: '8pm' },
  { value: 21, label: '9pm' },
  { value: 22, label: '10pm' }
]

const hourBookingOptions = [
  { value: '5-6', label: '5am - 6am' },
  { value: '6-7', label: '6am - 7am' },
  { value: '7-8', label: '7am - 8am' },
  { value: '8-9', label: '8am - 9am' },
  { value: '9-10', label: '9am - 10am' },
  { value: '10-11', label: '10am - 11am' },
  { value: '11-12', label: '11am - 12pm' },
  { value: '12-13', label: '12pm - 1pm' },
  { value: '13-14', label: '1pm - 2pm' },
  { value: '14-15', label: '2pm - 3pm' },
  { value: '15-16', label: '3pm - 4pm' },
  { value: '16-17', label: '4pm - 5pm' },
  { value: '17-18', label: '5pm - 6pm' },
  { value: '18-19', label: '6pm - 7pm' },
  { value: '19-20', label: '7pm - 8pm' },
  { value: '20-21', label: '8pm - 9pm' },
  { value: '21-22', label: '9pm - 10pm' }
]

const globalStatusList = [
  { value: 'draft', label: 'Draft' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
  { value: 'paid', label: 'Paid' }
]

const dayDisplay = (val:number) => {
  return dayOptions.find(o => o.value === val)?.label
}

const hourDisplay = (val:number) => {
  return hourOptions.find(o => o.value === val)?.label
}

const twelveHourDisplay = (val:number) => {
  if (val > 12) {
    return val - 12
  }
  return val
}

const hourBookingDisplay = (val:string) => {
  if (!val) {
    return val
  }
  const vx = val.split('-')
  let start:string
  let end:string
  if (parseFloat(vx[0]) >= 12) {
    start = `${parseFloat(vx[0]) - 12 || 12}pm`
  } else {
    start = `${vx[0]}am`
  }
  if (parseFloat(vx[1]) >= 12) {
    end = `${parseFloat(vx[1]) - 12 || 12}pm`
  } else {
    end = `${vx[1]}am`
  }
  return `${start} - ${end}`
}

const hourAgreedDisplay = (val:string) => {
  if (!val) {
    return val
  }
  const [hour, minute] = val.split(':')
  if (parseFloat(hour) < 12) {
    return `${hour}:${minute}am`
  }
  return `${parseFloat(hour) === 12 ? hour : parseFloat(hour) - 12}:${minute}pm`
}

const durationDisplay = (val:number) => {
  const hours = Math.round(val / 60)
  return `${hours} ${hours > 1 ? 'hours' : 'hour'}`
}

// functions
const doNotify = (type:string, message:string) => {
  Notify.create({
    type,
    message
  })
}

const getRowsPerPage = () => {
  const rpp = localStorage.getItem('rowsPerPage')
  if (rpp) {
    return parseFloat(rpp)
  }
  return 15
}

const setRowsPerPage = (pages:number) => {
  localStorage.setItem('rowsPerPage', pages.toString())
}

const fromNowDate = (val:string) => {
  if (val === moment().format('DD/MM/YYYY')) {
    return 'today'
  }
  return moment(val, 'DD/MM/YYYY').fromNow()
}

const fromNowTz = (val:string) => {
  return moment.tz(moment(val).subtract(1, 'seconds'), moment.tz.guess()).fromNow()
}

const dateTimeTz = (val:string) => {
  if (!val) {
    return
  }
  return moment.tz(val, moment.tz.guess()).format('DD/MM/YYYY HH:mm:ss')
}

const dateTz = (val:string) => {
  if (!val) {
    return
  }
  return moment.tz(val, moment.tz.guess()).format('DD/MM/YYYY')
}

const dbDateDisplay = (val:string, format = 'DD/MM/YYYY') => {
  if (!val) {
    return
  }
  return moment(val).format(format)
}

const dbDateDisplayDay = (val:string, format = 'dddd') => {
  if (!val) {
    return
  }
  return moment(val).format(format)
}

const displayDateDay = (val:string) => {
  return moment(val, 'DD/MM/YYYY').format('ddd')
}

const dbDate = (val:string) => {
  if (!val) {
    return val
  }
  return moment(val, 'DD/MM/YYYY').format('YYYY-MM-DD')
}

const groupBy = (data:unknown[], key:string) => {
  return _.chain(data)
    .groupBy(key)
    .map((value:unknown, key:string) => ({ key, data: value }))
    .value()
}

const sortByKey = (arr:LooseObject[], key:string, direction = 'desc', keyType = 'date') => {
  let firstVal = 1
  let secondVal = -1
  if (direction === 'desc') {
    firstVal = -1
    secondVal = 1
  }
  arr.sort((a, b) => {
    if (keyType === 'date') {
      return _.get(a, key) > _.get(b, key) ? firstVal : secondVal
    }
    if (keyType === 'dateDisplay') {
      return moment(_.get(a, key), 'DD/MM/YYYY').isAfter(moment(_.get(b, key), 'DD/MM/YYYY')) ? firstVal : secondVal
    }
    if (keyType === 'number') {
      return parseFloat(_.get(a, key)) > parseFloat(_.get(b, key)) ? firstVal : secondVal
    }
    return _.get(a, key) > _.get(b, key) ? firstVal : secondVal
  })
  return arr
}

const getTimeZones = () => {
  const data = []
  for (const t of moment.tz.names()) {
    data.push({ label: t, value: t })
  }
  return data
}

const getDateRange = (val:string) => {
  if (val === 't') {
    return { start: moment().format('DD/MM/YYYY'), end: moment().format('DD/MM/YYYY') }
  }
  if (val === 'w') {
    return { start: moment().startOf('isoWeek').format('DD/MM/YYYY'), end: moment().endOf('isoWeek').format('DD/MM/YYYY') }
  }
  if (val === 'm') {
    return { start: moment().startOf('month').format('DD/MM/YYYY'), end: moment().endOf('month').format('DD/MM/YYYY') }
  }
  if (val === 'y') {
    return { start: moment().startOf('year').format('DD/MM/YYYY'), end: moment().endOf('year').format('DD/MM/YYYY') }
  }
  return { start: moment().format('DD/MM/YYYY'), end: moment().format('DD/MM/YYYY') }
}

const awsSesStatus = (val:string) => {
  if (val === 'Send') {
    return 'Sent'
  }
  if (val === 'Delivery') {
    return 'Delivered'
  }
  if (val === 'Open') {
    return 'Opened'
  }
  if (val === 'Bounce') {
    return 'Failed'
  }
  if (val === 'Click') {
    return 'Clicked'
  }
  return val
}

const confirmDelete = (message:string) => {
  return Dialog.create({
    title: 'Are you sure?',
    message,
    ok: {
      color: 'primary',
      rounded: true
    },
    cancel: {
      color: 'secondary',
      flat: true,
      rounded: true
    }
  })
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

const currencyFormat = (val:number) => {
  return currencyFormatter.format(val)
}

const categoryDisplay = (cat: number, categories:SelectOption[]) => {
  const found = categories.find((o: SelectOption) => o.value === cat)
  return found ? found.label : ''
}

const categoryIcon = (cat: number, categories:SelectOption[]) => {
  const found = categories.find((o: SelectOption) => o.value === cat)
  return found ? found.icon : ''
}

const valOrNs = (val:string|number|null) => {
  if (!val) {
    return 'Not Specified'
  }
  return val
}

const openMapLink = (lat:string, lng:string, type = 'google') => {
  let url
  if (type === 'google') {
    url = `maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${lat},${lng}`
  }
  if (type === 'apple') {
    url = `maps://maps.apple.com/?q=${lat},${lng}`
  }
  if (Platform.is.desktop) {
    url = url?.replace('maps:', 'https:')
  }
  window.open(url)
}

export {
  rowsPerPageOptions,
  uploadConfig,
  stateOptions,
  dayOptions,
  hourOptions,
  hourBookingOptions,
  globalStatusList,
  doNotify,
  confirmDelete,
  getRowsPerPage,
  setRowsPerPage,
  fromNowDate,
  fromNowTz,
  dateTimeTz,
  dateTz,
  getTimeZones,
  getDateRange,
  sortByKey,
  groupBy,
  awsSesStatus,
  dayDisplay,
  hourDisplay,
  twelveHourDisplay,
  hourBookingDisplay,
  hourAgreedDisplay,
  durationDisplay,
  dbDateDisplay,
  dbDateDisplayDay,
  displayDateDay,
  dbDate,
  currencyFormat,
  categoryDisplay,
  categoryIcon,
  valOrNs,
  openMapLink
}
