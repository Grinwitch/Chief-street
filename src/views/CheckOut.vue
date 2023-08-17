<script setup>
	import { defineComponent } from 'vue';
	import { fakePoints } from '@/fakeDB.js';
	import {bodyOvr} from "@/util/utils.js";
	import MapBlock from '@/components/MapBlock.vue';
  import PickupMap from '@/components/PickupMap.vue';

	const bodyOvrS = (state) => bodyOvr(state);
</script>

<script>
	export default defineComponent({
		name: "CheckOut",
		computed: {
			shoppingCart(){return this.$store.getters.shoppingCart},
		},
		data(){
			return{
				reqState: true,
				mapState: false,
        pickupMapState: false,
        points: fakePoints,
        checkOutData: {
        	adr: null,
        	deliveryState: null,
        	adrIndicateState: null,
        	pickupPointId: null,
        	paydType: 'kaspi',
        	userInfo: {
        		username: '',
        		phoneNumber: '+7',
        		comment: ''
        	}
        }
			}
		},
		mounted(){
			// reqState
			setTimeout(this.fakeReqState, 1000);
		},
		methods:{
			fakeReqState: function(){
				this.reqState = false;
			},
		},
		watch:{
			'checkOutData.userInfo.username': function(newValue, oldValue){
				let len = newValue.length - 1;
				if (newValue.length === 0 || newValue[len].charCodeAt() === 32) return

				if (newValue[len].charCodeAt() < 1040 || newValue[len].charCodeAt() > 1103)
					this.checkOutData.userInfo.username = oldValue;
			}
		}
	})
</script>


<template>
	<div class="check-out">
		<Transition>
			<div class="check-out__preloader-block" v-show="bodyOvrS(reqState)">
				<div class="check-out__preloader-container">
					<slot name="preloader"></slot>
				</div>
			</div>
		</Transition>

		<Transition name="deliver-map">
			<div class="delivery-map" v-if="mapState">
				<MapBlock @closeModal="mapState = false;"/>
			</div>
		</Transition>
    <Transition name="deliver-map">
      <div class="pickup-map delivery-map" v-if="pickupMapState">
        <PickupMap :selectionPointId="checkOutData.pickupPointId"
        					 :points="points"
        					 @closeModal="pickupMapState = false;"
        					 @selectId="(data) => {checkOutData.pickupPointId = parseInt(data.id)}"/>
      </div>
    </Transition>

		<slot name="header"></slot>
			<div>
				<div class="container">
					<section class="checkout">
						<div class="checkout__content">
              <div class="page-header__breadcrumbs">
                <div class="page-header__breadcrumb page-header__breadcrumb-main" @click="$router.push({name: 'home'})">Главная</div>
                <span class="page-header__breadcrumb-separator">/</span>
                <div class="page-header__breadcrumb">Оформление заказа</div>
              </div>
              <div class="page-header__top">
                <h3 class="page-header__title">Оформление заказа</h3>
              </div>
							<div class="checkout-content__items">
								<div class="checkout-content__item-left">

									<!-- Adress Block -->
									<div class="checkout-content__item-left-block">
										<div class="checkout-content__item-left-header">
											<span class="checkout-content__item-left-point">1</span>
											<h3 class="checkout-content__item-left-title">Адрес</h3>
										</div>

										<div class="checkout-content__item-left-descr">
											* Доставка осуществляется в пределах нашей зоны доставки, пожалуйста, ознакомьтесь с ней
										</div>

										<div class="checkout-content__item-left-info">
											<button v-bind:class="['checkout-content__info-block',
																						(checkOutData.adrIndicateState) ? 'checkout-content__item-active' : '']"
															@click="mapState = true; checkOutData.adrIndicateState = true">

												<label for="address1" class="checkout-content__info-block-top">
													<div class="checkout-address__indicator"></div>
													<input type="radio" name="cart-address__type" class="modal-card__list-input radiobutton-input" id="address1" value="address">
													<h4 class="checkout-content__info-block-title">Указать адрес</h4>
												</label>

												<div class="checkout-content__info-block-bottom"></div>
												<div class="checkout-content__info-block-faq">?</div>
												<div class="checkout-content__info-block-faq-text">
														Укажите место на карте в пределах зоны доставки. Это позволит нам быстрее осуществить доставку.
												</div>
											</button>

											<button v-bind:class="['checkout-content__info-block',
																						(checkOutData.adrIndicateState === false) ? 'checkout-content__item-active' : '']"
															@click="checkOutData.adrIndicateState = false">
												<label for="address2" class="checkout-content__info-block-top">
													<div class="checkout-address__indicator"></div>
													<input type="radio" name="cart-address__type" class="modal-card__list-input radiobutton-input" id="address2" value="address">
													<h4 class="checkout-content__info-block-title">Ввести вручную</h4>
												</label>
												<div class="checkout-content__info-block-bottom">
												</div>
												<span class="checkout-content__info-block-faq">?</span>
												<span class="checkout-content__info-block-faq-text">Укажите место на карте в пределах зоны доставки. Это позволит нам быстрее осуществить доставку.</span>
											</button>

										</div>
										<Transition>
											<div class="checkout-content__item-pickup" v-if="checkOutData.adrIndicateState === false">
													<input type="text" class="checkout-content__item-pickup-input" v-model="checkOutData.adr">
													<label for="checkout-pickup" class="checkout-label__pickup">Введите ваш адрес *</label>
											</div>
										</Transition>
									</div>

									<!-- Delivery Type -->
									<div class="checkout-content__item-left-block">
										<div class="checkout-content__item-left-header">
											<span class="checkout-content__item-left-point">2</span>
											<h3 class="checkout-content__item-left-title">Способ доставки</h3>
										</div>
										<div class="checkout-content__item-left-descr"></div>
										<div class="checkout-content__item-left-info">

											<button v-bind:class="['checkout-content__info-block',
																						(checkOutData.deliveryState) ? 'checkout-content__item-active' : '']"
															@click="checkOutData.deliveryState = true;">

												<label for="deliver1" class="checkout-content__info-block-top">
													<div class="checkout-address__indicator"></div>
													<input type="radio" name="cart-deliver__type" class="modal-card__list-input radiobutton-input" id="deliver1" value=" deliver">
													<h4 class="checkout-content__info-block-title">Яндекс доставка</h4>
												</label>
                        <img src="@/assets/img/icons/yandex.svg" alt="checkout icon" class="checkout-address__icon yandex-icon">
												<div class="checkout-content__info-block-bottom"></div>
												<span class="checkout-content__info-block-faq">?</span>
												<span class="checkout-content__info-block-faq-text">Укажите место на карте в пределах зоны доставки. Это позволит нам быстрее осуществить доставку.</span>
											</button>

											<button v-bind:class="['checkout-content__info-block',
																						(checkOutData.deliveryState === false) ? 'checkout-content__item-active' : '']"
															@click="pickupMapState = true; checkOutData.deliveryState = false;">

												<label for="deliver2" class="checkout-content__info-block-top">
													<div class="checkout-address__indicator"></div>
													<input type="radio" name="cart-deliver__type" class="modal-card__list-input radiobutton-input" id="deliver2" value=" deliver">
													<h4 class="checkout-content__info-block-title">Самовывоз</h4>
												</label>
												<div class="checkout-content__info-block-bottom">
												</div>
												<div class="checkout-content__info-block-faq">?</div>
												<div class="checkout-content__info-block-faq-text">Укажите место на карте в пределах зоны доставки. Это позволит нам быстрее осуществить доставку.</div>
											</button>

										</div>
									</div>

									<!-- Pay Type -->
									<div class="checkout-content__item-left-block">
										<div class="checkout-content__item-left-header">
											<span class="checkout-content__item-left-point">3</span>
											<h3 class="checkout-content__item-left-title">Способ оплаты</h3>
										</div>
										<div class="checkout-content__item-left-descr"></div>
										<div class="checkout-content__item-left-info">

											<button v-bind:class="['checkout-content__info-block',
																						(checkOutData.paydType === 'kaspi') ? 'checkout-content__item-active' : '']"
																						@click="checkOutData.paydType = 'kaspi'">
												<label for="payment1" class="checkout-content__info-block-top">
													<div class="checkout-address__indicator"></div>
													<input type="radio" name="cart-payment__type" class="modal-card__list-input radiobutton-input" id="payment1" value="payment">
													<h4 class="checkout-content__info-block-title">Kaspi Gold</h4>
												</label>
                        <img src="@/assets/img/icons/kaspi.png" alt="checkout icon" class="checkout-address__icon kaspi-icon">
												<div class="checkout-content__info-block-bottom"></div>
												<span class="checkout-content__info-block-faq">?</span>
												<span class="checkout-content__info-block-faq-text">Укажите место на карте в пределах зоны доставки. Это позволит нам быстрее осуществить доставку.</span>
											</button>

											<button v-bind:class="['checkout-content__info-block',
																						(checkOutData.paydType === 'card') ? 'checkout-content__item-active' : '']"
															@click="checkOutData.paydType = 'card'">
												<label for="payment2" class="checkout-content__info-block-top">
													<div class="checkout-address__indicator"></div>
													<input type="radio" name="cart-payment__type" class="modal-card__list-input radiobutton-input" id="payment2" value="payment">
													<h4 class="checkout-content__info-block-title">Visa/MasterCard</h4>
												</label>
                        <img src="@/assets/img/icons/mastercard.png" alt="checkout icon" class="checkout-address__icon mastercard-icon">
                        <img src="@/assets/img/icons/visa.png" alt="checkout icon" class="checkout-address__icon visa-icon">
												<div class="checkout-content__info-block-bottom">
												</div>
												<span class="checkout-content__info-block-faq">?</span>
												<span class="checkout-content__info-block-faq-text">Укажите место на карте в пределах зоны доставки. Это позволит нам быстрее осуществить доставку.</span>
											</button>
										</div>
									</div>

									<!-- User info -->
									<div class="checkout-content__item-left-block">
										<div class="checkout-content__item-left-header">
											<span class="checkout-content__item-left-point">4</span>
											<h3 class="checkout-content__item-left-title">Контактная информация</h3>
										</div>
										<div class="checkout-content__item-left-descr"></div>
										<div class="checkout-content__item-left-info checkout-contacts">
											<div class="checkout-content__item-left-name">
												<input type="text"
															 class="checkout-content__item-name-input checkout-input"
															 v-model="checkOutData.userInfo.username">
												<label for="checkout-name" v-bind:class="[(checkOutData.userInfo.username.length > 0) ? 'lab_active' : 'checkout-label__name']">Имя *</label>
											</div>
											<div class="checkout-content__item-left-phone">
												<input type="tel"
															 class="checkout-content__item-phone-input checkout-input"
															 v-model="checkOutData.userInfo.phoneNumber">
												<label for="checkout-phone" class="lab_active">Номер телефона *</label>
											</div>
											<div class="checkout-content__item-left-descr">
												<textarea name="description" id="checkout-descr" cols="30" rows="10"
																	class="checkout-content__item-descr-textarea"
																	v-model="checkOutData.userInfo.comment"></textarea>
												<label for="checkout-descr" v-bind:class="[(checkOutData.userInfo.comment.length > 0) ? 'lab_active' : 'checkout-label__descr']">
													Добавьте комментарий *
												</label>
											</div>
										</div>
									</div>
								</div>

								<div class="checkout-content__item-right">
									<div class="checkout-content__item-right-block">
										<div class="checkout-content__item-right-top">
											<div class="checkout-content__item-right-title">Ваш заказ</div>
											<div class="checkout-content__item-right-quantity">
												<span class="checkout-content__item-quantity-text">Кол-во товаров в корзине</span>
												<a class="checkout-content__item-quantity-count"
													 @click="$router.push({name: 'cart'})">{{Object.keys(shoppingCart).length}}</a>
											</div>
											<div class="checkout-content__item-right-deliver">
												<span class="checkout-content__item-deliver-text">Доставка</span>
												<span class="checkout-content__item-deliver-title" v-if="checkOutData.deliveryState">Яндекс</span>
												<span class="checkout-content__item-deliver-title" v-else>Самовывоз</span>
											</div>
											<div class="checkout-content__item-right-price">
												<span class="checkout-content__item-price-text">Сумма</span>
												<span class="checkout-content__item-price-count">1 450 ₸</span>
											</div>
										</div>
										<div class="checkout-content__item-right-bottom">
											<div class="checkout-content__item-bottom-price">
												<h3 class="checkout-content__item-bottom-title">Сумма к оплате</h3>
												<div class="checkout-content__item-bottom-price">1450 ₸</div>
											</div>
											<button class="checkout-content-product-cart__add" @click="$router.push({name: 'tracking'})">
												Оформить заказ
											</button>
											<p class="checkout-content__item-bottom-descr">Нажимая кнопку «Оформить заказ», я подтверждаю наличие рецепта и ознакомлен с правилами доставки.</p>
										</div>
									</div>
								</div>

							</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<style scoped>

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

	opacity: 0.001;
}



</style>
<script setup>
</script>
