package main;

import promptSync from 'prompt-sync';
import { FibonacciCalculator } from './FibonacciCalculator';
import { InputValidator } from './InputValidator';

const prompt = promptSync();

function main() {
    const userInput = prompt('Enter a non-negative integer or valid scientific notation: ');
    const validationResult = InputValidator.validateInput(userInput);

    if (validationResult.isValid) {
        const result = FibonacciCalculator.calculateFibonacci(Number(userInput));
        console.log(`Fibonacci result: ${result}`);
    } else {
        console.log(validationResult.errorMessage);
    }
}

main();