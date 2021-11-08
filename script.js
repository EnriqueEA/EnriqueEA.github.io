/* jshint esversion: 10 */

window.onload = function () {
  const welcomeText = document.querySelector("#welcome-text span");
  addAnimationToNav();
  automaticWriting(["Me llamo Enrique y soy Desarrollador Web Junior"], welcomeText);
};

function addAnimationToNav() {
  const btnMenu = document.querySelector(".menu-btn");
  const [burgerMenu, close, nav] = document.querySelectorAll("nav, .menu-btn>svg");

  btnMenu.addEventListener("click", () => {
    nav.classList.toggle("show-nav");
    burgerMenu.classList.toggle("none");
    close.classList.toggle("none");
  });
}

function automaticWriting(sentences = [""], element = Element.prototype) {
  writeIn({ element, sentence: sentences[0] });
  console.log("Here" + sentences[0].length);
}

function writeIn({ element = Element.prototype, sentence = "", intervalSeconds = 0.15 }) {
  if (sentence === "") return;

  let index = 0;
  let writing = true;
  let counter = 0;

  const number = setInterval(() => {
		if (index === sentence.length-1) {
			writing = false;
    }
		element.innerHTML += sentence[index];
		writing === true ? index++ : index = 0;
		if (writing === false && index === 0) {
			clearInterval(number);
		}
    
  }, intervalSeconds * 1000);
}
