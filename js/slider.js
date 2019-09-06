let sliderWidth = document.getElementById('slider').offsetWidth,
	slides = document.getElementById('slider').children,
	leftArrow = document.getElementById('leftArrow'),
	rightArrow = document.getElementById('rightArrow'),
	posX = 0,
	slide = 0;

function slideLeft() {
	if (slide+1 < slides.length) {
		sliderWidth = document.getElementById('slider').offsetWidth;
		posX -= sliderWidth;

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.transform = `translateX(${posX}px)`;
		}
		slide++;

		if (slide === slides.length - 1) {
			leftArrow.style.backgroundImage = 'url("../images/slider-arrow-filled-left.png")';
			rightArrow.style.backgroundImage = 'url("../images/slider-arrow-hollow-right.png")';
		} else {
			leftArrow.style.backgroundImage = 'url("../images/slider-arrow-filled-left.png")';
			rightArrow.style.backgroundImage = 'url("../images/slider-arrow-filled-right.png")';
		}
	}
}

function slideRight() {
	if (slide - 1 >= 0) {
		sliderWidth = document.getElementById('slider').offsetWidth;
		posX += sliderWidth;

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.transform = `translateX(${posX}px)`;
		}
		slide--;

		if (slide === 0) {
			leftArrow.style.backgroundImage = 'url("../images/slider-arrow-hollow-left.png")';
			rightArrow.style.backgroundImage = 'url("../images/slider-arrow-filled-right.png")';
		} else {
			leftArrow.style.backgroundImage = 'url("../images/slider-arrow-filled-left.png")';
			rightArrow.style.backgroundImage = 'url("../images/slider-arrow-filled-right.png")';
		}
	}
}