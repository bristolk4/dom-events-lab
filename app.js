/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

let total = 0;
let firstNumber = null;
let secondNumber = null;
let currentNumber = '';
let operatorChar = '';
/*------------------------ Cached Element References ------------------------*/

const buttonNumber = document.querySelector('.button number');
const buttonOperator = document.querySelector('.button operator');
const buttonEquals = document.querySelector('.button equals');

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      
      // This log is for testing purposes to verify we're getting the correct value
      // console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });
  
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    // console.log(event.target.innerText);
  

    //convert to integer
    // if 1st# = null ... if 2nd#
    // Example
    if (event.target.classList.contains('number')) {
 
      banana(event.target.innerText)
    } else {

    
  
    // Example
    if (event.target.innerText === '*') {
      operator('*')
    } else if (event.target.innerText === '/') {
      operator('/')
    } else if (event.target.innerText === '+') {
      operator('+')
    } else if (event.target.innerText === '-'){
      operator('-')
    } else {
      operator('=')
    }
  }


    if (event.target.innerText === 'C') {
      currentNumber = ''
      display.innerText = ''
    }
});
  
/*-------------------------------- Functions --------------------------------*/
 
const banana = (button) => {

  currentNumber += button;
  console.log(currentNumber);
  display.innerText = currentNumber;
}

const operator = (operatorType) => {
  let intButton = parseInt(currentNumber); 
  if (firstNumber === null){
    firstNumber = currentNumber;
    currentNumber = ''
    console.log(firstNumber)
  } else if (secondNumber === null) {
    secondNumber = currentNumber;
    currentNumber = ''
  }

  if (operatorType !== '='){
    operatorChar = operatorType
    console.log(operatorChar)
  } else {
    if (operatorChar === '+') {
      // console.log(firstNumber)
      // console.log(secondNumber)
      display.innerText = parseInt(firstNumber) + parseInt(secondNumber)
    } else if (operatorChar === '-') {
      display.innerText = parseInt(firstNumber) - parseInt(secondNumber)
    } else if (operatorChar --- '*') {
      display.innerText = parseInt(firstNumber) * parseInt(secondNumber) 
    } else {
      display.innerText = parseInt(firstNumber) / parseInt(secondNumber)
    }
  }

}

// parseInt makes string into integer

//COME BACK AND ADD NOTES