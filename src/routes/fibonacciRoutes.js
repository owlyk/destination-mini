package routes;

const express = require('express');
const router = express.Router();

const validateInput = (num) => {
    const n = parseInt(num, 10);
    return !isNaN(n) && n >= 0;
};

const fibonacci = (n) => {
    const series = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        series.push(a);
        [a, b] = [b, a + b];
    }
    return series;
};

router.get('/api/fibonacci', (req, res) => {
    const { number } = req.query;
    if (!validateInput(number)) {
        return res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    }
    const result = fibonacci(parseInt(number, 10));
    return res.json({ fibonacci: result });
});

module.exports = router;