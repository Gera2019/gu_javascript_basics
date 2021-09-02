
const inner = document.querySelector('div');
const head = document.head;

style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
cssTable = 'table {border: 1px solid;}';
cssTh = 'th {background-color: linen;}';
cssTdTh = 'th, td {width: 30px; height: 30px; border: 1px dotted;}';
cssBlk = '.blk {background-color: black}';

style.appendChild(document.createTextNode(cssTable));
style.appendChild(document.createTextNode(cssTh));
style.appendChild(document.createTextNode(cssTdTh));
style.appendChild(document.createTextNode(cssBlk));

function createBoard () {
	const chessBoard = document.createElement('table');
	let row = document.createElement('tr');
	chessBoard.appendChild(row);

	for (let i = 1, chrCode = 64; i < 10; chrCode++, i++) {		
		addrChar = String.fromCharCode(chrCode);
		let cellAddr = document.createElement('th');
		row.appendChild(cellAddr);
		
		if (i > 1) {
			cellAddr.insertAdjacentText('afterBegin', addrChar);
		}		
	}
	
	startColor = 1;
		
	for (let j = 2; j < 10; j++) {
		row = document.createElement('tr');			
		cellAddr = document.createElement('th');
		chessBoard.appendChild(row);
		row.appendChild(cellAddr);
		cellAddr.insertAdjacentText('afterBegin', j - 1);		
			
		for (let k = 2; k < 10; k++) {
			let cell = document.createElement('td');
			row.appendChild(cell);						
			if ((k + startColor) % 2 != 0) {
				cell.className = 'blk';
			}		
		}		
		startColor = 1 - startColor;
	}
	inner.appendChild(chessBoard);
}

createBoard();

