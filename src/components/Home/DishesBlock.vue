<script setup>
	import { defineComponent } from 'vue';
	import { fakeDishesList, fakeDishes } from '@/fakeDB.js';
	import ProductModal from './ProductModal.vue';
	import SliderBlock from '@/components/Home/SliderBlock.vue';
	import {priceStyle, percentCalculate} from "@/util/utils.js";

	const priceStyleS = (price) => priceStyle(price);
</script>

<script>
	export default defineComponent({
		name: "DishesBlock",
		computed: {
			shoppingCart(){return this.$store.getters.shoppingCart},
			favoriteLists(){return this.$store.getters.favoriteLists}
		},
		data(){
			return {
				dishes: {},
				selectDishe: null,
				selectDishesId: 0,
				dishesList: {},
				selectionDisheId: 0,
				lastSlideId: 0
			}
		},

		mounted(){
			setTimeout(this.fakeRequest, 1000);

			addEventListener("scroll", (event) => {
				let top = 0, left = 0;
				let el = null, rect = null, win = null;
				let scrollY = window.scrollY, elemY = 0, elemHeight = 0;
				let mobileUl = document.querySelector('.bottom-header__carousel-list');

				Object.keys(this.dishesList).concat([0]).forEach((elem) => {
					if (this.$refs[elem] !== undefined && this.$refs[elem] !== null){
						el = this.$refs[elem];
						if (el.length > 0) el = el[0]

						try{
							elemHeight = el.getBoundingClientRect().height;
							rect = el.getBoundingClientRect();
							win = el.ownerDocument.defaultView;

							top = percentCalculate(rect.top + win.pageYOffset, 10);
							left = rect.left + win.pageXOffset;

							if (scrollY > top && percentCalculate(top + elemHeight, 10) > scrollY){
								this.selectionDisheId = parseInt(elem);
								this.activeState = true;

								if (this.lastSlideId !== this.selectionDisheId)
									setTimeout(() => {
											mobileUl.scroll({top: 0, left: parseInt(elem) * 100, behavior: "smooth"});
											this.lastSlideId = parseInt(elem);
									}, 350)


								return
							}
						}catch{
							return
						}
					}
				})
			});
		},

		methods:{
			// Get DishesList and Dishes from Server
			// Dishes must be sorted, the key will be the id of the dish, the values ​​of the dish
			// An example structure can be found in fakeDB
			fakeRequest: function(){
				this.dishes = fakeDishes;
				this.dishesList = fakeDishesList;
				this.$emit('reqStatus', {status: false})
			},

			bottomHeaderActive: function(id){
				return (this.selectionDisheId === parseInt(id)) ? 'bottom-header__active-elem' : '';
			},

			toCart: function(id, count, inputState = false){
				this.$store.dispatch('addToCart', {'id': id, 'count': count});
			},

			closeModal: function(){
				this.selectDishe = null;
				document.querySelector('body').style.overflow = 'auto';
			},

			sortFavoriteList: function(){
				let resutl = {};

				for (const [key, value] of Object.entries(this.favoriteLists))
					resutl[key] = fakeDishes[value][key];

				return resutl
			},

			amountSum: function(){
				let amount = 0

				for (const [key, count] of Object.entries(this.shoppingCart)){
					for (const [dishesListKey, dishe] of Object.entries(this.dishes)){
						if (dishe[key] === undefined)
							continue
						amount += dishe[key].price * count;
					}
				}

				return priceStyle(amount);
			},

			modalDishes: function(id){
				document.querySelector('body').style.overflow = "hidden";
				this.selectDishesId = parseInt(id);

				for (const [dishesListKey, dishe] of Object.entries(this.dishes)){
					if (dishe[id] === undefined)
						continue

					this.selectDishe = dishe[id];
				}
			},

			// Scroll to elem by ref
			scrollToBottom(elem) {
				this.selectionDisheId = parseInt(elem);
				let st = this.$refs[elem];
				if (st === undefined) return
				if (st.length > 0)st = st[0];
				st.scrollIntoView({ behavior: "smooth" })
			},

			// Add or remove favorite product
			favoriteChange: function(id, dishesListKey){
				if (this.favoriteLists[id] === undefined) this.favoriteLists[id] = dishesListKey;
				else delete this.favoriteLists[id];
				this.$store.dispatch('addToFavorite', this.favoriteLists);
			},
		},
	})
</script>

<template>
	<div>
		<Transition>
			<div class="modal-card-overlay" v-if="selectDishe" @click="closeModal"></div>
		</Transition>


		<Transition name="cart_m">
			<div class="modal-card" v-if="selectDishe">
				<ProductModal :disheData="selectDishe" :disheId="selectDishesId" @closeModal="closeModal"/>
			</div>
		</Transition>


		<!-- Desctop Section -->
		<section class="bottom-header-desc">
			<div class="container">
				<div class="bottom-header-desc__block">

					<div class="bottom-header-desc__block-left-container">
						<ul class="bottom-header-desc__block-left-ul-block">
								<Transition>
									<li v-bind:class="['bottom-header-desc__block-left-ul-item', bottomHeaderActive(0)]"
											ref="0_nav"
											v-if="Object.keys(favoriteLists).length > 0"
											@click="scrollToBottom('0')">Избранные
									</li>
								</Transition>

							<li v-bind:class="['bottom-header-desc__block-left-ul-item', bottomHeaderActive(key)]"
									v-for="dishesI, key in dishesList" v-bind:key="key"
									@click="scrollToBottom(key)">
								{{dishesI}}
							</li>

						</ul>
					</div>

					<div class="bottom-header-desc__block-right-icon-block">
						<img src="@/assets/img/icons8-корзина-48.png" class="bottom-header-desc__block-right-icon">
						<div class="bottom-header-desc__block-right-cart-count" v-if="Object.keys(shoppingCart).length > 0">
							{{Object.keys(shoppingCart).length}}
						</div>
					</div>


				</div>
			</div>
		</section>

		<SliderBlock/>

		<!-- Mobile Section Version -->
		<section class="bottom-header__mobile-block" id="header-sticky__block-dd">
			<div class="bottom-header__block">
				<div class="bottom-header__container">
					<nav class="bottom-header__dishes-block">
						<ul class="bottom-header__dishes-block">
							<div class="bottom-header__slider">
								<div class="bottom-header__carousel">
									<div class="bottom-header__carousel-container">
										<ul class="bottom-header__carousel-list">
											<!-- bottom-header__active-elem Active class -->
											<Transition>
												<li v-bind:class="['bottom-header__dishes-block-link', bottomHeaderActive(0)]"
														v-if="Object.keys(favoriteLists).length > 0"
														@click="scrollToBottom('0')">
														Избранные
												</li>
											</Transition>

											<li v-bind:class="['bottom-header__dishes-block-link', bottomHeaderActive(key)]"
													:ref="`${key}_hd`"
													v-for="dishesI, key in dishesList"
													v-bind:key="key"
													@click="scrollToBottom(key)">
												{{dishesI}}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</ul>
					</nav>

					<div class="bottom-header__card-block">
						<img src="@/assets/img/svgexport-4.svg" class="bottom-header__card-block-img">
					</div>
				</div>
			</div>
		</section>

		<div class="container">
			<Transition>
				<section class="home-products" v-if="Object.keys(favoriteLists).length > 0" :ref="0">
					<div class="home-products__content">
						<h2 class="home-products__title" >Избранные</h2>
						<div class="home-products__carts">
							<TransitionGroup name="list">
							<div class="home-products__cart" v-for="dishe, key in sortFavoriteList()" v-bind:key="key">
								<div class="home-products__cart-category">

									<div class="home-products__cart-category-status category-popular" v-if="dishe.stickers.hit">Хит</div>
									<div class="home-products__cart-category-status category-new" v-if="dishe.stickers.new">Новинка</div>
									<div class="home-products__cart-category-status category-promotion" v-if="dishe.stickers.promo">Акция</div>
									<div class="home-products__cart-category-status category-percent" v-if="dishe.stickers.discount > 0">
										-{{dishe.stickers.discount}}%
									</div>

									<div class="home-products__cart-category-status category-favorite-active" @click="favoriteChange(key)">
										<img src="@/assets/img/icons/icons8-сердце-50.png" alt="" class="category-favorite__img">
									</div>
								</div>


								<a class="home-products__cart-link">
									<div class="home-products__cart-photo" @click="modalDishes(key)">
										<img :src="dishe.img" class="home-products__cart-photo-img">
										<div class="home-products__cart-img-zoom">
											<div class="img-zoom-icon">
												<img src="@/assets/img/icons/zoom-in-button.png" alt="zoom icon" class="img-zoom-icon-photo">
											</div>
										</div>
									</div>
								</a>

								<div class="home-products__cart-info">
									<div class="home-products__cart-main" @click="modalDishes(key)">
										<h4 class="home-products__cart-title">{{dishe.title}}</h4>
										<div class="home-products__cart-portion">
											{{dishe.under_title}}
											<span v-if="shoppingCart[key] !== undefined"> • {{priceStyleS(dishe.price)}} ₸</span>
										</div>
										<div class="home-products__cart-descr">{{dishe.desc}}</div>
										<div class="product-cart__price-old" v-if="dishe.old_price > 0">{{dishe.old_price}} тг.</div>
									</div>
									<div class="home-products__cart-footer">
											<div class="product-cart__counter" v-if="shoppingCart[key] !== undefined">
												<div class="m-modal-product__cart_minus js-m-cart__minus" @click="toCart(key, -1)">
													<img src="@/assets/img/remove.png" alt="" class="m-modal-product__cart_icon">
												</div>
												<div class="m-modal-product__cart_value js-m-cart__value">{{shoppingCart[key] || 1}}</div>
												<div class="m-modal-product__cart_plus js-m-cart__plus" @click="toCart(key, 1)">
													<img src="@/assets/img/plus.png" alt="" class="m-modal-product__cart_icon">
												</div>
										 	</div>
											<button class="product-cart__add js-cart__add" v-else @click="toCart(key, 1)">
													<p class="product-cart__add-p">{{priceStyleS(dishe.price)}} ₸</p>
													<p class="product-cart__add-old-p" v-if="dishe.old_price > 0">{{priceStyleS(dishe.old_price)}} ₸</p>
											</button>

									</div>
								</div>
							</div>
								</TransitionGroup>
						</div>
					</div>
				</section>
			</Transition>

			<section class="home-products" v-for="disheKey in Object.keys(dishes)" v-bind:key="disheKey" :ref="parseInt(disheKey)">
				<div class="home-products__content">
					<h2 class="home-products__title">{{dishesList[disheKey]}}</h2>
					<div class="home-products__carts">
						<div class="home-products__cart" v-for="dishe, key in dishes[disheKey]">
							<div class="home-products__cart-category">
								<!-- Hits Icon Block -->
								<div class="home-products__cart-category-status category-popular" v-if="dishe.stickers.hit">Хит</div>
								<div class="home-products__cart-category-status category-new" v-if="dishe.stickers.new">Новинка</div>
								<div class="home-products__cart-category-status category-promotion" v-if="dishe.stickers.promo">Акция</div>
								<div class="home-products__cart-category-status category-percent" v-if="dishe.stickers.discount > 0">-{{dishe.stickers.discount}}%</div>

								<div v-bind:class="['home-products__cart-category-status category-favorite', (favoriteLists[key] !== undefined) ? 'home-products__cart-category-status category-favorite-active' : '']"
										 @click="favoriteChange(key, disheKey)">
										<img src="@/assets/img/icons/icons8-сердце-50.png" alt="" class="category-favorite__img">
								</div>

							</div>
							<a  class="home-products__cart-link" @click="modalDishes(key)">
								<div class="home-products__cart-photo">
									<img :src="dishe.img" class="home-products__cart-photo-img">
									<div class="home-products__cart-img-zoom">
										<div class="img-zoom-icon">
											<img src="@/assets/img/icons/zoom-in-button.png" alt="zoom icon" class="img-zoom-icon-photo">
										</div>
									</div>
								</div>
							</a>
							<div class="home-products__cart-info">
								<div class="home-products__cart-main">
									<div @click="modalDishes(key)">
										<h4 class="home-products__cart-title">{{dishe.title}}</h4>
										<div class="home-products__cart-portion">
											{{dishe.under_title}}
											<span v-if="shoppingCart[key] !== undefined"> • {{priceStyleS(dishe.price)}} ₸</span>
										</div>
									</div>
									<div class="home-products__cart-descr">{{dishe.desc}}</div>
								</div>
								<div class="home-products__cart-footer">
									<div class="product-cart__counter" v-if="shoppingCart[key] !== undefined">
											<div class="m-modal-product__cart_minus js-m-cart__minus" @click="toCart(key, -1)">
												<img src="@/assets/img/remove.png" alt="" class="m-modal-product__cart_icon">
											</div>
											<div class="m-modal-product__cart_value js-m-cart__value">{{shoppingCart[key] || 1}}</div>
											<div class="m-modal-product__cart_plus js-m-cart__plus" @click="toCart(key, 1)">
												<img src="@/assets/img/plus.png" alt="" class="m-modal-product__cart_icon">
											</div>
									 </div>
									<button class="product-cart__add" v-else @click="toCart(key, 1)">
										<p class="product-cart__add-p">{{priceStyleS(dishe.price)}} ₸</p>
										<p class="product-cart__add-old-p" v-if="dishe.old_price > 0">{{priceStyleS(dishe.old_price)}} ₸</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

		<Transition name="list">
		<div class="mobile-to-cart__block" v-if="Object.keys(shoppingCart).length > 0">
			<div class="mobile-to-cart__delivery-info-block">
			</div>

				<div class="mobile-to-cart__block-order-button-block">
					<div class="mobile-to-cart__container" @click="$router.push({name: 'cart'})">
						<div class="mobile-to-cart__count-block">30-60 мин</div>
						<div class="mobile-to-cart__text-block">Заказать</div>
						<div class="mobile-to-cart__amount-block">{{amountSum()}} ₸</div>
					</div>
				</div>
			</div>
		</Transition>

	</div>
</template>
