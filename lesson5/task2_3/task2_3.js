const inner = document.querySelector('div');
let itemList = document.createElement('div');
inner.appendChild(itemList);

// при загрузке страницы инициируем пустую корзину
let newBasket = new Basket();
let items = {}; // сюда будем складывать пары (хэш товара: объкт товара)
// этот словарь понадобится для определения для какого товара произошло событие 
// его добавления в корзину

for (let i of catalog) {

	items[i.hash] = i;
	
	let item = document.createElement('div');	
	let inp = document.createElement('input');
	let btn = document.createElement('button');
		
	itemList.appendChild(item);	
	itemList.appendChild(inp);
	itemList.appendChild(btn);

	item.insertAdjacentText('afterBegin', i.name);
	inp.className = String(i.hash);
	inp.value = 0;
	btn.insertAdjacentText('afterBegin', 'В корзину');	
	btn.className = String(i.hash);

	btn.addEventListener ('click', function () {
		console.log('Start add items');
		let h = String(i.hash);
		let btnId = itemList.getElementsByClassName(h)[1];
		let inpId = itemList.getElementsByClassName(h)[0].value;
		let comment = document.createElement('div');
		if (inpId != 0) {
			newBasket.addItem(items[btnId.className], inpId);		
			btnId.insertAdjacentElement('afterEnd', comment);
			comment.insertAdjacentText('afterBegin', 'Товар добавлен в корзину');
		}		
	});	
}

// кнопка перехода в корзину
let btnBasket = document.createElement('button');
inner.appendChild(btnBasket);
btnBasket.insertAdjacentText('afterBegin', 'Перейти в корзину')
btnBasket.addEventListener('click', function () { viewBasket() })


function viewBasket () {
	let basketList = document.createElement('table');
	inner.innerHTML = '';
	inner.appendChild(basketList);

	let htmlTableHead = `
					<tr>
						<th>Наименование</th>
						<th>Описание</th>
						<th>Цена</th>
						<th>Количество</th>
					</tr>
					`
	basketList.insertAdjacentHTML('afterBegin', htmlTableHead);
	
	for (let i in newBasket.items) {
		let good = newBasket.items[i];
		let htmlTableData = `
						<tr>
							<td>${good[0].name}</td>
							<td>${good[0].description}</td>
							<td>${good[0].price}</td>
							<td>${good[1]}</td>
						</tr>
						`
		basketList.insertAdjacentHTML('beforeEnd', htmlTableData);

	
	}
	let p = document.createElement('p');
	inner.appendChild(p);
	p.insertAdjacentText('afterBegin', `Итого: ${newBasket.countBasketPrice()}`);
}


