const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateFibonacciSum(input) {
    // Validate input
    if (!Number.isInteger(input) || input <= 0) {
        return { error: 'Input must be a positive integer' };
    }

    // Calculate Fibonacci series
    let fib = [0, 1];
    let sum = 1;
    let i = 1;
    while (fib[i] + fib[i - 1] <= input) {
        fib.push(fib[i] + fib[i - 1]);
        sum += fib[i];
        i++;
    }

    return { sum };
}

app.post('/calculateFibonacciSum', (req, res) => {
    const { input } = req.body;

    const result = calculateFibonacciSum(input);

    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});