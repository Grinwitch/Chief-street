<script setup>
	import { defineComponent } from 'vue';
	import RefBlock from '@/components/Home/RefBlock.vue';
	import DishesBlock from '@/components/Home/DishesBlock.vue';
	import MobilleInfo from '@/components/Home/MobilleInfo.vue';
	import DesctopInfo from '@/components/Home/DesctopInfo.vue';
</script>

<script>
	export default defineComponent({
		name: "HomeView",
		data(){
			return{
				reqState: true
			}
		},
	})
</script>

<template>
	<div>
		<slot name="header"></slot>

		<Transition>
			<div class="" v-show="reqState">
				<div class="mobile-cart__preloader-block">
          <div class="mobile-cart__preloader-container">
						<slot name="preloader"></slot>
          </div>
    		</div>
			</div>
		</Transition>

		<Transition>
			<main v-show="!reqState">
				<DishesBlock @reqStatus="(data) => reqState = data.status"/>
				<div class="container">
					<MobilleInfo/>
					<RefBlock/>
					<DesctopInfo/>
				</div>
			</main>
		</Transition>

		<slot name="footer"></slot>
	</div>
</template>
