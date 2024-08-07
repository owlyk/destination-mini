package main

const express = require('express');
const FibonacciCalculator = require('./FibonacciCalculator');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/fib/:input', (req, res) => {
    const input = req.params.input;
    let fibonacci_sequence = [];
    let error_message = '';

    if (/^-?\d+$/.test(input)) {
        const number = parseInt(input, 10);
        if (number < 0) {
            error_message = 'Invalid input: negative integer.';
        } else {
            fibonacci_sequence = FibonacciCalculator.calculateFibonacci(number);
        }
    } else if (/^\d+(\.\d+)?(e[+-]?\d+)?$/.test(input)) {
        const number = Math.floor(Number(input));
        if (number < 0) {
            error_message = 'Invalid input: negative integer.';
        } else {
            fibonacci_sequence = FibonacciCalculator.calculateFibonacci(number);
        }
    } else {
        error_message = 'Invalid input: non-numeric string.';
    }

    if (error_message) {
        res.status(400).json({ error: error_message });
    } else {
        res.json({ fibonacci_sequence });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});