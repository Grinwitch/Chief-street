<script setup>
	import { defineComponent } from 'vue';
	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';
	import PreLoader from '@/components/PreLoader.vue'
	import {priceStyle} from "@/util/utils.js";

	const priceStyleS = (price) => priceStyle(price);
</script>

<script>
	export default defineComponent({
		name: "DesctopCart",
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
	<div class="cart-desktop-dt">
		<Header />

		<Transition>
      <div v-if="reqState">
        <div class="mobile-cart__preloader-block">
          <div class="mobile-cart__preloader-container">
            <PreLoader/>
          </div>
        </div>
      </div>

			<section class="cart-desktop" v-else>
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

        <div class="cart-mobile-header__container" style="100px 10px 50% 10px;" v-if="Object.keys(shoppingCart).length === 0">
					<div class="cart-mobile-header__img-block">
						<img src="@/assets/img/icons/empty-cart-d.png" class="cart-mobile-header__img">
					</div>

					<div class="cart-mobile-header__title-block">
						<h1>Корзина пуста</h1>
					</div>

					<div class="cart-mobile-header__desc-block" style="margin-bottom: 20px;">
						<p>Вернитесь на главное меню что бы найти всё что нужно.</p>
					</div>

					<button class="cart-none__btn">На главную</button>
				</div>

				<div class="container" v-else>
					<div class="cart-header__breadcrumbs">
						<div class="cart-header__breadcrumb cart-header__breadcrumb-main" @click="$router.push({name: 'home'})">Главная</div>
						<span class="cart-header__breadcrumb-separator">/</span>
						<div class="cart-header__breadcrumb">Корзина</div>
					</div>
					<div class="cart-header__top">
						<h3 class="cart-header__title">Корзина</h3>
						<div class="cart-header__remove" @click="modalMenu">
							<img src="@/assets/img/icons/trash.png" alt="" class="cart-header__remove-img">
							Очистить
						</div>
					</div>
					<div class="cart-header">
						<div class="cart-header__container">
							<div class="cart-header__content">
								<div class="cart-header__content-top">
									<div class="cart-header__points">
										<div class="cart-header__point cart-header__name">Блюдо</div>
										<div class="cart-header__point cart-header__quantity">Кол-во</div>
										<div class="cart-header__point cart-header__price">Цена</div>
									</div>

								</div>
								<div class="cart-header__items">
									<TransitionGroup>
										<div class="cart-header__item" v-for="dishe, key in dishes" v-bind:key="key">
											<div class="cart-header__item-left">
												<div class="cart-header__item-photo">
													<img :src="dishe.img" alt="" class="cart-header__item-img">
												</div>
												<div class="cart-header__item-info">
													<div class="cart-header__item-product">
														<span class="cart-header__item-title">{{dishe.title}}</span>
														<span class="cart-header__item-portion">{{dishe.under_title}}</span>
													</div>
													<div class="cart-header__item-descr">{{dishe.desc}}</div>
												</div>
												<div class="product-cart__counter" >
													<div class="m-modal-product__cart_minus js-m-cart__minus" @click="toCart(key, -1)">
														<img src="@/assets/img/remove.png" alt="" class="m-modal-product__cart_icon">
													</div>
													<div class="m-modal-product__cart_value js-m-cart__value">{{shoppingCart[key]}}</div>
													<div class="m-modal-product__cart_plus js-m-cart__plus" @click="toCart(key, 1)">
														<img src="@/assets/img/plus.png" alt="" class="m-modal-product__cart_icon">
													</div>
												</div>
											</div>
											<div class="cart-header__item-right">
												<div class="cart-header__item-price">
													<span class="cart-header__item-price-current">{{priceStyleS(dishe.price)}} ₸</span>
													<span class="cart-header__item-price-oldprice" v-if="dishe.old_price > 0">
														{{priceStyleS(dishe.old_price)}} ₸
													</span>
												</div>
												<div class="cart-header__item-remove" @click="clearCart(key)">
													<svg viewBox="0 0 38.0919 40.5429"><path class="cls-1" d="M35.1491,39.3951V60.8883a6.2561,6.2561,0,0,0,6.2366,6.2366H59.81a6.2549,6.2549,0,0,0,6.2366-6.2366V39.3951H35.1491ZM57.8477,31.016c-0.5913-5.912-13.9111-5.912-14.5019,0H33.838a2.2942,2.2942,0,0,0-2.2875,2.2868h0A2.2939,2.2939,0,0,0,33.838,35.59H67.3556a2.2938,2.2938,0,0,0,2.2868-2.2875h0a2.2941,2.2941,0,0,0-2.2868-2.2868h-9.508ZM43.9426,60.6523c-0.8815,0-1.5868-.3957-1.5868-0.89V45.9838c0-.4947.7053-0.8907,1.5868-0.8907s1.587,0.396,1.587.8907v13.778c0,0.4947-.7053.89-1.587,0.89h0Zm6.6539,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778c0,0.4947-.7053.89-1.5868,0.89h0Zm6.6551,0c-0.8817,0-1.587-.3957-1.587-0.89V45.9838c0-.4947.7053-0.8907,1.587-0.8907s1.5868,0.396,1.5868.8907v13.778C58.8383,60.2565,58.133,60.6523,57.2515,60.6523Z" transform="translate(-31.5505 -26.5819)"></path></svg>
												</div>
											</div>
										</div>
									</TransitionGroup>
								</div>
								<div class="cart-header__bottom">
									<div class="cart-header__bottom-left">
										<div class="cart-header__bottom-promo">
											<input type="text" class="cart-header__bottom-input" placeholder="Введите промокод">
										</div>
										<button class="cart-header__bottom-promo-activate">Применить</button>
									</div>
									<div class="cart-header__bottom-right" @click="$router.push({name: 'checkout'})">
										<button class="cart-header__bottom-checkout">
											<span class="cart-header__bottom-checkout-text">Оформить заказ на сумму:</span>
											<span class="cart-header__bottom-checkout-total">{{priceStyleS(amount)}} ₸</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Transition>

		<Footer />
	</div>
</template>
