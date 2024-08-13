package backend;

import { Request, Response } from 'express';
import { fibonacciService } from './fibonacciService';

export function handleFibonacciRequest(req: Request, res: Response) {
    const input = req.params.input;

    if (!/^-?\d+(\.\d+)?([eE][-+]?\d+)?$/.test(input)) {
        return res.status(400).json({ status: 'error', message: 'Invalid input. Please provide a valid number.' });
    }

    const number = Number(input);

    if (number < 0) {
        return res.status(400).json({ status: 'error', message: 'Negative numbers are not allowed.' });
    }

    const fibonacciSequence = fibonacciService.calculateFibonacci(number);
    return res.status(200).json({ status: 'success', sequence: fibonacciSequence });
}