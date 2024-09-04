package main;

import { validateInput } from './fibonacciCalculator.js';
import { calculateFibonacci } from './fibonacciCalculator.js';
import express from 'express';
import promptSync from 'prompt-sync';

const app = express();
const prompt = promptSync();

app.use(express.json());

app.post('/fib', (req, res) => {
    const input = req.body.input;

    if (!validateInput(input)) {
        return res.status(400).json({ error: 'Invalid input. Please enter a non-negative integer.' });
    }

    const parsedInput = parseInt(input, 10);
    if (parsedInput < 0) {
        return res.status(400).json({ error: 'Input must be a non-negative integer.' });
    }

    try {
        const result = calculateFibonacci(parsedInput);
        res.json({ fibonacci: result });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during the calculation.' });
    }
});

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const userInput = prompt('Enter a non-negative integer to calculate Fibonacci: ');
app.post('/fib', { input: userInput });