<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <app-logo />
      <div class="text-h6 q-mt-md" style="opacity:.4">
        We couldn't find the page or resource you're looking for.
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="blue" unelevated to="/" label="Go Home" no-caps />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLogo from 'src/components/AppLogo.vue'

</script>
