package src.api;

import express from 'express';
import bodyParser from 'body-parser';

const FIBONACCI_BASE_CASE = 0;
const ERROR_INVALID_INPUT = 'Invalid input. Please provide a non-negative integer.';

const router = express.Router();

router.get('/fib/0', (req, res) => {
    const input = parseInt(req.params.input, 10);
    if (isNaN(input) || input < 0) {
        return res.status(400).json({ error: ERROR_INVALID_INPUT });
    }
    res.json({ result: FIBONACCI_BASE_CASE });
});

export default router;