package src;

const express = require('express');
const app = express();
const port = 3000;

class FibonacciCalculator {
    constructor() {}

    calculateFibonacci(n) {
        if (isNaN(n) || typeof n !== 'number' || n.toString().trim() === '') {
            throw new Error('Invalid input: Please provide a valid number.');
        }
        if (n < 0) {
            throw new Error('Invalid input: Fibonacci numbers are not defined for negative indices.');
        }
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        let a = 0, b = 1, fib;
        for (let i = 2; i <= n; i++) {
            fib = a + b;
            a = b;
            b = fib;
        }
        return fib;
    }
}

const fibonacciCalculator = new FibonacciCalculator();

app.get('/fib/:input_value', (req, res) => {
    const inputValue = req.params.input_value;
    const parsedValue = Number(inputValue);
    try {
        const result = fibonacciCalculator.calculateFibonacci(parsedValue);
        res.json({ fibonacci: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});