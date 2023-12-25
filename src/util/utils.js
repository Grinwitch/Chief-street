export function priceStyle(price){
	return (price) ? (price).toLocaleString('ru') : 0;
}

export const percentCalculate = (num, percent) => {
    return num - ((num / 100) * percent)
}

export const bodyOvr = (state) => {
	let body = document.querySelector('body').style;
	body.overflow = (state) ? 'hidden' : 'auto';

	return state;
}

export const debounce = (func, ms) =>{
    let timeout;

    return function(){
        const fnCall = () => {func.apply(this, arguments)}
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    };
}

export function randomNum(len){
	let result = '';
	for(let _ = 0; _ < len; _ ++)
		result += Math.floor(Math.random() * 9).toString();
	return result
}

export function serializeJson(data){
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

// Calculate Amount Sum and Discount Price
export function amountSum(dishes, shoppingCart, amount, oldPriceCalc = false, oldPrice = 0){
	amount = 0;
	oldPrice = 0;

	for (let key in shoppingCart){
		if (dishes[key] !== undefined){
			amount += dishes[key].price * shoppingCart[key];

			if (oldPriceCalc)
				oldPrice += (dishes[key].old_price > 0) ? dishes[key].old_price - dishes[key].price : 0;
		}
	}

	return (oldPriceCalc) ? [amount, oldPrice] : amount;
}

export const settings = {
	apiKey: 'e5fd8c32-a818-4f60-98d5-5faffcd7dcac', // Индивидуальный ключ API
	lang: 'ru_RU', // Используемый язык
	coordorder: 'latlong', // Порядок задания географических координат
	debug: true, // Режим отладки
	version: '2.1' // Версия Я.Карт
}

export default {priceStyle, percentCalculate, bodyOvr, serializeJson, debounce, amountSum, randomNum, settings};
