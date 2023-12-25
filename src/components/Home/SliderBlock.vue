<script>
	import { defineComponent } from "vue";
	import SwiperClass from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';

	export default defineComponent({
		name: "SliderBlock",
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {	  		
	  		return {
				modules: [Navigation, Pagination, Scrollbar, A11y],
	  		};
		},
	})
</script>

<template>
	<div>
		<section class="home-slider_block">
			<div class="container">		
				
				<swiper :modules="modules" :slides-per-view="1"
						:space-between="0"
						:pagination="{ clickable: true }">
					
					<swiper-slide>
						<div class="home-slider_container">
							<img src="@/assets/img/banner.jpg" class="home-slider_img">
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</section>
	</div>
</template>

<style>
	.swiper-pagination-bullet-active{
    	background-color: #fafafa;
	}

	.swiper,
	.swiper-wrapper{
		border-radius: 12px;
	}
</style>