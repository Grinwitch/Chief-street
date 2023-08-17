export function priceStyle(price){
	return (price) ? (price).toLocaleString('ru') : 0;
}

export const percentCalculate = (num, percent) => {
    return num - ((num / 100) * percent)
}

export default {priceStyle, percentCalculate};
