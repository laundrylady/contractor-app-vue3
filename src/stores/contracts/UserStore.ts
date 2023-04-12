import { Moment } from 'moment-timezone'

export interface UserStore {
  id:number,
  email:number,
  lastRequest: Moment,
  timezone:string,
  lat:string,
  lng:string,
  avatar:string
}
