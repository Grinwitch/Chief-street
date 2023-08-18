// Fake DB Id, DishesName
export const fakeDishesList = {1: "Бургеры", 2: "Гарниры", 3: "Колбаски", 4: "Салаты", 5: "Пиццы", 6: "Курочка", 7: "Сеты", 8: "Роллы", 9: "Josper", 10: "Соусы", 11: "Напитки"};
export const fakePoints = {1: {"title": "Ресторан №1", "location": "ул. Аскарова 41, дом 5"},
								2: {"title": "Ресторан №2", "location": "ул. Аскарова 41, дом 5"},
								3: {"title": "Ресторан №3", "location": "ул. Аскарова 41, дом 5"},
								4: {"title": "Ресторан №4", "location": "ул. Аскарова 41, дом 5"},
								}

// All Dishes
export const allDishes = {
	// id
	1: {"title": "Биг Бургер", // Product Titile
		// Product Under Tile
		"under_title": "200 г",
		// Product Description
		"desc": "Двойная котлета из говядины, 2 ломтика сыра, помидор, соленые огурцы, лист салата, лук томленный, 3 вида соуса",
		// Product Price
		"price": 1920,
		// Product Old Price
		"old_price": "",
		// Product Image URL
		"img": "https://img.freepik.com/premium-vector/big-tasty-burger-bun-sesame-seeds-cutlet-pickled-cucumbers-tomato-cheese-salad-fast-food_433804-503.jpg?w=2000",
		// Stickers
		"stickers": {"hit": true, "new": false, "promo": false, "discount": 10}
	},

	2: {"title": "Чизбургер",
		"under_title": "200 г",
		"desc": "Котлета из говядины, ломтик сыра, помидор, соленые огурцы, лист салата, томленый лук, 3 вида соуса",
		"price": 1565,
		"old_price": 1700,
		"img": "https://img.freepik.com/premium-vector/big-tasty-burger-bun-sesame-seeds-cutlet-pickled-cucumbers-tomato-cheese-salad-fast-food_433804-503.jpg?w=2000",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	3: {"title": "Монстр Бургер",
		"under_title": "200 г",
		"desc": "Тройная котлета из говядины, лист салата, соленые огурцы, кукуруза, халапеньо, лук шалот, 3  ломтика сыра, 3 вида соуса",
		"price": 2165,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/big-tasty-burger-bun-sesame-seeds-cutlet-pickled-cucumbers-tomato-cheese-salad-fast-food_433804-503.jpg?w=2000",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	4: {"title": "Чикен стрипс бургер",
		"under_title": "200 г",
		"desc": "Куриное филе, лист салата, помидор, соленые огурцы, луковые кольца, 3 вида соуса",
		"price": 1510,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/big-tasty-burger-bun-sesame-seeds-cutlet-pickled-cucumbers-tomato-cheese-salad-fast-food_433804-503.jpg?w=2000",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},
	5: {"title": "Гамбургер",
		"under_title": "200 г",
		"desc": "Куриная котлета, ломтик сыра, помидор, соленые огурцы, лист салата, 3 вида соуса",
		"price": 1400,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/big-tasty-burger-bun-sesame-seeds-cutlet-pickled-cucumbers-tomato-cheese-salad-fast-food_433804-503.jpg?w=2000",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 50}
	},
	6: {"title": "Дабл гамбургер",
		"under_title": "200 г",
		"desc": `Двойная куриная котлета, лист салата, помидор, соленые огурцы, 2 ломтика сыра, 3 вида соуса`,
		"price": 7000,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/big-tasty-burger-bun-sesame-seeds-cutlet-pickled-cucumbers-tomato-cheese-salad-fast-food_433804-503.jpg?w=2000",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 50}
	},
	7: {"title": "Техас бургер",
		"under_title": "200 г",
		"desc": `Котлета из говядины, копченная говядина, лист салата, соленые огурцы, лук шалот, фри, 3 вида соуса`,
		"price": 700,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/big-tasty-burger-bun-sesame-seeds-cutlet-pickled-cucumbers-tomato-cheese-salad-fast-food_433804-503.jpg?w=2000",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 50}
	},

	8: {"title": "Картофельные дольки",
		"under_title": "300 гр",
		"desc": ``,
		"price": 565,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/french-fries-concept_118813-1663.jpg?w=360",
		"stickers": {"hit": true, "new": true, "promo": false, "discount": 0}
	},

	9: {"title": "Куринные наггетсы",
		"under_title": "300 гр",
		"desc": ``,
		"price": 970,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/french-fries-concept_118813-1663.jpg?w=360",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	10: {"title": "Фри",
		"under_title": "300 гр",
		"desc": ``,
		"price": 565,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/french-fries-concept_118813-1663.jpg?w=360",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	11: {"title": "Картофельные шарики",
		"under_title": "300 гр",
		"desc": ``,
		"price": 565,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/french-fries-concept_118813-1663.jpg?w=360",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	12: {"title": "Сырные палочки",
		"under_title": "300 гр",
		"desc": ``,
		"price": 860,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/french-fries-concept_118813-1663.jpg?w=360",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	13: {"title": "Креветки",
		"under_title": "300 гр",
		"desc": ``,
		"price": 2650,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/french-fries-concept_118813-1663.jpg?w=360",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	14: {"title": "Колбаски говяжьи",
		"under_title": "300 гр",
		"desc": `Фри, лук шалот, халапеньо, помидор,  тостер и 2 вида соуса`,
		"price": 2110,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sliced-ham-or-sausage-3d-vector-illustration-smoked-meat-product-for-cooking-or-restaurant-in-cartoon-style-isolated-on-white-background-fast-food-shop-menu-concept_778687-646.jpg?w=740&t=st=1692347646~exp=1692348246~hmac=3bd7e8b2b4c7fc3e6c5855d9b94b1e32c2bd2bd7fdbac060dfea451b1f027b87",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	15: {"title": "Колбаски куриные",
		"under_title": "300 гр",
		"desc": `Фри, лук шалот, халапеньо, помидор, тостер и 2 вида соуса`,
		"price": 2110,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sliced-ham-or-sausage-3d-vector-illustration-smoked-meat-product-for-cooking-or-restaurant-in-cartoon-style-isolated-on-white-background-fast-food-shop-menu-concept_778687-646.jpg?w=740&t=st=1692347646~exp=1692348246~hmac=3bd7e8b2b4c7fc3e6c5855d9b94b1e32c2bd2bd7fdbac060dfea451b1f027b87",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	16: {"title": "Ачук-чучук",
		"under_title": "300 гр",
		"desc": ``,
		"price": 1250,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/greek-salad-on-the-plate-top-view-set-of-fresh-vegetables-in-a-bowl-vector-illustration-isolated_168129-2232.jpg?w=740",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	17: {"title": "Греческий",
		"under_title": "300 гр",
		"desc": ``,
		"price": 1650,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/greek-salad-on-the-plate-top-view-set-of-fresh-vegetables-in-a-bowl-vector-illustration-isolated_168129-2232.jpg?w=740",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	18: {"title": "Цезарь с креветками",
		"under_title": "300 гр",
		"desc": ``,
		"price": 3300,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/greek-salad-on-the-plate-top-view-set-of-fresh-vegetables-in-a-bowl-vector-illustration-isolated_168129-2232.jpg?w=740",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	19: {"title": "Цезарь с курицей",
		"under_title": "300 гр",
		"desc": ``,
		"price": 2650,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/greek-salad-on-the-plate-top-view-set-of-fresh-vegetables-in-a-bowl-vector-illustration-isolated_168129-2232.jpg?w=740",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	20: {"title": "Мясная пицца",
		"under_title": "35 см",
		"desc": ``,
		"price": 2990,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=826&t=st=1692348266~exp=1692348866~hmac=54e8c70ffca1507a5d81cc790f5dc00fba862ec270b571df6fd6073ff71c1e40",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	21: {"title": "Пепперони",
		"under_title": "35 см",
		"desc": ``,
		"price": 2705,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=826&t=st=1692348266~exp=1692348866~hmac=54e8c70ffca1507a5d81cc790f5dc00fba862ec270b571df6fd6073ff71c1e40",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	22: {"title": "Буффало",
		"under_title": "35 см",
		"desc": ``,
		"price": 2760,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=826&t=st=1692348266~exp=1692348866~hmac=54e8c70ffca1507a5d81cc790f5dc00fba862ec270b571df6fd6073ff71c1e40",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	23: {"title": "Болоньезе",
		"under_title": "35 см",
		"desc": ``,
		"price": 2875,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=826&t=st=1692348266~exp=1692348866~hmac=54e8c70ffca1507a5d81cc790f5dc00fba862ec270b571df6fd6073ff71c1e40",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	24: {"title": "Ветчина с грибами",
		"under_title": "35 см",
		"desc": ``,
		"price": 2990,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=826&t=st=1692348266~exp=1692348866~hmac=54e8c70ffca1507a5d81cc790f5dc00fba862ec270b571df6fd6073ff71c1e40",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	25: {"title": "Пицца с курицей",
		"under_title": "35 см",
		"desc": ``,
		"price": 2530,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=826&t=st=1692348266~exp=1692348866~hmac=54e8c70ffca1507a5d81cc790f5dc00fba862ec270b571df6fd6073ff71c1e40",
		"stickers": {"hit": true, "new": false, "promo": false, "discount": 0}
	},

	26: {"title": "Пицца комбо",
		"under_title": "35 см",
		"desc": ``,
		"price": 2875,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=826&t=st=1692348266~exp=1692348866~hmac=54e8c70ffca1507a5d81cc790f5dc00fba862ec270b571df6fd6073ff71c1e40",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	27: {"title": "Маргарита",
		"under_title": "35 см",
		"desc": ``,
		"price": 1725,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?w=826&t=st=1692348266~exp=1692348866~hmac=54e8c70ffca1507a5d81cc790f5dc00fba862ec270b571df6fd6073ff71c1e40",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	28: {"title": "Чикен из голени",
		"under_title": "300 г",
		"desc": ``,
		"price": 3680,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/fried-crispy-chicken-leg-cartoon-fast-food-drumsticks-isolated-vector-illustration_502272-679.jpg?w=900",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	29: {"title": "Чикен из крылышек",
		"under_title": "300 г",
		"desc": ``,
		"price": 2730,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/fried-crispy-chicken-leg-cartoon-fast-food-drumsticks-isolated-vector-illustration_502272-679.jpg?w=900",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	30: {"title": "Баскет",
		"under_title": "300 г",
		"desc": ``,
		"price": 3300,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/fried-crispy-chicken-leg-cartoon-fast-food-drumsticks-isolated-vector-illustration_502272-679.jpg?w=900",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	31: {"title": "Куриное филе",
		"under_title": "300 г",
		"desc": `Куриное филе в кисло сладком соусе`,
		"price": 2250,
		"old_price": "",
		"img": "https://img.freepik.com/premium-vector/fried-crispy-chicken-leg-cartoon-fast-food-drumsticks-isolated-vector-illustration_502272-679.jpg?w=900",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	32: {"title": "Сет 1",
		"under_title": "300 г",
		"desc": `Колбаски куриные, колбаски говяжьи, чикен крылышки, чикен голень, картофельные шарики,  кебаб, луковые кольца, креветки в кляре, картофельные дольки, тостер, помидоры, лист салата и лимон, 3 вида соуса`,
		"price": 9200,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/comfort-food-concept-with-fast-food_23-2148530832.jpg?w=740&t=st=1692349456~exp=1692350056~hmac=7045b8b00372bc5ce3b7905e8e5df18be0de989b225b0d3bf14f2aa61bb8f34f",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	33: {"title": "Сет 2",
		"under_title": "300 г",
		"desc": `Колбаски куриные, колбаски говяжьи, чикен крылышки, чикен голень, картофельные шарики,  кебаб, луковые кольца, картофельные дольки, тостер, помидоры, лист салата и лимон, 3 вида соуса`,
		"price": 8650,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/comfort-food-concept-with-fast-food_23-2148530832.jpg?w=740&t=st=1692349456~exp=1692350056~hmac=7045b8b00372bc5ce3b7905e8e5df18be0de989b225b0d3bf14f2aa61bb8f34f",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	34: {"title": "Твистер ролл",
		"under_title": "300 г",
		"desc": `Филе в кляре, помидор, ломтик сыра, листья салата, лук шалот, 2 вида соуса`,
		"price": 1370,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sushi-rolls-with-salmon-and-avocado-3d-illustration-cartoon-drawing-of-chopsticks-soy-sauce-and-japanese-fish-dish-in-3d-style-on-white-background-asian-or-japanese-cuisine-seafood-concept_778687-690.jpg?w=740&t=st=1692349756~exp=1692350356~hmac=6021b1e7cedc4ecfa3bac598ec3d387b366bc3eaf67e66e9e71f813c0f8af33b",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	35: {"title": "Ролл биф ролл",
		"under_title": "300 г",
		"desc": ``,
		"price": 1475,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sushi-rolls-with-salmon-and-avocado-3d-illustration-cartoon-drawing-of-chopsticks-soy-sauce-and-japanese-fish-dish-in-3d-style-on-white-background-asian-or-japanese-cuisine-seafood-concept_778687-690.jpg?w=740&t=st=1692349756~exp=1692350356~hmac=6021b1e7cedc4ecfa3bac598ec3d387b366bc3eaf67e66e9e71f813c0f8af33b",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	36: {"title": "Стейк ролл",
		"under_title": "300 г",
		"desc": ``,
		"price": 1795,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sushi-rolls-with-salmon-and-avocado-3d-illustration-cartoon-drawing-of-chopsticks-soy-sauce-and-japanese-fish-dish-in-3d-style-on-white-background-asian-or-japanese-cuisine-seafood-concept_778687-690.jpg?w=740&t=st=1692349756~exp=1692350356~hmac=6021b1e7cedc4ecfa3bac598ec3d387b366bc3eaf67e66e9e71f813c0f8af33b",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	37: {"title": "Чикен ролл",
		"under_title": "300 г",
		"desc": ``,
		"price": 1220,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sushi-rolls-with-salmon-and-avocado-3d-illustration-cartoon-drawing-of-chopsticks-soy-sauce-and-japanese-fish-dish-in-3d-style-on-white-background-asian-or-japanese-cuisine-seafood-concept_778687-690.jpg?w=740&t=st=1692349756~exp=1692350356~hmac=6021b1e7cedc4ecfa3bac598ec3d387b366bc3eaf67e66e9e71f813c0f8af33b",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	38: {"title": "Мясной сэндвич",
		"under_title": "300 г",
		"desc": `Копченая говядина, телячья вырезка, лук шалот, халапеньо, ломтик сыра и соус`,
		"price": 1705,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/hot-dog_78370-496.jpg?w=740&t=st=1692351936~exp=1692352536~hmac=00fd139b2de3c9b0ad403066422a1ca8f7ba9ff02a1984c7bd5bd3db55838b93",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	39: {"title": "Багет",
		"under_title": "300 г",
		"desc": ``,
		"price": 1705,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/hot-dog_78370-496.jpg?w=740&t=st=1692351936~exp=1692352536~hmac=00fd139b2de3c9b0ad403066422a1ca8f7ba9ff02a1984c7bd5bd3db55838b93",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	40: {"title": "Рибай из телятины",
		"under_title": "300 г",
		"desc": ``,
		"price": 4830,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/hot-dog_78370-496.jpg?w=740&t=st=1692351936~exp=1692352536~hmac=00fd139b2de3c9b0ad403066422a1ca8f7ba9ff02a1984c7bd5bd3db55838b93",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	41: {"title": "Дабл хот-дог",
		"under_title": "300 г",
		"desc": `2 сосиски, лист салата, фасоль, лук томленый, 3 вида соуса`,
		"price": 1315,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/hot-dog_78370-496.jpg?w=740&t=st=1692351936~exp=1692352536~hmac=00fd139b2de3c9b0ad403066422a1ca8f7ba9ff02a1984c7bd5bd3db55838b93",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	42: {"title": "Хот-дог",
		"under_title": "300 г",
		"desc": ``,
		"price": 1130,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/hot-dog_78370-496.jpg?w=740&t=st=1692351936~exp=1692352536~hmac=00fd139b2de3c9b0ad403066422a1ca8f7ba9ff02a1984c7bd5bd3db55838b93",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	43: {"title": "Колорадо",
		"under_title": "300 г",
		"desc": ``,
		"price": 1130,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/hot-dog_78370-496.jpg?w=740&t=st=1692351936~exp=1692352536~hmac=00fd139b2de3c9b0ad403066422a1ca8f7ba9ff02a1984c7bd5bd3db55838b93",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	44: {"title": "Барбекю",
		"under_title": "30 г",
		"desc": ``,
		"price": 230,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sauce-realistic-composition-with-isolated-image-of-small-dish-with-colorful-sauce-vector-illustration_1284-66029.jpg?w=740&t=st=1692351527~exp=1692352127~hmac=cb6bcf8e967ce4628ef3d5e3aace9794b5cefd9a80dc677d7371cf7d876172e1",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	45: {"title": "Сырный",
		"under_title": "30 г",
		"desc": ``,
		"price": 230,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sauce-realistic-composition-with-isolated-image-of-small-dish-with-colorful-sauce-vector-illustration_1284-66029.jpg?w=740&t=st=1692351527~exp=1692352127~hmac=cb6bcf8e967ce4628ef3d5e3aace9794b5cefd9a80dc677d7371cf7d876172e1",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	46: {"title": "Бомба сложная",
		"under_title": "30 г",
		"desc": ``,
		"price": 230,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sauce-realistic-composition-with-isolated-image-of-small-dish-with-colorful-sauce-vector-illustration_1284-66029.jpg?w=740&t=st=1692351527~exp=1692352127~hmac=cb6bcf8e967ce4628ef3d5e3aace9794b5cefd9a80dc677d7371cf7d876172e1",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	47: {"title": "Халапеньо",
		"under_title": "30 г",
		"desc": ``,
		"price": 290,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sauce-realistic-composition-with-isolated-image-of-small-dish-with-colorful-sauce-vector-illustration_1284-66029.jpg?w=740&t=st=1692351527~exp=1692352127~hmac=cb6bcf8e967ce4628ef3d5e3aace9794b5cefd9a80dc677d7371cf7d876172e1",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	48: {"title": "Чесночный",
		"under_title": "30 г",
		"desc": ``,
		"price": 230,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sauce-realistic-composition-with-isolated-image-of-small-dish-with-colorful-sauce-vector-illustration_1284-66029.jpg?w=740&t=st=1692351527~exp=1692352127~hmac=cb6bcf8e967ce4628ef3d5e3aace9794b5cefd9a80dc677d7371cf7d876172e1",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	49: {"title": "Кетчуп",
		"under_title": "30 г",
		"desc": ``,
		"price": 170,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sauce-realistic-composition-with-isolated-image-of-small-dish-with-colorful-sauce-vector-illustration_1284-66029.jpg?w=740&t=st=1692351527~exp=1692352127~hmac=cb6bcf8e967ce4628ef3d5e3aace9794b5cefd9a80dc677d7371cf7d876172e1",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	50: {"title": "Горчица",
		"under_title": "30 г",
		"desc": ``,
		"price": 170,
		"old_price": "",
		"img": "https://img.freepik.com/free-vector/sauce-realistic-composition-with-isolated-image-of-small-dish-with-colorful-sauce-vector-illustration_1284-66029.jpg?w=740&t=st=1692351527~exp=1692352127~hmac=cb6bcf8e967ce4628ef3d5e3aace9794b5cefd9a80dc677d7371cf7d876172e1",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	51: {"title": "Айран новый",
		"under_title": "0,5 л",
		"desc": ``,
		"price": 350,
		"old_price": "",
		"img": " https://img.freepik.com/premium-vector/bottle-of-soda-cola-in-plastic-tarre-vector-illustration-flat-design-isolated-on-white-background-fast-food-drink-symbol-carbonated-drink-refreshing-coca_153097-2260.jpg?w=740",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	52: {"title": "BonAqua",
		"under_title": "0,5 л",
		"desc": ``,
		"price": 405,
		"old_price": "",
		"img": " https://img.freepik.com/premium-vector/bottle-of-soda-cola-in-plastic-tarre-vector-illustration-flat-design-isolated-on-white-background-fast-food-drink-symbol-carbonated-drink-refreshing-coca_153097-2260.jpg?w=740",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	53: {"title": "Dizzy",
		"under_title": "0,5 л",
		"desc": ``,
		"price": 530,
		"old_price": "",
		"img": " https://img.freepik.com/premium-vector/bottle-of-soda-cola-in-plastic-tarre-vector-illustration-flat-design-isolated-on-white-background-fast-food-drink-symbol-carbonated-drink-refreshing-coca_153097-2260.jpg?w=740",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	54: {"title": "Coca-Cola",
		"under_title": "0,5 л",
		"desc": ``,
		"price": 460,
		"old_price": "",
		"img": " https://img.freepik.com/premium-vector/bottle-of-soda-cola-in-plastic-tarre-vector-illustration-flat-design-isolated-on-white-background-fast-food-drink-symbol-carbonated-drink-refreshing-coca_153097-2260.jpg?w=740",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	55: {"title": "Coca-Cola",
		"under_title": "1 л",
		"desc": ``,
		"price": 575,
		"old_price": "",
		"img": " https://img.freepik.com/premium-vector/bottle-of-soda-cola-in-plastic-tarre-vector-illustration-flat-design-isolated-on-white-background-fast-food-drink-symbol-carbonated-drink-refreshing-coca_153097-2260.jpg?w=740",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	56: {"title": "Айран Fresh",
		"under_title": "0,5 л",
		"desc": ``,
		"price": 200,
		"old_price": "",
		"img": " https://img.freepik.com/premium-vector/bottle-of-soda-cola-in-plastic-tarre-vector-illustration-flat-design-isolated-on-white-background-fast-food-drink-symbol-carbonated-drink-refreshing-coca_153097-2260.jpg?w=740",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	57: {"title": "Gorilla",
		"under_title": "0,5 л",
		"desc": ``,
		"price": 575,
		"old_price": "",
		"img": " https://img.freepik.com/premium-vector/bottle-of-soda-cola-in-plastic-tarre-vector-illustration-flat-design-isolated-on-white-background-fast-food-drink-symbol-carbonated-drink-refreshing-coca_153097-2260.jpg?w=740",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	58: {"title": "Lipton чай",
		"under_title": "0,5 л",
		"desc": ``,
		"price": 460,
		"old_price": "",
		"img": " https://img.freepik.com/premium-vector/bottle-of-soda-cola-in-plastic-tarre-vector-illustration-flat-design-isolated-on-white-background-fast-food-drink-symbol-carbonated-drink-refreshing-coca_153097-2260.jpg?w=740",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	59: {"title": "Fuse tea",
		"under_title": "1 л",
		"desc": ``,
		"price": 575,
		"old_price": "",
		"img": " https://img.freepik.com/premium-vector/bottle-of-soda-cola-in-plastic-tarre-vector-illustration-flat-design-isolated-on-white-background-fast-food-drink-symbol-carbonated-drink-refreshing-coca_153097-2260.jpg?w=740",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},
}

// Fake DB Dishes Sorted By DishesListId
export const fakeDishes = {1: {1: allDishes[1], 2: allDishes[2], 3: allDishes[3], 4: allDishes[4], 5: allDishes[5], 6: allDishes[6], 7: allDishes[7]},
					   2: {8: allDishes[8], 9: allDishes[9], 10: allDishes[10], 11: allDishes[11], 12: allDishes[12], 13: allDishes[13]},
						3: {14: allDishes[14], 15: allDishes[15]},
						4: {16: allDishes[16], 17: allDishes[17], 18: allDishes[18], 19: allDishes[19]},
						5: {20: allDishes[20], 21: allDishes[21], 22: allDishes[22], 23: allDishes[23], 24: allDishes[24], 25: allDishes[25], 26: allDishes[26], 27: allDishes[27]},
						6: {28: allDishes[28], 29: allDishes[29], 30: allDishes[30], 31: allDishes[31]},
						7: {32: allDishes[32], 33: allDishes[33]},
						8: {34: allDishes[34], 35: allDishes[35], 36: allDishes[36], 37: allDishes[37]},
						9: {38: allDishes[38], 39: allDishes[39], 40: allDishes[40], 41: allDishes[41], 42: allDishes[42], 43: allDishes[43]},
						10: {44: allDishes[44], 45: allDishes[45], 46: allDishes[46], 47: allDishes[47], 48: allDishes[48], 49: allDishes[49], 50: allDishes[50]},
						11: {50: allDishes[51], 52: allDishes[52], 53: allDishes[53], 54: allDishes[54], 55: allDishes[55], 56: allDishes[56], 57: allDishes[57], 58: allDishes[58], 59: allDishes[59]},
}


export const questionList = {
	1 : {"title": "Доставка", "sub_title": "Оплата крелитной картой",
		 "desc": "Вы можете указать информацию о своей компании. На сколько много информации здесь будет - зависит исключительно от вас. Мы рекомендуем красиво оформить и добавить фотографии в тело данного блока. По сути можно ничего и не писать, а просто удалить этот таб, ведь мало кому интересно читать этот текст. "
		},
	2 : {"title": "Оплата кредитной картой", "sub_title": "Оплата крелитной картой",
		 "desc": "Вы можете указать информацию о своей компании. На сколько много информации здесь будет - зависит исключительно от вас. Мы рекомендуем красиво оформить и добавить фотографии в тело данного блока. По сути можно ничего и не писать, а просто удалить этот таб, ведь мало кому интересно читать этот текст. "
	},
}
