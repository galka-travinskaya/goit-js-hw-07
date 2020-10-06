const inputValue = document.querySelector('#validation-input');
const validValue = Number(inputValue.getAttribute('data-length'));

const onValidQuantity = (value) => {
    inputValue.value.length === validValue
    ? (inputValue.classList.add("valid"), inputValue.classList.remove("invalid"))
    : (inputValue.classList.add("invalid"), inputValue.classList.remove("valid"));
}

inputValue.addEventListener('blur', onValidQuantity);

console.log('Задание 6 Хочу повешать сюда еще и событие инпут, но у меня не выходит почему-то🙏');