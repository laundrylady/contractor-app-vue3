import { b as boot } from "./index.e647c85a.js";
import { c as createI18n } from "./vue-i18n.runtime.esm-bundler.bec1d6a0.js";
var enUS = {
  failed: "Action failed",
  success: "Action was successful",
  details: "Details",
  payments: "Payments",
  audit: "Audit History",
  pricing: "Pricing",
  status: "Status",
  actions: {
    save: "Save",
    cancel: "Cancel",
    update: "Update"
  },
  settings: {
    label: "Settings",
    details: "Details",
    users: "Users"
  },
  asset: {
    details: "Details",
    create: "New Profile",
    edit: "Edit Profile",
    namePlural: "Profiles",
    name: "Profile",
    teamPlural: "Profiles"
  },
  contractor: {
    details: "Details",
    create: "New Contractor",
    edit: "Edit Contractor",
    namePlural: "Contractors",
    name: "Contractor",
    nameColumn: "Contractor Name",
    dateofbirth: "Date of Birth",
    vaccinated: "Fully vaccinated COVID-19",
    serviceAreas: "Service Areas",
    enabled: "Contractor can sign in",
    description: "Public profile",
    status: "Status",
    carLicence: "Reliable car and current drivers licence",
    equipment: "Equipment including steam station iron, washing machine, dryer, or willing to purchase these?",
    commissionRate: "Commission Rate %",
    startDate: "Start Date",
    badgeName: "Name on Badge",
    insuranceExpiry: "Insurance Expiry",
    abn: "ABN",
    application: { label: "Application Details" },
    ec: {
      label: "Emergency Contact",
      firstName: "Emergency Contact First Name",
      lastName: "Emergency Contact Last Name",
      phone: "Emergency Contact Phone",
      relationship: "Emergency Contact Relationship to you"
    },
    bd: {
      name: "Account Name",
      bank: "Bank / Financial Institution",
      bsb: "Branch / BSB Number",
      number: "Account Number",
      label: "Bank Account Details"
    },
    information: "Personal Information",
    addressDetails: "Address Details",
    target: "Weekly Target",
    financials: "Financials"
  },
  team: {
    dashboard: "Dashboard",
    details: "Details",
    create: "New Customer",
    edit: "Edit Customer",
    namePlural: "Customers",
    name: "Customer",
    nameColumn: "Customer Name",
    user: "User",
    userPlural: "Users",
    current: "Current Customer",
    type: "Customer Type",
    abn: "ABN",
    email: "Email Address",
    firstName: "First Name",
    lastName: "Last Name",
    teamName: "Organisation Name",
    agedCareClientNumber: "Client Number",
    ndisNumber: "NDIS Number",
    ndisType: "NDIS Type",
    information: "Account Information",
    pickupAddress: "Pickup Address",
    pickupInstructions: "Pickup Instructions",
    mobile: "Contact Mobile Number",
    atl: "Authority To Leave",
    paymentTerms: "Payment Method",
    owingNoBooking: "No new bookings if outstandings",
    ndis: "NDIS",
    ndisPlanManagerEmail: "Plan manager email",
    ndisSupportCoordinatorEmail: "Support co-ordinator email",
    ndisPlanStart: "Plan start date",
    ndisPlanEnd: "Plan end date",
    ndisPayment: "Invoicing",
    invoiceName: "Name on Invoice",
    invoicePo: "Purchase Order Number on Invoice",
    financial: "Invoice Configuration"
  },
  document: {
    name: "Document",
    namePlural: "Documents"
  },
  job: {
    name: "Job",
    namePlural: "Jobs"
  },
  product: {
    name: "Product",
    namePlural: "Products",
    create: "New Product",
    edit: "Edit Product"
  },
  productCategory: {
    name: "Product Category",
    namePlural: "Product Categories",
    create: "New Product Category",
    edit: "Edit Product Category"
  },
  order: {
    name: "Booking",
    namePlural: "Bookings",
    create: "New Booking",
    edit: "Edit Booking",
    orderDate: "Booking Date",
    id: "Booking ID",
    scheduledPickupDate: "Scheduled Pickup Date",
    scheduledPickupTime: "Pickup between",
    contractorUserId: "Select the contractor",
    status: "Booking Status",
    recurringFrequency: "Occurs every",
    recurring: "Recurring Booking?",
    details: "Booking Details",
    products: "Products",
    invoiceConfiguration: "Invoice Configuration",
    payments: "Payments"
  },
  photo: {
    name: "Photo",
    namePlural: "Photos"
  },
  medicalProvider: {
    name: "Provider",
    namePlural: "Providers"
  },
  address: {
    details: "Address Details",
    line1: "Unit, Level, Building Name",
    line2: "Street Number & Name",
    suburb: "Suburb",
    state: "State",
    postcode: "Postcode",
    country: "Country",
    search: "Search for an address"
  },
  integrations: {
    manage: "Manage Integrations"
  },
  schedule: {
    name: "Schedule",
    namePlural: "Schedule",
    create: "Add new entry"
  },
  roster: {
    name: "Roster",
    namePlural: "Rosters",
    create: "Add new entry"
  },
  postcodeRegionGroup: {
    name: "Suburb Group",
    namePlural: "Suburb Groups",
    create: "Create new Group"
  },
  scheduler: {
    name: "Scheduler"
  }
};
var messages = {
  "en-US": enUS
};
var i18n = boot(({ app }) => {
  const i18n2 = createI18n({
    locale: "en-US",
    legacy: false,
    messages
  });
  app.use(i18n2);
});
export { i18n as default };
