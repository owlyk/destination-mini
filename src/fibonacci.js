package fibonacci;

const express = require('express');
const router = express.Router();
const FIB_LIMIT = 100;

const fibonacci = (n) => {
    if (n <= 0) return [];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};

router.get('/fib/:input_number', (req, res) => {
    const inputNumber = parseInt(req.params.input_number, 10);
    let msg = '';

    if (isNaN(inputNumber) || inputNumber <= 0) {
        msg = 'Invalid input. Please provide a positive integer.';
        return res.status(400).json({ msg });
    }

    if (inputNumber > FIB_LIMIT) {
        msg = `Input exceeds limit of ${FIB_LIMIT}.`;
        return res.status(400).json({ msg });
    }

    const result = fibonacci(inputNumber);
    msg = 'Fibonacci sequence calculated successfully.';
    res.json({ msg, result });
});

module.exports = router;