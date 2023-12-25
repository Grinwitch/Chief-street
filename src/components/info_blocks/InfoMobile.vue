<script setup>
  import { defineComponent } from 'vue';
  import Header from '@/components/Header.vue';
</script>

<script>
  export default defineComponent({
    name: 'InfoMobile'
  })
</script>

<template>
  <div>
    <Header :topHeader="false"/>

    <div class="info-mobile">
      <div class="info-mobile__block">

        <div class="info-mobile-block__title-block">
          <div class="info-mobile-block__title-container">
            <div class="info-mobile-block__title-logo-block">
              <img src="@/assets/img/logo-mobile.png" alt="" class="info-mobile-block__title-logo-img">
            </div>

            <div class="info-mobile-block__title-logo-desc-block">
              <p>
                Добро пожаловать в Chef's Street Food, где вкус ваших желаний доступен круглосуточно! Независимо от времени суток, мы готовы порадовать вас ароматными и сочными бургерами, приготовленными с любовью и вниманием к каждой детали.
              </p>
            </div>
          </div>
        </div>

        <div class="info-mobile__body-block">
          <div class="info-mobile__body-item-block">
            <a href="https://api.whatsapp.com/send?phone=77025036161" target="_blank" class="info-mobile__body-item-container">
              Чат с оператором
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </a>

            <a href="tel:+77025036161" class="info-mobile__body-item-container-additionally-block">
              <img src="@/assets/img/icons8-телефон-64.png">
            </a>
          </div>

          <div class="info-mobile__body-item-block">
            <a href="/profile" class="info-mobile__body-item-container">
              Доставка и оплата
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </a>
          </div>

          <div class="info-mobile__body-item-block">
            <a href="/profile" class="info-mobile__body-item-container">
              Контакты
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </a>
          </div>

          <div class="info-mobile__body-item-block">
            <a href="/profile" class="info-mobile__body-item-container">
              Франшиза
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </a>
          </div>

          <div class="info-mobile__body-item-block">
            <a href="/profile" class="info-mobile__body-item-container">
              Правовая информация
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </a>
          </div>
        </div>

        <div class="info-mobile__footer-block">
          <div class="info-mobile__footer-item-block">
            <img src="@/assets/img/svgexport-23.svg">
          </div>

          <div class="info-mobile__footer-item-block">
            <img src="@/assets/img/svgexport-24.svg">
          </div>

          <div class="info-mobile__footer-item-block">
            <img src="@/assets/img/svgexport-25.svg">
          </div>

          <div class="info-mobile__footer-item-block">
            <img src="@/assets/img/svgexport-26.svg">
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<style media="screen">

  .info-mobile {
    padding-bottom: 30%;
  }

  .info-mobile__footer-item-block{
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }

  .info-mobile__footer-block{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-mobile__body-item-block{
    display: flex;
    margin-bottom: 15px;
  }

  .info-mobile__body-item-container-additionally-block{
    background-color: #fff;
    border-radius: 16px;
    padding: 10px 15px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-mobile__body-item-container-additionally-block img{
    width: 28px;
    height: 28px;
  }

  .info-mobile__body-item-container img{
    width: 20px;
    height: 20px;
  }

  .info-mobile__body-item-container{
    width: 100%;
    padding: 20px 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    font-weight: 600;
    font-size: 17px;
    color: #333;
  }

  .info-mobile__body-block{
    padding: 20px 10px 10px 10px;
  }

  .info-mobile-block__title-logo-desc-block{
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 140%;
  }

  .info-mobile-block__title-logo-block{
    font-weight: 600;
    color: var(--cl_red);
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }

  .info-mobile-block__title-block{
    background-color: #fff;
    border-radius: 0 0 35px 35px;
    padding: 35px 25px;
  }

  .info-mobile__block{
    width: 100%;
  }

  .info-mobile-block__title-logo-img {
    width: 65%;
  }
</style>
