// state
let currentInput = "";
let firstValue = "";
let operator = "";
let shouldResetInput = false;

// DOM selectors
const buttons = document.querySelectorAll('.calculator-button');
const displayScreen = document.querySelector('.calculator-display');

function display() {
    displayScreen.textContent = currentInput || "0";
}
display()

// full reset 
function handleClear() {
    currentInput = "";
    displayScreen.textContent = currentInput || "0";
};

// handle action of clicks
function handleNumberClick(number) {
    if (shouldResetInput) {
        currentInput = "";
        shouldResetInput = false;
    }
    currentInput += number;
    display();
    console.log(currentInput);
};

// handles operator clicks 
function handleOperatorClick(ClickedOperator) {
    if (currentInput === "") {
        operator = ClickedOperator; 
        return;
    }
    if (operator !== "" && currentInput !== "") {
        let secondValue = currentInput;
        let result = operate(operator, firstValue, secondValue);
        if (typeof result === 'number' && Number.isFinite(result)) {
        // Round safely to 7 significant digits
        result = Number(result.toPrecision(7));
        }
        firstValue = result;
        currentInput = "";
        displayScreen.textContent = firstValue;
        console.log(result);
    } else {
        firstValue = currentInput;
        currentInput = "";
    }
    operator = ClickedOperator; 
};

// basic math operators
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        return "0";
    }
    return num1 / num2;
}
function squareRoot(num) {
    if (num < 0) {
        return "Invalid Number";
    }
    return Math.sqrt(num);
}
function negate(num) {
    return -num;
}

// operate. convert string to number
function operate(operator, firstValue, secondValue) {

    // convert ONCE here
    firstValue = Number(firstValue);
    secondValue = Number(secondValue);

    if (operator === "+") return add(firstValue, secondValue);
    if (operator === "-") return subtract(firstValue, secondValue);
    if (operator === "*") return multiply(firstValue, secondValue);
    if (operator === "/") return divide(firstValue, secondValue);
    return "Invalid Number";
};

function handleSquareRoot() {
    if (currentInput === "") return;

    let value = Number(currentInput);
    let result = squareRoot(value);

    if (typeof result === 'number' && Number.isFinite(result)) {
        result = Number(result.toPrecision(7));
    }

    currentInput = String(result);
    shouldResetInput = true;
    display();
}

function handleNegate() {
    if (currentInput === "") {
        if (firstValue === "") return;
        currentInput = String(negate(Number(firstValue)));
        firstValue = currentInput;
        display();
        return;
    }

    let value = Number(currentInput);
    currentInput = String(negate(value));
    display();
}

// when presses equal operator 
function equalOperator() {
    if (operator === "") return;
    let secondValue = currentInput;
    let result = operate(operator, firstValue, secondValue);
    if (typeof result === 'number' && Number.isFinite(result)) {
        // Round safely to 7 significant digits
       result = Number(result.toPrecision(7));
    }
    firstValue = "";
    operator = "";
    currentInput = String(result);
    shouldResetInput = true;
    display();
    console.log(currentInput);
};


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (!isNaN(value) || value === ".") {
        if (value === "." && currentInput.includes(".")) {
            return;
        }
        if (value === "." && currentInput === "") {
            handleNumberClick("0.");
            return;
        }
        handleNumberClick(value);
        return;
    };

    if (value === "+" || value === "-" || value === "*" || value === "/") {
        handleOperatorClick(value);
        console.log(firstValue);
        return;
    };

    if (value === "=") {
        equalOperator();
        return;
    };

    if (value === "clear") {
        handleClear();
        return;
    };

    if (value === "sqrt") {
        handleSquareRoot();
        return;
    };

    if (value === "negate") {
        handleNegate();
        return;
    };

    if (value === "%") {
        if (currentInput === "") return;

        let result = Number(currentInput) / 100;
        currentInput = String(result);
        shouldResetInput = true;

        display();
    }
  });
});