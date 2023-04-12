import { defineStore } from 'pinia'
import { UserStore } from './contracts/UserStore'
import { Moment } from 'moment-timezone'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // for data that is not yet loaded
      data: null as UserStore | null
    }
  },
  actions: {
    setUserData (data:UserStore) {
      this.data = data
    },
    setLastRequest (data:Moment) {
      if (this.data) {
        this.data.lastRequest = data
      }
    }
  }
})
