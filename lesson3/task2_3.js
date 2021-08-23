// объявляем прототип Товар, на основе которого будем генерить товары
function Good (name, price, quantity, description = '') { 
	this.name = name;
	this.price = price;
	this.description = description;
}

// объявляем прототип Корзина, на основе которого будем генерить корзины разных покупателей
function Basket () { 
	this.items = {};
	this.index = 0;

}

// объявляем метод объeкта Корзина, который позволит добавить Товар в Корзину, а также его количество
Basket.prototype.addItem = function addItem (item, quantity) { 
	this.items[this.index] = [item, quantity];
	this.index++
}

// объявляем метод объекта Корзина, который позволит удалить Товар из Корзины
Basket.prototype.delItem = function delItem (itemIndex, quantity = 0) { 
	if (quantity == 0) {
		delete this.items[itemIndex];
	}
	else {
		this.items[itemIndex][1] -= quantity;
		if (this.items[itemIndex][1] == 0) {
			delete this.items[itemIndex];
		}
	}
	
}

// объявляем метод объекта Корзина, который посчитает общую стоимость товаров
Basket.prototype.countBasketPrice = function countBasketPrice () { 
		let cost = 0;
		for (idx in this.items) {
			goodQuantity = this.items[idx][1];
			good = this.items[idx][0];
			cost += goodQuantity * good.price
		}
		return cost;
}


// Проверка
// Создаем некоторые товары
var good1 = new Good('Good1', 100, 2);
var good2 = new Good('Good2', 300, 1, 'Bla-bla-bla');
var good3 = new Good('Good3', 1500, 1, 'Bu-bu-bu');
var good4 = new Good('Good4', 450, 10, 'Gagaga')

// Формируем корзину с нужными товарыми
var basket1 = new Basket();
basket1.addItem(good1, 10);
basket1.addItem(good2, 1);
basket1.addItem(good3, 1);

// Еще одна корзина
var basket2 = new Basket();
basket2.addItem(good4, 2);
basket2.addItem(good3, 5);

// Проверяем, что у нас лежит в корзинах
console.log('BASKET 1');
console.log(basket1.items);
console.log('BASKET 2');
console.log(basket2.items);

// Проверяем метод удаления товара из корзины
basket1.delItem(0, 5); // удаляем 5 шт данного товара
basket1.delItem(1); // удаляем целиком позицию товара из корзины
console.log('BASKET 1 after deletion');
console.log(basket1.items);

// Считаем получившуюся стоимость всех товаров в определенной корзине
console.log('BASKET 1');
console.log(basket1.countBasketPrice());
console.log('BASKET 2');
console.log(basket2.countBasketPrice());



