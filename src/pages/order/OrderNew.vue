<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent v-if="!iframed" />
    <q-page-container>
      <q-page :padding="!iframed" :class="{ 'q-pa-md': $q.screen.xs && !iframed }" v-if="loaded">
        <div class="row q-mt-xl q-mb-lg" v-if="!iframed">
          <div class="col-xs-12 col-md-6 offset-md-3 text-center">
            <AppLogo />
          </div>
        </div>
        <div class="row text-lg q-mb-lg" v-if="!iframed">
          <div class="col-xs-12 col-md-6 offset-md-3 text-center">
            Book your mobile Laundry service. Washing, Ironing, Pickup and Delivery.
          </div>
        </div>
        <div class=" row q-col-gutter-md">
          <div class="col-xs-12 col-md-6 offset-md-3">
            <q-card flat class="bg-page q-mb-md" v-if="step !== 6 && model.scheduled_pickup_date">
              <q-card-section>
                <OrderNewSummary :suburb_postcode_region_id="model.suburb_postcode_region_id"
                  :contractor_user_id="model.contractor_user_id" :scheduled_pickup_date="model.scheduled_pickup_date"
                  :scheduled_pickup_time="model.scheduled_pickup_time" :productcategories="model.productcategories"
                  :categories="categories" v-if="categories && model.suburb_postcode_region_id" />
              </q-card-section>
            </q-card>
            <q-card flat class="bg-page">
              <q-card-section v-if="step === 1">
                <div class="q-mb-lg flex justify-center" v-if="tokenTeams && tokenTeams.length > 1">
                  <q-select v-model="tokenTeamsSelect" label="Select the customer record"
                    :options="tokenTeams.map((o: Team) => { return { label: o.name, value: o.id } })" outlined
                    style="width:400px;" @update:model-value="selectTokenTeam(tokenTeamsSelect)" map-options
                    emit-value />
                </div>
                <div class="q-mb-lg flex justify-center" v-if="tokenError">
                  <div>
                    <div class="text-red q-mb-md" v-if="!tokenError.emailSent">There was an issue with the customer
                      token:
                      {{ tokenError.message }}
                    </div>
                    <p v-if="!tokenError.resend">Please contact us to obtain a new booking link.</p>
                    <div v-if="tokenError.resend">
                      <p v-if="!tokenError.emailSent">Confirm your email address below to obtain a new booking link:</p>
                      <q-input v-model="tokenError.email" label="Enter your email address" outlined
                        v-if="!tokenError.emailSent">
                        <template v-slot:append>
                          <q-btn @click="tokenErrorEmailSend()" :disable="!tokenError.email" color="primary"
                            label="Confirm" />
                        </template>
                      </q-input>
                      <div v-if="tokenError.emailSent"><q-icon name="mail" /> We've sent a booking link to the confirmed
                        email address. Please check your email and close this window.</div>
                    </div>
                  </div>
                </div>
                <div v-if="!tokenError && !tokenTeams">
                  <p class="text-center text-bold">Select your pickup location:</p>
                  <PostcodeRegionField v-model="model.suburb_postcode_region_id" label="Enter your pickup suburb"
                    outlined :invalid="$v.suburb_postcode_region_id.$invalid" @update:model-value="checkContractors()"
                    :clearable="true" />
                  <div class="text-center q-mt-lg" v-if="noContractors">
                    <div v-if="!registerInterest.success">
                      <strong>We currently don't have availability in your area, register your interest below and we
                        will
                        let you know as soon as we do</strong>
                      <div class="q-mb-md">Register your interest
                        below:</div>
                      <q-input v-model="registerInterest.email" label="Enter your email address" outlined>

                        <template v-slot:append>
                          <q-btn @click="registerInterestFunc()" label="Register" color="primary"
                            :disable="!registerInterest.email" />
                        </template>
                      </q-input>
                    </div>
                    <div v-if="registerInterest.success" class="q-mt-md">
                      Thank you for your interest. We'll be in contact as soon as the selected area opens up.
                      <div class="q-mt-md"><q-btn @click="resetRegisterInterest()"
                          label="Search for a different location" color="primary" outline rounded /></div>
                    </div>
                  </div>
                </div>
                <div class="text-center q-mt-xl" v-if="!registerInterest.suburb_postcode_region_id && !tokenError">
                  <q-btn @click="stepMove(2)" color="primary" label="Continue" rounded
                    :disable="!model.suburb_postcode_region_id" />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 2">
                <p class="text-center text-bold">Choose the services you require:</p>
                <div class="flex justify-center">
                  <div>
                    <div>
                      <q-checkbox v-model="washingAndIroning" @update:model-value="toggleWashingAndIroning()"
                        label="Washing & Ironing" />
                    </div>
                    <div>
                      <q-checkbox v-model="washingOnly" @update:model-value="toggleWashingOnly()" label="Washing" />
                    </div>
                    <div>
                      <q-checkbox v-model="ironingOnly" @update:model-value="toggleIroningOnly()" label="Ironing" />
                    </div>
                    <div class="hidden">
                      <div v-for="c in model.productcategories" :key="c.product_category_id" class="q-mr-sm">
                        <q-checkbox v-model="c.active" :label="categoryDisplay(c.product_category_id, categories)"
                          @update:model-value="[model.scheduled_pickup_date = null, model.scheduled_pickup_time = null, model.contractor_user_id = null]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center q-mt-xl">
                  <q-btn @click="stepMove(1)" color="primary" label="Previous" flat class="q-mr-sm" rounded
                    :disable="loadingAvailableDates" /><q-btn @click="stepMove(3)" color="primary" label="Continue"
                    :disable="!model.productcategories.filter(o => o.active).length || loadingAvailableDates" rounded
                    :loading="loadingAvailableDates" />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 3">
                <div class="text-center text-bold">Choose the desired pickup date:</div>
                <div class="q-mt-sm text-center" style="height:14px;">
                  <div v-if="loadingAvailableDates"><q-spinner /> Finding available dates</div>
                </div>
                <div class="text-center">
                  <q-date v-model="model.scheduled_pickup_date" mask="DD/MM/YYYY" :options="minDate" class="q-mt-md"
                    @navigation="handleScheduledPickupDateNav"
                    @update:model-value="[model.scheduled_pickup_time = null, model.contractor_user_id = null]"
                    :disable="loadingAvailableDates" />
                </div>
                <div class="q-mt-xl text-center">
                  <q-btn @click="stepMove(2)" color="primary" label="Previous" flat class="q-mr-sm" rounded />
                  <q-btn @click="stepMove(4)" color="primary" label="Continue" :disable="!model.scheduled_pickup_date"
                    rounded />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 4">
                <p class="text-center text-bold">Select your Laundry Lady or Lad:</p>
                <q-card>
                  <q-card-section>
                    <OrderContractorManagement :scheduled_pickup_date="model.scheduled_pickup_date"
                      :scheduled_pickup_time="model.scheduled_pickup_time" v-model="model.contractor_user_id"
                      :reassign="true" :productcategories="model.productcategories.filter(o => o.active)"
                      :suburb_postcode_region_id="model.suburb_postcode_region_id"
                      v-if="model.suburb_postcode_region_id && model.scheduled_pickup_date && model.productcategories.filter(o => o.active).length"
                      @update:modelValueTime="updateScheduledPickupTime" />
                  </q-card-section>
                </q-card>
                <div class="q-mt-xl text-center">
                  <q-btn @click="stepMove(3)" color="primary" label="Previous" flat class="q-mr-sm" rounded
                    :loading="loadingAvailableDates" :disable="loadingAvailableDates" />
                  <q-btn @click="stepMove(5)" color="primary" label="Continue"
                    :disable="!model.contractor_user_id || !model.scheduled_pickup_time" rounded />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 5">
                <p class="text-center text-bold">Enter your details:</p>
                <q-card>
                  <q-card-section>
                    <div class="text-h6 q-mb-sm">Your Details</div>
                    <div class="row q-col-gutter-md q-mb-sm">
                      <div class="col-xs-12 col-sm-6">
                        <q-select v-model="model.team.type" :error="$v.team.type.$invalid" :label="$t('team.type')"
                          :options="customerTypes" outlined />
                      </div>
                    </div>
                    <div v-if="model.team.type === 'NDIS'" class="bg-primary text-white q-pa-md q-mb-lg">
                      To claim laundry services under NDIS you MUST have item number
                      01_021_0120_1_1 - Linen Service
                      listed in your current NDIS plan. If this line item is not listed you will not be eligible to
                      claim under NDIS. Do you wish to proceed?
                      <div class="q-mt-xs">
                        <q-toggle v-model="agreeNdis" label="I wish to proceed" color="white" />
                      </div>
                    </div>
                    <div v-if="model.team.type !== 'NDIS' || (model.team.type === 'NDIS' && agreeNdis)">
                      <div class="row q-col-gutter-md"
                        v-if="['Business', 'Aged Care', 'Sporting Group'].indexOf(model.team.type || '') !== -1">
                        <div class="col-xs-12 col-sm-6">
                          <q-input v-model="model.team.name" :label="$t('team.teamName')" :error="$v.team.name.$invalid"
                            outlined />
                        </div>
                        <div class="col-xs-12 col-sm-6"
                          v-if="['Business', 'Aged Care', 'Sporting Group'].indexOf(model.team.type || '') !== -1">
                          <q-input v-model="model.team.abn"
                            :label="common?.operating_country === 'nzd' ? 'NZBN' : 'ABN'" :error="$v.team.abn.$invalid"
                            outlined />
                        </div>
                      </div>
                      <div class="row q-col-gutter-md">
                        <div class="col-xs-12 col-sm-6">
                          <q-input v-model="model.team.first_name" :error="$v.team.first_name.$invalid"
                            label="Contact first name" outlined />
                        </div>
                        <div class="col-xs-12 col-sm-6">
                          <q-input v-model="model.team.last_name" :error="$v.team.last_name.$invalid"
                            label="Contact last name" outlined />
                        </div>
                      </div>
                      <div class="row q-col-gutter-md">
                        <div class="col-xs-12 col-sm-6">
                          <q-input v-model="model.team.email" :error="$v.team.email.$invalid" label="Your email address"
                            outlined autocapitalize="off" />
                        </div>
                        <div class="col-xs-12 col-sm-6">
                          <q-input v-model="model.team.mobile" :error="$v.team.mobile.$invalid"
                            :label="common?.operating_country === 'aud' ? 'Your Australian mobile number' : 'Your contact mobile'"
                            outlined :mask="common?.operating_country === 'aud' ? '#### ### ###' : ''" maxlength="20"
                            error-message="Use the alternate contact number field if you do not have an Australian mobile number"
                            hint="Use the alternate contact number field if you do not have an Australian mobile number" />
                        </div>
                        <div class="col-xs-12 col-sm-6">
                          <q-input v-model="model.team.other_phone" :error="$v.team.other_phone.$invalid"
                            label="Alternate contact number" outlined />
                        </div>
                      </div>
                      <div v-if="model.team.type === 'NDIS'">
                        <div class="row q-col-gutter-md">
                          <div class="col-xs-12 col-sm-6">
                            <q-input v-model="model.team.ndis_number" :label="$t('team.ndisNumber')" outlined
                              :error="$v.team.ndis_number.$invalid">

                              <template v-slot:prepend>
                                <img src="~assets/images/logos/ndis_heart.svg" style="height:32px" />
                              </template>
                            </q-input>
                          </div>
                          <div class="col-xs-12 col-sm-6">
                            <q-select v-model="model.team.ndis_type" :label="$t('team.ndisType')"
                              :error="$v.team.ndis_type.$invalid" outlined
                              :options="['Self managed', 'Plan managed', 'NDIA registered']" />
                          </div>
                        </div>
                        <div class="row q-col-gutter-md q-mb-md">
                          <DateFieldVue v-model="model.team.ndis_dob" :label="$t('team.ndisDob')" :outlined="true"
                            class="col-xs-12 col-sm-6" :invalid="$v.team.ndis_dob.$invalid" />
                        </div>
                        <div class="row q-col-gutter-md">
                          <q-input v-model="model.team.ndis_plan_manager_email" :label="$t('team.ndisPlanManagerEmail')"
                            bottom-slots class="col-xs-12 col-sm-6" outlined
                            :error="$v.team.ndis_plan_manager_email.$invalid" />
                          <q-input v-model="model.team.ndis_support_coordinator_email"
                            :label="$t('team.ndisSupportCoordinatorEmail')" class="col-xs-12 col-sm-6" bottom-slots
                            outlined :error="$v.team.ndis_support_coordinator_email.$invalid" />
                        </div>
                        <div class="row q-col-gutter-md">
                          <DateFieldVue v-model="model.team.ndis_plan_start" :label="$t('team.ndisPlanStart')"
                            :outlined="true" class="col-xs-12 col-sm-6" />
                          <DateFieldVue v-model="model.team.ndis_plan_end" :label="$t('team.ndisPlanEnd')"
                            :outlined="true" class="col-xs-12 col-sm-6" :fdc="true" />
                        </div>
                        <div class="q-mt-lg">
                          <q-checkbox v-model="model.team.ndis_line_item"
                            label="Yes I (the client) have item number 01_021_0120_1_1 – Linen Service stated in my current NDIS plan" />
                        </div>
                        <div class="q-mb-sm">
                          <q-checkbox v-model="model.team.ndis_funds"
                            label="Yes I (the client) have sufficient funds available under the Linen code to pay for my services and I agree to inform Laundry Lady if funds run out" />
                        </div>
                        <div class="q-mb-sm">
                          <q-checkbox v-model="model.team.ndis_funds_inform"
                            label="Yes I (the client) agree to inform Laundry Lady if there are any changes to my plan that will affect claiming under this code" />
                        </div>
                        <q-radio v-model="model.team.ndis_payment" val="self"
                          label="I (the client) will pay for services myself and will be responsible for claiming under the NDIS (self-managed)" />
                        <q-radio v-model="model.team.ndis_payment" val="plan"
                          label="The invoice should be sent to my plan manager for payment" />
                      </div>
                      <div class="text-h6 q-mt-sm">Pickup Address</div>
                      <p>Enter your pickup / delivery address.</p>
                      <AddressSearch :model="model" :filled="true"
                        :addressfields="{ address1: 'address1', address2: 'address2', suburb_postcode_region_id: 'suburb_postcode_region_id', lat: 'lat', lng: 'lng', country_id: 'country_id', postcode: 'postcode' }"
                        :placeholder="$t('address.search')" />
                      <q-input v-model="model.address1" :label="$t('address.line1')" outlined class="q-mb-md" />
                      <q-input v-model="model.address2" :error="$v.address2.$invalid" :label="$t('address.line2')"
                        outlined />
                      <div class="row q-col-gutter-md">
                        <PostcodeRegionField v-model="model.suburb_postcode_region_id"
                          :invalid="$v.suburb_postcode_region_id.$invalid" :label="$t('address.suburb')"
                          class="col-xs-12 col-sm-6" :outlined="true" />
                        <q-input v-model="model.postcode" :error="$v.postcode.$invalid" :label="$t('address.postcode')"
                          outlined class="col-xs-12 col-sm-6" />
                        <CountryField v-model="model.country_id" :label="$t('address.country')"
                          class="col-xs-12 col-sm-6" :outlined="true" :invalid="$v.country_id.$invalid" />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
                <div class="q-mt-xl text-center">
                  <q-btn @click="stepMove(4)" color="primary" label="Previous" flat class="q-mr-sm" rounded />
                  <q-btn @click="stepMove(6)" color="primary" label="Continue" :disable="$v.$invalid || !ndisOk"
                    rounded />
                </div>
              </q-card-section>
              <q-card-section v-if="step === 6">
                <p class="text-center text-bold" v-if="!success && !error && !confirming">Confirm your booking:</p>
                <q-card>
                  <q-card-section v-if="!success && !error && !confirming">
                    <div class="text-bold">Your contact details</div>
                    <div>{{ model.team.email }}</div>
                    <div class="q-mb-md">{{ model.team.mobile }}</div>
                    <OrderNewSummary :suburb_postcode_region_id="model.suburb_postcode_region_id"
                      :contractor_user_id="model.contractor_user_id"
                      :scheduled_pickup_date="model.scheduled_pickup_date"
                      :scheduled_pickup_time="model.scheduled_pickup_time" :productcategories="model.productcategories"
                      :categories="categories" v-if="categories && model.suburb_postcode_region_id" />
                    <q-input v-model="model.special_instructions" class="q-mt-lg" type="textarea"
                      label="Please enter any special instructions for this booking" outlined rows="3" />
                    <div class="q-mt-md">
                      <q-toggle v-model="model.recurring_order" :label="$t('order.recurring')" />
                      <div v-if="model.recurring_order" class="q-pa-md q-mt-sm q-mb-md rounded-borders"
                        :class="{ 'bg-grey-1': !$q.dark.isActive }" style="border: 1px solid #efefef">
                        <div class="row q-col-gutter-md">
                          <div class="col-xs-12 col-sm-6 col-lg-5">
                            <q-select v-model="model.recurring" :label="$t('order.recurringFrequency')"
                              :options="['Week', 'Month', 'Day']" bottom-slots :error="$v.recurring.$invalid"
                              @update:model-value="model.recurring_end = ''" outlined />
                          </div>
                          <div class="col-xs-12 col-sm-6 col-lg-5" v-if="model.recurring">
                            <q-select v-model="model.recurring_every" label="Repeat every" :options="[1, 2, 3, 4, 5, 6]"
                              :error="$v.recurring_every.$invalid" outlined>
                              <template v-slot:append>
                                <q-badge :label="`${model.recurring}s`" color="grey" />
                              </template>
                            </q-select>
                          </div>
                        </div>
                        <div v-if="model.recurring === 'Week'" class="q-mb-md">
                          <p>If the booking needs to occur multiple times a week, choose the days below:</p>
                          <q-btn v-for="d in model.recurring_days.days" :key="d.day" color="primary"
                            @click="d.active = !d.active" :label="d.label" :flat="!d.active" class="q-mr-xs"
                            size="sm" />
                        </div>
                        <div class="row q-col-gutter-md">
                          <div class="col-xs-12 col-sm-6 col-lg-5" v-if="model.recurring">
                            <q-select v-model="model.recurring_end_type" label="Ends"
                              :options="['After', 'On', 'Never']" :error="$v.recurring_end_type.$invalid"
                              @update:model-value="model.recurring_end = ''" outlined />
                          </div>
                          <div class="col-xs-12 col-sm-6 col-lg-5" v-if="model.recurring">
                            <q-select v-model="model.recurring_end" v-if="model.recurring_end_type === 'After'"
                              label="Choose the amount" :error="$v.recurring_end.$invalid"
                              :options="recurringOccurenceOptions" outlined>
                              <template v-slot:append><q-badge label="occurences" color="grey" /></template>
                            </q-select>
                            <DateFieldVue v-model="model.recurring_end" label="Choose an end date" :outlined="true"
                              :invalid="$v.recurring_end.$invalid" v-if="model.recurring_end_type === 'On'" :fdc="true"
                              :max="moment().add(3, 'months').format('YYYY-MM-DD')" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="q-mb-md">
                      <q-toggle v-model="model.team.marketing_subscribed"
                        label="I want to receive emails with the latest news and updates from The Laundry Lady" />
                    </div>
                    <div>
                      <div class="q-mb-xs">No cancellations or changes allowed within 3 hours of the
                        appointment.
                        Charges will be applied if clothes are not ready at pickup. By booking this appointment you
                        agree
                        to our Terms and Conditions which can be found online here:
                        <a href="https://thelaundrylady.co.nz/terms-and-conditions/"
                          v-if="common?.operating_country === 'nzd'" target="_blank"
                          class="link">https://thelaundrylady.co.nz/terms-and-conditions/</a>
                        <a href="https://thelaundrylady.com.au/terms-and-conditions/"
                          v-if="common?.operating_country === 'aud'" target="_blank"
                          class="link">https://thelaundrylady.com.au/terms-and-conditions/</a>
                      </div>
                      <div>
                        <q-toggle v-model="model.cancellation_terms" label="I agree to the Cancellation policy" />
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section v-if="error">
                    <p>The following problems were found when trying to submit the booking:</p>
                    <div v-for="(e, index) in errors" :key="index">
                      <div class="text-bold">{{ e.message }}</div>
                    </div>
                  </q-card-section>
                  <q-card-section v-if="success">
                    <div class="text-center"><q-icon name="o_check_circle" size="64px" color="green" /></div>
                    <div class="text-h5 text-center q-mt-sm">Booking Confirmed</div>
                    <p class="text-center">Great news, your booking has been confirmed!</p>
                    <p>An email with all of the details is on its way. While you wait, check out our
                      FAQs page for all the details to get ready for your service. <a
                        href="https://thelaundrylady.co.nz/faqs/" target="_blank" class="link"
                        v-if="common?.operating_country === 'nzd'">https://thelaundrylady.co.nz/faqs/</a>
                      <a href="https://thelaundrylady.com.au/faqs/" target="_blank" class="link"
                        v-if="common?.operating_country === 'aud'">https://thelaundrylady.com.au/faqs/</a>
                    </p>
                    <OrderNewSummary :suburb_postcode_region_id="model.suburb_postcode_region_id"
                      :contractor_user_id="model.contractor_user_id"
                      :scheduled_pickup_date="model.scheduled_pickup_date"
                      :scheduled_pickup_time="model.scheduled_pickup_time" :productcategories="model.productcategories"
                      :categories="categories" v-if="categories && model.suburb_postcode_region_id" />
                  </q-card-section>
                </q-card>
                <div class="q-mt-xl text-center" v-if="!success && !confirming">
                  <q-btn @click="stepMove(5)" color="primary" label="Previous" flat class="q-mr-sm" rounded />
                  <q-btn @click="save()" color="primary" label="Confirm booking"
                    :disable="$v.$invalid || !model.cancellation_terms || !ndisOk" rounded />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
      <div v-if="!iframed && loaded">
        <FooterComponent :booking="false" :apply="true" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, required, requiredIf } from '@vuelidate/validators'
import moment from 'moment-timezone'
import { EventBus, useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import AddressSearch from 'src/components/form/AddressSearch.vue'
import CountryField from 'src/components/form/CountryField.vue'
import DateFieldVue from 'src/components/form/DateField.vue'
import PostcodeRegionField from 'src/components/form/PostcodeRegionField.vue'
import OrderNewSummary from 'src/components/order/OrderNewSummary.vue'
import { LooseObject } from 'src/contracts/LooseObject'
import { useMixinCommon } from 'src/mixins/common'
import { useMixinDebug } from 'src/mixins/debug'
import { arrayRange, categoryDisplay, confirmDelete } from 'src/mixins/help'
import { productCategoriesVisibleBooking } from 'src/services/helpers'
import { computed, inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppLogo from '../../components/AppLogo.vue'
import { Order, QDateNavigation, Team } from '../../components/models'
import OrderContractorManagement from '../../components/order/OrderContractorManagement.vue'
import FooterComponent from 'src/components/footer/FooterComponent.vue'
import HeaderComponent from 'src/components/header/HeaderComponent.vue'

const step = ref(1)
const washingAndIroning = ref(false)
const washingOnly = ref(false)
const ironingOnly = ref(false)
const categories = ref()
const loadingAvailableDates = ref(false)
const availableDates = ref<string[]>([])
const success = ref(false)
const error = ref(false)
const confirming = ref(false)
const errors = ref<LooseObject[]>([])
const common = useMixinCommon()
const route = useRoute()
const iframed = ref(true)
const loaded = ref(false)
const agreeNdis = ref(false)
const tokenTeams = ref()
const tokenTeamsSelect = ref()
const tokenError = ref()
const schema = {
  address1: null,
  address2: null,
  suburb_postcode_region_id: null,
  postcode: null,
  lat: null,
  lng: null,
  country_id: common.value?.operating_country_id,
  contractor_user_id: null,
  scheduled_pickup_date: null,
  scheduled_pickup_time: null,
  special_instructions: null,
  recurring_order: false,
  recurring: null,
  recurring_every: null,
  recurring_end: null,
  recurring_days: {
    days: [
      { day: 0, active: false, label: 'Sun' },
      { day: 1, active: false, label: 'Mon' },
      { day: 2, active: false, label: 'Tue' },
      { day: 3, active: false, label: 'Wed' },
      { day: 4, active: false, label: 'Thu' },
      { day: 5, active: false, label: 'Fri' },
      { day: 6, active: false, label: 'Sat' }
    ]
  },
  cancellation_terms: false,
  productcategories: [],
  team: {
    id: null,
    name: null,
    first_name: null,
    last_name: null,
    type: null,
    email: null,
    mobile: null,
    other_phone: null,
    // NDIS
    ndis_number: null,
    ndis_type: null,
    ndis_plan_manager_email: null,
    ndis_support_coordinator_email: null,
    ndis_plan_start: null,
    ndis_plan_end: null,
    ndis_line_item: false,
    ndis_funds_inform: false,
    ndis_funds: false,
    ndis_payment: 'self',
    ndis_dob: null,
    abn: null,
    marketing_subscribed: true
  }
}

const recurringOccurenceOptions = computed(() => {
  if (model.recurring === 'Day') {
    return arrayRange(1, 50, 1, true)
  }
  if (model.recurring === 'Week') {
    return arrayRange(1, 12, 1, true)
  }
  if (model.recurring === 'Month') {
    return arrayRange(1, 3, 1, true)
  }
  return arrayRange(1, 50, 1, true)
})

const ndisOk = computed(() => {
  if (model.team.type === 'NDIS') {
    if (!model.team.ndis_line_item || !model.team.ndis_funds_inform || !model.team.ndis_funds) {
      return false
    }
  }
  return true
})

const toggleWashingAndIroning = () => {
  ironingOnly.value = false
  washingOnly.value = false
  model.productcategories.forEach(o => {
    o.active = true
  })
  model.contractor_user_id = null
  model.scheduled_pickup_date = null
  model.scheduled_pickup_time = null
}

const toggleWashingOnly = () => {
  washingAndIroning.value = false
  ironingOnly.value = false
  const washingObj = model.productcategories.find(o => o.product_category_id === 1)
  if (washingObj) {
    washingObj.active = washingOnly.value
  }
  const ironingObj = model.productcategories.find(o => o.product_category_id === 2)
  if (ironingObj) {
    ironingObj.active = false
  }
  model.contractor_user_id = null
  model.scheduled_pickup_date = null
  model.scheduled_pickup_time = null
}

const toggleIroningOnly = () => {
  washingAndIroning.value = false
  washingOnly.value = false
  const washingObj = model.productcategories.find(o => o.product_category_id === 1)
  if (washingObj) {
    washingObj.active = false
  }
  const ironingObj = model.productcategories.find(o => o.product_category_id === 2)
  if (ironingObj) {
    ironingObj.active = ironingOnly.value
  }
  model.contractor_user_id = null
  model.scheduled_pickup_date = null
  model.scheduled_pickup_time = null
}

const customerTypes = computed(() => {
  if (common?.value?.operating_country === 'aud') {
    return ['Residential', 'Business', 'NDIS', 'Home Care', 'Aged Care', 'Veteran Affairs', 'Sporting Group', 'Other']
  }
  if (common?.value?.operating_country === 'nzd') {
    return ['Residential', 'Business', 'Disability Services', 'Home Care', 'Aged Care', 'Veteran Affairs', 'Sporting Group', 'Other']
  }
  return []
})

const model = reactive<Order>(JSON.parse(JSON.stringify(schema)))
const bus = inject('bus') as EventBus
const minDate = (date: string) => {
  return availableDates.value.indexOf(date) !== -1
}
const currentBookingDate = ref(moment())
const noContractors = ref(false)
interface RegisterInterest {
  suburb_postcode_region_id: null | number,
  email: null | string,
  success: boolean
}
const registerInterest = reactive<RegisterInterest>({
  suburb_postcode_region_id: null,
  email: null,
  success: false
})
const rules = {
  suburb_postcode_region_id: { required },
  postcode: { required },
  address2: { required },
  country_id: { required },
  scheduled_pickup_date: { required },
  scheduled_pickup_time: { required },
  contractor_user_id: { required },
  productcategories: { required },
  recurring: { requiredIf: requiredIf(() => model.recurring_order) },
  recurring_every: { requiredIf: requiredIf(() => model.recurring_order) },
  recurring_end_type: { requiredIf: requiredIf(() => model.recurring_order) },
  recurring_end: { requiredIf: requiredIf(() => model.recurring_order && model.recurring_end_type !== 'Never') },
  team: {
    name: { requiredIf: requiredIf(() => ['Business', 'Aged Care', 'Sporting Group'].indexOf(model.team.type || '') !== -1) },
    first_name: { required },
    last_name: { required },
    type: { required },
    email: { required, email },
    mobile: { requiredIf: requiredIf(() => !model.team.other_phone) },
    other_phone: { requiredIf: requiredIf(() => !model.team.mobile) },
    ndis_number: { requiredIf: requiredIf(() => model.team.type === 'NDIS') },
    ndis_type: { requiredIf: requiredIf(() => model.team.type === 'NDIS') },
    ndis_dob: { requiredIf: requiredIf(() => model.team.type === 'NDIS') },
    abn: { requiredIf: requiredIf(() => ['Business', 'Aged Care', 'Sporting Group'].indexOf(model.team.type || '') !== -1) },
    ndis_plan_manager_email: { email },
    ndis_support_coordinator_email: { email }
  }
}

const $v = useVuelidate(rules, model)
const $q = useQuasar()

const stepMove = (nextStep: number) => {
  if (nextStep === 3) {
    getAvailableContractorsDates()
  } else {
    step.value = nextStep
  }
}

const resetModel = () => {
  Object.assign(model, JSON.parse(JSON.stringify(schema)))
  washingAndIroning.value = false
  washingOnly.value = false
  ironingOnly.value = false
  for (const c of categories.value) {
    model.productcategories.push({ product_category_id: c.value, active: false })
  }
  availableDates.value = []
}

const checkContractors = () => {
  if (!model.suburb_postcode_region_id) {
    noContractors.value = false
    resetModel()
  } else {
    Object.assign(registerInterest, { suburb_postcode_region_id: null, email: null, success: false })
    api.post('/public/order/findcontractorsinsuburbpostcoderegion', { suburb_postcode_region_id: model.suburb_postcode_region_id }).then(response => {
      noContractors.value = !response.data.found
      if (noContractors.value) {
        registerInterest.suburb_postcode_region_id = model.suburb_postcode_region_id
        registerInterest.email = null
      }
      availableDates.value = []
    }).catch(error => {
      useMixinDebug(error)
    })
  }
}

const handleScheduledPickupDateNav = (view: QDateNavigation) => {
  console.log(`Handling ${view.year}-${view.month}`)
  currentBookingDate.value = moment(`${view.year}-${view.month}-01`, 'YYYY-M-D')
  getAvailableContractorsDates()
}

const getAvailableContractorsDates = () => {
  availableDates.value = []
  loadingAvailableDates.value = true
  api.post('/public/order/findcontractorsdates', {
    suburb_postcode_region_id: model.suburb_postcode_region_id,
    scheduled_pickup_date: currentBookingDate.value.format('DD/MM/YYYY'),
    productcategories: model.productcategories
  }).then(response => {
    availableDates.value = response.data
    step.value = 3
    loadingAvailableDates.value = false
  }).catch(error => {
    loadingAvailableDates.value = false
    useMixinDebug(error)
  })
}

const updateScheduledPickupTime = (val: string | null) => {
  model.scheduled_pickup_time = val
}

const save = () => {
  confirmDelete('This will confirm the booking').onOk(() => {
    $q.loading.show({ message: 'Confirming booking...' })
    confirming.value = true
    success.value = false
    error.value = false
    api.post('/public/order/new', model).then(() => {
      success.value = true
      confirming.value = false
      $q.loading.hide()
    }).catch(responseError => {
      confirming.value = false
      error.value = true
      errors.value = responseError.response && responseError.response.data ? responseError.response.data.errors : [{ field: 'Unknown Error', message: 'Unknown error occured.' }]
      $q.loading.hide()
    })
  })
}

const registerInterestFunc = () => {
  if (registerInterest.email && registerInterest.suburb_postcode_region_id) {
    api.post('/public/postcoderegioninterest/register', registerInterest).then(() => {
      registerInterest.success = true
    }).catch(error => {
      useMixinDebug(error)
    })
  }
}

const resetRegisterInterest = () => {
  noContractors.value = false
  Object.assign(registerInterest, { suburb_postcode_region_id: null, email: null, success: false })
  model.suburb_postcode_region_id = null
}

const selectTokenTeam = (id: number) => {
  const team = tokenTeams.value.find((o: Team) => o.id === id)
  if (team) {
    model.team = team
    model.suburb_postcode_region_id = team.suburb_postcode_region_id
    model.address1 = team.address1
    model.address2 = team.address2
    model.postcode = team.postcode
    step.value = 2
  }
}

const tokenErrorEmailSend = () => {
  if (!tokenError.value.email) {
    return false
  }
  api.post('/public/team/sendbookinglink', { email: tokenError.value.email }).then(() => {
    tokenError.value.emailSent = true
  }).catch(error => {
    useMixinDebug(error)
  })
}

onMounted(async () => {
  Object.assign(model, JSON.parse(JSON.stringify(schema)))
  categories.value = await productCategoriesVisibleBooking()
  model.productcategories = []
  for (const c of categories.value) {
    model.productcategories.push({ product_category_id: c.value, active: false })
  }
  washingAndIroning.value = false
  // check for location
  if (route.query.location) {
    model.suburb_postcode_region_id = parseFloat(route.query.location.toString())
  }
  // check for iframe
  if (!route.query.iframed) {
    iframed.value = false
  }
  if (route.query.t) {
    api.post('/public/team/findbytoken', { token: route.query.t }).then((response: LooseObject) => {
      tokenTeams.value = response.data.teams
      if (response.data.teams && response.data.teams.length === 1) {
        selectTokenTeam(response.data.teams[0].id)
      }
      loaded.value = true
    }).catch(error => {
      if (error.response && error.response.data) {
        tokenError.value = { message: error.response.data.error, resend: error.response.data.resend, email: null, emailSent: false }
      }
      loaded.value = true
    })
  } else {
    loaded.value = true
  }
  // FB Meta Pixel
  try {
    let fbmpid = '1797469603884044'
    if (window.location.hostname.match('.nz')) {
      fbmpid = '1885184374985412'
    }
    // eslint-disable-next-line
    // @ts-ignore
    window.fbq('init', fbmpid)
    // eslint-disable-next-line
    // @ts-ignore
    window.fbq('track', 'PageView')
  } catch (error) {
    console.log(error)
  }
})

onBeforeUnmount(() => {
  bus.off('newOrder')
})
</script>
