import { api } from 'src/boot/axios'
import { Order } from 'src/components/models'
import { useMixinDebug } from 'src/mixins/debug'

const getLocationPromise = () => {
  return new Promise(function (resolve) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location => {
        resolve({ lat: location.coords.latitude, lng: location.coords.longitude })
      })
    } else {
      resolve({ lat: -26.606107, lng: 152.9340755 })
    }
  })
}

export const getCurrentLocation = async () => {
  const latLng = await getLocationPromise()
  return latLng
}

export const getPostcodeRegionGroups = async () => {
  const groups = sessionStorage.getItem('postcodeRegionGroups')
  if (groups) {
    return JSON.parse(groups)
  }
  return api.get('/postcoderegiongroup/index').then(response => {
    sessionStorage.setItem('postcodeRegionGroups', JSON.stringify(response.data))
    return response.data
  }).catch(error => {
    useMixinDebug(error)
  })
}

export const getTravelTime = async (o: Order) => {
  return api.post(`/order/traveltime/${o.id}`, { origin: { lat: o.contractor.lat, lng: o.contractor.lng } }).then(response => {
    return { id: o.id, data: response.data }
  }).catch(error => {
    useMixinDebug(error)
  })
}
