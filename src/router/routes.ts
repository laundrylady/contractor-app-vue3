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
  // GIFT VOUCHER
  {
    name: 'giftVoucherPurchase',
    path: '/gift-vouchers/purchase',
    component: () => import('src/pages/giftvoucher/GiftVoucherCreate.vue'),
    meta: { title: 'Gift Vouchers' }
  },
  {
    name: 'giftVoucherSuccess',
    path: '/gift-vouchers/success',
    component: () => import('src/pages/giftvoucher/GiftVoucherSuccess.vue'),
    meta: { title: 'Gift Vouchers' }
  },
  {
    name: 'giftVoucherCancel',
    path: '/gift-vouchers/cancel',
    component: () => import('src/pages/giftvoucher/GiftVoucherCancel.vue'),
    meta: { title: 'Gift Vouchers' }
  },
  // INVOICE PAYMENT
  {
    name: 'invoicePaymentBankAccountDetails',
    path: '/refund/updateba/:id',
    component: () => import('src/pages/invoicepayment/UpdateBa.vue'),
    meta: { title: 'Bank Account Details Update' }
  },
  // SURVEY
  {
    name: 'monthly-survery',
    path: '/contractor/survey/monthly/:id',
    component: () => import('src/pages/contractor/MonthlySurvey.vue'),
    meta: { title: 'Monthly Survey' }
  },
  // ORDERS PUBLIC
  {
    name: 'orders-new',
    path: '/booking/new',
    component: () => import('src/pages/order/OrderNew.vue')
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
        path: '/contractor/home',
        component: () => import('pages/contractor/ContractorHome.vue'),
        meta: { auth: true },
        children: [
          {
            name: 'contractor-dashboard',
            path: '/contractor/dashboard',
            component: () => import('pages/contractor/ContractorDashboard.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-schedule',
            path: '/contractor/schedule',
            component: () => import('pages/contractor/ContractorSchedule.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-edit',
            path: '/contractor/edit',
            component: () => import('pages/contractor/ContractorEdit.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-orders',
            path: '/contractor/bookings',
            component: () => import('pages/contractor/ContractorOrders.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-documents',
            path: '/contractor/documents',
            component: () => import('pages/contractor/ContractorDocuments.vue'),
            meta: { auth: true }
          },
          {
            name: 'contractor-commission-paid',
            path: '/contractor/commissions/paid',
            component: () => import('pages/contractor/ContractorCommissionsPaid.vue'),
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
      // ORDERS
      {
        name: 'orders',
        path: '/booking/management/:team_id?',
        component: () => import('src/pages/order/OrderManagement.vue'),
        meta: { auth: true }
      },
      {
        name: 'order-calendar',
        path: '/booking/calendar',
        component: () => import('src/pages/order/OrderCalendar.vue'),
        meta: { auth: true }
      },
      {
        name: 'order-home',
        path: '/booking/home/:id',
        component: () => import('src/pages/order/OrderHome.vue'),
        meta: { auth: true },
        children: [
          {
            name: 'order-edit',
            path: '/booking/edit/:id',
            component: () => import('pages/order/OrderEdit.vue'),
            meta: { auth: true }
          }
        ]
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
