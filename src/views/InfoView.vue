<script setup>
  import { defineComponent } from 'vue';
  import InfoMobile from '@/components/info_blocks/InfoMobile.vue';
</script>

<script>
  export default defineComponent({
    name: 'InfoView'
  })
</script>

<template>

  <section class="info-mobile-section">
    <InfoMobile/>
  </section>
</template>
