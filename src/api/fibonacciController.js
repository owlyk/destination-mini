package src.api;

const express = require('express');
const router = express.Router();

function isValidInput(input) {
    const n = parseInt(input, 10);
    return !isNaN(n) && n >= 0;
}

function calculateFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function handleFibonacciRequest(req, res) {
    const input = req.params.input;
    if (!isValidInput(input)) {
        return res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
    }
    const n = parseInt(input, 10);
    const result = calculateFibonacci(n);
    return res.json({ input: n, fibonacci: result });
}

router.get('/fibonacci/:input', handleFibonacciRequest);

module.exports = router;