package.json

const express = require('express');
const bodyParser = require('body-parser');
const prompt = require('prompt-sync')();
const { calculateFibonacci } = require('./FibonacciCalculator');

const app = express();
app.use(bodyParser.json());

app.post('./fib/calculate', (req, res) => {
    const { number } = req.body;
    if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
        return res.status(400).json({ error: 'Invalid input: number must be a non-negative integer' });
    }
    const result = calculateFibonacci(number);
    return res.json({ fibonacci: result });
});

const userInput = prompt('Enter a number for Fibonacci calculation: ');
const inputNumber = parseInt(userInput, 10);
if (isNaN(inputNumber) || inputNumber < 0) {
    console.log(JSON.stringify({ error: 'Invalid input: number must be a non-negative integer' }));
    process.exit(1);
}
const fibonacciResult = calculateFibonacci(inputNumber);
console.log(JSON.stringify({ fibonacci: fibonacciResult }));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});