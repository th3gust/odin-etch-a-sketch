import * as el from './elements.js'

function createDiv(){
    const divElement = document.createElement('div')
    divElement.classList.add('box')
    return divElement
}

export function appendDiv(n = 16){
    el.grid.innerHTML = ''
    for (let i = 0; i < n * n; i++) {
        el.grid.appendChild(createDiv())
    }
    const boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.style.flexBasis = `calc(100%/${n})`
    });
}

