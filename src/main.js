package main;

const prompt = require('prompt-sync')();
const { computeFibonacci } = require('./FibonacciCalculator');
const { ErrorMessages } = require('./ErrorMessages');

function isValidInput(input) {
    const nonNegativeIntegerRegex = /^(0|[1-9]\d*)$/;
    const scientificNotationRegex = /^[+-]?\d+(\.\d+)?[eE][+-]?\d+$/;
    return nonNegativeIntegerRegex.test(input) || scientificNotationRegex.test(input);
}

function getFibonacciNumber() {
    const input = prompt('Enter a non-negative integer or valid scientific notation: ');
    if (!isValidInput(input)) {
        if (input.trim() === '') {
            console.log(ErrorMessages.EMPTY_INPUT);
        } else if (isNaN(input)) {
            console.log(ErrorMessages.NON_NUMERIC);
        } else if (parseFloat(input) < 0) {
            console.log(ErrorMessages.NEGATIVE_NUMBER);
        } else {
            console.log(ErrorMessages.INVALID_FORMAT);
        }
        return;
    }

    const number = parseInt(input, 10);
    const startTime = Date.now();
    const result = computeFibonacci(number);
    const endTime = Date.now();

    if (endTime - startTime < 2000) {
        console.log(`Fibonacci number for ${number} is ${result}`);
    } else {
        console.log(ErrorMessages.TIMEOUT);
    }
}

function main() {
    while (true) {
        getFibonacciNumber();
    }
}

main();