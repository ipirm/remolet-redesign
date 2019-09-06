let togglers = document.getElementsByClassName('faq__toggler'),
	answers = document.getElementsByClassName('faq__answer'),
	icons = document.getElementsByClassName('faq__toggler__icon'),
	texts = document.getElementsByClassName('faq__toggler__text');

// for animation
let heights = [];
for (let i = 0; i < answers.length; i++) {
	heights[i] = answers[i].offsetHeight;
	answers[i].style.height = 0;
}

for (let i = 0; i < togglers.length; i++) {
	togglers[i].onclick = () => {
		if (answers[i].offsetHeight < 10) {
			answers[i].style.height = heights[i] + 'px';
			texts[i].innerHTML = 'Свернуть';
			icons[i].style.backgroundImage = 'url("../images/minus-blue.png")';
		} else {
			answers[i].style.height = 0;
			texts[i].innerHTML = 'Раскрыть';
			icons[i].style.backgroundImage = 'url("../images/plus-blue.png")';
		}
	};
}