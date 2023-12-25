<script setup>
  import { defineComponent } from 'vue';
</script>

<template>
  <slot name="header"></slot>

  <div class="error-page">
    <div class="error-page__content">
      <img src="@/assets/img/404-image.png" alt="error photo" class="error-page-content__img">
      <div class="error-page-content__title">УПС! Мы не нашли эту страницу</div>
      <div class="error-page-content__descr">Данная страница была перемещана, удалена или никогда не существовала</div>
      <div class="error-page__btn" @click="$router.push({name: 'home'})">Перейти на главную</div>
    </div>
  </div>

  <slot name="footer"></slot>
</template>
