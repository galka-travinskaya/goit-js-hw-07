const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsEl = document.querySelector("#ingredients");
const addIngredient = (elements) => {
  return elements.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = element;
    return itemEl;
  });
};
const items = addIngredient(ingredients);
console.log('Задание 2', items);
ingredientsEl.append(...items);

