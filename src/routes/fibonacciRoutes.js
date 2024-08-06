package routes;

const express = require('express');
const FibonacciCalculator = require('../utils/FibonacciCalculator');

const router = express.Router();

router.get('/fib/:input', (req, res) => {
    const input = parseInt(req.params.input, 10);
    
    if (isNaN(input) || input < 0) {
        return res.status(400).json({ error: 'Input must be a non-negative integer.' });
    }

    const result = FibonacciCalculator.calculateFibonacci(input);
    return res.json({ result });
});

module.exports = router;