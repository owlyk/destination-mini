package routes;

const express = require('express');
const FibonacciController = require('./controllers/FibonacciController');

const router = express.Router();

router.get('/fib/:num', (req, res) => {
    const num = parseInt(req.params.num, 10);
    if (isNaN(num) || num < 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    }
    const fibonacciSequence = FibonacciController.calculateFibonacci(num);
    return res.json(fibonacciSequence);
});

module.exports = router;