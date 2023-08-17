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

export default {priceStyle, percentCalculate, bodyOvr};
