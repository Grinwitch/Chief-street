// Fake DB Id, DishesName
export const fakeDishesList = {1: "Бургеры", 2: "Домашняя кухня"};
export const fakePoints = {1: {"title": "Ресторан №1", "location": "ул. Аскарова 41, дом 5"},
						   2: {"title": "Ресторан №2", "location": "ул. Аскарова 41, дом 5"},
						   3: {"title": "Ресторан №3", "location": "ул. Аскарова 41, дом 5"},
						   4: {"title": "Ресторан №4", "location": "ул. Аскарова 41, дом 5"},
						}

// All Dishes
export const allDishes = {
	// id
	1: {"title": "Филадельфия", // Product Titile
		// Product Under Tile
		"under_title": "3,500 гр",
		// Product Description
		"desc": "хачапури с начинкой из сыра и картофеля диаметр 20 см.",
		// Product Price
		"price": 2400,
		// Product Old Price
		"old_price": 3500,
		// Product Image URL
		"img": "https://img.freepik.com/free-vector/fresh-carrot-and-mushroom-vegetables_24877-57938.jpg?w=2000&t=st=1692344383~exp=1692344983~hmac=ce36ae240da49c6cb97d801a87d4799e88263e6b3f0c55f4988db82af5d71d57",
		// Stickers
		"stickers": {"hit": true, "new": false, "promo": false, "discount": 10}
	},

	2: {"title": "Какой то бургер",
		"under_title": "3,5 гр",
		"desc": "хачапури в форме лодочки с хрустящими бортами, домашним сыром и двумя желтками",
		"price": 5000,
		"old_price": 7000,
		"img": "https://img.freepik.com/free-vector/top-view-of-modern-restaurant-table-with-flat-design_23-2147920465.jpg?w=2000&t=st=1692344271~exp=1692344871~hmac=5d4860a6fd64f87e13631a75cd4f096ae5dd032d0fdb592fcac744f93843dd17",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	3: {"title": "Какой то бургер",
		"under_title": "3,5 гр",
		"desc": "классический хачапури с начинкой из домашнего сыра, шампиньонов, куриного филе и желтка",
		"price": 5000,
		"old_price": "",
		"img": "https://imageproxy.wolt.com/menu/menu-images/5f7ff39e25f0074affcbfebe/932b6dba-31bb-11ee-84e7-2e45856e8e9b_10414",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},

	4: {"title": "Какой то бургер",
		"under_title": "3,5 гр",
		"desc": "традиционный закрытый хачапури с двойной порцией домашнего сыра – внутри и снаружи",
		"price": 5000,
		"old_price": "",
		"img": "https://imageproxy.wolt.com/menu/menu-images/61c9891031184b3eeaa761d1/36756868-2b6d-11ee-ba27-5e54d798874b_10290",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 0}
	},
	5: {"title": "психологический возраст",
		"under_title": "3 500 гр",
		"desc": "Определить свой психологический возраст поможет онлайн тест. Кто у вас внутри? Подросток, жаждущий всего нового? Зрелый самодостаточный семьянин? Повидавший многое пенсионер или кто‐то другой? Профессиональный тест на возраст покажет истину. ",
		"price": 7000,
		"old_price": 10000,
		"img": "https://imageproxy.wolt.com/menu/menu-images/64379331ef60aeab5c5db9c3/c2c3a358-d9be-11ed-9279-4e511504cb44________5.jpeg",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 50}
	},
	6: {"title": "Whopper c хрустящей парой",
		"under_title": "3 500 гр",
		"desc": `Воппер + Воппер + Луковые колечки 8 шт. + Наггетсы 9 шт. + Соус со скидкой -20% `,
		"price": 7000,
		"old_price": "",
		"img": "https://imageproxy.wolt.com/menu/menu-images/6319b5bc7f330c13850c14b9/6598f630-2a1b-11ee-9cdb-727d041374de_c51ba99b_22d0_4f3b_b050_0a7b4cab3a1b.jpg",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 50}
	},
	7: {"title": "Рисовая каша",
		"under_title": "3 500 гр",
		"desc": `Воппер + Воппер + Луковые колечки 8 шт. + Наггетсы 9 шт. + Соус со скидкой -20% `,
		"price": 700,
		"old_price": "",
		"img": "https://imageproxy.wolt.com/menu/menu-images/61763e759ced217a6a49956e/0e80eba2-ab4e-11ec-a056-3694656c5863_risovaya_kasha_na_moloke_12_retseptov_prigotovleniya_5.jpeg?w=600",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 50}
	},

	8: {"title": "Хоретика", "under_title": "300 гр",
		"desc": `состав: огурцы помидоры оливки лист салата красный лук `,
		"price": 2500,
		"old_price": "",
		"img": "https://imageproxy.wolt.com/menu/menu-images/61763e759ced217a6a49956e/2e2fb0de-b690-11ed-bf2e-569f909113f0_m01a0849.jpeg?w=600",
		"stickers": {"hit": true, "new": true, "promo": false, "discount": 0}
	},

	9: {"title": "Маргарита",
		"under_title": "35 мл",
		"desc": `Воппер + Воппер + Луковые колечки 8 шт. + Наггетсы 9 шт. + Соус со скидкой -20% `,
		"price": 2550,
		"old_price": "",
		"img": "https://imageproxy.wolt.com/menu/menu-images/61763e759ced217a6a49956e/5a87bcea-3c6f-11ec-9467-e229dee462e5________________.jpeg?w=600",
		"stickers": {"hit": false, "new": false, "promo": false, "discount": 0}
	},

	10: {"title": "Whopper c хрустящей парой",
		"under_title": "3 500 гр",
		"desc": `Воппер + Воппер + Луковые колечки 8 шт. + Наггетсы 9 шт. + Соус со скидкой -20% `,
		"price": 7000,
		"old_price": "",
		"img": "https://imageproxy.wolt.com/menu/menu-images/6319b5bc7f330c13850c14b9/6598f630-2a1b-11ee-9cdb-727d041374de_c51ba99b_22d0_4f3b_b050_0a7b4cab3a1b.jpg",
		"stickers": {"hit": false, "new": true, "promo": false, "discount": 50}
	},
}

// Fake DB Dishes Sorted By DishesListId
export const fakeDishes = {1: {1: allDishes[1], 2: allDishes[2], 3: allDishes[3], 4: allDishes[4],},
					   2: {5: allDishes[5], 6: allDishes[6], 7: allDishes[7], 8: allDishes[8], 9: allDishes[9], 10: allDishes[10],
			}
}


export const questionList = {
	1 : {"title": "Доставка", "sub_title": "Оплата крелитной картой",
		 "desc": "Вы можете указать информацию о своей компании. На сколько много информации здесь будет - зависит исключительно от вас. Мы рекомендуем красиво оформить и добавить фотографии в тело данного блока. По сути можно ничего и не писать, а просто удалить этот таб, ведь мало кому интересно читать этот текст. "
		},
	2 : {"title": "Оплата кредитной картой", "sub_title": "Оплата крелитной картой",
		 "desc": "Вы можете указать информацию о своей компании. На сколько много информации здесь будет - зависит исключительно от вас. Мы рекомендуем красиво оформить и добавить фотографии в тело данного блока. По сути можно ничего и не писать, а просто удалить этот таб, ведь мало кому интересно читать этот текст. "
	},
}
