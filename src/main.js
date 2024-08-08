package main;

import express from 'express';
import promptSync from 'prompt-sync';
import { validateInput } from './InputValidator.js';
import { calculateFibonacci } from './FibonacciCalculator.js';

const app = express();
const port = 3000;
const prompt = promptSync();

app.get('/fib/:input', (req, res) => {
    const input = req.params.input;
    const validationResult = validateInput(input);
    
    if (validationResult.isValid) {
        const result = calculateFibonacci(validationResult.validInput);
        res.send(`Fibonacci of ${validationResult.validInput} is ${result}`);
    } else {
        res.send(`Error: ${validationResult.errorMessage}`);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

function startPrompt() {
    while (true) {
        const userInput = prompt('Enter a non-negative integer for Fibonacci calculation (or type "exit" to quit): ');
        if (userInput.toLowerCase() === 'exit') {
            break;
        }
        const validationResult = validateInput(userInput);
        
        if (validationResult.isValid) {
            const result = calculateFibonacci(validationResult.validInput);
            console.log(`Fibonacci of ${validationResult.validInput} is ${result}`);
        } else {
            console.log(`Error: ${validationResult.errorMessage}`);
        }
    }
}

startPrompt();