package main;

const prompt = require('prompt-sync')();

function displayFibonacciUsage() {
    console.log("Fibonacci Sequence Calculator");
    console.log("The Fibonacci sequence is a series of numbers where the next number is found by adding up the two numbers before it.");
    console.log("To use the calculator, specify the number of terms you want to generate.");
    console.log("Examples of valid inputs:");
    console.log("1. 5 -> Output: 0, 1, 1, 2, 3");
    console.log("2. 10 -> Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34");
    console.log("Invalid inputs will result in an error message. Please enter only positive integers.");
}

function getUserInput() {
    let validInput = false;
    let numberOfTerms;

    while (!validInput) {
        numberOfTerms = prompt("Enter the number of terms for the Fibonacci sequence (positive integer): ");
        if (!isNaN(numberOfTerms) && Number.isInteger(+numberOfTerms) && numberOfTerms > 0) {
            validInput = true;
        } else {
            console.log("Invalid input. Please enter a positive integer. Negative numbers and non-numeric values are also invalid.");
        }
    }
    return numberOfTerms;
}

function main() {
    displayFibonacciUsage();
    let proceed;

    do {
        proceed = prompt("Would you like to proceed with generating the Fibonacci series? (yes/no): ").trim().toLowerCase();
        if (proceed === 'yes') {
            const numberOfTerms = getUserInput();
            // Assume Fibonacci calculation is implemented elsewhere
        } else if (proceed === 'no') {
            console.log("Exiting the program.");
            return;
        } else {
            console.log("Invalid response. Please enter 'yes' or 'no'.");
        }
    } while (true);
}

main();