<script setup>
	import { defineComponent } from 'vue';
</script>

<script>
	export default defineComponent({
		name: "DesctopInfo"
	})
</script>

<template>
	<!-- Only DescTop Block -->

	<section class="home__about-block">
		<div class="home__about-container">
			<nav class="home__about-navigation-block">
				<ul class="home__about-navigation-nva-list">
					<li class="home__about-navigation-nva-item tab-current"><p class="">Доставка</p></li>
					<li class="home__about-navigation-nva-item"><p class="">Оплата кредитной картой</p></li>
					<li class="home__about-navigation-nva-item"><p class="">Оплата при получении</p></li>
					<li class="home__about-navigation-nva-item"><p class="">О компании</p></li>
				</ul>
			</nav>
			<div class="home__about-text-block">
				<div class="home__about-text-img-block">
					<img src="@/assets/img/delivery_tab_2.svg" class="home__about-text-img">
				</div>

				<div class="home__about-text-container">
					<h2 class="home__about-text-title">Самовывоз из офиса интернет-магазина</h2>

					<p>Минимальная сумма заказа отсутствует. Эта услуга бесплатна. 
					Cвой заказ можно получить в офисе интернет-магазина каждый день с с 9:00 до 21:00.
					по адресу: Челюскинцев ул, дом 15</p><br>


					<h2 class="home__about-text-title">Доставка курьерской службой</h2>
					<p>Наш курьер доставит заказ по указанному адресу с 10:00 до 21:00. После предварительного звонка оператора курьер дополнительно свяжется для предупреждения о выезде по адресу доставки (ориентировочно за 1 час).
					Стоимость доставки 200 руб. при сумме заказа менее 2000 руб.</p><br>

					При сумме заказа более 2000 руб. доставка осуществляется бесплатно.
					Мы можем предложить доставку в день заказа или в любой последующий день с 10:00 до 21:00. Срочная доставка может быть осуществлена в любое удобное время в интервале 1 час, но не ранее, чем через 3 часа после оформления заказа. В случае опоздания курьера - доставка за наш счет!
				</div>
			</div>
		</div>
	</section>
</template>