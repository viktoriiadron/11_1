// 1
let LastP = document.querySelector('#main > p:last-child');

function ChangeCol(element, color) {
    element.style.backgroundColor = `${color}`;
}

ChangeCol(LastP, 'purple');

function firstPlace(element, parentEl) {
    parentEl.before(element)
}

let main = document.querySelector('#main');
let wrapper = document.querySelector('#wrapper');
firstPlace(main, wrapper);





