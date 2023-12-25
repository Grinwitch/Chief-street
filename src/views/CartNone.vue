<script setup>
	import { defineComponent } from 'vue';
</script>

<script type="text/javascript">
	export default defineComponent({
		name: "cartNone",
	})
</script>

<template>
	<div>
		<slot name="header"></slot>
		<div class="cart-none">
			<div class="cart-none__container">
				<div class="cart-none__content">
					<div class="cart-none__photo-desktop">
						<img src="@/assets/img/icons/software-development.png" alt="" class="cart-none__img">
					</div>
					<div class="cart-none__photo-mobile">
						<img src="@/assets/img/icons/app-development.png" alt="" class="cart-none__img">
					</div>
					<h3 class="cart-none__title">Данная страница находится в разработке!</h3>
					<div class="cart-none__descr">Данная страница находится в разработке и на данный момент недоступна.</div>
					<div class="cart-none__btn" @click="$router.push({name: 'home'})">Перейти на главную</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style media="screen">
	.cart-none {
		width: 100%;
		height: 100%;
		position: fixed;
		min-height: 80vh;
	}

	.cart-none__container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.cart-none__content {
		width: 70%;
		position: absolute;
		top: 15%;
		left: 50%;
		transform: translate(-50%, -15%);
		text-align: center;
	}

	.cart-none__photo-desktop,
	.cart-none__photo-mobile {
		max-width: 120px;
		margin: 0 auto 25px;
	}

	.cart-none__photo-mobile {
		display: none;
	}

	.cart-none__title {
		margin-top: 10px;
    margin-bottom: 5px;
    color: #292f32;
    font-size: 20px;
    line-height: 140%;
    font-weight: 600;
	}

	.cart-none__descr {
		color: #292f32;
    font-size: 16px;
    margin-top: 15px;
    line-height: 140%;
    margin-bottom: 35px;
	}

	@media screen and (max-width: 600px) {
		.cart-none__photo-mobile {
			display: block;
		}

		.cart-none__photo-desktop {
			display: none;
		}
	}
</style>
