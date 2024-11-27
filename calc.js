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
const numberButtons = document.querySelector('.numberButtons');
calculator.appendChild(numberButtons);

const numbers = document.querySelectorAll('.numberButtons button');

const operatorButtons = document.querySelector('.operatorButtons');
calculator.appendChild(operatorButtons);

const operators = document.querySelectorAll('.operatorButtons button');

const userChoiceOne = document.createElement('userChoiceOne');
const userChoiceTwo = document.createElement('userChoiceTwo')

calculator.appendChild(userChoiceOne);
calculator.appendChild(userChoiceTwo);


numbers.forEach(button => {
    button.addEventListener('click', () => {
    console.log(` ${button.textContent}`);
    });
});

operators.forEach(button => {
    button.addEventListener('click', () =>{
        console.log(`${button.textContent}`);
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

console.log(calculate(5, 2, 'addition'));