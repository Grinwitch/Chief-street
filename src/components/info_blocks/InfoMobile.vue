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
              Chief Street Food
            </div>

            <div class="info-mobile-block__title-logo-desc-block">
              <p>
                А вот Smart Logistic, сервис доставки товаров из магазинов IKEA,
                — хороший пример, как написать миссию и историю компании с пользой и для
                частных клиентов, и для компаний. Одна из задач этого раздела — сформировать доверие к сервису.
              </p>
            </div>
          </div>
        </div>

        <div class="info-mobile__body-block">
          <div class="info-mobile__body-item-block">
            <div class="info-mobile__body-item-container">
              Чат с операторов
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </div>

            <div class="info-mobile__body-item-container-additionally-block">
              <img src="@/assets/img/icons8-телефон-64.png">
            </div>
          </div>

          <div class="info-mobile__body-item-block">
            <div class="info-mobile__body-item-container">
              Правовая информация
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </div>
          </div>

          <div class="info-mobile__body-item-block">
            <div class="info-mobile__body-item-container">
              О приложении
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </div>
          </div>

          <div class="info-mobile__body-item-block">
            <div class="info-mobile__body-item-container">
              Открой свою пиццерию
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </div>
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
</style>
