// ****** Task 1 ******

// var a = 1, b = 1, c, d;

// c = ++a; alert(c);           // 2  Сначало a увеличится на 1 (a = 2), а затем полученное значение присвоится переменной с (c = 2)
// d = b++; alert(d);           // 1  Сначало присвоится значение b переменной d (d = 1), а только потом значение b увеличится на 1 (b = 2)
// c = (2+ ++a); alert(c);      // 5  Сначало a увеличится на 1 (a = 3), затем произойдет сложение с 2 (c = 5)
// d = (2+ b++); alert(d);      // 4  Сначало произойдет сложение 2 с переменной b (d = 4), затем переменная b увеличится на 1 (b = 3)
// alert(a);                    // 3  Значение переменной a увеличивалось согласно предыдущим увеличениям (указано в скобках)
// alert(b);  					// 3 Значение переменной a увеличивалось согласно предыдущим увеличениям (указано в скобках)

// ****** Task 2 ******

// var a = 2; 
// var x = 1 + (a *= 2);  Сначало будет посчитано выражение в скобках (4), затем к результату прибавится 1 (5)
// Ответ: x = 5

// ****** Task 3 ******
console.log('****** Задание 3 ******')

function doAction(a, b) {
	if (a >= 0 && b >= 0) {
		return a - b
	}
	else if (a < 0 && b < 0) {
		return a * b
	}
	else {
		return a + b
	}
}

// Проверка

console.log('Оба числа положительные', doAction(23, 2))
console.log('Оба числа отрицательные', doAction(-4, -2))
console.log('Оба числа разных знаков', doAction(23, -34))


// ****** Task 4 ******
console.log('****** Задание 4 ******')

var a = Math.floor(Math.random() * 16)
console.log('Число a = ', a)

// Вариант с рекурсией

function returnNumber(x) {
	let end = 15
	if (x == end) {
		return x
	}
	return x + ' ' + returnNumber(x + 1) + ' '
}

// Вариант по требованию в задании

function stupidSwitch(a) {
	switch(a) {
		case 0:		
			console.log(0)
		case 1:
			console.log(1)
		case 2:
			console.log(2)
		case 3:
			console.log(3)
		case 4:
			console.log(4)
		case 5:
			console.log(5)
		case 6:
			console.log(6)
		case 7:
			console.log(7)
		case 8:
			console.log(8)	
		case 9:
			console.log(9)
		case 10:
			console.log(10)
		case 11:
			console.log(11)
		case 12:
			console.log(12)
		case 13:
			console.log(13)
		case 14:
			console.log(14)
		case 15:
			console.log(15)
	}
}

console.log(returnNumber(a))
	
// ****** Task 5 ******
console.log('****** Задание 5 ******')
console.log('см. Задание 6')

function addition(a, b) {
	return a + b;
}

function substraction(a, b) {
	return a - b;
}

function division(a, b) {
	if (b == 0){
		return 'Ошибка: деление на 0'
	}
	else {
		return a / b
	}
}
function multiplication(a, b) {
	return a * b
}


// ****** Task 6 ******
console.log('****** Задание 6 ******')

function calc(arg1, arg2, operation) {
	return operation(arg1, arg2)
}

var a = 2;
var b = 3;
console.log(a + '+' + b + '= ', calc(a, b, addition))
console.log(a + '-' + b + '= ', calc(a, b, substraction))
console.log(a + '/' + b + '= ', calc(a, b, division))
console.log(a + '*' + b + '= ', calc(a, b, multiplication))


// ******* Task 7 *******
console.log('****** Задание 7 ******')

console.log('null == 0', null == 0)
console.log('null > 0 или null < 0', null > 0, null < 0)
console.log('null >= 0 или null <= 0', null >= 0, null <= 0)

console.log('Поведение последнего сравнения очень подробно разбирается на хабра, https://habr.com/ru/company/ruvds/blog/337732/ . Вкратце - такое странное поведение заключается во внутренних алгоритмах преобразования и сравнения объектов (приведение их к примитивным типам и дальнейшее сравнение)')


// ******* Task 8 *******
console.log('****** Задание 8 ******')

function power(val, pow) {
	if (pow == 1) {
		return val
	}
	return (val * power(val, pow - 1))
}

// проверка
val = Math.floor(Math.random() * 5) + 2
pow = Math.floor(Math.random() * 5) + 1
console.log(val + ' в степени ' + pow + ' = ', power(val, pow))
