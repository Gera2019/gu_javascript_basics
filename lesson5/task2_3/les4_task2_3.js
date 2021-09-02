String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

// объявляем прототип Товар, на основе которого будем генерить товары
function Good (name, price, category, description = '') { 
	this.name = name;
	this.price = price;
	this.description = description;
	this.category = category;
	this.hash = this.name.hashCode();
	this.quantity = 0;
}

// объявляем прототип Корзина, на основе которого будем генерить корзины разных покупателей
function Basket () { 
	this.items = {};
	this.index = 0;

}

// объявляем метод объeкта Корзина, который позволит добавить Товар в Корзину, а также его количество
Basket.prototype.addItem = function addItem (item, quantity) { 
	if (quantity != 0) {
		this.items[this.index] = [item, quantity];
		this.index++
		console.log('New item was added');
	}
	
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


function makeProductArray (list) {
	result = {};
	for (let i of list) {
		result[i.hash] = i;
	}
	return result;
}

// Проверка
// Создаем некоторые товары
let good1 = new Good('Good1', 100, 'Category1', 'Trtitr rtitr fgfg');
let good2 = new Good('Good2', 300, 'Category2', 'Bla-bla-bla');
let good3 = new Good('Good3', 1500, 'Category1', 'Bu-bu-bu');
let good4 = new Good('Good4', 450, 'Category1', 'Gagaga')

let catalog = [good1, good2, good3, good4];




// Формируем корзину с нужными товарыми
// let basket1 = new Basket();
// basket1.addItem(good1, 10);
// basket1.addItem(good2, 1);
// basket1.addItem(good3, 1);

// // Еще одна корзина
// let basket2 = new Basket();
// basket2.addItem(good4, 2);
// basket2.addItem(good3, 5);

// Проверяем, что у нас лежит в корзинах
// console.log('BASKET 1');
// console.log(basket1.items);
// console.log('BASKET 2');
// console.log(basket2.items);

// Проверяем метод удаления товара из корзины
// basket1.delItem(0, 5); // удаляем 5 шт данного товара
// basket1.delItem(1); // удаляем целиком позицию товара из корзины
// console.log('BASKET 1 after deletion');
// console.log(basket1.items);

// Считаем получившуюся стоимость всех товаров в определенной корзине
// console.log('BASKET 1');
// console.log(basket1.countBasketPrice());
// console.log('BASKET 2');
// console.log(basket2.countBasketPrice());



