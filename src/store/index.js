import { createStore } from 'vuex'


function serializeJson(data){
  if (data){
    try {data = JSON.parse(data)}
    catch{
      // Ignore malformed lines.
    }
  }

  if (typeof data !== 'object')
    data = {}

  return data;
}

export default createStore({
	state: {
		lang: localStorage.lang || 'ru',
		cart: localStorage.cart || {},
		favoriteList: localStorage.favorite || {}
	},

	getters: {
		shoppingCart(state){return serializeJson(state.cart)},
		favoriteLists(state){return serializeJson(state.favoriteList)},
	},

	mutations: {
		setCart(state, newCart){state.cart = newCart},
		setFavorite(state, favList){state.favoriteList = favList},
	},

	actions: {
		addToFavorite: ({commit}, favList)=>{
			localStorage.favorite = JSON.stringify(favList);;
			commit('setFavorite', favList)
		},

		clearCart: ({commit}) =>{
			localStorage.cart = JSON.stringify({});
			commit('setCart', {})
		},

    toCartCount: ({commit, getters}, cartData) => {
      const [key, count] = cartData;
      let item = getters.shoppingCart;

      item[key] = count;

      if (item[key] === 0)
        delete item[key];

      localStorage.cart = JSON.stringify(item);
			commit('setCart', item)
    },

		cartDelById: ({commit, getters}, key) =>{
			let item = getters.shoppingCart;
			if (item[key] === undefined)
				return

			delete item[key];
			localStorage.cart = JSON.stringify(item);
			commit('setCart', item)
		},

		addToCart: ({commit, getters}, cartData)=>{
			let item = getters.shoppingCart
			const id = parseInt(cartData.id);
			const count = parseInt(cartData.count);

			if (item[id] === undefined)
					item[id] = 0;

			item[id] = item[id] + count;

			for (const [key, value] of Object.entries(item)){
				if (value <= 0)
					delete item[key];
			}

			localStorage.cart = JSON.stringify(item);
			commit('setCart', item)
		}
	},
	modules: {}
})
