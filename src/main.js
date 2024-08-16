package main;

import express from 'express';
import bodyParser from 'body-parser';
import promptSync from 'prompt-sync';
import { validateFibonacciInput } from './validateFibonacciInput.js';

const app = express();
const port = 3000;
const prompt = promptSync();

app.use(bodyParser.json());

app.post('/fib/validate', (req, res) => {
    const { n } = req.body;
    const validationResponse = validateFibonacciInput(n);
    if (!validationResponse.isValid) {
        return res.status(400).json({ message: validationResponse.message });
    }
    res.status(200).json({ message: 'Input is valid' });
});

const userInput = prompt('Enter a non-negative integer for Fibonacci calculation: ');
const validationResponse = validateFibonacciInput(userInput);
if (!validationResponse.isValid) {
    console.log(validationResponse.message);
} else {
    console.log(validationResponse.message);
    // Proceed with Fibonacci calculation
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});