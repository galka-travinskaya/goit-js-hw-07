const refs = {
    input:document.querySelector('#name-input'),
    content: document.querySelector('#name-output'),
};

console.log('Задание 5');

const onInputChange = (event) => {
    event.currentTarget.value.length > 0 
    ? (refs.content.textContent = event.currentTarget.value) 
    : (refs.content.textContent = "незнакомец");

    console.log(event.currentTarget.value);
}

refs.input.addEventListener('input', onInputChange);

