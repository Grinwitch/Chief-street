<script setup>
	import {RouterView } from 'vue-router'; //RouterLink
	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';
	import PreLoader from '@/components/PreLoader.vue'
</script>

<template>
		<router-view v-slot="{Component}">
		<!-- <Transition name="fadett"> -->
			<component :is="Component">
				<template #header>
					<Header/>
				</template>

				<template #preloader>
					<PreLoader/>
				</template>

				<template #footer>
					<Footer/>
				</template>
			</component>
		<!-- </Transition> -->
	</router-view>
</template>
