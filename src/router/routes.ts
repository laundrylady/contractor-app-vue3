import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // Auth
  {
    name: 'signIn',
    path: '/auth/signin',
    component: () => import('src/pages/auth/SignIn.vue'),
    meta: { title: 'Sign In' }
  },
  {
    name: 'passwordResetRequest',
    path: '/auth/password/reset/request',
    component: () => import('src/pages/auth/PasswordResetRequest.vue'),
    meta: { title: 'Password Reset Request' }
  },
  {
    name: 'passwordResetProcess',
    path: '/auth/password/reset/process/:code',
    component: () => import('src/pages/auth/PasswordResetProcess.vue'),
    meta: { title: 'Password Reset Request' }
  },
  // CONTRACTOR
  {
    name: 'applyNow',
    path: '/apply-now',
    component: () => import('src/pages/contractor/ApplyNow.vue'),
    meta: { title: 'Join the team' }
  },
  {
    name: 'application',
    path: '/application/:id',
    component: () => import('src/pages/contractor/ApplicationForm.vue'),
    meta: { title: 'Contractor Application' }
  }, {
    name: 'contractorActivate',
    path: '/contractor/onboarding/activate/:code',
    component: () => import('src/pages/auth/ContractorActivate.vue'),
    meta: { title: 'Activation' }
  },
  // SURVEY
  {
    name: 'monthly-survery',
    path: '/contractor/survey/monthly/:id',
    component: () => import('src/pages/contractor/MonthlySurvey.vue'),
    meta: { title: 'Monthly Survey' }
  },
  // TFA SETUP
  {
    name: 'tfaSetup',
    path: '/auth/tfa/setup',
    component: () => import('src/pages/auth/TfaSetup.vue'),
    meta: { title: 'Multifactor Authentication', auth: true }
  },
  // TFA SMS
  {
    name: 'tfaSms',
    path: '/auth/tfa/sms',
    component: () => import('src/pages/auth/TfaSms.vue'),
    meta: { title: 'Multifactor Authentication', auth: true }
  },
  // App
  {
    path: '/',
    name: 'appLayout',
    component: () => import('layouts/AppLayout.vue'),
    meta: { auth: true },
    children: [
      {
        name: 'appDashboard',
        path: '',
        component: () => import('pages/AppDashboard.vue'),
        meta: { auth: true, title: 'Home' }
      },
      // Contractors
      {
        name: 'contractor-home',
        path: '/contractor/home/:id',
        component: () => import('pages/contractor/ContractorHome.vue'),
        meta: { auth: true },
        children: [
          {
            name: 'contractor-dashboard',
            path: '/contractor/dashboard/:id',
            component: () => import('pages/contractor/ContractorDashboard.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-roster',
            path: '/contractor/roster/:id',
            component: () => import('pages/contractor/ContractorRoster.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-edit',
            path: '/contractor/edit/:id',
            component: () => import('pages/contractor/ContractorEdit.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-orders',
            path: '/contractor/bookings/:id',
            component: () => import('pages/contractor/ContractorOrders.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-documents',
            path: '/contractor/documents/:id',
            component: () => import('pages/contractor/ContractorDocuments.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-audit',
            path: '/contractor/audit/:id',
            component: () => import('pages/contractor/ContractorAudit.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-sms',
            path: '/contractor/sms/:id',
            component: () => import('pages/contractor/ContractorSms.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-notifications',
            path: '/contractor/notification/:id',
            component: () => import('pages/contractor/ContractorNotification.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-postcoderegion-groups',
            path: '/contractor/suburbgroups/:id',
            component: () => import('pages/contractor/ContractorPostcodeRegionGroup.vue'),
            meta: { auth: true }
          }
        ]
      },
      // Teams
      {
        name: 'team-home',
        path: '/customer/home/:id',
        component: () => import('pages/team/TeamHome.vue'),
        meta: { auth: true, title: 'Customers' },
        children: [
          {
            name: 'team-dashboard',
            path: '/customer/dashboard/:id',
            component: () => import('pages/team/TeamDashboard.vue'),
            meta: { auth: true }
          },
          {
            name: 'team-orders',
            path: '/customer/bookings/:id',
            component: () => import('pages/team/TeamOrders.vue'),
            meta: { auth: true }
          },
          {
            name: 'team-edit',
            path: '/customer/edit/:id',
            component: () => import('pages/team/TeamEdit.vue'),
            meta: { auth: true }
          },
          {
            name: 'team-documents',
            path: '/customer/documents/:id',
            component: () => import('pages/team/TeamDocuments.vue'),
            meta: { auth: true }
          },
          {
            name: 'team-sms',
            path: '/customer/sms/:id',
            component: () => import('pages/team/TeamSms.vue'),
            meta: { auth: true }
          },
          {
            name: 'team-notifications',
            path: '/customer/notifications/:id',
            component: () => import('pages/team/TeamNotifications.vue'),
            meta: { auth: true }
          },
          {
            name: 'team-audit',
            path: '/customer/audit/:id',
            component: () => import('pages/team/TeamAudit.vue'),
            meta: { auth: true }
          },
          {
            name: 'team-users',
            path: '/customer/users/:id',
            component: () => import('pages/team/TeamUsers.vue'),
            meta: { auth: true }
          }
        ]
      },
      // SMS Log
      {
        name: 'smsLog',
        path: '/sms/log',
        component: () => import('src/pages/sms/SmsLog.vue'),
        meta: { auth: true, title: 'SMS Log' }
      },
      // Reporting
      {
        name: 'reporting',
        path: '/reporting',
        component: () => import('src/pages/AppReporting.vue'),
        meta: { auth: true, title: 'Reporting' }
      },
      // Reporting - Contractor - Commissions Owing
      {
        name: 'reporting-contractor-commissions-owing',
        path: '/reporting/contractor/commissions/owing',
        component: () => import('src/pages/contractor/reporting/CommissionsOwing.vue'),
        meta: { auth: true, title: 'Reporting' }
      },
      // Reporting - Contractor - Commissions Paid
      {
        name: 'reporting-contractor-commissions-paid',
        path: '/reporting/contractor/commissions/paid',
        component: () => import('src/pages/contractor/reporting/CommissionsPaid.vue'),
        meta: { auth: true, title: 'Reporting' }
      },
      // Reporting - Contractor - Commissions Overview
      {
        name: 'reporting-contractor-commissions-overview',
        path: '/reporting/contractor/commissions/overview',
        component: () => import('src/pages/contractor/reporting/CommissionsOverview.vue'),
        meta: { auth: true, title: 'Reporting' }
      },
      // Reporting - Order - Order Overview
      {
        name: 'reporting-order-overview',
        path: '/reporting/order/overview',
        component: () => import('src/pages/order/reporting/OrderOverview.vue'),
        meta: { auth: true, title: 'Reporting' }
      },
      // User Roster Scheduler
      {
        name: 'userrosterscheduler',
        path: '/scheduler',
        component: () => import('src/pages/userrosterschedule/UserRosterScheduler.vue'),
        meta: { auth: true, title: 'Scheduler' }
      },
      // Order Booking Manager
      {
        name: 'bookingmanager',
        path: '/bookingmanager',
        component: () => import('src/pages/order/OrderBookingManager.vue'),
        meta: { auth: true, title: 'Booking Manager' }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/error404',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
