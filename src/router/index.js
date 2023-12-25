import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CartView from '@/views/CartView.vue';
import CheckOut from '@/views/CheckOut.vue';
import InfoView from '@/views/InfoView.vue';
import CartNone from '@/views/CartNone.vue';
import TextPage from '@/views/TextPage.vue';
import NotFound from '@/views/NotFound.vue';
import OrderTracking from '@/views/OrderTracking.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import ForgotPassword from '@/views/ForgotPassword.vue';

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
			path: '/tracking/:track',
			name: 'tracking',
			component: OrderTracking
		},
		{
			path: '/textpage',
			name: 'textpage',
			component: TextPage
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notFound',
			component: NotFound,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginPage
		},
		{
			path: '/register',
			name: 'regiser',
			component: RegisterPage
		},
		{
			path: '/forgot-password',
			name: 'forgot-password',
			component: ForgotPassword
		}
	]
})

export default router
