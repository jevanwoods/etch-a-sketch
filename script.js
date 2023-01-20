const etchBox = document.querySelector('#etchBox');

let gridSize = 16;
let etchSquare = document.createElement('div');

function etchFill() {
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        etchSquare = document.createElement('div');
        etchSquare.classList.add('etchSquare');
        etchSquare.textContent = '';
        etchBox.appendChild(etchSquare);
    }
};

etchFill();


// etchSquare.addEventListener('onmouseenter', etchSquare.classList.add('passedOver'));