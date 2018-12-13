// Игра "Крестики-Нолики"

var board = document.getElementById('board'),
	player = document.getElementById('player'),
	element,
	innerElement,
	gamer1 = true;
	gameTable = [[null, null, null], [null, null, null], [null, null, null]],
	nullCount = 9,
	winner = null;

player.innerText = "Сейчас ходят X";

for(var i = 0; i < 9; i++) {
	element = document.createElement('div');
	element.classList.add('cell');
	innerElement = document.createElement('div');
	innerElement.classList.add('innerCell');
	innerElement.setAttribute('x', parseInt(i / 3).toString());
	innerElement.setAttribute('y', (i % 3).toString());
	innerElement.onclick = tableClick;
	element.appendChild(innerElement);
	board.appendChild(element);
}

document.getElementById('button').onclick = reset;

function tableClick() {
	if(this.innerText == '') {
		this.innerText = gamer1==true ? "X" : "0";
		var x = this.getAttribute('x'),
				y = this.getAttribute('y');
		gameTable[x][y] = gamer1;

		nullCount--;

		if((gameTable[x][0] === gamer1 && gameTable[x][1] === gamer1 && gameTable[x][2] === gamer1) ||
			 (gameTable[0][y] === gamer1 && gameTable[1][y] === gamer1 && gameTable[2][y] === gamer1) ||
			 (gameTable[0][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[2][2] === gamer1) ||
			 (gameTable[2][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[0][2] === gamer1)) {
			winner = gamer1;
		}

		gamer1 = !gamer1;
		player.innerText = gamer1 ? "Сейчас ходят X" : "Сейчас ходят 0";

		if(winner !== null) {
			if(confirm('Победу одержали: ' + (winner ? "X" : "0") + '\nЖелаете сыграть еще раз?')) {
				reset();
			}
		}

		if(nullCount == null) {
			if(confirm('Игра окончилась в ничью.\nХотите сыграть еще раз?')) {
				reset();
			}
		}

	} else {
		alert('Недопустимый ход!');
	}
}

function reset() {
	location.reload();
}











