package.json

const express = require('express');
const prompt = require('prompt-sync')();
const FibonacciCalculator = require('./FibonacciCalculator');

const app = express();
const port = 3000;

app.get('/fib/:input', (req, res) => {
    const input = req.params.input;
    let number;

    if (!isNaN(input)) {
        number = parseFloat(input);
        if (number < 0) {
            return res.send('Invalid input: negative integer.');
        }
    } else {
        return res.send('Invalid input: non-numeric string.');
    }

    const result = FibonacciCalculator.calculateFibonacci(number);
    if (Array.isArray(result)) {
        return res.send(`Fibonacci sequence: ${result.join(', ')}`);
    } else {
        return res.send(result);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});