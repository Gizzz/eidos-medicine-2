"use strict";

function initSlider() {
	var labels = document.querySelectorAll(".product-labels .label");
	var pics = document.querySelectorAll(".product-pics .pic");

	labels[0].classList.add("fade-in");
	pics[0].classList.add("slide-in");
	var currentSlideIndex = 0;

	var animationInterval = 5000;
	setInterval(function () {
		labels[currentSlideIndex].classList.remove("fade-in");
		labels[currentSlideIndex].classList.add("fade-out");

		pics[currentSlideIndex].classList.remove("slide-in");
		pics[currentSlideIndex].classList.add("slide-out");

		currentSlideIndex += 1;
		if (currentSlideIndex + 1 > labels.length) {
			currentSlideIndex = 0;
		}

		labels[currentSlideIndex].classList.remove("fade-out");
		labels[currentSlideIndex].classList.add("fade-in");

		pics[currentSlideIndex].classList.remove("slide-out");
		pics[currentSlideIndex].classList.add("slide-in");
	}, animationInterval);
}

function initNumbersCounter() {
	var options = {
		useEasing : false,
		useGrouping : true,
		separator : ',',
		decimal : '.',
		prefix : '',
		suffix : ''
	};

	var animationDuration = 1;

	var counter1 = new CountUp("counter-1", 0, 1, 0, animationDuration, options);
	counter1.start();

	var counter2 = new CountUp("counter-2", 0, 9, 0, animationDuration, options);
	counter2.start();

	var counter3 = new CountUp("counter-3", 0, 5, 0, animationDuration, options);
	counter3.start();

	var counter4 = new CountUp("counter-4", 0, 100, 0, animationDuration, options);
	counter4.start();

	options.suffix = "+";
	var counter5 = new CountUp("counter-5", 0, 5, 0, animationDuration, options);
	options.suffix = "";
	counter5.start();

	var counter6 = new CountUp("counter-6", 0, 10, 0, animationDuration, options);
	counter6.start();
}

window.onload = function () {
	initSlider();
	initNumbersCounter();
};