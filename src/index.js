module.exports = function reverse(n) {
	return (
		parseFloat(
			n
				.toString()
				.split('')
				.reverse()
				.join('')
		)
	)
}


// Шаг 1: Преобразовать число в строку - .toString()
// Шаг 2: Разделить строку на массив - .split('')
// Шаг 3: Перевернуть массив - .reverse()
// Шаг 4: Соедините его обратно в строку - .join('')
// Шаг 5: Превратить входное значение в число с плавающей запятой parseFloat()
