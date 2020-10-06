const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector('#value');

let value = 0;
counterValue.textContent = value;

const increment = () => (counterValue.textContent = value += 1);
const decrement = () => (counterValue.textContent = value -= 1);

incrementEl.addEventListener("click", increment);
decrementEl.addEventListener("click", decrement);

console.log('Задание 4');
