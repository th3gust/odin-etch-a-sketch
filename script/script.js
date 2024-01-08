import { appendDiv} from "./createElement.js"
import * as el from './elements.js'

appendDiv()

function showDisplay(){
    const value = el.resolution.value
    el.showResolution.innerHTML = `${value} x ${value}`
    return value
}

function changeDivNumber(){
    const divNumber = showDisplay()
    appendDiv(divNumber)
}

el.resolution.addEventListener('change', showDisplay)
el.resolution.addEventListener('change', changeDivNumber)

const divBox = document.querySelectorAll('.box')

let color = 'black'

function rainbowMode(){
    const rainbowArray = [
        'rgb(255, 0, 0)',        // red
        'rgb(255, 165, 0)',      // orange
        'rgb(255, 255, 0)',      // yellow
        'rgb(0, 128, 0)',        // green
        'rgb(0, 0, 255)',        // blue
        'rgb(75, 0, 130)',       // indigo
        'rgb(238, 130, 238)'     // violet
    ];
    const color = rainbowArray[Math.floor(Math.random() * (rainbowArray.length))]
    return color
}

function selectedColor({target}){
    color = target.id.toLowerCase()
}

el.buttons.forEach( button =>{
    button.addEventListener('click', selectedColor)
})

let opacity = 0.1;

function changeColor({target}){
    const colorButtons = {
        erase: 'rgb(255, 255, 255)',
        black: 'black',
        rainbow: rainbowMode()
    }
    if (clicked){
        target.style.backgroundColor = colorButtons[color]

                target.style.opacity = opacity.toString();
        
                opacity += 0.1;
        
                if (opacity > 1) {
                    opacity = 0.1;
                }
    }
}

el.clear.addEventListener('click', clearAll);

function clearAll(){
    el.grid.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = 'white';
    });
    color = 'black';
}

let clicked = false

el.grid.addEventListener('mousedown', event => {
    if (event.target.classList.contains('box')) {
        clicked = true;
        changeColor(event);
    }
});

el.grid.addEventListener('mouseup', () => {
    clicked = false;
});

el.grid.addEventListener('mouseover', event => {
    if (clicked) {
        if (event.target.classList.contains('box')) {
            changeColor(event);
        }
    }
});
