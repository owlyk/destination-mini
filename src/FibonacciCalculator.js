package src;

const express = require('express');
const prompt = require('prompt-sync')();

const app = express();
const port = 3000;

app.get('/fib/:input', (req, res) => {
    const input = req.params.input;
    const errorMessage = 'Invalid input. Please enter a non-negative integer.';
    const fibonacciSequence = [];

    const isValidInteger = (num) => {
        const regex = /^\d+$/;
        return regex.test(num) || (parseFloat(num) >= 0 && Number.isInteger(parseFloat(num)));
    };

    if (!isValidInteger(input)) {
        return res.status(400).send(errorMessage);
    }

    const n = Math.floor(parseFloat(input));
    if (n < 0) {
        return res.status(400).send(errorMessage);
    }

    fibonacciSequence.push(0, 1);
    for (let i = 2; i <= n; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }

    res.send(fibonacciSequence.slice(0, n + 1));
});

app.listen(port, () => {
    console.log(`Fibonacci Calculator listening at http://localhost:${port}`);
});