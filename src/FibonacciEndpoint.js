package src;

import { calculateFibonacci } from './FibonacciCalculator';

export function handleFibonacciRequest(req, res) {
    const n = parseInt(req.params.n, 10);
    if (isNaN(n) || n < 0) {
        res.status(400).json({ status: 'error', error: 'Invalid input. n must be a non-negative integer.' });
        return;
    }
    
    try {
        const fibonacciNumbers = calculateFibonacci(n);
        res.status(200).json({ status: 'success', data: fibonacciNumbers });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
}