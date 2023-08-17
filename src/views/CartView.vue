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
						this.oldPrice += (this.dishes[key].old_price > 0) ? this.dishes[key].old_price - this.dishes[key].price : 0;
					}

				}
				this.amount;
			},
		}
	})
</script>

<template>
	<div>
    	<CartDesktop :amount="amount"
    				 :dishes="dishes"
    				 :reqState="reqState"
    				 @toCart="toCart"
					 @clearCart="clearCart"/>

		<MobileCart :amount="amount"
					:oldPrice="oldPrice"
					:dishes="dishes"
					:reqState="reqState"
					@toCart="toCart"
					@clearCart="clearCart"/>
	</div>
</template>


<style type="text/css">
	.cart-mobile-header__img{
		width: 64px;
		height: 64px;
	}

	.cart-mobile-header__img-block{
		margin-top: 20px;
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.cart-mobile-header__desc-block{
		font-weight: 400;
		font-size: 16px;
		text-align: center;
		line-height: 140%;
		padding: 0 15%;
	}

	.cart-mobile-header__title-block{
		font-weight: 600;
		font-size: 18px;
		text-align: center;
		margin: 20px 0 10px 0;
	}

  .client-modal__title-block{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    padding-bottom:  25px
  }

  .client-modal__title-close-button{
    width: 22px;
    height: 22px
  }

  .client-modal__title-block h2{
    font-size: 18px;
    font-weight: 600;
  }

  .client-modal__button{
    margin-top: 20px;
    border: none;
    background-color: var(--cl_red);
    color: var(--cl_white);
    padding: 10px;
    width: 35%;
    border-radius: 12px;
    font-size: 14px;
    cursor: pointer;
  }

  .client-modal__desc-block{
    font-size: 14px;
    line-height: 140%;
  }

  .client-modal-block{
    padding: 30px 25px;
    position: fixed;
    width: 325px;
    padding: 30px 25px;
    top: 25%;
    left: 50%;
    background-color: #fff;
    z-index: 260;
    transform: translate(-50%, 0%);
    border-radius: 16px;
  }

  .client-mask{
    position: fixed;
    width: 100%;
    height: 200%;
    background-color: black;
    opacity: 0.6;
    z-index: 259;
    transform: translate(0, -50%);
  }
</style>