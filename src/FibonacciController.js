package src;

import { FibonacciService } from './FibonacciService';

export function handleFibonacciRequest(req, res) {
    const num = parseInt(req.query.num, 10);
    
    if (isNaN(num) || num <= 0) {
        return res.status(400).json({ error: 'Invalid num parameter. It must be a positive integer.' });
    }

    const fibonacciNumbers = FibonacciService.generateFibonacci(num);
    return res.json({ fibonacci: fibonacciNumbers, message: `Generated ${num} Fibonacci numbers.` });
}