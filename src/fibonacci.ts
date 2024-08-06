package src;

import express from 'express';
import inputValidator from './inputValidator';

const app = express();
const port = 3000;

app.get('/fib/:num', (req, res) => {
    const num = req.params.num;

    if (!inputValidator.isValidPositiveInteger(num)) {
        return res.status(400).json({ message: 'Input must be a positive integer or valid scientific notation.' });
    }

    const n = parseInt(num, 10);
    const fibonacciSequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        fibonacciSequence.push(a);
        [a, b] = [b, a + b];
    }

    return res.json({ message: 'Fibonacci numbers calculated successfully.', fibonacciSequence });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});