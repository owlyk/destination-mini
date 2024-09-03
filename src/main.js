package main;

const prompt = require('prompt-sync')();
const { calculateFibonacci } = require('./FibonacciCalculator');

const userInput = prompt('How many Fibonacci numbers would you like to generate? ');
const result = calculateFibonacci(parseInt(userInput, 10));

if (Array.isArray(result)) {
    console.log('Fibonacci numbers:', result);
} else {
    console.log('Error:', result);
}