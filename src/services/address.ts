import { AddressSearchItem } from 'src/components/models'
import { LooseObject } from 'src/contracts/LooseObject'

const addressPopulate = (item:AddressSearchItem, model:LooseObject|undefined, address1:string, address2:string, suburbPostcodeRegionId:string, lat:string, lng:string, countryId:string) => {
  if (!model) {
    return
  }
  if (item.flat_number && item.flat_number !== '') {
    // eslint-disable-next-line
    if (item.flat_type) {
      model[address1] = item.flat_type
    }
    model[address1] = model[address1] ? `${model[address1]} ${item.flat_number_prefix || ''}${item.flat_number}${item.flat_number_suffix || ''}` : `${item.flat_number_prefix || ''}${item.flat_number}${item.flat_number_suffix || ''}`
  } else {
    // eslint-disable-next-line
    model[address1] = ''
  }
  if (item.number_first && item.number_first !== '') {
    // eslint-disable-next-line
    model[address2] = `${item.number_first_prefix || ''}${item.number_first}${item.number_first_suffix || ''}`
    if (item.number_last) {
      model[address2] += `-${item.number_last_prefix || ''}${item.number_last}${item.number_last_suffix || ''}`
    }
  } else {
    // eslint-disable-next-line
    model[address2] = ''
  }
  if (item.street_name && item.street_name !== '') {
    // eslint-disable-next-line
    model[address2] += ' ' + item.street_name
  }
  if (item.street_type_code && item.street_type_code !== '') {
    // eslint-disable-next-line
    model[address2] += ' ' + item.street_type_code
  }
  // lat
  if (lat && item.latitude) {
    // eslint-disable-next-line
    model[lat] = parseFloat(item.latitude)
  }
  // lng
  if (lng && item.longitude) {
    // eslint-disable-next-line
    model[lng] = parseFloat(item.longitude)
  }
  // suburb_postcode_region_id
  if (suburbPostcodeRegionId) {
    model[suburbPostcodeRegionId] = item.suburb_postcode_region_id
  }
  // country id
  if (countryId) {
    model[countryId] = item.country_id
  }
}
export { addressPopulate }
