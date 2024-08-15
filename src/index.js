package.json

const prompt = require('prompt-sync')();
const { FibonacciCalculator } = require('./FibonacciCalculator');

const n = prompt('Enter the number of Fibonacci numbers to calculate: ');
const calculator = new FibonacciCalculator();

try {
    calculator.validateInput(n);
    const result = calculator.calculateFibonacci(n);
    console.log(JSON.stringify({ fibonacci: result }));
} catch (error) {
    console.log(JSON.stringify({ error: error.message }));
}