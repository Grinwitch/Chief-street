<script setup>
  import { defineComponent } from 'vue';
</script>
<template>
  <div>
    <slot name="header"></slot>
    <div class="container">
      <div class="tracking">
        <div class="tracking__content">
          <div class="page-header__breadcrumbs">
        <div class="page-header__breadcrumb page-header__breadcrumb-main" @click="$router.push({name: 'home'})">Главная</div>
          <span class="page-header__breadcrumb-separator">/</span>
          <div class="page-header__breadcrumb">Отслеживание заказа</div>
        </div>
        <div class="page-header__top">
          <h3 class="page-header__title">Отслеживание заказа</h3>
        </div>
          <div class="tracking-top__content">
            <h3 class="tracking__title">Заказ: 11817543025</h3>
            <div class="tracking-top__content-block">
              <ul class="tracking-top__content-block-points">
                <li>
                  <div class="tracking-top__content-block-point">Дата:</div>
                  <div class="tracking-top__content-point-date tracking-top__content-point-info">15.08.2023</div>
                </li>
                <li>
                  <div class="tracking-top__content-block-point">Оплата:</div>
                  <div class="tracking-top__content-point-payment tracking-top__content-point-info">Онлайн через Kaspi.kz</div>
                </li>
                <li>
                  <div class="tracking-top__content-block-point">Статус оплаты:</div>
                  <div class="tracking-top__content-point-payment-status tracking-top__content-point-info">
                    <span class="tracking-top__content-point-payment-status-overdue">Просрочено</span>
                    <span class="tracking-top__content-point-payment-status-await" style="margin-left: 10px;">Ожидается оплата</span>
                    <span class="tracking-top__content-point-payment-status-confirmed" style="margin-left: 10px;">Оплачено</span>
                    <a class="tracking-top__content-point-payment-status-link tracking-top__content-point-info">
                      Оплатить
                    </a>
                  </div>
                </li>
                <li>
                  <div class="tracking-top__content-block-point">Доставка:</div>
                  <div class="tracking-top__content-point-delivery-method tracking-top__content-point-info">Самовывоз</div>
                </li>
                <li>
                  <div class="tracking-top__content-block-point">Итого:</div>
                  <div class="tracking-top__content-point-price-total tracking-top__content-point-info">1450 ₸</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="tracking-center__content">
            <div class="tracking-center__content-block">
              Спасибо, <strong>Человек</strong> ваш заказ будет отправлен на обработку без подтверждающего звонка, если у вас возникнут вопросы, Вы можете написать нам на Whatsapp.
            </div>
          </div>
          <div class="tracking-bottom__content">
            <h3 class="tracking__title">История</h3>
            <div class="tracking-bottom__content-block">
              <div class="tracking-botttom__content-block-list">
                <div class="tracking-bottom__content-block-order">
                  <div class="tracking-bottom__content-block-order-point tracking-bottom__content-block-confirmed">
                    <div class="tracking-bottom__content-block-order-point-dot tracking-bottom__content-block-point-dot"></div>
                    <div class="tracking-bottom__content-block-order-point-icon tracking-bottom__content-block-icon">
                      <img src="@/assets/img/icons/shopping-cart.png" alt="" class="tracking-bottom__content-icon">
                    </div>
                    <div class="tracking-bottom__content-block-order-point-text tracking-bottom__content-block-point-text">Новый</div>
                  </div>
                </div>
                <div class="tracking-bottom__content-processing tracking-bottom__content-block-confirmed">
                  <div class="tracking-bottom__content-block-processing-dots">
                    <span class="tracking-bottom__content-dot"></span>
                    <span class="tracking-bottom__content-dot"></span>
                    <span class="tracking-bottom__content-dot"></span>
                    <span class="tracking-bottom__content-dot"></span>
                  </div>
                  <div class="tracking-bottom__content-block-processing-point">
                    <div class="tracking-bottom__content-block-processing-point-dot tracking-bottom__content-block-point-dot"></div>
                    <div class="tracking-bottom__content-block-processing-point-icon tracking-bottom__content-block-icon">
                      <img src="@/assets/img/icons/gear.png" alt="" class="tracking-bottom__content-icon">
                    </div>
                    <div class="tracking-bottom__content-block-processing-point-text tracking-bottom__content-block-point-text">В обработке</div>
                  </div>
                </div>
                <div class="tracking-bottom__content-block-await">
                  <div class="tracking-bottom__content-block-await-dots">
                    <span class="tracking-bottom__content-dot"></span>
                    <span class="tracking-bottom__content-dot"></span>
                    <span class="tracking-bottom__content-dot"></span>
                    <span class="tracking-bottom__content-dot"></span>
                  </div>
                  <div class="tracking-bottom__content-block-await-point">
                    <div class="tracking-bottom__content-block-await-point-dot tracking-bottom__content-block-point-dot"></div>
                    <div class="tracking-bottom__content-block-await-point-icon tracking-bottom__content-block-icon">
                      <img src="@/assets/img/icons/home.png" alt="" class="tracking-bottom__content-icon">
                    </div>
                    <div class="tracking-bottom__content-block-await-point-text tracking-bottom__content-block-point-text">Ожидает клиента</div>
                  </div>
                </div>
                <div class="tracking-bottom__content-block-issued">
                  <div class="tracking-bottom__content-block-issued-dots">
                    <span class="tracking-bottom__content-dot"></span>
                    <span class="tracking-bottom__content-dot"></span>
                    <span class="tracking-bottom__content-dot"></span>
                    <span class="tracking-bottom__content-dot"></span>
                  </div>
                  <div class="tracking-bottom__content-block-issued-point">
                    <div class="tracking-bottom__content-block-issued-point-dot tracking-bottom__content-block-point-dot"></div>
                    <div class="tracking-bottom__content-block-issued-point-icon tracking-bottom__content-block-icon">
                      <img src="@/assets/img/icons/download.png" alt="" class="tracking-bottom__content-icon">
                    </div>
                    <div class="tracking-bottom__content-block-issued-point-text tracking-bottom__content-block-point-text">Выдан клиенту</div>
                  </div>
                </div>
              </div>
              <div class="tracking-bottom__content-block-time">
                12:33
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script setup>
</script>