$('.customer-list').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	prevArrow:
		'<button class="slide-arrow prev-arrow"><img src="./images/icon/prev.svg" alt=""></button>',
	nextArrow:
		'<button class="slide-arrow next-arrow"><img src="./images/icon/next.svg" alt=""></button>',
	responsive: [
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},

		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});

const menu = document.querySelector('.menu');
const toggleMobile = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.overlay');
const headerBox = document.querySelector('.header-box');

toggleMobile.addEventListener('click', () => {
	showMenu();
});

overlay.addEventListener('click', () => {
	showMenu();
});
headerBox.addEventListener('click', () => {
	headerBox.querySelector('.header-auth').classList.toggle('active');
});
function showMenu() {
	menu.classList.toggle('active');
	toggleMobile.classList.toggle('active');
	overlay.classList.toggle('active');
}
menu.addEventListener('click', (e) => {
	if (
		e.target.classList.contains('menu-link') &&
		!e.target.classList.contains('active')
	) {
		menu.querySelector('.active').classList.remove('active');
		e.target.classList.add('active');
		showMenu();
	}
});
