<script setup>
	import { defineComponent } from 'vue';
	import { settings, debounce } from '@/util/utils.js'
	import { YandexMap, YandexMarker } from 'vue-yandex-maps'
	import PreLoader from '@/components/PreLoader.vue'
</script>

<script>
	export default defineComponent({
		name: "MapBlock",
		props:{
			fullAdress: String
		},
		data(){
			return{
				adrReqState: false,
				coordinate: [42.3146962,69.5883282]
			}
		},

		methods:{
			searchAdr: debounce(function(){
				this.adrReqState = true;
				let url = `https://geocode-maps.yandex.ru/1.x/?apikey=${settings.apiKey}
									 &geocode=${[this.coordinate[1], this.coordinate[0]]}
									 &results=1
									 &format=json`
				this.axios.get(url.replace(' ', ''))
				.then((res) => {
					let obj = res.data.response.GeoObjectCollection.featureMember[0].GeoObject
					let name = obj.name
					let formatted = obj.metaDataProperty.GeocoderMetaData.Address.formatted
					let city = obj.metaDataProperty.GeocoderMetaData.Address.Components[2].name;

					this.$emit('addressFull', {'formatted': formatted,
																		 'name': name,
																		 'city': city,
																		 'lat': this.coordinate[0],
																		 'long': this.coordinate[1]})
				})
				.finally(()=> {this.adrReqState = false;})
			}, 800),

			initHandler (map) {
				const actionBegin = () => {
					let el = document.getElementById('map_ym');
					el.classList.add('animation-pin')
				}

				const mapActionTick = () => {
					let el = document.getElementById('map_ym');
					let positions = map.getGlobalPixelCenter();
					let offsetPos = map.options.get('projection')
													.fromGlobalPixels([ positions[0] - 0, positions[1] - 0], map.getZoom());

					el.classList.remove('animation-pin')
					this.coordinate = offsetPos;
					this.searchAdr();
				}

				map.events.add('actionbegin', actionBegin);
				map.events.add('actionend', mapActionTick);

				//animation-pin
			},
		}
	})
</script>

<template>
	<div class="delivery-map" id="dl_map">
		<div class="delivery-map__container">
			<div class="delivery-map__yandex" id="mymap">
				<div class="delivery-map__yandex-container">
					<!-- <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac79c50f95e2dbef34747903fe237511f78f4334306e32e51c56e7d6a49d70c19&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> -->

					<div style="width: 100%; height: 100%;">
						<YandexMap :coordinates="[42.3146962,69.5883282]"
											 :controls="['geolocationControl', 'fullscreenControl', 'zoomControl']"
											 :restrictMapArea="true"
											 :zoom="14"
											 @created="initHandler"
											 style="width: 100%; height: 100%;">
											 <!-- <YandexMarker :coordinates="coordinate" marker-id="0"></YandexMarker> -->
						</YandexMap>
					</div>



          <div class="delivery-map__pin" id="map_ym">
						<img src="@/assets/img/icons/pin.png" alt="" class="delivery-map__pin-icon">
					</div>
					<div class="delivery-map__dot"></div>
				</div>
			</div>

			<div class="delivery-map__content">
				<div class="delivery-map__content-container">
					<div class="delivery-map__content-info">
						<div class="delivery-map__content-top">
							<button @click="$emit('closeModal')  " class="pickup-map__close">
								<img src="@/assets/img/svgexport-2.svg" alt="icon close" class="pickup-map__close-icon">
								Назад
							</button>
						</div>
						<div class="delivery-map__content-address">
							<input type="text" class="delivery-map__content-input" placeholder="Полный адрес" v-model="fullAdress">
							<div class="delivery-map__content-gpc" title="Определить адрес" v-if="adrReqState">
								<!-- <img src="@/assets/img/icons/gps.png" alt="gpc icon" class="delivery-map__content-gpc-icon"> -->
								<PreLoader/>
							</div>
						</div>
						<div class="delivery-map__content-home">
							<input type="text" class="delivery-map__content-input" placeholder="Дом">
						</div>
						<div class="delivery-map__content-office">
							<input type="text" class="delivery-map__content-input" placeholder="Квартира / Офис">
						</div>
						<div class="delivery-map__content-intercom">
							<input type="text" class="delivery-map__content-input" placeholder="Домофон">
						</div>
						<div class="delivery-map__content-entrance">
							<input type="text" class="delivery-map__content-input" placeholder="Подъезд">
						</div>
						<div class="delivery-map__content-floor">
							<input type="text" class="delivery-map__content-input" placeholder="Этаж">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
