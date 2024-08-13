package main

import promptSync from 'prompt-sync';
import FibonacciCalculator from './FibonacciCalculator';

const prompt = promptSync();

function main() {
    const calculator = new FibonacciCalculator();
    let num;

    while (true) {
        num = prompt('Enter the number of Fibonacci numbers to calculate: ');
        if (!calculator.validateInput(num)) {
            console.log('Invalid input. Please enter a positive integer.');
        } else {
            break;
        }
    }

    const fibonacciSeries = calculator.calculateFibonacci(num);
    console.log(`The Fibonacci series up to ${num} is: [${fibonacciSeries.join(', ')}]`);
}

main();