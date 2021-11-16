/* jshint esversion: 10 */
import AutoWriter from './js/AutoWriter.js';

window.onload = function () {
  const welcomeText = document.querySelector("#welcome-text span");
	addAnimationToNavMenu();
	animationCursor();
	AutoWriter.writeIn({ element: welcomeText, text: "Me llamo Enrique y soy Desarrollador Web Junior"});
};

function addAnimationToNavMenu() {
	const menuNav = document.querySelectorAll(".menu-btn, .nav-container");
	const [btnBurgerMenu, btnClose] = document.querySelectorAll(".menu-btn>svg");
	const header = document.querySelector('header');

	menuNav.forEach((element) => {
		element.addEventListener("click", () => {
			if (document.body.offsetWidth <= 768) {
				menuNav[1].classList.toggle("show-nav");
				btnBurgerMenu.classList.toggle("none");
				btnClose.classList.toggle("none");
			}
		});
	});
}

function animationCursor() {
	const cursor = document.querySelector('.cursor');
	setInterval(() => {
		cursor.classList.toggle('hide');
	}, 450);
}

