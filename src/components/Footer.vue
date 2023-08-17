<script>
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "FooterComponent"
	})
</script>

<template>
	<div>
		<footer class="footer">
			<div class="container">
				<div class="footer__content">
					<div class="footer-top__content footer-items__content">
						<div class="footer-item__content">
							<h3 class="footer-item__content-logo-title footer-item__content-title">Chief Street Food</h3>
							<ul class="footer-item__content-list">
								<li><a href="#" class="footer-item__content-link">Вакансии</a></li>
								<li><a href="#" class="footer-item__content-link">Контакты</a></li>
								<li><a href="#" class="footer-item__content-link">Франшиза</a></li>
							</ul>
							<ul class="footer-item__content-list-social">
								<li>
									<a href="#" class="footer-item__content-link-social">
										<img src="@/assets//img/social-icons/icons8-instagram.svg" alt="social icon" class="footer-item__content-link-icon">
									</a>
								</li>
								<li>
									<a href="#" class="footer-item__content-link-social">
										<img src="@/assets/img/social-icons/icons8-whatsapp.svg" alt="social icon" class="footer-item__content-link-icon">
									</a>
								</li>
								<li>
									<a href="#" class="footer-item__content-link-social">
										<img src="@/assets//img/social-icons/icons8-telegram.svg" alt="social icon" class="footer-item__content-link-icon">
									</a>
								</li>
							</ul>
						</div>
						<div class="footer-item__content">
							<h2 class="footer-item__content-title">Доставка</h2>
							<ul class="footer-item__content-list">
								<li><a href="#" class="footer-item__content-link">Доставка и оплата</a></li>
							</ul>
						</div>
						<div class="footer-item__content">
							<h2 class="footer-item__content-title">Клиентам</h2>
							<ul class="footer-item__content-list">
								<li><a href="#" class="footer-item__content-link">Отзывы</a></li>
								<li><a href="#" class="footer-item__content-link">Правовая информация</a></li>
							</ul>
						</div>
						<div class="footer-item__content">
							<h2 class="footer-item__content-title">Установите наше приложение</h2>
							<div class="footer-item__content-mobile-app">
								<a href="#" class="footer-item__content-mobile-app-link">
									<img src="@/assets//img/icons/app-store.svg" alt="" class="footer-item__content-mobile-app-img">
								</a>
								<a href="#" class="footer-item__content-mobile-app-link">
									<img src="@/assets//img/icons/google-play.svg" alt="" class="footer-item__content-mobile-app-img">
								</a>
							</div>
							<div class="footer-item__content-call">
								<a href="" class="footer-item__content-call-link footer-item__content-phone">+7 (777) 777-77-77</a>
								<a href="" class="footer-item__content-call-link footer-item__content-order-call">Заказать звонок</a>
							</div>
						</div>
					</div>
					<div class="footer-bottom__content">
						<div class="footer-bottom__content-copyright">Chief Street Food © 2023</div>
						<div class="footer-bottom__content-payment">
							<span class="footer-bottom__content-text">Принимаем к оплате</span>
							<div class="footer-bottom__content-items">
								<img src="@/assets//img/payment/payment-method-mastercard.svg" alt="payment icon" class="footer-bottom__content-img">
								<img src="@/assets//img/payment/payment-method-visa.svg" alt="payment icon" class="footer-bottom__content-img">
								<img src="@/assets//img/payment/payment_method_apple_pay.svg" alt="payment icon" class="footer-bottom__content-img">
								<img src="@/assets//img/payment/payment_method_g_pay.svg" alt="payment icon" class="footer-bottom__content-img">
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>