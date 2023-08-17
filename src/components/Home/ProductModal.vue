<script setup>
	import { defineComponent } from 'vue';
	import {priceStyle} from "@/util/utils.js";

	const priceStyleS = (price) => priceStyle(price);
</script>

<script>
	export default defineComponent({
		name: "ProductModal",
		emits: ["closeModal"],
		computed: {
			shoppingCart(){return this.$store.getters.shoppingCart},
		},
		props: {
			disheId: Number,
			disheData: Object,
		},
		data(){
			return{
				productCount: 1,
				cleanState: true,
			}
		},
		mounted(){
			if (this.shoppingCart[this.disheId] === undefined)
				return

			this.cleanState = false;
			this.productCount = this.shoppingCart[this.disheId];
		},
		methods:{
			// Close Modal
			closeModal: function(){this.$emit('closeModal', {})},
			countChange: function(count){this.productCount += (this.productCount + count > -1) ? count : 0},
			toCart: function(id, count){
				this.$store.dispatch('toCartCount', [id, this.productCount]);
				return this.closeModal();
			}
		}
	})
</script>

<template>
    <div class="modal-card__content">
      <div class="modal-card__photo">
          <img :src="disheData.img" alt="product photo" class="modal-card__img">
        </div>
          <div class="modal-card__main">
            <div class="modal-card__main-top">
              <h3 class="modal-card__title">{{disheData.title}}</h3>
              <div class="modal-card__portion">150 г</div>
            </div>
						<div class="modal-card__price-block">
							<div class="modal-card__p">{{priceStyleS(disheData.price)}} ₸</div>
							<div class="modal-card__price" v-if="disheData.old_price > 0">{{priceStyleS(disheData.old_price)}} ₸</div>
						</div>
            <div class="modal-card__descr">{{disheData.desc}}</div>
          </div>
        </div>
        <div class="modal-card__order">
          <div class="m-modal-product__cart js-m-cart__actions">
            <div class="m-modal-product__cart_minus js-m-cart__minus" @click="countChange(-1)">
              <img src="@/assets/img/remove.png" alt="" class="m-modal-product__cart_icon">
            </div>
            <div class="m-modal-product__cart_value js-m-cart__value">{{productCount}}</div>
            <div class="m-modal-product__cart_plus js-m-cart__plus" @click="countChange(1)">
              <img src="@/assets/img/plus.png" alt="" class="m-modal-product__cart_icon">
            </div>
          </div>
          <a class="m-modal-product__add" @click="toCart(disheId, 1)">
						<p v-if="cleanState">В корзину</p>
						<p v-else-if="!cleanState && productCount === 0">Удалить</p>
            <p v-else>В корзине: {{priceStyleS(productCount * disheData.price)}} ₸</p>
          </a>
        </div>
        <div class="modal-card__remove" @click="closeModal">
          <img src="@/assets/img/icons/icons8-close-60.png" class="modal-card__remove-img">
    </div>
</template>

<style media="screen">
	.modal-card__price-block{
		display: flex;
		align-items: center;
	}

	.modal-card__p{
		font-size: 16px;
		margin-right: 7px;
	}
</style>
