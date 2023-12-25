<script setup>
	import { defineComponent } from "vue";
	import Header from '@/components/Header.vue';
	// import CartBlock from "@/components/Home/CartBlock.vue";
	import InfoDesktop from '@/components/info_blocks/InfoDesktop.vue';
</script>

<script>
	export default defineComponent({
		name: "HeadeeComponent",
		props:{
			topHeader: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			shoppingCart(){return this.$store.getters.shoppingCart},
		},
		data(){
			return{
				compName: '',
				modalInfoState: false
			}
		},
		mounted(){
			// this.setCompName()
			setTimeout(this.setCompName, 35);
		},
		methods:{
			setCompName: function(){
				let path = window.location.pathname.replace('/', '');
				this.compName = (path !== '') ? path : 'base';
			},

			activeElem: function(name){
				const index = name.indexOf(this.compName);
				return (index > -1) ? '' : 'mobile-bottom-menu__icon-block-non-act';
			}
		},
		watch:{
			'$route' (to, from){
				this.compName = (to.name !== '') ? to.name : 'base';
			}
		},
	})
</script>

<template>
	<div>
		<header class="header" v-if="topHeader">
			<div class="header__block" id="header-top-sticky">
				<div class="container">
					<div class="header__container">
						<div class="header__left-block">
							<div class="header__left-block-logo-block" @click="$router.push({name: 'home'})">
								<img src="@/assets/img/logo-9.png" class="header__left-block-logo">
							</div>

							<div class="header__left-block-info-block">
								<img src="@/assets/img/svgexport-1.svg" class="header__left-block-info-block-img">
								<p class="header__left-block-info-block-text" @click="modalInfoState = !modalInfoState">Информация</p>
								<Transition>
									<div class="info-modal" v-if="modalInfoState">
										<InfoDesktop/>
									</div>
								</Transition>
							</div>
						</div>

						<div class="header__right-block">
							<div class="header__right-phone-number">
								<a href="tel:+77025036161" class="header__right-phone-number-text">+7 (702) 503-61-61</a>
							</div>

							<!-- <div class="header__right-background-change-button-block">
								<div>
		  							<input type="checkbox" class="checkbox" id="checkbox12">
		  							<label for="checkbox12" class="checkbox-label">
		    							<i class="fas fa-moon"></i>
		    							<i class="fas fa-sun"></i>
		    							<span class="ball"></span>
		  							</label>
								</div>
							</div> -->


							<div class="header__right-auth-button" @click="$router.push({name: 'profile'})">
								<img src="@/assets/img/svgexport-3.svg" class="header__right-auth-button-img">
								<p class="header__right-auth-button-text">Войти</p>
							</div>
						</div>
					</div>

					<div class="mobile-header">
						<div class="mobile-header__container">
							<a class="mobile-header__tel-icnon-block">
								
							</a>

							<div class="mobile-header__deliver--block" @click="$router.push({name: 'home'})">
                <img src="@/assets/img/logo-mobile.png" alt="" class="mobile-header__logo">
							</div>
							<a href="tel:+77025036161" class="mobile-header__info-block">
								<img src="@/assets/img/icons8-телефон-50.png" class="header__right-phone-number-img">
							</a>

						</div>
					</div>

					<div class="bottom-header__desc-block">
					</div>
				</div>
			</div>
		</header>

		<div class="mobile-bottom-menu__block">
			<div class="mobile-bottom-menu__container">

				<div v-bind:class="['mobile-bottom-menu__icon-block', activeElem(['base'])]"
					 @click="$router.push({name: 'home'})">
					<img src="@/assets/img/icons8-пицца-64.png" class="mobile-bottom-menu__icon">
					<p class="mobile-bottom-menu__item-name">Меню</p>
				</div>

				<div v-bind:class="['mobile-bottom-menu__icon-block', activeElem(['discount'])]" @click="$router.push({name: 'discount'})">
					<img src="@/assets/img/icons8-скидка-50.png" class="mobile-bottom-menu__icon">
					<p class="mobile-bottom-menu__item-name">Акции</p>
				</div>

				<div style="position: relative; width: 18%" @click="$router.push({name: 'cart'})">
					<div v-bind:class="['mobile-bottom-menu__icon-block', activeElem(['cart', 'checkout'])]" style="width: 100%;">
						<img src="@/assets/img/icons8-корзина-48.png" class="mobile-bottom-menu__icon">
						<p class="mobile-bottom-menu__item-name">Корзина</p>
					</div>

					<Transition>
						<div class="mobile-bottom-menu__cart-item-count" id="cart-item-count" v-if="Object.keys(shoppingCart).length > 0">
							{{Object.keys(shoppingCart).length}}
						</div>
					</Transition>
				</div>

				<div v-bind:class="['mobile-bottom-menu__icon-block', activeElem(['profile'])]" @click="$router.push({name: 'profile'})">
					<img src="@/assets/img/icons8-пользователь-мужчина-в-кружке-50.png" class="mobile-bottom-menu__icon">
					<p class="mobile-bottom-menu__item-name">Профиль</p>
				</div>

				<div v-bind:class="['mobile-bottom-menu__icon-block', activeElem(['info'])]" @click="$router.push({name: 'info'})">
					<img src="@/assets/img/icons8-информация-48.png" class="mobile-bottom-menu__icon">
					<p class="mobile-bottom-menu__item-name">Инфо</p>
				</div>

			</div>
		</div>

		<!-- <CartBlock/> -->
	</div>
</template>

<style>

</style>
