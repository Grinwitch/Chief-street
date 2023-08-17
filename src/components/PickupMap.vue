<script setup>
	import { defineComponent } from 'vue';
</script>

<script>
	export default defineComponent({
		name: "PickupMap",
		props: {
			points: {
				type: Object,
				default: {}
			},
			selectionPointId: {
				type: Number,
				default: null
			}
		}
	})
</script>
<template>
	<div class="pickup-map delivery-map" id="dl_map">
		<div class="pickup-map__container">
			<div class="pickup-map__yandex" id="mymap">
				<div class="pickup-map__yandex-container">
					<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6a07eb17918625724e5a13e0465fe28238c94541e4957cb0ad2baf56e4e74efd&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
					<div class="pickup-map__pin">
						<img src="@/assets/img/icons/pin-pickup.png" alt="" class="pickup-map__pin-icon">
					</div>
					<div class="pickup-map__dot"></div>
				</div>
			</div>

			<div class="pickup-map__content">
				<div class="pickup-map__content-container">
					<div class="pickup-map__content-top">
						<button @click="$emit('closeModal')  " class="pickup-map__close">
							<img src="@/assets/img/svgexport-2.svg" alt="icon close" class="pickup-map__close-icon">
							Назад
						</button>
						<h3 class="pickup-map__content-title">Список ресторанов</h3>
					</div>
					<div class="pickup-map__content-items">
						<button v-bind:class="['pickup-map__content-item',
																	(parseInt(key) === selectionPointId) ? 'pickup-map__item-active' : '']"
										v-for="point, key in points"
										@click="$emit('selectId', {id: key})">

							<h4 class="pickup-map__item-title">{{point.title}}</h4>
							<span class="pickup-map__item-address">{{point.location}}</span>
							<div class="pickup-map__item-status"></div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
