const categories = document.querySelector('#categories');
// console.log(categories.children);
console.log('Задание 1');
console.log(`В списке ${categories.children.length} категории.`);

const categItems = document.querySelectorAll('.item');
categItems.forEach((el) => {
console.log(`Категория ${el.querySelector("h2").textContent}`);
console.log(`Количество элементов: ${el.querySelector("ul").children.length}`);
});
