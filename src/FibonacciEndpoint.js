package src;

import express from 'express';
import { FibonacciCalculator } from './FibonacciCalculator';

const app = express();
const port = 3000;

const isNumeric = (value) => !isNaN(value) && !isNaN(parseFloat(value));

app.get('/fib/:input_value', (req, res) => {
    const input_value = req.params.input_value;

    if (!isNumeric(input_value)) {
        return res.status(400).json({ error: 'Input must be a numeric value.' });
    }

    const n = Number(input_value);
    if (n < 0) {
        return res.status(400).json({ error: 'Input must be a non-negative integer.' });
    }

    try {
        const result = FibonacciCalculator.calculateFibonacci(n);
        return res.json({ fibonacci: result });
    } catch (error) {
        return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});