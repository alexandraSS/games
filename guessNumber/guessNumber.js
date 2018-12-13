// Игра "Угадай число"

window.onload = function() {

	var number;
	var attempts = 0;

	number = Math.round(Math.random() * (9999 - 1000) + 1000);
	guessNumber();

	function guessNumber() {

		if(attempts == 3) {
			alert("У Вас закончилось число попыток.");
			return;
		}

		attempts++;

		var answer = +prompt("Введите четырехзначное число (-1 - вызод из игры)", "");

		if(answer == number) {
			alert("Поздравляем! Вы угадали!");
			location.reload();
		} else if (answer == 0 || isNaN(answer)) {
			alert("Вы ввели не число");
			guessNumber();
		} else if (answer == -1) {
			alert("Спасибо за игру!");
		} else {
			if(answer > number) {
				alert("Вы ввели число большее, чем загадано.");
			} else {
				alert("Вы ввели число меньшее, чем загадано.");
			}
			guessNumber();
		}
	}

}


