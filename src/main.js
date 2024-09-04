package main;

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

function validateInput(input) {
    const num = Number(input);
    if (isNaN(num)) {
        return "Input must be a number.";
    }
    if (!Number.isInteger(num)) {
        return "Input must be an integer.";
    }
    if (num < 0) {
        return "Input must be a non-negative integer.";
    }
    if (num > 100) {
        return "Input must be less than or equal to 100 to prevent excessive computation time.";
    }
    return null;
}

function main() {
    console.log("Welcome to the Fibonacci Calculator!");
    console.log("Please enter a non-negative integer (including scientific notation) to calculate its Fibonacci number, or type 'exit' to quit.");

    while (true) {
        const userInput = prompt("Enter a number: ");
        if (userInput.toLowerCase() === 'exit') {
            console.log("Exiting the application. Goodbye!");
            break;
        }

        const errorMessage = validateInput(userInput);
        if (errorMessage) {
            console.log(errorMessage);
            continue;
        }

        const fibonacciNumber = calculateFibonacci(Number(userInput));
        console.log(JSON.stringify({ "fibonacci": fibonacciNumber }));
    }
}

main();