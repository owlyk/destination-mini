const prompt = require('prompt-sync')();

function validateFibonacciInput() {
    const userInput = parseInt(prompt('Enter a number for Fibonacci calculation: '));

    if (Number.isInteger(userInput) && userInput > 0) {
        return 'Input is valid.';
    } else {
        return 'Input is invalid.';
    }
}

module.exports = validateFibonacciInput;