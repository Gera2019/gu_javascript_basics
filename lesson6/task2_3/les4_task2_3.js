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
function Good (name, price, category, descryption = '') { 
	this.name = name;
	this.price = price;
	this.descryption = descryption;
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
let good1 = new Good('Примула в ассортименте d11 Lav', 100, 'Category1', 'Примула в ассортименте – многолетнее и однолетнее травянистое растение. Максимальная высота растения 50 см. Листовые пластины зеленые, с явно выраженными прожилками. Цветет крупными изящными яркими одиночными или махровыми цветами, собранными в соцветия. Форма соцветий зависит от сорта. Цветение длительное. Примула обладает лечебными свойствами.');
let good2 = new Good('Пеларгония d12 Tim', 300, 'Category2', 'Многолетние травянистое растение, которое любимо цветоводами за неприхотливость и невероятную красоту соцветий, которые похожи на порхающих бабочек!');
let good3 = new Good('Каланхоэ Розалина d6 h12', 1500, 'Category1', 'Каланхоэ Розалина – декоративно-лиственное, лекарственное растение семейства Толстянковые. Максимальная высота взрослого растения до 60 см. Данный сорт отличается компактными размерами и длительным цветением, более 10-12 недель. Цветки крупные, махровые, очень живописные. Цветение обильно и длительно.');
let good4 = new Good('Хризантема в ассортименте d12 ЕТК', 450, 'Category1', 'Хризантемы – садовые цветы удивительной красоты, которые радуют своим цветением всю осень! В последние годы упрочилась тенденция выращивать их как комнатные растения. Для этого подходят компактные сорта. При обеспечении правильного ухода за хризантемами они будут украшать не только ваш сад, но и интерьер!')

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



