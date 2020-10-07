const refs = {
    controlsEl: document.querySelector('#controls'),
    inputEl: document.querySelector('#controls input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxesEl: document.querySelector('#boxes'),
} 

const createBoxes = size => {
    const box = document.createElement('div');
    box.style.width = '${size}px';
    box.style.height = '${size}px';
    box.style.backgroundColor = randomColor();

    return box;
};

function createNewBoxes(amount) {
    const fragment = document.createDocumentFragment();

    for(i = 0; i < amount; i++) {
        const size = baseBoxSize + i * 10;
        const div = createNewBox(size);
        
        fragment.appendChild(div);
    }

    boxesEl.appendChild(fragment);
}

