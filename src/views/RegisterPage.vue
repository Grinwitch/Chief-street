<script setup>
  import { defineComponent } from 'vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
</script>

<script>



</script>

<template>
  <Header/>

  <div class="register-page">
    <div class="container register-page__container">
      <div class="register-page__content">
        <div class="register-page-content__top">
          <div class="register-page-content__top-container">
            <div class="register-page-content__top-photo">
              <img src="@/assets/img/logo-2.png" alt="logo img" class="register-page-content__top-img">
            </div>
          </div>
        </div>
        <div class="register-page-content__main">
          <div class="register-page-content__main-container">
            <h3 class="register-page-content__main-title">Регистрация</h3>
            <div class="register-page-content__main-name profile-name">
              <p class="register-page-content__main-text profile-text">Введите ваш логин *</p>
              <input type="text" class="register-page-content__top-name-input profile-input profile-input-register-name">
            </div>
            <div class="register-page-content__main-email profile-email">
              <p class="register-page-content__main-text profile-text">Введите вашу почту *</p>
              <input type="email" class="register-page-content__top-email-input profile-input profile-input-register-email">
            </div>
            <div class="register-page-content__main-password profile-password">
              <p class="register-page-content__main-text profile-text">Введите ваш пароль *</p>
              <input type="text" class="register-page-content__top-password-input profile-input profile-input-register-password">
            </div>
            <div class="register-page-content__main-password profile-password-repeat">
              <p class="register-page-content__main-text profile-text">Повторите ваш пароль *</p>
              <input type="text" class="register-page-content__top-password-input profile-input profile-input-register-password-repeat">
            </div>
            <div class="register-page-content__main-footer">
              <div class="register-page-content__main-button profile-button">Зарегистрироваться</div>
            </div>
          </div>
        </div>
        <div class="register-page-content__bottom">
          <div class="register-page-content-bottom__container">
            <div class="register-page-content-bottom__forgot-password forgot-password">
              <a href="#" class="register-page-content-bottom__link">Забыли пароль</a>
            </div>
            <a href="#" class="register-page-content-bottom__return-homepage return-homepage">Вернуться на главную страницу</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
</template>