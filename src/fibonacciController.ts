package src;

import { Request, Response } from 'express';

export const handleFibonacciRequest = (req: Request, res: Response) => {
    const input = req.query.input as string;

    if (!/^\d+(\.\d+)?([eE][+-]?\d+)?$/.test(input)) {
        return res.status(400).json({ error: 'Invalid input. Please provide a non-negative number.' });
    }

    const number = Number(input);

    if (number < 0) {
        return res.status(400).json({ error: 'Negative numbers are not allowed.' });
    }

    const FIB_SEQUENCE: number[] = [];

    if (number === 0) {
        return res.json(FIB_SEQUENCE);
    }

    if (number === 1) {
        FIB_SEQUENCE.push(0);
        return res.json(FIB_SEQUENCE);
    }

    FIB_SEQUENCE.push(0, 1);
    for (let i = 2; i <= number; i++) {
        FIB_SEQUENCE.push(FIB_SEQUENCE[i - 1] + FIB_SEQUENCE[i - 2]);
    }

    return res.json(FIB_SEQUENCE);
};