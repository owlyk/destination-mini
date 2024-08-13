package backend;

import { Request, Response } from 'express';
import { FibonacciService } from './fibonacciService';

export function handleFibonacciRequest(req: Request, res: Response) {
    const input = req.params.input;
    const number = parseFloat(input);

    if (isNaN(number) || number < 0) {
        return res.status(400).json({
            success: false,
            message: 'Invalid input: must be a non-negative number.'
        });
    }

    const fibonacciNumbers = FibonacciService.calculateFibonacci(number);
    return res.status(200).json({
        success: true,
        fibonacci: fibonacciNumbers
    });
}