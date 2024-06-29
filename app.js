/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector(".display");
const clear = document.querySelector(".button.operator.C");

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let lastInput = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText;
    console.log(event.target.innerText);

    if (event.target.classList.contains('number')) {
      handleNumber(value);
    } 
    else if (event.target.classList.contains('operator')) {
      handleOperator(value);
    } 
    
    else if (event.target.classList.contains('equals')) {
      handleEquals();
    } else if (value === 'C') {
      handleClear();
    }
  });
});

/*-------------------------------- Functions --------------------------------*/
function handleNumber(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

function handleOperator(value) {
  if (currentInput === '') return;
  if (lastInput !== '') {
    handleEquals();
  }
  operator = value;
  lastInput = currentInput;
  currentInput = '';
}

function handleEquals() {
  if (currentInput === '' || lastInput === '' || operator === '') return;

  let result;
  const prev= parseFloat(lastInput);
  const second= parseFloat(currentInput);

  if (operator === '+') {
    result =  prev+ curr;
  } 
  else if (operator === '-') {
    result = prev - curr;
  } 
  else if (operator === '*') {
    result = prev * curr;
  } 
  else if (operator === '/') {
    result = prev / curr;
  } 
  else {
    return;
  }

  currentInput = result.toString();
  operator = '';
  lastInput = '';
  updateDisplay(currentInput);
}

function handleClear() {
  currentInput = '';
  lastInput = '';
  operator = '';
  updateDisplay('0');
}

function updateDisplay(content) {
  display.textContent = content;
}
