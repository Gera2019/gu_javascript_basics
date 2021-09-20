const inner = document.querySelector('div');
	inner.id = 'inner';

let n = 0; //количество товаров

 // при загрузке страницы инициируем пустую корзину
let newBasket = new Basket();
let items = {}; // сюда будем складывать пары (хэш товара: объкт товара)
// этот словарь понадобится для определения для какого товара произошло событие 
// его добавления в корзину

let j = 1; //счетчик для автогенерации имени файла с изображением товара

// заголовок, к котором находится кнопка перехода в корзину и количество полеженных туда товаров
let headerBlock = document.createElement('div');
	headerBlock.id = 'headerBlock';

// кнопка перехода в корзину
let btnBasket = document.createElement('button');
	btnBasket.id = 'btnBasket';
	btnBasket.insertAdjacentText('afterBegin', 'Перейти в корзину');
	btnBasket.addEventListener('click', function () { viewBasket() });

let itemCount = document.createElement('p');
	itemCount.className = 'itemCount';
	itemCount.insertAdjacentText('afterBegin', `В корзине товаров `);

let cnt = document.createElement('b');
	cnt.insertAdjacentText('afterBegin', `${n}`);

let newItemCount = document.createElement('p');
	newItemCount.className = 'itemCount';

// структура блока с кнопкой перехода в корзину и отображения количества товаров
inner.appendChild(headerBlock);
	headerBlock.appendChild(btnBasket);
	btnBasket.insertAdjacentElement('beforeBegin', itemCount);
		itemCount.insertAdjacentElement('beforeEnd', cnt);

// Блок галереи товаров
let galleryBlock = document.createElement('div');
	galleryBlock.id = 'galleryBlock';


inner.appendChild(galleryBlock);


for (let i of catalog) {

	items[i.hash] = i;
	
	let item = document.createElement('div');
	item.className = 'item';	

	// let itemWrapper = document.createElement('a');
	// itemWrapper.className = 'itemWrapper';
		
	let itemCard = document.createElement('div');
		itemCard.className = 'itemCard';
	
	// item card content
	let itemName = document.createElement('h3');
		itemName.insertAdjacentText('afterBegin', i.name);
		
	let itemImage = document.createElement('div');
		itemImage.className = 'itemImage';
		
	let imgBtn = document.createElement('button');
		imgBtn.id = 'imgBtn';
	
	let imgPreview = document.createElement('img');
		imgPreview.src = `./img/small/good${j}_1.jpeg`;
		imgPreview.setAttribute('data-modal', `modal_${j}`);
	
	let itemDescr = document.createElement('p');	
		itemDescr.insertAdjacentText('afterBegin', i.descryption);
	
	let itemCardBottom = document.createElement('div');
		itemCardBottom.id = 'itemCardBottom';
	
	let itemPrice = document.createElement('span');	
		itemPrice.insertAdjacentText('afterBegin', `${i.price} руб.`);

	let inp = document.createElement('input');	
		inp.className = String(i.hash);
		inp.value = 0;

	let buyBtn = document.createElement('button');			
		buyBtn.insertAdjacentText('afterBegin', 'Купить');	
		buyBtn.className = String(i.hash);

	//product card structure
	galleryBlock.appendChild(item);
			item.appendChild(itemCard);
				itemCard.appendChild(itemName);
				itemCard.appendChild(itemImage);
					itemImage.appendChild(imgBtn);
						imgBtn.appendChild(imgPreview);	
				itemCard.appendChild(itemDescr);
		item.appendChild(itemCardBottom);
			itemCardBottom.appendChild(itemPrice);
			itemCardBottom.appendChild(inp);
			itemCardBottom.appendChild(buyBtn);
	
	
	buyBtn.addEventListener ('click', function () {
		console.log('Start add items');
		let h = String(i.hash);
		let btnId = itemCardBottom.getElementsByClassName(h)[1];
		let inpId = itemCardBottom.getElementsByClassName(h)[0].value;

		if (inpId != 0) {
			newBasket.addItem(items[btnId.className], inpId);
			alert('Товар добавлен в корзину');					
			
			n = n + (+inpId);
			itemCount.removeChild(cnt);
			cnt = document.createElement('b');
			itemCount.insertAdjacentElement('beforeEnd', cnt);
			cnt.insertAdjacentText('afterBegin', `${n}`);
		}		
	});

	// формируем структуру всплывающих окон
	let modalBackgrnd = document.createElement('div');
		modalBackgrnd.className = 'overlay fadeOut';
	

	let modal = document.createElement('div');
		modal.id = `modal_${j}`;
		modal.className = 'modal modal-fade';
		modal.setAttribute('data-gallery', '');
	
	let mContainer = document.createElement('div');
		mContainer.className = 'mContainer';

	let mThumbsBlock = document.createElement('div');
		mThumbsBlock.className = 'mThumbsBlock';

	let mThumbsList = document.createElement('div');
		mThumbsList.className = 'mThumbsList';

	let mPhotoView = document.createElement('div');

	let mPhotoBox = document.createElement('div');
		mPhotoBox.className= 'mPhotoBox';

	let mImage = document.createElement('img');
		mImage.src = `./img/big/good${j}_1.jpeg`;

	let closeBtn = document.createElement('button');
		closeBtn.className = 'closer';
		closeBtn.setAttribute('data-close', '');	
		closeBtn.insertAdjacentText('afterBegin', `${String.fromCharCode(10005)}`);
	
	
	//modal popups structure
	inner.appendChild(modal);
		modal.appendChild(closeBtn);
		modal.appendChild(mContainer);
			mContainer.appendChild(mThumbsBlock);
				mThumbsBlock.appendChild(mThumbsList);
					for (let k = 1; k <= 3; k++) {
						let mThumbImg = document.createElement('img');
							mThumbImg.className = 'thumbs content-box'
							mThumbImg.src = `./img/small/good${j}_${k}.jpeg`;
						mThumbsList.appendChild(mThumbImg);
					}
		modal.appendChild(mPhotoView);
			mPhotoView.appendChild(mPhotoBox);
				mPhotoBox.appendChild(mImage);

	inner.appendChild(modalBackgrnd);

	j++;	

}


// функция просмотра корзины	
function viewBasket () {
	let basketList = document.createElement('table');
	inner.innerHTML = '';
	inner.appendChild(basketList);

	let htmlTableHead = `					
					<tr>
						<th>Наименование</th>						
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


//самовызывающаяся безымянныая функция
(function() {
	'use strict';
 
	// коллекция всех элементов на странице, которые могут открывать всплывающие окна
	// их отличительной особенность является наличие атрибута '[data-modal]'
	const mOpen = document.querySelectorAll('[data-modal]');
	// если нет элементов управления всплывающими окнами, прекращаем работу скрипта
	if (mOpen.length == 0) return;
	 
		  // подложка под всплывающее окно
	const overlay = document.querySelector('.overlay'),
		  // коллекция всплывающих окон
		  modals = document.querySelectorAll('.modal'),
		  // коллекция всех элементов на странице, которые могут
		  // закрывать всплывающие окна
		  // их отличительной особенность является наличие атрибута '[data-close]'
		  mClose = document.querySelectorAll('[data-close]');
	// флаг всплывающего окна: false - окно закрыто, true - открыто
	let	mStatus = false;

	for (let el of mOpen) {
		el.addEventListener('click', function(e) {
			// используюя атрибут [data-modal], определяем ID всплывающего окна,
			// которое требуется открыть
			// по значению ID получаем ссылку на элемент с таким идентификатором
			let modalId = el.dataset.modal,
				modal = document.getElementById(modalId);
			// вызываем функцию открытия всплывающего окна, аргументом
			// является объект всплывающего окна
			modalShow(modal);
		});
	}

	for (let el of mClose) {
		el.addEventListener('click', modalClose);
	}

	function modalShow(modal) {
		// показываем подложку всплывающего окна
		overlay.classList.remove('fadeOut');
		overlay.classList.add('fadeIn');
	
		modal.classList.remove('fadeOut');
		modal.classList.add('fadeIn');
		// выставляем флаг, обозначающий, что всплывающее окно открыто
		mStatus = true;
	}

	function modalClose(event) {
		if (mStatus && ( event.type != 'keydown' || event.keyCode === 27 ) ) {
			// обходим по очереди каждый элемент коллекции modals (каждое всплывающее окно)
			// и удаляем класс анимации открытия окна и добавляем класс анимации закрытия
			for (let modal of modals) {
				modal.classList.remove('fadeIn');
				modal.classList.add('fadeOut');
			}	 
			// закрываем overlay
			overlay.classList.remove('fadeIn');
			overlay.classList.add('fadeOut');
			// сбрасываем флаг, устанавливая его значение в 'false'
			// это значение указывает нам, что на странице нет открытых
			// всплывающих окон
			mStatus = false;
		}
	}
})();

;(function() {
	'use strict';
	
	class Gallery {
		constructor(gallery) {
			// контейнер для маленьких картинок (тумб)
			this.thumbsList = gallery.querySelector('.mThumbsList');
			// коллекция маленьких картинок (тумб)
			this.thumbs = this.thumbsList.querySelectorAll('img');
			// объект, в который будем выводить большую картинку
			this.image = gallery.querySelector('.mPhotoBox img');
			// кол-во фотографий в галереи
			this.count = this.thumbs.length;
			// индекс отображаемой фотографии, при инициализации скрипта
			// он по умолчанию равен 0
			this.current = 0;
			// регистрируем обработчики событий на странице с фотогалерей 
			this.registerEventsHandler();
		}
 	
		registerEventsHandler(e) {
			// клик по большой картинке
			this.image.addEventListener('click', this.imageControl.bind(this));
			// клик по тумбе
			this.thumbsList.addEventListener('click', this.thumbControl.bind(this));
		}

		showPhoto(i) {
			// используя полученный в качестве аргумента индекс
			// получаем 'src' тумбы в коллекции
			const src = this.thumbs[i].getAttribute('src');
			// полученный 'src' прописываем у большой картинки, предварительно
			// изменив путь (название папки)
			this.image.setAttribute('src', src.replace('small', 'big'));
			// устанавливаем текущий индекс равным индексу тумбы в коллекции
			this.current = i;
		}

		thumbControl(e) {
			// получаем элемент по которому был сделан клик
			const target = e.target;
			if (target.tagName != 'IMG') return;
			// получаем индекс фотографии в коллекции
			const i = [].indexOf.call(this.thumbs, target);
			this.showPhoto(i);
		}

		imageControl(e) {
			// показываем следующее фото
			this.showPhoto((this.current + 1) % this.count);
		}
	}

		// выбираем все фотогалереи на странице
	const galleries = document.querySelectorAll('[data-gallery]');
	// перебираем полученную коллекцию элементов
	for (let gallery of galleries) {
		// создаём экземпляр фотогалереи товаров для интернет-магазина
		const goodsgallery = new Gallery(gallery);
	}
	
 
})();