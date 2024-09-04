package backend;

const express = require('express');
const app = express();
const port = 3000;

const fibonacciCache = {};

function fibonacci(n) {
    if (n < 0) {
        throw new Error('Input must be a non-negative integer.');
    }
    if (n <= 1) {
        return n;
    }
    if (fibonacciCache[n]) {
        return fibonacciCache[n];
    }
    fibonacciCache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return fibonacciCache[n];
}

app.get('/fibonacci/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number) || number < 0) {
        return res.status(400).json({ error: 'Input must be a non-negative integer.' });
    }
    const result = fibonacci(number);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});