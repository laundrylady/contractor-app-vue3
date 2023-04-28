import { LooseObject } from 'src/contracts/LooseObject'

export interface Note {
  id?:number,
  notable_type:string,
  notable_id:number,
  note:string
}

export interface Attachment {
  id?:number,
  attachable_type:string,
  attachment_id:number
  file_file_name:string,
  type:string,
  name:string,
  expiry_date:string
}

export interface Notification {
  id?:number,
  notifiable_type:string,
  notifiable_id:number
  html_content:string,
  to:string,
  sent:boolean,
  errors:object,
  subject:string,
  from:string,
  created_at: string,
  updated_at: string,
  amazon_ses_status:string
}

export interface PostcodeRegion {
  id:number,
  locality:string,
  state:string,
  postcode:string,
  lat:string,
  long:string,
  label?:string,
  sa4?:string
}

export interface UserRosterPostcodeRegion {
  id:number,
  locality:string,
  state:string,
  postcode:string,
  lat:string,
  long:string,
  meta: {
    pivot_lat:string,
    pivot_lng:string
  }
}

export interface UserPostcodeRegionGroup {
  id:number,
  name:string,
  postcoderegions:PostcodeRegion[]
}

export interface Country {
  id:number,
  name:string,
  code:string
}

export interface AddressSearchItem {
  id:number,
  flat_type?:string,
  flat_number_prefix?:string,
  flat_number?:string,
  flat_number_suffix?:string,
  number_first_prefix?:string,
  number_first?:string,
  number_first_suffix?:string,
  number_last_prefix?:string,
  number_last?:string,
  number_last_suffix?:string,
  street_name:string,
  street_type_code:string,
  locality_name:string,
  state_abbreviation:string,
  postcode:string,
  latitude:string,
  longitude:string,
  suburb_postcode_region_id:number,
  country_id:number
}

export interface User {
  id: number,
  role:string,
  email:string|null,
  first_name:string,
  last_name:string,
  fullname:string,
  avatar:string,
  timezone:string,
  country_id: number,
  dateofbirth: string,
  mobile: number,
  address1?:string,
  address2:string,
  suburb_postcode_region_id:number,
  contractor_status: string,
  contractor_vaccinated: string,
  contractor_car_licence: string,
  contractor_equipment: string,
  contractor_description:string,
  contractor_badge_name:string,
  contractor_iron_type:string,
  contractor_washing_machine_type:string,
  contractor_car_type:string,
  contractor_current_work_situation:string,
  contractor_hours_per_week:string,
  contractor_referral_type:string,
  contractor_insurance_expiry:string,
  contractor_clothing_rack:string,
  contractor_smartphone_type:string,
  contractor_computer_type:string,
  contractor_ironing_steam_station:string,
  contractor_washing_machine_dryer:string,
  contractor_relevant_experience:string,
  contractor_target:number,
  enabled:boolean,
  postcoderegions?:PostcodeRegion,
  sms_notifications:boolean,
  email_notifications:boolean,
  postcoderegionsuburb?:PostcodeRegion,
  contractor_commission_rate:number,
  lat?:string,
  lng?:string,
  feed?:LooseObject[],
  selected?:boolean,
  contractor_gst_registered:boolean,
  current_team_id?:number
}

export interface ContractorForm {
  id: number,
  email:string|null,
  first_name:string,
  last_name:string,
  fullname:string,
  avatar:string,
  timezone:string,
  country_id: number,
  dateofbirth: string,
  mobile: number,
  address1?:string,
  address2:string,
  suburb_postcode_region_id:number,
  enabled:boolean,
  postcoderegions?:number[],
  sms_notifications:boolean,
  email_notifications:boolean,
  // contractor
  first_name_2:string,
  last_name_2:string,
  contractor_status: string,
  contractor_vaccinated: string,
  contractor_car_licence: string,
  contractor_equipment: string,
  contractor_description:string,
  contractor_badge_name: string,
  contractor_start_date: string,
  contractor_abn:string,
  contractor_abn_verified: boolean,
  contractor_ec_first_name:string,
  contractor_ec_last_name:string,
  contractor_ec_phone:string,
  contractor_ec_relationship:string,
  contractor_ref_first_name:string,
  contractor_ref_last_name:string,
  contractor_ref_email:string,
  contractor_ref_phone:string,
  contractor_ref2_first_name:string,
  contractor_ref2_last_name:string,
  contractor_ref2_email:string,
  contractor_ref2_phone:string,
  contractor_gst_registered:boolean,
  contractor_bd_name:string,
  contractor_bd_bank:string,
  contractor_bd_bsb:string,
  contractor_bd_number:string,
  contractor_commission_rate:number,
  contractor_target:number,
  contractor_why_join:string,
  contractor_relevant_experience:string,
  contractor_referral_type:string,
  contractor_current_work_situation:string,
  contractor_hours_per_week:string,
  contractor_iron_type:string,
  contractor_washing_machine_type:string,
  contractor_car_type:string,
  contractor_clothing_rack:string,
  contractor_smartphone_type:string,
  contractor_computer_type:string,
  contractor_ironing_steam_station:string,
  contractor_washing_machine_dryer:string,
  contractor_insurance_expiry:string
}

export interface ContractorApplyNowForm {
  email:string|null,
  first_name:string,
  last_name:string,
  timezone:string,
  suburb_postcode_region_id:number,
  // contractor
  contractor_car_licence: boolean,
  contractor_equipment: boolean,
  contractor_why_join:string,
  contractor_referral_type:string,
}

export interface ContractorApplicationForm {
  first_name: string|null,
  last_name: string|null,
  first_name_2: string|null,
  last_name_2: string|null,
  contractor_badge_name:string|null,
  contractor_start_date: string|null,
  dateofbirth: string|null,
  address1: string|null,
  address2: string|null,
  suburb_postcode_region_id: number|null,
  country_id: number|null,
  contractor_ec_first_name: string|null,
  contractor_ec_last_name: string|null,
  contractor_ec_phone: string|null,
  contractor_ec_relationship: string|null,
  contractor_ref_first_name: string|null,
  contractor_ref_last_name: string|null,
  contractor_ref_email: string|null,
  contractor_ref_phone: string|null,
  contractor_ref2_first_name: string|null,
  contractor_ref2_last_name: string|null,
  contractor_ref2_email: string|null,
  contractor_ref2_phone: string|null,
  contractor_abn: string|null,
  contractor_gst_registered: boolean,
  contractor_bd_name: string|null,
  contractor_bd_bank: string|null,
  contractor_bd_bsb: string|null,
  contractor_bd_number: string|null,
  contractor_clothing_rack: string|null,
  contractor_smartphone_type: string|null,
  contractor_computer_type: string|null,
  contractor_ironing_steam_station: string|null,
  contractor_washing_machine_dryer: string|null,
  contractor_declaration_agreement: boolean,
  contractor_declaration_training: boolean,
  contractor_declaration_abn: boolean,
  contractor_declaration_pl: boolean,
  contractor_declaration_inform: boolean,
  contractor_declaration_kit: boolean,
  contractor_declaration_information: boolean,
  contractor_applicant_1_sig:string|null,
  contractor_applicant_2_sig:string|null,
  documents:Attachment[],
  avatar:string|null
}

export interface TeamUser {
  id:number,
  user:User,
  role:string,
  user_id:number,
  team_id:number
}

export interface Team {
  id: number,
  type:string,
  status:string,
  first_name:string,
  last_name:string,
  name:string,
  email:string,
  mobile:string,
  ndis:boolean,
  ndis_number:string,
  ndis_type:string,
  aged_care_client_number:string,
  finance_phone:string,
  finance_email:string,
  other_phone:string,
  pickup_instructions?:string,
  atl:boolean,
  address1?:string,
  address2:string,
  suburb_postcode_region_id:string,
  suburbpostcoderegion: PostcodeRegion,
  country_id:number,
  postal_address1?:string,
  postal_address2:string,
  postal_suburb_postcode_region_id:string,
  postalsuburbpostcoderegion: PostcodeRegion,
  postal_country_id:number,
  users?:TeamUser[],
  created_at:string,
  updated_at:string,
  lat:string,
  lng:string,
  feed:LooseObject[],
  ndis_plan_manager_email:string,
  ndis_support_coordinator_email:string,
  ndis_plan_start:string,
  ndis_plan_end:string,
  ndis_line_item:boolean,
  ndis_funds:boolean,
  ndis_funds_inform:boolean,
  ndis_payment:string,
  ndis_signing_name:string,
  contractors?:User[],
  invoice_name:string,
  invoice_po:string,
  invoice_address1:string,
  invoice_address2:string,
  invoice_address_suburb_postcode_region_id:number,
  invoice_address_country_id:number
}

export interface TeamForm {
  id:number,
  type: string,
  status:string,
  name: string,
  abn: string,
  abn_verified:boolean,
  first_name: string,
  last_name: string,
  email: string,
  mobile: string,
  ndis: boolean,
  ndis_number: string,
  ndis_type: string,
  aged_care_client_number: string,
  finance_phone: string,
  finance_email: string,
  other_phone: string,
  pickup_instructions: string,
  atl: boolean,
  address1: string,
  address2: string,
  suburb_postcode_region_id: number,
  country_id: number,
  lat: string,
  lng: string,
  postal_address1: string,
  postal_address2: string,
  postal_suburb_postcode_region_id: number,
  postal_country_id: number,
  postal_lat: string,
  postal_lng: string,
  payment_terms: string,
  owing_no_booking: boolean,
  ndis_plan_manager_email:string,
  ndis_support_coordinator_email:string,
  ndis_plan_start:string,
  ndis_plan_end:string,
  ndis_line_item:boolean,
  ndis_funds:boolean,
  ndis_funds_inform:boolean,
  ndis_payment:string,
  ndis_signing_name:string,
  invoice_name:string,
  invoice_po:string,
  invoice_address1:string,
  invoice_address2:string,
  invoice_address_suburb_postcode_region_id:number,
  invoice_address_country_id:number
}

export interface TeamInvite {
  id:number,
  team_id:number,
  user_id:number,
  email:string,
  first_name:string,
  last_name:string,
  role:string,
  invitee_user_id:number,
  team_role:string,
  status:string,
  latestMail: Notification,
  invitee: User
}

export interface Customer {
  id: number,
  name:string,
  postcoderegionsuburb: PostcodeRegion,
  country_id:number
  ndis_number:string,
  mobile:string,
  email:string,
  address1?:string,
  address2:string,
  suburb_postcode_region_id:string
}

export interface ProductCategory {
  id: number,
  name:string,
  icon:string,
  meta?:LooseObject
}

export interface OrderProductCategory {
  id?: number,
  product_category_id:number,
  order_id?:number,
  active?:boolean,
  name?:string,
  meta?:LooseObject,
  productcategory?:ProductCategory,
  icon?:string
}

export interface Product {
  id: number,
  name:string,
  icon:string,
  unit_cost:number,
  unit_price:number,
  unit_minimum:number,
  unit_measurement:string,
  tax:boolean,
  product_category_id:number,
  productcategory:ProductCategory
}

export interface OrderProduct {
  id?:number,
  qty:number,
  name:string,
  product:Product,
  product_id:number,
  price:number,
  cost:number,
  tax:boolean,
  notes:string
}

export interface OrderPayment {
  id:number,
  order_id:string,
  user_id:string,
  stripe_id:string,
  total:number,
  gst:number,
  grand_total:number,
  created_at:string,
  user:User
}

export interface Order {
  id:string,
  contractor_user_id:number|null,
  display_id:number,
  grand_total_price:number,
  total_price:number,
  total_price_gst:number,
  team: Team,
  products: OrderProduct[],
  contractor: User,
  team_id:number,
  status:string,
  recurring_order:boolean,
  recurring:string,
  recurring_parent_id:string|null,
  address1:string,
  address2:string,
  suburbpostcoderegion:PostcodeRegion,
  country:Country
  lat:string,
  lng:string,
  created_at:string,
  updated_at:string,
  scheduled_pickup_date:string,
  scheduled_pickup_time:string,
  agreed_pickup_time:string|null,
  payments:OrderPayment[],
  xero_id:string,
  productcategories: OrderProductCategory[],
  invoice_address1:string,
  invoice_address2:string,
  invoiceaddresssuburbpostcoderegion:PostcodeRegion,
  invoiceaddresscountry:Country,
  invoice_address_suburb_postcode_region_id:number,
  invoice_address_country_id:number,
  invoice_name:string|null,
  invoice_po:string|null,
  commission_paid_amount:number|null,
  commission_paid_amount_gst:number|null
}

export interface OrderForm {
  id:string,
  display_id?:number|null,
  contractor_user_id: number|null,
  team_id:number|null,
  status:string,
  scheduled_pickup_date:string|null,
  scheduled_pickup_time:string|null,
  special_instructions:string|null,
  recurring_order:boolean,
  recurring:string|null,
  products:OrderProduct[],
  invoice_address1:string,
  invoice_address2:string,
  invoice_address_suburb_postcode_region_id:number,
  invoice_address_country_id:number,
  invoice_name:string|null,
  invoice_po:string|null
}

export interface NotificationTemplate {
  id:number,
  name:string,
  subject:string,
  content:string,
  team_id?:number,
  user_id?:number
}

export interface UserRoster {
  id:number|null,
  user_id:number|null,
  day:number|null,
  start_time:number|null,
  end_time:number|null,
  active:boolean|null,
  user_postcoderegion_group_id:number|null,
  user: User|null,
  capacity: LooseObject,
  approved?:boolean
}

export interface UserRosterSchedule {
  id:number|null,
  user_id:number|null,
  day:string|null,
  start_time:number|null,
  end_time:number|null,
  active:boolean|null,
  user_postcoderegion_group_id:number|null,
  user: User|null,
  capacity: LooseObject
}

export interface SmsTemplate {
  id:number,
  name:string,
  content:string
}

export interface XeroContact {
  name:string
}

export interface XeroLineItem {
  lineItemID:string,
  quantity:number,
  description:number,
  lineAmount:number,
  taxAmount:number
}

export interface XeroInvoice {
  invoiceID:string,
  invoiceNumber:string
  status:string,
  reference:string,
  contact: XeroContact,
  date:string,
  dueDate:string,
  lineItems:XeroLineItem[],
  subTotal:number,
  totalTax:number,
  total:number,
  amountPaid:number,
  amountDue:number
}

export interface MapMarker {
  latLng:LooseObject,
  id:number,
  model?:LooseObject
}

export interface SelectOption {
  label:string,
  value:number|string|LooseObject,
  icon?:string
}

export interface EventObj {
  id:number,
  day:Date,
  weekday:number,
  start_time:number,
  end_time:number,
  duration: number
}

export interface PostcodeRegionGroupPostcodeRegion {
  id:number,
  locality:string,
  state:string,
  postcode:string,
  lat:string,
  long:string,
  meta: {
    pivot_lat:string,
    pivot_lng:string
  }
}

export interface PostcodeRegionGroup {
  id?:number|null,
  name:string|null,
  approved?:boolean,
  postcoderegions: PostcodeRegionGroupPostcodeRegion[]|null
}

export interface TravelTime {
  destination_addresses: string[],
  origin_addresses: string[],
  rows:LooseObject[]
}

export interface Breadcrumbs {
  to?:LooseObject,
  label:string
}
