const inputFont = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const changeSizeText = () =>
  (textEl.style.fontSize = `${inputFont.value}px`);

inputFont.addEventListener("input", changeSizeText);

console.log('Задание 7');
