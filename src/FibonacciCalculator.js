package src;

import express from 'express';

const app = express();
const port = 3000;

app.get('/fib/:input', (req, res) => {
    const input = req.params.input;
    const errorMessage = 'Invalid input. Please provide a non-negative integer.';

    const isValidInput = (input) => {
        const regex = /^(0|[1-9]\d*)(e[0-9]+)?$/;
        return regex.test(input);
    };

    const parseInput = (input) => {
        const parsed = parseInt(input, 10);
        return isNaN(parsed) ? null : parsed;
    };

    if (!isValidInput(input)) {
        return res.status(400).json({ error: errorMessage });
    }

    const number = parseInput(input);
    if (number < 0) {
        return res.status(400).json({ error: errorMessage });
    }

    const fibonacciSequence = [0, 1];
    for (let i = 2; i <= number; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }

    return res.json({ result: fibonacciSequence.slice(0, number + 1) });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});