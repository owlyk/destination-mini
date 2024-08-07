package src;

const prompt = require('prompt-sync')();

function calculateFibonacci() {
    const inputValue = prompt('Enter the Fibonacci index: ');
    let errorMessage = '';
    let response = {};

    if (isNaN(inputValue)) {
        errorMessage = "Invalid input. Please enter a valid integer.";
    } else {
        const index = parseInt(inputValue, 10);
        if (index < 0) {
            errorMessage = "Fibonacci numbers are not defined for negative indices.";
        } else {
            let a = 0, b = 1, fibonacciNumber = 0;
            for (let i = 0; i < index; i++) {
                fibonacciNumber = a;
                a = b;
                b = fibonacciNumber + b;
            }
            response.fibonacciNumber = fibonacciNumber;
        }
    }

    if (errorMessage) {
        response.errorMessage = errorMessage;
    }

    console.log(response);
}

calculateFibonacci();