// Игра "Быки и коровы"

window.onload = function() {

	var number = [];
	var attempts = 0;

	generateNumber();
	console.log(number);
	guessNumber();

	function generateNumber() {
		var min = 0,
				max = 9;

		for(var i = 0; i < 4; i++) {
			var numberPart = Math.round(min + Math.random() * (max - min));

			if(i == 0) {
				number[i] = numberPart;
			} else {

				while(number.indexOf(numberPart) != -1) {
					numberPart = Math.round(min + Math.random() * (max - min));
				}

				number[i] = numberPart;
			}
		}
	}

	function guessNumber() {
		var answer = prompt("Введите четырехзначное число (-1  - конец игры)", "");
		var gameIsRunning = true;

		while(gameIsRunning) {
			if(answer == -1) {
				alert("Спасибо за игру!");
				gameIsRunning = false;
			} else if (isNaN(parseInt(answer)) || parseInt(answer) == 0) {
				alert('Вы ввели не число.');
				answer = prompt("Введите четырехзначное число (-1  - конец игры)", "");
			} else {
				var result = checkNumber(answer);

				if(result[0]) {
					alert('Поздравляем! Вы выиграли!\nКоличество попыток: ' + attempts);
					gameIsRunning = false;
				} else {
					answer = prompt('Быки: ' + result[1] + ", коровы: " + result[2] + ".\nВведите четырехзначное число (-1  - конец игры)", "");
				}
			}
		}
	}

	function checkNumber(answer) {
		attempts++;

		var gameResult = [false, 0, 0];
		var answerArray = answer.split('');

		for(var i = 0; i < answerArray.length; i++) {
				if(parseInt(answerArray[i]) == number[i]) {
				gameResult[1]++;
			} else if(number.indexOf(parseInt(answerArray[i])) != -1){
					gameResult[2]++;
			}
		}

		if(gameResult[1] == 4) {
			gameResult[0] = true;
		}

		return gameResult;
	}

}