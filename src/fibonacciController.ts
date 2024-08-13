package src;

import { Request, Response } from 'express';
import { fibonacciService } from './fibonacciService';

const fibonacciEndpoint = (req: Request, res: Response) => {
    const n = req.params.n;

    if (!/^\d+$/.test(n) || Number(n) < 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
    }

    const number = parseInt(n, 10);
    const result = fibonacciService(number);

    return res.json({ input: number, fibonacci: result });
};

export { fibonacciEndpoint };