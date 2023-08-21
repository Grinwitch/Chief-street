<script setup>
  import { defineComponent } from 'vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

</script>

<script>
  export default defineComponent({
    name: 'InfoDesktop'
  })
</script>

<template>

  <div class="info-desktop">
    <div class="container">
      <div class="info-desktop__block">

        <div class="info-desktop__body-block">
          <div class="info-desktop__body-item-block">
            <div class="info-desktop__body-item-container">
              Чат с оператором
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </div>
          </div>

          <div class="info-desktop__body-item-block">
            <div class="info-desktop__body-item-container">
              Правовая информация
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </div>
          </div>

          <div class="info-desktop__body-item-block">
            <div class="info-desktop__body-item-container">
              О приложении
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </div>
          </div>

          <div class="info-desktop__body-item-block">
            <div class="info-desktop__body-item-container">
              Открой свою пиццерию
              <img src="@/assets/img/icons8-развернуть-50.png" class="open-right-img">
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<style>

.info-desktop__footer-item-block{
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.info-desktop__footer-block{
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-desktop__body-item-block{
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all .05s;
}

.info-desktop__body-item-block:hover{
  color: var(--cl_red);
}

.info-desktop__body-item-container-additionally-block{
  background-color: #fff;
  border-radius: 16px;
  padding: 10px 15px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-desktop__body-item-container-additionally-block img{
  width: 28px;
  height: 28px;
}

.info-desktop__body-item-container img{
  width: 20px;
  height: 20px;
}

.info-desktop__body-item-container{
  width: 100%;
  padding: 15px 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  font-weight: 600;
  font-size: 17px;
  line-height: 140%;
}

.info-desktop__body-block{
  padding: 20px 10px 10px 10px;
}

.info-desktop-block__title-logo-desc-block{
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 140%;
}

.info-desktop-block__title-logo-block{
  font-weight: 600;
  color: var(--cl_red);
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}

.info-desktop-block__title-block{
  background-color: #fff;
  border-radius: 25px;
  padding: 35px 25px;
  margin-top: 25px;
}

.info-desktop__block{
  width: 100%;
}
</style>
