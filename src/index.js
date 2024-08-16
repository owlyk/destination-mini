package main

const prompt = require('prompt-sync')();
const { validateInput, calculateFibonacci } = require('./FibonacciCalculator');

try {
    const userInput = prompt('Enter a non-negative integer: ');
    if (!validateInput(userInput)) {
        console.error('Invalid input. Please enter a non-negative integer.');
        process.exit(1);
    }
    
    const inputNumber = parseInt(userInput, 10);
    const fibonacciNumber = calculateFibonacci(inputNumber);
    
    console.log(`Fibonacci number for ${inputNumber} is ${fibonacciNumber}`);
} catch (error) {
    console.error('An unexpected error occurred:', error.message);
}