// JavaScript for calculator logic
const display = document.getElementById('display');

// Function to append values to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Function to perform the calculation
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
