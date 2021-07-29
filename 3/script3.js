let num = Number(prompt('enter the number'));
let parentEl = document.querySelector('form');

function createInput(num) {

    if (num > 0) {
        for (let x = num; x > 0; x--) {
        let input = document.createElement('input');

            parentEl.prepend(input);
            input.setAttribute('class', 'input-item');
            input.setAttribute('value', `Input ${x}`);
        }
    } else { prompt('wrong') };
}

createInput(num);

let inputs = document.querySelectorAll('.input-item');
let lastInput = inputs[inputs.length - 1];
lastInput.classList.add('margin-zero');

for (let i = 0; i <= inputs.length -1; i++) {
    if (!(i % 2)) {
        inputs[i].classList.add('custom-bg')
    }
    if (!((i+1) % 3)) {
        inputs[i].setAttribute('placeholder', 'custom text');
        inputs[i].removeAttribute('value');
        console.log(inputs[i]);
    }
}

let customBg = document.querySelectorAll('.custom-bg');
customBg.forEach((elem) => elem.style.backgroundColor = 'violet');
console.log(customBg)




