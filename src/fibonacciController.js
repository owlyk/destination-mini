package src;

import { fibonacciService } from './fibonacciService';
import express from 'express';
import path from 'path';

const router = express.Router();
const TRUNCATE_AFTER_THIS_MANY = 10000;

router.post('/calculateFibonacci', (req, res) => {
    const argument = req.body.argument;

    if (!Number.isInteger(+argument) || +argument < 0) {
        return res.status(400).render('usage.html', { error: 'Invalid input. Please provide a positive integer.' });
    }

    const limit = Math.min(+argument, TRUNCATE_AFTER_THIS_MANY);
    const fibonacciNumbers = fibonacciService.computeFibonacci(limit);
    const message = limit < +argument ? 'Input was truncated to 10,000.' : '';

    res.render('output.html', { fibonacciNumbers, message });
});

export default router;