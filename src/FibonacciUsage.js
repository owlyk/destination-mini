package src;

const prompt = require('prompt-sync')();
const TRUNCATE_AFTER_THIS_MANY = 10000;
const { calculateFibonacci } = require('./FibonacciCalculator');

function displayUsageInstructions() {
    console.log("Welcome to the Fibonacci Calculator!");
    console.log("Please enter a non-negative integer to generate the Fibonacci series.");
    console.log(`Note: The maximum number of Fibonacci numbers that can be generated is ${TRUNCATE_AFTER_THIS_MANY}.`);
}

function getUserInput() {
    let input;
    while (true) {
        input = prompt("Enter a non-negative integer: ");
        const number = parseInt(input, 10);
        if (!isNaN(number) && number >= 0) {
            if (number > TRUNCATE_AFTER_THIS_MANY) {
                console.log(`Input exceeds the limit and will be truncated to ${TRUNCATE_AFTER_THIS_MANY}.`);
                return TRUNCATE_AFTER_THIS_MANY;
            }
            return number;
        } else {
            console.log("Invalid input. Please enter a non-negative integer.");
        }
    }
}

function main() {
    displayUsageInstructions();
    const userInput = getUserInput();
    const fibonacciSeries = calculateFibonacci(userInput);
    console.log(fibonacciSeries);
}

main();