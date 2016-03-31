"use strict";

function initSlider() {
	var products = document.querySelectorAll(".slider-products .product");
	var labels = document.querySelectorAll(".product-labels .label");

	labels[0].classList.add("fade-in");
	products[0].classList.add("slide-in");
	var currentSlideIndex = 0;

	var animationInterval = 3000;
	setInterval(function () {
		labels[currentSlideIndex].classList.remove("fade-in");
		labels[currentSlideIndex].classList.add("fade-out");

		products[currentSlideIndex].classList.remove("slide-in");
		products[currentSlideIndex].classList.add("slide-out");

		currentSlideIndex += 1;

		if (currentSlideIndex + 1 > labels.length) {
			currentSlideIndex = 0;
		}

		labels[currentSlideIndex].classList.remove("fade-out");
		labels[currentSlideIndex].classList.add("fade-in");

		products[currentSlideIndex].classList.remove("slide-out");
		products[currentSlideIndex].classList.add("slide-in");
	}, animationInterval);
}

window.onload = initSlider;