// Игра "Кто хочет стать миллионером"

window.onload = function() {

	var questions = [
		{
			q: "Вопрос 1. Сумма 100 рублей.\nЧто обычно делает кошка, увидев перед собой злую собаку? (-1 - конец игры)\n",
			q1: "1. Зарывает голову в песок\n",
			q2: "2. Притворяется мертвой\n",
			q3: "3. Убегает\n",
			q4: "4. Мурлыкает\n",
			sum: 100,
			answer: 3
		},
		{
			q: "Вопрос 2. Сумма 200 рублей.\nКакой город называют мамой? (-1 - конец игры)\n",
			q1: "1. Одесса\n",
			q2: "2. Ростов\n",
			q3: "3. Москва\n",
			q4: "4. Санкт-Петербург\n",
			sum: 200,
			answer: 1
		},
		{
			q: "Вопрос 3. Сумма 300 рублей.\nКакой срок пребывания в Комарово наметил себе герой одноименной песни? (-1 - конец игры)\n",
			q1: "1. 1000 и одна ночь\n",
			q2: "2. Неделя\n",
			q3: "3. 15 суток\n",
			q4: "4. 9 112 недель\n",
			sum: 300,
			answer: 2
		},
		{
			q: "Вопрос 4. Сумма 500 рублей.\nВ каком городе находится штаб-квартира ООН? (-1 - конец игры)\n",
			q1: "1. Брюссель\n",
			q2: "2. Пекин\n",
			q3: "3. Сан-Франциско\n",
			q4: "4. Нью-Йорк\n",
			sum: 500,
			answer: 4
		},
		{
			q: "Вопрос 5. Сумма 1000 рублей.\nКогда родился Пушкин?\n",
			q1: "1. 1799\n",
			q2: "2. 1803\n",
			q3: "3. 1748\n",
			q4: "4. 1793\n",
			sum: 1000,
			answer: 1
		}
	];

	var event;
	var ok = false;
	startGame();

	function startGame() {
		var sum = 0;

		for(var i = 0; i < questions.length; i++) {

			do {
				event = +prompt(questions[i].q + questions[i].q1 + questions[i].q2 + questions[i].q3 + questions[i].q4);

				if(event == -1) {
					alert("Конец игры");
					break;
				} else {
					ok = isAnswer(event);
				}
			} while(!ok);

			if(event === questions[i].answer) {
				sum += questions[i].sum;
				alert("Правильный ответ.\nВы получаете " + questions[i].sum + " рублей.");
				continue;
			} else {
				sum = 0;
				alert("Вы проиграли!\nСумма сгорает.");
				break;
			}
		}

		if(sum > 0) {
			alert("Ваш выигрыш составил " + sum + " рублей");
		}
	}

	function isAnswer(event) {
		if(event < 1 || event > 4) {
			alert("Ваше число выходит из допустимого диапазона.");
			return false;
		} else if(isNaN(event) || !isFinite(event)) {
			alert("Вы ввели недопустимый символ");
		} else {
			return true;
		}
	}

}