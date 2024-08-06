package routes;

const express = require('express');
const router = express.Router();

const fibonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

router.get('/fib/:n', (req, res) => {
    const { n } = req.params;
    const num = parseFloat(n);

    if (isNaN(num)) {
        return res.status(400).json({ error: 'Input must be a number.' });
    }
    if (num < 0 || !Number.isInteger(num)) {
        return res.status(400).json({ error: 'Input must be a non-negative integer.' });
    }

    const result = fibonacci(num);
    return res.json({ result });
});

module.exports = router;