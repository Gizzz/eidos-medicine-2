"use strict";

function initSlider() {
	var labels = document.querySelectorAll(".product-labels .label");
	var pics = document.querySelectorAll(".product-pics .pic");

	labels[0].classList.add("fade-in");
	pics[0].classList.add("slide-in");
	var currentSlideIndex = 0;

	var animationInterval = 2000;
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

window.onload = initSlider;