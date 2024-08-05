package fibonacciController;

const express = require('express');
const router = express.Router();

const calculateFibonacci = (num) => {
    const fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
};

const handleFibonacciRequest = (req, res) => {
    const num = parseInt(req.params.num, 10);
    if (isNaN(num) || num <= 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    }
    const result = calculateFibonacci(num);
    return res.json({ fibonacci: result });
};

router.get('/fib/:num', handleFibonacciRequest);

module.exports = router;