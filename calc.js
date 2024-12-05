let numOne = '';
let numTwo = '';
let operator = '';


function addition(){
   return  numOne + numTwo;
}

function subtraction(){
    return numOne - numTwo;
}

function multiplication(){
    return numOne * numTwo;
}

function division(){
    return numOne / numTwo;
}



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

const ac = document.querySelectorAll('.otherButtons button');

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
    } else if (operator === '*') {  
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }

   
    display.textContent = result;

   
    numOne = result.toString();
    numTwo = '';
    operator = '';
});
