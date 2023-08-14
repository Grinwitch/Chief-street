<script setup>
	import { defineComponent } from 'vue';
	import { allDishes} from '@/fakeDB.js';
	import {priceStyle, percentCalculate} from "@/util/utils.js";

	const priceStyleS = (price) => priceStyle(price);
</script>

<script>
	export default defineComponent({
		name: "cartBlock",
		computed: {
			shoppingCart(){return this.$store.getters.shoppingCart},
		},
		data(){
			return{
				amount: 0,
				oldPrice: 0,
				dishesFakeDb: allDishes, // dishesList
				dishes: {}, // Req Resutl
				
			}
		},
		async mounted(){
			let cartProductIdList = Object.keys(this.shoppingCart); // Product Id List 
			await this.fakeRequest(); // Get a list of products from the server
		},

		methods:{
			// Add to Cart
			toCart: function(id, count){
				this.$store.dispatch('addToCart', {'id': id, 'count': count});
				this.clearElem();
			},

			// Full Clear Cart
			clearCart: function(key=null){
				this.$store.dispatch((key === null) ? 'clearCart' : 'cartDelById', key);
				this.clearElem();
			},

			// Fake Request
			fakeRequest: async function(){
				for (let key in this.shoppingCart)
					this.dishes[key] = this.dishesFakeDb[key];
				
				this.amountSum();
			},

			clearElem: function(){
				for (let key in this.dishes){
					if (this.shoppingCart[key] === undefined)
						delete this.dishes[key];
				}
				this.amountSum();
			},

			// Calculate Amount Sum and Discount Price
			amountSum: function(){
				this.amount = 0;
				this.oldPrice = 0;

				for (let key in this.shoppingCart){
					if (this.dishes[key] !== undefined){
						this.amount += this.dishes[key].price * this.shoppingCart[key];
						this.oldPrice += (this.dishes[key].old_price > 0) ? this.dishes[key].old_price - this.dishes[key].price : 0;
					}

				}
				this.amount;
			},
		}
	})
</script>

<template>
	<div>
		<slot name="header"></slot>
		<div class="cart-mobile-header">
			<div class="cart-mobile-header__container">
				<div class="cart-mobile-header__content">
					<div class="cart-mobile-header__content-top">
						<h3 class="cart-header__title">Корзина</h3>
						<div class="cart-header__remove" @click="clearCart()">
							<img src="@/assets/img/icons/trash.png" alt="" class="cart-header__remove-img">
							Очистить
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
											<div class="cart-mobile-header__price"><span>{{priceStyleS(dishe.price * shoppingCart[key])}}</span> ₸</div>
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

						<button class="cart-mobile-header__bottom-checkout" @click="this.$router.push('/checkout')">
							<p>Оформить заказ</p>
							<p style="font-weight: 600">{{priceStyleS(amount)}} ₸</p>
						</button>
					</div>

				</div>
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
