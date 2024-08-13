package src;

const prompt = require('prompt-sync')();
const TRUNCATE_AFTER_THIS_MANY = 10000;

function displayUsage() {
    console.log("Instructions: Enter a non-negative integer to generate that many Fibonacci numbers.");
    console.log("Valid input formats: Non-negative integers only.");
}

function getUserInput() {
    let input = prompt('Enter the number of Fibonacci numbers to generate: ');
    let number = parseInt(input, 10);
    
    if (isNaN(number) || number < 0) {
        console.log("Error: Please enter a valid non-negative integer.");
        return getUserInput();
    }
    
    if (number > TRUNCATE_AFTER_THIS_MANY) {
        console.log(`Input exceeds limit. Setting to ${TRUNCATE_AFTER_THIS_MANY}.`);
        number = TRUNCATE_AFTER_THIS_MANY;
    }
    
    return number;
}

function main() {
    displayUsage();
    const validNumber = getUserInput();
    // Assuming FibonacciCalculator.js is properly set up to handle the validNumber
    // FibonacciCalculator.process(validNumber);
}

main();