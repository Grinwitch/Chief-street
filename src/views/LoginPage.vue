<script setup>
  import { defineComponent } from 'vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

</script>

<script>
  export default defineComponent({
    data() {
      return {
        switchWindow: 'login'
      }
    },
    mounted() {
      let loginButton = document.querySelector('.profile-auth-point-login');
      let registerButton = document.querySelector('.profile-auth-point-register');
      let mainField = document.querySelector('.login-page-content__main');
      loginButton.addEventListener("click", () => {
        loginButton.classList.add('profile-auth-point-active');
        registerButton.classList.remove('profile-auth-point-active');
        mainField.style.height = "277px";
      });
      registerButton.addEventListener("click", () => {
        loginButton.classList.remove('profile-auth-point-active');
        registerButton.classList.add('profile-auth-point-active');
        mainField.style.height = "425px";
      })
    },
    methods: {
      loginReqState: function () {
        let loginUserName = document.querySelector('.profile-input-login-name').length;
        let loginPassword = document.querySelector('.profile-input-login-password').length;
        if(loginUserName > 5 && loginPassword > 5) {
          console.log('Работает');
        }
        else {
          console.log('Не работает')
        }
      },

      registerReqState: function () {
        let loginUserName = document.querySelector('.profile-input-login-name');
        let loginPassword = document.querySelector('.profile-input-login-password');
        if(loginUserName.length > 5) {
          console.log('Работает');
        }
      }
    }

  })
</script>

<template>
  <Header/>

  <div class="login-page">
    <div class="container login-page__container">
      <div class="login-page__content">
        <div class="login-page-content__top">
          <div class="login-page-content__top-container">
            <div class="login-page-content__top-photo">
              <img src="@/assets/img/logo-2.png" alt="logo img" class="login-page-content__top-img">
            </div>
          </div>
        </div>
        <div class="login-page-content__main" style="height: 277px;">
          <ul class="login-page-content__main-choose-list profile-auth-list">
            <li @click="switchWindow = 'login'" class="login-page-content__main-choose-point profile-auth-point profile-auth-point-login profile-auth-point-active">Войти</li>
            <li @click="switchWindow = 'register'" class="login-page-content__main-choose-point profile-auth-point profile-auth-point-register">Регистрация</li>
          </ul>
          <TransitionGroup name="auth">
            <div v-if="switchWindow === 'login'" class="login-page-content__main-container auth-page-login">
              <div class="login-page-content__main-name profile-name">
                <p class="login-page-content__main-text profile-text">Введите ваш логин <span class="profile-input-required">*</span></p>
                <input type="text" class="login-page-content__top-name-input profile-input profile-input-login-name">
              </div>
              <div class="login-page-content__main-password profile-password">
                <p class="login-page-content__main-text profile-text">Введите ваш пароль <span class="profile-input-required">*</span></p>
                <input type="text" class="login-page-content__top-password-input profile-input profile-input-login-password">
              </div>
              <div class="login-page-content__main-footer">
                <div class="login-page-content__main-footer-block">
                  <input type="checkbox" class="login-page-content__main-checkbox">
                  <label for="" class="login-page-content__main-label profile-label">Запомнить меня</label>
                </div>
                <div @click="loginReqState();" class="login-page-content__main-button profile-button">Войти</div>
              </div>
            </div>

            <div v-if="switchWindow === 'register'" class="login-page-content__main-container auth-page-register">
              <div class="login-page-content__main-name profile-name">
                <p class="login-page-content__main-text profile-text">Введите ваш логин (от 6 до 12 символов) <span class="profile-input-required">*</span></p>
                <input type="text" class="login-page-content__top-name-input profile-input profile-input-register-name">
                <label for="text" class="profile-label-error"></label>
              </div>
              <div class="login-page-content__main-email profile-email">
                <p class="login-page-content__main-text profile-text">Введите вашу почту <span class="profile-input-required">*</span></p>
                <input type="email" class="login-page-content__top-email-input profile-input profile-input-register-email">
                <label for="email" class="profile-label-error"></label>
              </div>
              <div class="login-page-content__main-password profile-password">
                <p class="login-page-content__main-text profile-text">Введите ваш пароль (от 8 до 16 символов) <span class="profile-input-required">*</span></p>
                <input type="text" class="login-page-content__top-password-input profile-input profile-input-register-password">
                <label for="" class="profile-label-error"></label>
              </div>
              <div class="login-page-content__main-password profile-password-repeat">
                <p class="login-page-content__main-text profile-text">Повторите ваш пароль <span class="profile-input-required">*</span></p>
                <input type="text" class="login-page-content__top-password-input profile-input profile-input-register-password-repeat">
                <label for="" class="profile-label-error"></label>
              </div>
              <div class="login-page-content__main-footer">
                <div @click="registerReqState()" class="login-page-content__main-button profile-button">Зарегистрироваться</div>
              </div>
            </div>
          </TransitionGroup>
        </div>
        <div class="login-page-content__bottom">
          <div class="login-page-content-bottom__container">
            <div class="login-page-content-bottom__forgot-password forgot-password">
              <a @click="$router.push({name: 'forgot-password'})" class="login-page-content-bottom__link">Забыли пароль</a>
            </div>
            <a href="#" class="login-page-content-bottom__return-homepage return-homepage">Вернуться на главную страницу</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <Footer/>
</template>