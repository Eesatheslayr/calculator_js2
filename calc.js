let numOne = '';
let numTwo = '';
let operator = '';

const calculator = document.querySelector('.calculator');

const display = document.querySelector('#display');
calculator.appendChild(display);


const numberButtons = document.querySelector('.numberButtons');
calculator.appendChild(numberButtons);


const numbers = document.querySelectorAll('.numberButtons button');


const operatorButtons = document.querySelector('.operatorButtons');
calculator.appendChild(operatorButtons);

const operators = document.querySelectorAll('.operatorButtons button');



const otherButtons = document.querySelector('.otherButtons');
calculator.appendChild(otherButtons);

const ac = document.querySelector('#ac');

const equals = document.querySelector('#equal');


numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (!operator) {
            numOne += button.textContent;
            display.textContent = numOne;
        } 
        else {
            numTwo += button.textContent;
            display.textContent = numTwo;
        }
    });
});
operators.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
    });
});


equals.addEventListener('click', () => {
    let num1 = parseFloat(numOne);
    let num2 = parseFloat(numTwo);
    let result;


    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === 'X') {  
        result = num1 * num2;
    } else if (operator === '÷') {
        if (num2 === 0) {
            display.textContent = 'Error';
            return;
        }
        result = num1 / num2;
    }
   
    display.textContent = result;

   
    numOne = result.toString();
    numTwo = '';
    operator = '';
});

ac.addEventListener('click', () => {
    display.textContent = '0';
    numOne = '';
    numTwo = '';
})
