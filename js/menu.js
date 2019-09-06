let content = document.getElementsByClassName('side-menu__content')[0],
	overlay = document.getElementsByClassName('side-menu__overlay')[0],
	lis = document.getElementsByClassName('side-menu__left-li'),
	rightSide = document.getElementsByClassName('side-menu__right-side')[0],
	rightSideContents = document.getElementsByClassName('side-menu__right-side__content'),
	icon = document.getElementsByClassName('side-menu__menu-icon')[0];
	contentHeight = content.offsetHeight,
	rightSideWidths = [],
	menusCount = lis.length,
	active = 0;

for (let i = 0; i < menusCount; i++) {
	rightSideContents[i].classList.add('active');
	rightSideWidths[i] = rightSideContents[i].offsetWidth;
	rightSideContents[i].classList.remove('active');

	lis[i].onclick = () => { openRightSide(i) };
}

overlay.onclick = () => {toggleLeftSide()};

rightSide.style.width = 0;
content.style.height = 0;

function toggleLeftSide() {
	if (content.offsetHeight < 10) {
		content.style.height = contentHeight + 'px';
		overlay.style.visibility = 'visible';
		overlay.style.opacity = 1;
		document.body.style.overflow = 'hidden';
		setTimeout(() => {
			lis[active].classList.add('active');
			rightSide.style.width = rightSideWidths[active] + 'px';
		}, 500);
		setTimeout(() => {
			rightSideContents[active].classList.add('active');
		}, 1000);
		icon.style.backgroundImage = "url('../images/cross.svg')";
		icon.style.width = icon.style.height = '18px';
	} else {
		rightSide.style.width = 0;
		lis[active].classList.add('notActive');
		lis[active].classList.remove('active');
		rightSideContents[active].classList.remove('active');
		setTimeout(() => {
			content.style.height = 0;
			overlay.style.opacity = 0;
			document.body.style.overflow = 'auto';
			lis[active].classList.remove('notActive');
		}, 500);
		setTimeout(() => {overlay.style.visibility = 'hidden';}, 1000);
		icon.style.backgroundImage = "url('../images/three-lines.svg')";
		icon.style.width = '22px';
		icon.style.height = '16px';
	}
}

function openRightSide(i) {
	lis[active].classList.add('notActive');
	lis[active].classList.remove('active');
	rightSideContents[active].classList.remove('active');
	setTimeout(() => {
		lis[active].classList.remove('notActive');
		active = i;
		lis[active].classList.add('active');
		rightSideContents[active].classList.add('active');
	}, 200);
}
