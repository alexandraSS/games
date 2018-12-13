// Игра "Квест"

window.onload = function() {

	var works = {
		a00:'Вы живёте в тихой и уютной деревеньке на окрайне страны. Здесь есть практически всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе. Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
		a0: 2,
		a1: '1 - Поспать до обеда\n',
		a2: '2 - Пойти прогуляться\n',

		b00: 'Вы решили поспать до обеда. После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни. После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
		b0: 2,
		b1: '1 - Пойти прогуляться\n',
		b2: '2 - Пойти пообедать\n',

		c00: 'Вы решили пойти прогуляться. Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади. Вы решаете дойти до озера, полюбоваться его красотой. С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес. С другой стороны течёт речка, а в далеке виднеются горы. Вы наслаждаетесь пейзажами и не замечаете как летит время. Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
		c0: 2,
		c1: '1 - Подождать обед в столовой\n',
		c2: '2 - Поколоть дров перед обедом\n',

		d00: 'Заходя в столовую, Вы натыкаетесь взглядом на книжный шкаф. Берете томик первой попавшейся книги и пролистываете заглавие. Затем ставите книгу на место и...\n',
		d0: 2,
		d1: '1 - Садясь за стол, приступаете к обеду.\n',
		d2: '2 - Понимаете, что не голодны и идете поколоть дрова\n',

		e00: 'После этого Вы идете навестить друзей.'
	};

	var event, ok;

	do {
		ok = false;

		event = +prompt(works.a00 + works.a1 + works.a2 + "-1 - конец игры");

		if(event == -1) {
			alert("Спасибо за игру!");
			break;
		} else {
			ok = isAnswer(works.a0, event);
		}
	} while(!ok);

	switch(event) {
		case 1:
			do {
				ok = false;

				event = +prompt(works.b00 + works.b1 + works.b2 + "-1 - конец игры");

				if(event == -1) {
					alert("Спасибо за игру!");
					break;
				} else {
					ok = isAnswer(works.b0, event);
				}
			} while(!ok);

			switch(event) {
				case 1:
					do {
						ok = false;

						event = +prompt(works.c00 + works.c1 + works.c2 + "-1 - конец игры");

						if(event == -1) {
							alert("Спасибо за игру!");
							break;
						} else {
							ok = isAnswer(works.c0, event);
						}
					} while(!ok);

					switch(event) {
						case 1:
							do {
								ok = false;

								event = +prompt(works.d00 + works.d1 + works.d2 + "-1 - конец игры");

								if(event == -1) {
									alert("Спасибо за игру!");
									break;
								} else {
									ok = isAnswer(works.d0, event);
								}
							} while(!ok);

							alert(works.e00); // end
							break;

						case 2:
							alert(works.e00); // end
							break;
					}

					break;

				case 2:
					do {
						ok = false;

						event = +prompt(works.d00 + works.d1 + works.d2 + "-1 - конец игры");

						if(event == -1) {
							alert("Спасибо за игру!");
							break;
						} else {
							ok = isAnswer(works.d0, event);
						}
					} while(!ok);

					alert(works.e00); // end
					break;
			}

			break;

		case 2:
			do {
				ok = false;

				event = +prompt(works.c00 + works.c1 + works.c2 + "-1 - конец игры");

				if(event == -1) {
					alert("Спасибо за игру!");
					break;
				} else {
					ok = isAnswer(works.c0, event);
				}
			} while(!ok);

			switch(event) {
				case 1:
					do {
						ok = false;

						event = +prompt(works.d00 + works.d1 + works.d2 + "-1 - конец игры");

						if(event == -1) {
							alert("Спасибо за игру!");
							break;
						} else {
							ok = isAnswer(works.d0, event);
						}
					} while(!ok);

					alert(works.e00); // end
					break;

				case 2:
					alert(works.e00); // end
					break;
			}
	}

	function isAnswer(quantity, event) {
		if(isNaN(event) || !isFinite(event)) {
			alert("Вы ввели недопустимый символ");
			return false;
		} else if (event < 1 || event > quantity) {
			alert("Ваше число выходит из допустимого диапазона");
			return false;
		} else {
			return true;
		}
	}

}