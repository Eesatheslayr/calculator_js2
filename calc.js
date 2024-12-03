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

//console.log(add());
//console.log(subtract());
//console.log(multiplication());
//console.log(division());

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

numbers.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = `${button.textContent}`;
    });
});

operators.forEach(button => {
    button.addEventListener('click', () =>{
        display.textContent = `${button.textContent}`;
    });
});


function calculate(numOne, numTwo, operator){
    if ( operator === 'addition'){
        return numOne + numTwo;
    } else if (operator === 'subtraction'){
        return numOne - numTwo;
    } else if (operator === 'multiplication'){
        return numOne * numTwo;
    } else if (operator === 'division'){
        return numOne / numTwo;
    }
};

