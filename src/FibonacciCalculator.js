package src;

import express from 'express';

const app = express();
const port = 3000;

function calculateFibonacci(n) {
    if (n < 0) {
        throw new Error('Fibonacci numbers are not defined for negative integers.');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

app.get('/fib/:input_value', (req, res) => {
    const inputValue = parseInt(req.params.input_value, 10);
    if (isNaN(inputValue)) {
        return res.status(400).json({ error: 'Invalid input. Please provide a valid integer.' });
    }
    try {
        const result = calculateFibonacci(inputValue);
        return res.json({ result: result });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});