<script setup>
	import { defineComponent } from "vue";
</script>

<script>
	export default defineComponent({
		name: "RefBloc"
	})
</script>

<template>
	<!-- Only desctop Block -->
	<section class="home__referal-block">
		<div class="home__referal-left-block">
			<h2 class="home__referal--left-block-left-text">Сделай жизнь друзей вкуснее - поделись ссылкой!</h2>
			
			<div class="home__referal--left-block-right-text">
				Не будь жадиной - приводи своих друзей,
				пусть они тоже попробуют наши божественные роллы
			</div>
		</div>

		<div class="home__referal-right-block">
			<div class="home__referal-right-block-img-block">
				<img src="@/assets/img/svgexport-23.svg" class="home__referal-right-block-img">
			</div>

			<div class="home__referal-right-block-img-block">
				<img src="@/assets/img/svgexport-24.svg" class="home__referal-right-block-img">
			</div>

			<div class="home__referal-right-block-img-block">
				<img src="@/assets/img/svgexport-25.svg" class="home__referal-right-block-img">
			</div>

			<div class="home__referal-right-block-img-block">
				<img src="@/assets/img/svgexport-26.svg" class="home__referal-right-block-img">
			</div>
		</div>
	</section>
</template>