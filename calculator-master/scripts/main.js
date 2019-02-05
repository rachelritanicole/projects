
// MATH FUNCTIONS
function add(a, b) {
  return a + b;
}


function subtract(a, b) {
  return a - b;
}


function multiply(a, b) {
  return a * b;
}


function divide(a, b) {
  // override divisible by 0 error
  if (a === 0 || b === 0) {
    return "Cannot divide by 0";
  }
  return a / b;
}


// USER INPUT HANDLING
function operate(op) {
  const a = Number(aValue);
  const b = Number(bValue);

  switch (op) {
    case "+":
      totalValue = add(a, b);
      break;
    case "-":
      totalValue = subtract(a, b);
      break;
    case "x":
      totalValue = multiply(a, b);
      break;
    case "÷":
      totalValue = divide(a, b);
      break;
  }
  operator = "";
  aValue = totalValue;
  bValue = "";
  tempValue = "";
  operated = true;
  displayTotal(totalValue);
}


function getValue(value) {
  const ops = "+-x÷=";
  const values = "0123456789";

  if (value === "*") value = "x";
  if (value === "/") value = "÷";
  if (value === "Enter") value = "=";

  if (value === "Insert" && tempValue) {
    tempValue = (tempValue * -1).toString();
    tempStartPos = (calcValue.length - tempValue.length) + 1;

    if (tempValue < 0) { 
      calcValue = calcValue.slice(0, tempStartPos) + "(" + tempValue + ")";
    } else {
      calcValue = calcValue.slice(0, tempStartPos - 1) + tempValue;
    }
  }

  if (value === "Backspace" && tempValue && !totalValue) {
    tempValue = tempValue.slice(0, -1);
    calcValue = calcValue.slice(0, -1);
    displayCalc(calcValue);
    return;		
  }

  if (values.includes(value)) {
    if ((aValue && operator) || !aValue) {
      tempValue = tempValue.concat(value);
      calcValue = calcValue.concat(value);
    }
  }

  if (value === "." && !tempValue.includes(".")) {
    tempValue = tempValue.concat(value);
    calcValue = calcValue.concat(value);
  }
  
  if (ops.includes(value) && (tempValue || operated) && value !== "=") {
    if (aValue && !bValue) {
      bValue = tempValue;
      operate(operator);
    } else {
      aValue = tempValue;
      operated = false;
    }
    operator = value;
    calcValue = calcValue.concat(value);
    tempValue = "";
    totalValue = "";
  }

  if (ops.includes(value) && operator && value !== "=") {
    operated = false;
    operator = value;
    calcValue = calcValue.slice(0, -1).concat(value);
  }

  if (value === "=" && (aValue && tempValue)) {
    bValue = tempValue;
    operate(operator);
    aValue = totalValue; 
  }
	displayCalc(calcValue);
}
  

// DISPLAY 
function displayCalc(value) {
  calcDisplay.textContent = value;
}


function displayTotal(value) {
  if (value.toString().length > 13) {
    totalDisplay.style.fontSize = "30px";
  } else {
    totalDisplay.style.fontSize = "48px";
  }
  totalDisplay.textContent = value;
}


function clearCalc() {
  tempValue = "";
  aValue = "";
  bValue = "";
  operator = "";
  operated = false;

  calcValue = "";
  totalValue = "";

  calcDisplay.textContent = "";
  totalDisplay.textContent = "";

  calcDisplay.click();
}


// INITIALIZE
const calcDisplay = document.querySelector("#calc-display")
const totalDisplay = document.querySelector("#total-display")

let tempValue = "";
let aValue = "";
let bValue = "";
let operator = "";
let operated = false;

let calcValue = "";
let totalValue = "";
calcDisplay.textContent = "";
totalDisplay.textContent = "";


document.addEventListener("keydown", (evt) => {
  // This prevents the enter key from re-submitting the last clicked button
  if (evt.key === "Enter") evt.preventDefault();

  (evt.key === "Delete") ? clearCalc() : getValue(evt.key);
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    getValue(button.value);
  })
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  clearCalc();
});

const delButton = document.querySelector("#del");
delButton.addEventListener("click", () => {
  getValue("Backspace");
});

const posNegButton = document.querySelector("#pos-neg");
posNegButton.addEventListener("click", () => {
  getValue("Insert");
});

