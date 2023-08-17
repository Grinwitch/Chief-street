<script setup>
	import { defineComponent } from 'vue';
	import { questionList } from '@/fakeDB.js';
</script>

<script>
	export default defineComponent({
		name: "MobilleInfo",
		data(){
			return{
				openIdList: [],
				questionList: questionList
			}
		},
		methods:{
			subText: function(key){
				const index = this.openIdList.indexOf(key);
				(index === -1) ? this.openIdList.push(key) : delete this.openIdList[index];
			}
		}
	})
</script>

<template>
	<section class="home__about-mobile">
		<div class="home__about-mobile-block">
			
			<div class="home__about-mobile-container" >
				<div class="home__about-mobile-item" v-for="question, key in questionList" v-bind:key="key">
					<div class="home__about-mobile-close-ss" @click="subText(key)">
							<p>{{question.title}}</p>
							<img src="@/assets/img/icons8-развернуть-50.png" v-bind:class="['home__about-mobile-item-img', (openIdList.indexOf(key) === -1) ? '' : 'img-open' ]">
					</div>
						
					<Transition>
						<div class="home__about-mobile-full-text" v-if="openIdList.indexOf(key) > -1">{{question.desc}}</div>
					</Transition>
				</div>
			</div>

		</div>
	</section>
</template>
