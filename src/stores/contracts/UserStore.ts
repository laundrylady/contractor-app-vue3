import { Moment } from 'moment-timezone'

export interface UserStore {
  id:number,
  email:number,
  lastRequest: Moment,
  timezone:string,
  lat:string,
  lng:string,
  avatar:string,
  tfa_ok:boolean,
  tfa_method:string|null,
  role:string,
  mobile:string
}
