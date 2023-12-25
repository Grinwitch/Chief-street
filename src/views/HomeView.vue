<script setup>
	import { defineComponent } from 'vue';
	import {bodyOvr} from "@/util/utils.js";
	import RefBlock from '@/components/Home/RefBlock.vue';
	import DishesBlock from '@/components/Home/DishesBlock.vue';
	import MobilleInfo from '@/components/Home/MobilleInfo.vue';

	const bodyOvrS = (state) => bodyOvr(state);
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
		<div style="position: relative">
			<Transition>
				<div class="" v-show="bodyOvrS(reqState)">
					<div class="mobile-cart__preloader-block">
	          <div class="mobile-cart__preloader-container">
							<slot name="preloader"></slot>	
	          </div>
	    		</div>
				</div>
			</Transition>

			<Transition>
				<!-- reqState -->
				<main v-show="!bodyOvrS(reqState)">
					<DishesBlock @reqStatus="(data) => reqState = data.status"/>
					<div class="container">
						<MobilleInfo/>
						<RefBlock/>
						<DesctopInfo/>
					</div>
				</main>
			</Transition>
		</div>
		<slot name="footer"></slot>
	</div>
</template>
