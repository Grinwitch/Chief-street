<script setup>
  import { defineComponent } from 'vue';
  import InfoMobile from '@/components/info_blocks/InfoMobile.vue';
  import InfoDesktop from '@/components/info_blocks/InfoDesktop.vue';
</script>

<script>
  export default defineComponent({
    name: 'InfoView'
  })
</script>

<template>

  <section class="info-desktop-section">
    <InfoDesktop/>
  </section>

  <section class="info-mobile-section">
    <InfoMobile/>
  </section>
</template>
