package src;

const FIBO_CACHE = {};
const ERROR_MESSAGES = {
    NOT_A_NUMBER: "Input must be a number.",
    NEGATIVE_NUMBER: "Input must be a non-negative integer.",
    NOT_AN_INTEGER: "Input must be an integer."
};

function validateInput(n) {
    if (typeof n !== 'number') {
        return ERROR_MESSAGES.NOT_A_NUMBER;
    }
    if (n < 0) {
        return ERROR_MESSAGES.NEGATIVE_NUMBER;
    }
    if (!Number.isInteger(n)) {
        return ERROR_MESSAGES.NOT_AN_INTEGER;
    }
    return true;
}

function calculateFibonacci(n) {
    if (n === 0) {
        FIBO_CACHE[0] = 0;
        return { result: 0 };
    }
    if (n === 1) {
        FIBO_CACHE[1] = 1;
        return { result: 1 };
    }
    if (FIBO_CACHE[n] !== undefined) {
        return { result: FIBO_CACHE[n] };
    }
    let a = 0, b = 1, result = 1;
    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    FIBO_CACHE[n] = result;
    return { result: FIBO_CACHE[n] };
}

export { validateInput, calculateFibonacci };

import express from 'express';
const app = express();
const port = 3000;

app.get('/fib/:n', (req, res) => {
    const n = parseInt(req.params.n, 10);
    const validation = validateInput(n);
    if (validation !== true) {
        return res.status(400).json({ error: validation });
    }
    const fibonacciResult = calculateFibonacci(n);
    return res.json(fibonacciResult);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});