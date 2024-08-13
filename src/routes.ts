package routes;

import express from 'express';
import { getFibonacci } from './fibonacciController';

const router = express.Router();

router.get('/fib/:input_value', (req, res) => {
    const inputValue = req.params.input_value;

    if (isNaN(inputValue)) {
        return res.status(400).json({ error: 'Input must be a numeric value.' });
    }

    const num = parseInt(inputValue, 10);
    if (num < 0) {
        return res.status(400).json({ error: 'Negative numbers are not allowed.' });
    }

    getFibonacci(num)
        .then(result => res.json({ result }))
        .catch(err => res.status(500).json({ error: 'An error occurred while calculating Fibonacci.' }));
});

export default router;