package main

import express from 'express';

const app = express();
const port = 3000;

const fibonacci = (n) => {
    if (n < 0) return null;
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

app.get('/fibonacci/:index', (req, res) => {
    const { index } = req.params;
    const num = parseFloat(index);

    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        return res.status(400).json({ error: 'Invalid input. Please enter a non-negative integer.' });
    }

    const result = fibonacci(num);
    res.json({ fibonacci: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const prompt = require('prompt-sync')();

const handleFibonacciRequest = (input) => {
    const response = fetch(`http://localhost:${port}/fibonacci/${input}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
};

const mainLoop = () => {
    let userInput;
    do {
        userInput = prompt('Enter Fibonacci index (or type "exit" to quit): ');
        if (userInput.toLowerCase() !== 'exit') {
            handleFibonacciRequest(userInput);
        }
    } while (userInput.toLowerCase() !== 'exit');
};

mainLoop();