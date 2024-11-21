let numOne = '';
let numTwo = '';
let operator = null;


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

const output = document.createElement('output');
calculator.appendChild(output);


function userNumberOne(){
numbers.forEach(button => {
    button.addEventListener('click', () => {
      output.textContent = (` ${button.textContent}`);
    });
})};


function userNumberTwo(){
numbers.forEach(button => {
     button.addEventListener('click', () => {
        output.textContent = (` ${button.textContent}`);
     });
     })};   

function userOperator(){
operators.forEach(button => {
    button.addEventListener('click' , () => {
        console.log(` ${button.textContent} `);
    });
})};

userNumberOne();
1