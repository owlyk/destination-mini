package src;

const express = require('express');
const FibonacciCalculator = require('./FibonacciCalculator');

const app = express();
const port = 3000;

app.get('/fib/:input', (req, res) => {
    const input = req.params.input;

    if (!/^\d+(\.\d+)?$/.test(input) || Number(input) < 0) {
        return res.status(400).json({ status: 'error', message: 'Invalid input. Please provide a non-negative integer.' });
    }

    const num = parseInt(input, 10);
    const result = FibonacciCalculator.calculateFibonacci(num);
    
    res.json({ status: 'success', fibonacci: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});