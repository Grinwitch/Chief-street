<script setup>
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>

  <Header/>

  <div class="forgot-page">
    <div class="container forgot-page__container">
      <div class="forgot-page__content">
        <div class="forgot-page-content__top">
          <div class="forgot-page-content__top-container">
            <div class="forgot-page-content__top-photo">
              <img src="@/assets/img/logo-2.png" alt="logo img" class="forgot-page-content__top-img">
            </div>
          </div>
        </div>
        <div class="forgot-page-content__main">
          <div class="forgot-page-content__main-container">
            <h3 class="forgot-page-content__main-title">Забыли пароль</h3>
            <div class="forgot-page-content__main-name profile-name">
              <p class="forgot-page-content__main-text profile-text">Введите ваш логин <span class="profile-input-required">*</span></p>
              <input type="text" class="forgot-page-content__top-name-input profile-input profile-input-name">
            </div>
            <div class="forgot-page-content__main-email profile-email">
              <p class="forgot-page-content__main-text profile-text">Введите вашу почту <span class="profile-input-required">*</span></p>
              <input type="email" class="forgot-page-content__top-email-input profile-input profile-input-email">
            </div>
            <div class="forgot-page-content__main-password profile-password">
              <p class="forgot-page-content__main-text profile-text">Введите новый пароль <span class="profile-input-required">*</span></p>
              <input type="text" class="forgot-page-content__top-password-input profile-input profile-input-password">
            </div>
            <div class="forgot-page-content__main-password profile-password-repeat">
              <p class="forgot-page-content__main-text profile-text">Повторите новый пароль <span class="profile-input-required">*</span></p>
              <input type="text" class="forgot-page-content__top-password-input profile-input profile-input-password-repeat">
            </div>
            <div class="forgot-page-content__main-footer">
              <div class="forgot-page-content__main-button profile-button">Отправить</div>
            </div>
          </div>
        </div>
        <div class="forgot-page-content__bottom">
          <div class="forgot-page-content-bottom__container">
            <div class="forgot-page-content-bottom__forgot-password forgot-password">
              <a href="#" class="forgot-page-content-bottom__link">Забыли пароль</a>
            </div>
            <a href="#" class="forgot-page-content-bottom__return-homepage return-homepage">Вернуться на главную страницу</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer/>

</template>