import { api } from 'src/boot/axios'
import { OrderProductCategory, ProductCategory } from 'src/components/models'

export const productCategoriesVisibleBooking = async () => {
  return api.get('/public/productcategory/index?visible_booking=true').then(response => {
    return response.data.map((o:ProductCategory) => { return { value: o.id, label: o.name, icon: o.icon } })
  })
}

export const productCategoriesVisibleCapacity = async () => {
  return api.get('/public/productcategory/index?visible_capacity=true').then(response => {
    return response.data.map((o:ProductCategory) => { return { value: o.id, label: o.name, icon: o.icon } })
  })
}

export const orderColor = (productCategories: OrderProductCategory[]) => {
  const colorMap = [
    { ids: [1, 2], color: 'primary' },
    { ids: [1], color: 'info' },
    { ids: [2], color: 'warning' }
  ]
  const activeCategories = productCategories.filter(o => o.meta && o.meta.pivot_active).map(o => o.id)
  const found = colorMap.find(o => {
    let valid = true
    for (const i of o.ids) {
      if (activeCategories.indexOf(i) === -1) {
        valid = false
      }
    }
    return valid
  })
  if (found) {
    return found.color
  }
  return 'grey'
}
