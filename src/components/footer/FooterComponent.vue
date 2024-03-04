<template>
  <div class="bg-dark">
    <div class="container q-pt-lg q-pl-md q-pr-md q-pb-lg text-white" style="font-size:16px;line-height:28px;">
      <div class="row" v-if="common?.operating_country === 'aud'" :class="{ 'q-col-gutter-xl': !$q.screen.xs }">
        <div class="col-xs-12 col-md-4">
          <p>
            <img src="~assets/images/logos/logo_footer.webp" style="max-width:340px" />
          </p>
          <p>Established on the Gold Coast in 2012, The Laundry Lady is now servicing many
            areas
            of Victoria, New
            South Wales, Western Australia, South Australia, Northern Territory, ACT and Queensland with more
            areas
            coming soon! Check out our current Service Area for a full list of areas we can service.</p>
          <p class="text-h5">Registered NDIS Provider</p>
          <p><img src="~assets/images/logos/ndis_heart.svg" style="height:163px;" /></p>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="text-bold text-h5 q-mt-xl q-mb-lg">Quick Links</div>
          <div><a href="https://thelaundrylady.com.au/" class="link white">Home</a></div>
          <div><a href="https://thelaundrylady.com.au/pricing/" class="link white">Pricing</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/our-service-area/" class="link white">Places</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/services/" class="link white">Services</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/about-us/" class="link white">About Us</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/awards-recognition/" class="link white">Awards</a>
          </div>
          <div v-if="apply"><router-link :to="{ name: 'applyNow' }" class="link white">Join the
              Team</router-link>
          </div>
          <div><a href="https://thelaundrylady.com.au/blog/" class="link white">Blog</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/faqs/" class="link white">FAQs</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/covid-19-our-policies/" class="link white">COVID-19 Our
              policies</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/terms-and-conditions/" class="link white">Terms
              and Conditions</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/media-and-partnerships/" class="link white">Media
              and Partnerhips</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/contact/" class="link white">Contact Us</a>
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="text-bold text-h5 q-mt-xl q-mb-lg">Our Services</div>
          <div><a href="https://thelaundrylady.com.au/home-laundry-service/" class="link white">Home
              Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/commercial-laundry-services/" class="link white">Commercial
              Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/beauty-salon-laundry-service-laundry-lady/"
              class="link white">Beauty Salon Towel Service</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/medical-laundry-service/" class="link white">Medical Centre
              Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/ndis/" class="link white">NDIS Participant
              Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/holiday-rental/" class="link white">Holiday
              Rental Airbnb Service</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/hotel-laundry-services/" class="link white">Hotel
              Guests Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/sports-team-laundry-services-laundry-lady/"
              class="link white">Sports Team Laundry Services</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/drop-off-laundry-service/" class="link white">Pickup Laundry
              Service</a>
          </div>
          <div><a href="https://thelaundrylady.com.au/laundry-service-for-catering-event-planning-functions/"
              class="link white">Functions, Catering & Events</a>
          </div>
          <div class="q-mt-md" v-if="booking">
            <q-btn :to="{ name: 'orders-new' }" label="Book Online" color="primary" rounded />
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-xl" v-if="common?.operating_country === 'nzd'">
        <div class="col-xs-12 col-md-4">
          <p>
            <img src="~assets/images/logos/logo_footer.webp" style="max-width:340px" />
          </p>
          <p>Established in Australia in 2012, The Laundry Lady® is now bringing our award-winning on-demand service to
            New Zealand in 2023. Check out our join the team page, now recruiting nationally.</p>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="text-bold text-h5 q-mt-xl q-mb-lg">Quick Links</div>
          <div><a href="https://thelaundrylady.co.nz/" class="link white">Home</a></div>
          <div><a href="https://thelaundrylady.co.nz/pricing-2/" class="link white">Pricing</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/our-service-area/" class="link white">Places</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/services/" class="link white">Services</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/about-us/" class="link white">About Us</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/awards-recognition" class="link white">Awards</a>
          </div>
          <div v-if="apply"><router-link :to="{ name: 'applyNow' }" class="link white">Join the
              Team</router-link>
          </div>
          <div><a href="https://thelaundrylady.co.nz/blog/" class="link white">Blog</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/faqs/" class="link white">FAQs</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/covid-19-our-policies/" class="link white">COVID-19
              Our policies</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/terms-and-conditions/" class="link white">Terms
              and Conditions</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/media-and-partnerships-2/" class="link white">Media
              and Partnerhips</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/contact/" class="link white">Contact Us</a>
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="text-bold text-h5 q-mt-xl q-mb-lg">Our Services</div>
          <div><a href="https://thelaundrylady.co.nz/home-laundry-service/" class="link white">Home
              Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/commercial-laundry-services/" class="link white">Commercial
              Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/beauty-salon-laundry-service-laundry-lady/"
              class="link white">Beauty Salon Towel Service</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/medical-laundry-service/" class="link white">Medical Centre
              Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/ndis/" class="link white">Disability Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/holiday-rental/" class="link white">Holiday
              Rental Airbnb Service</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/hotel-laundry-services/" class="link white">Hotel
              Guests Laundry Service</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/sports-team-laundry-services-laundry-lady/"
              class=" link white">Sports Team Laundry Services</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/drop-off-laundry-service/" class="link white">Pickup Laundry
              Service</a>
          </div>
          <div><a href="https://thelaundrylady.co.nz/laundry-service-for-catering-event-planning-functions/"
              class="link white">Functions, Catering & Events</a>
          </div>
          <div class="q-mt-md" v-if="booking">
            <q-btn :to="{ name: 'orders-new' }" label="Book Online" color="primary" rounded />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMixinCommon } from 'src/mixins/common'

interface Props {
  booking: boolean,
  apply: boolean
}

defineProps<Props>()
const common = useMixinCommon()

</script>
