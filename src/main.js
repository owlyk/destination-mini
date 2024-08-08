require('prompt-sync')();

const prompt = require('prompt-sync')();

function calculateFibonacci(n) {
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return n === 0 ? a : b;
}

function handleInput(input) {
    const num = parseFloat(input);
    if (!isNaN(num) && num >= 0 && Number.isInteger(num)) {
        return calculateFibonacci(num);
    } else if (/^\d+e[+-]?\d+$/.test(input)) {
        const convertedInput = parseInt(num);
        if (convertedInput >= 0) {
            return calculateFibonacci(convertedInput);
        } else {
            return 'Error: Scientific notation input is out of range.';
        }
    } else if (num < 0) {
        return 'Error: Negative numbers are not allowed.';
    } else if (isNaN(num)) {
        return 'Error: Invalid input. Please enter a non-negative integer.';
    } else {
        return 'Error: Unrecognized input format.';
    }
}

while (true) {
    const input = prompt('Enter a Fibonacci input (or type "exit" to quit): ');
    if (input.toLowerCase() === 'exit') break;
    const result = handleInput(input);
    console.log(result);
}