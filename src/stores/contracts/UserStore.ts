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
  mobile:string,
  first_name:string,
  last_name:string,
  contractor_badge_name:string,
  updated_at?:string
}
