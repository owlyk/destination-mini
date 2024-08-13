package main;

import promptSync from 'prompt-sync';
import { FibonacciCalculator } from './FibonacciCalculator';
import { ErrorMessages } from './ErrorMessages';

const prompt = promptSync();

function isValidInput(input) {
    const regex = /^(0|[1-9]\d*)(e[+-]?\d+)?$/;
    return regex.test(input);
}

function main() {
    const input = prompt('Enter a Fibonacci number: ');
    if (!isValidInput(input)) {
        console.log(ErrorMessages.invalidInput);
        return;
    }
    const n = Number(input);
    const result = FibonacciCalculator.computeFibonacci(n);
    console.log(`Fibonacci number for ${n} is ${result}`);
}

main();