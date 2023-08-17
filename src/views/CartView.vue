<script setup>
	import { defineComponent } from 'vue';
	import { allDishes} from '@/fakeDB.js';
	import {priceStyle, percentCalculate} from "@/util/utils.js";

	import MobileCart from "@/components/cart/MobileCart.vue";
  import CartDesktop from "@/components/cart/CartDesktop.vue";

	const priceStyleS = (price) => priceStyle(price);
</script>

<script>
	export default defineComponent({
		name: "cartBlock",
		computed: {
			shoppingCart(){return this.$store.getters.shoppingCart},
		},
		data(){
			return{
				amount: 0,
				oldPrice: 0,
				reqState: true,
				dishesFakeDb: allDishes, // dishesList
				dishes: {}, // Req Resutl
			}
		},
		async mounted(){
			let cartProductIdList = Object.keys(this.shoppingCart); // Product Id List
			setTimeout(this.fakeRequest, 1000);
		},

		methods:{
			// Add to Cart
			toCart: function(data){
				this.$store.dispatch('addToCart', {'id': data.id, 'count': data.count});
				this.clearElem();
			},

			// Full Clear Cart
			clearCart: function(data){
				this.$store.dispatch((data.key === null) ? 'clearCart' : 'cartDelById', data.key);
				this.clearElem();
			},

			clearElem: function(){
				for (let key in this.dishes){
					if (this.shoppingCart[key] === undefined)
						delete this.dishes[key];
				}
				this.amountSum();
			},

			// Fake Request
			fakeRequest: function(){
				for (let key in this.shoppingCart)
					this.dishes[key] = this.dishesFakeDb[key];

				this.amountSum();
				this.reqState = false;
			},

			// Calculate Amount Sum and Discount Price
			amountSum: function(){
				this.amount = 0;
				this.oldPrice = 0;

				for (let key in this.shoppingCart){
					if (this.dishes[key] !== undefined){
						this.amount += this.dishes[key].price * this.shoppingCart[key];
						this.oldPrice += (this.dishes[key].old_price > 0) ? this.dishes[key].old_price : 0;
					}

				}
				this.amount;
			},
		}
	})
</script>

<template>
	<div>

    <CartDesktop />

		<MobileCart :amount="amount"
								:oldPrice="oldPrice"
								:dishes="dishes"
								:reqState="reqState"
								@toCart="toCart"
								@clearCart="clearCart"/>
	</div>
</template>
