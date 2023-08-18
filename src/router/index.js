import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CartView from '@/views/CartView.vue';
import CheckOut from '@/views/CheckOut.vue';
import InfoView from '@/views/InfoView.vue';
import CartNone from '@/views/CartNone.vue';
import OrderTracking from '@/views/OrderTracking.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior () {
		return {left: 0, top: 0, behavior: 'smooth'}
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartView
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: CheckOut
		},
		{
			path: '/info',
			name: 'info',
			component: InfoView
		},
		{
			path: '/profile',
			name: 'profile',
			component: CartNone
		},
		{
			path: '/discount',
			name: 'discount',
			component: CartNone
		},
		{
			path: '/tracking',
			name: 'tracking',
			component: OrderTracking
		}
		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (About.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () => import('../views/AboutView.vue')
		// }
	]
})

export default router
