package routes;

const express = require('express');
const router = express.Router();

const fibonacci = (num) => {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
};

router.get('/fibonacci/:num', (req, res) => {
    const num = parseInt(req.params.num, 10);
    if (isNaN(num) || num <= 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    }
    const result = fibonacci(num);
    return res.json({ fibonacci: result });
});

module.exports = router;