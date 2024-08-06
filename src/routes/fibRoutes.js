package routes;

const express = require('express');
const FibonacciCalculator = require('../utils/FibonacciCalculator');

const router = express.Router();

router.post('/fib/calculate', (req, res) => {
    const { n } = req.body;

    if (typeof n !== 'number' || n < 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
    }

    try {
        const calculator = new FibonacciCalculator();
        const result = calculator.calculateFibonacci(n);
        return res.json({ fibonacci: result });
    } catch (error) {
        return res.status(400).json({ error: 'An error occurred while calculating Fibonacci numbers.' });
    }
});

module.exports = router;