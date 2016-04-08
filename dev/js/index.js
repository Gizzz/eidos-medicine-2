"use strict";

function initSlider() {
	var sliderSection = document.querySelector("section.billboard");
	var labels = sliderSection.querySelectorAll(".product-labels .label");
	var pics = sliderSection.querySelectorAll(".product-pics .pic");
	var bgShadow = sliderSection.querySelector(".bg-shadow");
	var learnMoreBtn = sliderSection.querySelector(".learn-more");

	var currentSlideIndex = 0;
	var firstRun = true;

	var updateSlider = function() {
		if (firstRun) {
			labels[0].classList.add("fade-in");
			pics[0].classList.add("slide-in");
			bgShadow.classList.add("fade-in");
			learnMoreBtn.classList.add("fade-in");

			learnMoreBtn.href = labels[currentSlideIndex].dataset.productUrl;

			firstRun = false;
			return;
		}

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

		learnMoreBtn.href = labels[currentSlideIndex].dataset.productUrl;
	};

	updateSlider();

	var animationInterval = 5000;
	setInterval(updateSlider, animationInterval);
}

window.onload = function () {
	initSlider();
};

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

var isScrollAnimationTriggered = false;
window.onscroll = function () {
	if (isScrollAnimationTriggered) return;

	var trigger = document.querySelector(".animation-trigger");
	var coords = trigger.getBoundingClientRect();
	var isTriggerVisible = coords.top > 0;

	if (isTriggerVisible) {
		initNumbersCounter();
		isScrollAnimationTriggered = true;
	}
};

