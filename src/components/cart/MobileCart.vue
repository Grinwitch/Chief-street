<script setup>
	import { defineComponent } from 'vue';
	import {priceStyle, percentCalculate} from "@/util/utils.js";
  import Header from '@/components/Header.vue';
  import PreLoader from '@/components/PreLoader.vue'

	const priceStyleS = (price) => priceStyle(price);
</script>

<script>
	export default defineComponent({
		name: "cartBlock",
    emits: ["toCart", "clearCart"],
    props:{
      reqState: {
        type: Boolean,
        default: true,
      },
      amount: {
        type: Number,
        default: 0
      },
      oldPrice: {
        type: Number,
        default: 0
      },
      dishes: {
        type: Object,
        default: {}
      }
    },
		computed: {
			shoppingCart(){return this.$store.getters.shoppingCart},
		},
    data(){
      return{
        confirmWindow: false
      }
    },
		methods:{
      toCart: function(id, count){this.$emit('toCart', {'id': id, 'count': count})},
      modalMenu: function(){this.confirmWindow = !this.confirmWindow},
      clearCart: function(key=null){
        this.$emit('clearCart', {'key': key})
        this.confirmWindow = false;
      },
		}
	})
</script>

<template>
  <div class="mobile-cart-dt">
    <Header/>
    <Transition>
      <div v-if="reqState">
        <div class="mobile-cart__preloader-block">
          <div class="mobile-cart__preloader-container">
            <PreLoader/>
          </div>
        </div>
      </div>

      <div v-else>
        <Transition>
          <div class="client-mask" v-if="confirmWindow" @click="modalMenu"></div>
        </Transition>

        <Transition name="v25">
          <div class="client-modal-block" v-if="confirmWindow">
            <div class="client-modal-container">
              <div class="client-modal__title-block">
                <h2>Удалить товары</h2>
                <!-- <img src="@/assets/img/icons8-умножение-60.png" class="client-modal__title-close-button"> -->
              </div>

              <div class="client-modal__desc-block">
                <p>Вы точно хотите удалить выбранные товары ? Отменить данное действие будет невозможно.</p>
              </div>

              <button type="button" class="client-modal__button" @click="clearCart()">Удалить</button>
              <button type="button" 
                      class="client-modal__button" 
                      @click="modalMenu"
                      style="background-color: #e4e4e4; margin-left: 15px; color: black;">
                Отменить
              </button>
            </div>
          </div>
        </Transition>

        <div class="cart-mobile-header">
					<div class="cart-mobile-header__container" style="100px 10px 50% 10px;" v-if="Object.keys(shoppingCart).length === 0">
						<div class="cart-mobile-header__img-block">
							<img src="@/assets/img/icons/empty-cart-d.png" class="cart-mobile-header__img">
						</div>

						<div class="cart-mobile-header__title-block">
							<h1>Корзина пуста</h1>
						</div>

						<div class="cart-mobile-header__desc-block">
							<p>Вернитесь на главное меню что бы найти всё что нужно.</p>
						</div>
					</div>

          <div class="cart-mobile-header__container" v-else>
            <div class="cart-mobile-header__content">
              <div class="cart-mobile-header__content-top">
                <h3 class="cart-header__title">Корзина</h3>
                <div class="cart-header__remove" @click="modalMenu">
                  Очистить
                  <img src="@/assets/img/icons/trash.png" alt="" class="cart-header__remove-img">
                </div>
              </div>
              <div class="cart-mobile-header__content-main">
                <div style="width: 100%;">
                  <TransitionGroup>
                    <div class="cart-mobile-header__item" v-for="dishe, key in dishes" v-bind:key="key">
                      <div class="cart-mobile-header__item-photo">
                        <img :src="dishe.img" alt="cart photo" class="cart-mobile-header__item-img">
                      </div>
                      <div class="cart-mobile-header__item-block">
                        <div class="cart-mobile-header__item-top">
                          <h4 class="cart-mobile-header__item-title">{{dishe.title}}</h4>
                          <div class="cart-mobile-header__item-category">{{dishe.under_title}}</div>
                        </div>
                        <div class="cart-mobile-header__item-bottom">
                          <div class="product-cart__counter" >
                            <div class="m-modal-product__cart_minus js-m-cart__minus" @click="toCart(key, -1)">
                              <img src="@/assets/img/remove.png" alt="" class="m-modal-product__cart_icon">
                            </div>
                            <div class="m-modal-product__cart_value js-m-cart__value">{{shoppingCart[key]}}</div>
                            <div class="m-modal-product__cart_plus js-m-cart__plus" @click="toCart(key, 1)">
                              <img src="@/assets/img/plus.png" alt="" class="m-modal-product__cart_icon">
                            </div>
                          </div>
                          <div class="cart-mobile-header__price">
                            <span class="cart-mobile-header__act-price">{{priceStyleS(dishe.price * shoppingCart[key])}}</span> ₸
                            <div v-if="dishe.old_price > 0" style="text-decoration: line-through; margin-top: 2.5px;}">
                              <span class="cart-mobile-header__old-price">{{priceStyleS(dishe.old_price)}}</span> ₸
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="cart-mobile-header__item-remove" @click="clearCart(key)">
                        <img src="@/assets/img/icons/icons8-close-60.png">
                      </div>
                    </div>
                  </TransitionGroup>
                </div>
              </div>

              <div class="cart-mobile-header__content-bottom">
                <div class="cart-mobile-header__promotion">
                  <div class="cart-mobile-header__promotion-text">Сумма скидки</div>
                  <div class="cart-mobile-header__promotion-price">
                    <span class="promotion-count">{{priceStyleS(oldPrice)}}</span> ₸
                  </div>
                </div>

                <button class="cart-mobile-header__bottom-checkout" @click="$router.push({name: 'checkout'})">
                  <p>Оформить заказ</p>
                  <p style="font-weight: 600">{{priceStyleS(amount)}} ₸</p>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
	.cart-mobile-header__img{
		width: 64px;
		height: 64px;
	}

	.cart-mobile-header__img-block{
		margin-top: 20px;
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.cart-mobile-header__desc-block{
		font-weight: 400;
		font-size: 16px;
		text-align: center;
		line-height: 140%;
		padding: 0 15%;
	}

	.cart-mobile-header__title-block{
		font-weight: 600;
		font-size: 18px;
		text-align: center;
		margin: 20px 0 10px 0;
	}

  .client-modal__title-block{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    padding-bottom:  25px
  }

  .client-modal__title-close-button{
    width: 22px;
    height: 22px
  }

  .client-modal__title-block h2{
    font-size: 18px;
    font-weight: 600;
  }

  .client-modal__button{
    margin-top: 20px;
    border: none;
    background-color: var(--cl_red);
    color: var(--cl_white);
    padding: 10px;
    width: 35%;
    border-radius: 12px;
    font-size: 14px
  }

  .client-modal__desc-block{
    font-size: 14px;
    line-height: 140%;
  }

  .client-modal-block{
    padding: 30px 25px;
    position: fixed;
    width: 325px;
    padding: 30px 25px;
    top: 25%;
    left: 50%;
    background-color: #fff;
    z-index: 260;
    transform: translate(-50%, 0%);
    border-radius: 16px;
  }

  .client-mask{
    position: fixed;
    width: 100%;
    height: 200%;
    background-color: black;
    opacity: 0.6;
    z-index: 259;
    transform: translate(0, -50%);
  }

  /* Cart Desktop Animation */

  .cart-header {
  	top: 80px;
  	right: 0;
  }

  .cart-modal-desktop-enter-active, .cart-modal-desktop-leave-active {
  	transition: all 0.3s ease-in-out;
  }
  /* delay leave of parent element */

  .cart-modal-desktop-enter-from,
  .cart-modal-desktop-leave-to {
  	top: -10px;
  	opacity: 0;
  }

  /* we can also transition nested elements using nested selectors */
  .cart-modal-desktop-enter-active .cart-header,
  .cart-modal-desktop-leave-active .cart-header {
  	transition: all 0.3s ease-in-out;
  }
  /* delay enter of nested element */
  .cart-modal-desktop-enter-active .cart-header {
  	transition-delay: 0.25s;
  }

  .cart-modal-desktop-enter-from .cart-header,
  .cart-modal-desktop-leave-to .cart-header {
  	transform: translateX(30px);
  	/*
  		Hack around a Chrome 96 bug in handling nested opacity transitions.
  		This is not needed in other browsers or Chrome 99+ where the bug
  		has been fixed.
  	*/
  	opacity: 0.001;
  }

  /* Cart Mobile Animations */

  .cart-mobile-header {
  	bottom: 0px;
  }

  .cart-modal-mobile-enter-active, .cart-modal-mobile-leave-active {
  	transition: all 0.3s ease-in-out;
  }
  /* delay leave of parent element */

  .cart-modal-mobile-enter-from,
  .cart-modal-mobile-leave-to {
  	bottom: -100%;
  	opacity: 0;
  }

  /* we can also transition nested elements using nested selectors */
  .cart-modal-mobile-enter-active .cart-mobile-header,
  .cart-modal-mobile-leave-active .cart-mobile-header {
  	transition: all 0.3s ease-in-out;
  }
  /* delay enter of nested element */
  .cart-modal-mobile-enter-active .cart-mobile-header {
  	transition-delay: 0.25s;
  }

  .cart-modal-mobile-enter-from .cart-mobile-header,
  .cart-modal-mobile-leave-to .cart-mobile-header {
  	/*
  		Hack around a Chrome 96 bug in handling nested opacity transitions.
  		This is not needed in other browsers or Chrome 99+ where the bug
  		has been fixed.
  	*/
  	opacity: 0.001;
  }
</style>
