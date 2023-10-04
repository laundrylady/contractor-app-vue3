import { api } from 'src/boot/axios'
import { Order } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinDebug } from 'src/mixins/debug'

export const getLocationPromise = ():Promise<LooseObject> => {
  return new Promise(function (resolve) {
    console.log(navigator)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location => {
        resolve({ lat: location.coords.latitude, lng: location.coords.longitude })
      })
    } else {
      resolve({ lat: null, lng: null })
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
  // sort out the lat lng
  const currentLoc = await getLocationPromise()
  let latLng:LooseObject = { lat: null, lng: null }
  if (currentLoc.lat && currentLoc.lng) {
    latLng = { lat: currentLoc.lat, lng: currentLoc.lng }
  } else {
    latLng = { lat: o.contractor.lat, lng: o.contractor.lng }
  }
  // fire off
  return api.post(`/public/order/traveltime/${o.id}`, { origin: latLng }).then(response => {
    return { id: o.id, data: response.data }
  }).catch(error => {
    useMixinDebug(error)
  })
}
