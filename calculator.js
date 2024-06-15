let display = document.getElementById('display');
let displayValue = '';

function appendToDisplay(value) {
    if (displayValue === '' && value === '.') {
        displayValue = '0';
    }
    displayValue += value;
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.innerText = '0';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        display.innerText = displayValue;
    } catch {
        display.innerText = 'Error';
        displayValue = '';
    }
}
