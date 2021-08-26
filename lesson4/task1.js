function toObject (number) {
	
	if (number >= 0 && number <= 999) {
		var num = {
			'единицы': number % 10,
			'десятки': Math.floor(number / 10) % 10,
			'сотни': Math.floor(number / 100)
		}
	}
	else {
		console.log('Число не в диапазоне от 0 до 999');
		num = {};
	}
	return num;
}



n = 123;
console.log(typeof(toObject(n)), toObject(n));

n = 1234;
console.log(toObject(n));

n = 45;
console.log(toObject(n));

