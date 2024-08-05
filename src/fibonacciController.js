package fibonacciController;

const express = require('express');
const router = express.Router();
const FibonacciService = require('./fibonacciService');

router.get('/fib/:num', (req, res) => {
    const num = parseInt(req.params.num, 10);
    
    if (isNaN(num) || num <= 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    }

    try {
        const fibonacciNumbers = FibonacciService.calculateFibonacci(num);
        return res.json(fibonacciNumbers);
    } catch (error) {
        return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
});

module.exports = router;