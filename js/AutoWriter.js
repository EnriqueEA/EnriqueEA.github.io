/* jshint esversion: 10 */
export default class AutoWriter {
  static writeIn({
    element = Element.prototype,
    text = "",
    intervalSeconds = 0.1,
  }) {
    if (text === "") return;
    let index = 0;

    const number = setInterval(() => {
      element.innerHTML += text[index];
      if (index === text.length - 1) clearInterval(number);
      else index++;
    }, intervalSeconds * 1000);
  }

  static eraseIn({ element = Element.prototype, intervalSeconds = 0.05 }) {
    const number = setInterval(() => {
      let chrt = element.innerHTML.slice(0, element.innerHTML.length - 1);
      element.innerHTML = chrt;
      if (chrt === "") clearInterval(number);
    }, intervalSeconds * 1000);
  }
}
