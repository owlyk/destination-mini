const express = require('express');
const router = express.Router();
const { calculateFibonacci } = require('../main');

router.post('/fibonacci', (req, res) => {
    const { input } = req.body;

    if (!Number.isInteger(input) || input <= 0) {
        return res.status(400).json({ error: 'Input must be a positive integer' });
    }

    const fibonacciNumbers = calculateFibonacci(input);

    res.status(200).json({ fibonacciNumbers, message: 'Fibonacci numbers calculated successfully' });
});

module.exports = router;