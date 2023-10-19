import { defineStore } from 'pinia'
import { CommonStore } from './contracts/CommonStore'

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      // for data that is not yet loaded
      data: null as CommonStore | null
    }
  },
  actions: {
    setCommonData (data:CommonStore) {
      this.data = data
    }
  }
})
