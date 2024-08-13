package src;

import { Request, Response } from 'express';

const FIB_ERROR_NEGATIVE = 'Negative Fibonacci numbers are not defined.';
const FIB_ERROR_INVALID = 'Invalid input.';
const FIB_ERROR_NOT_NUMERIC = 'Input must be a number.';

export function getFibonacci(req: Request, res: Response) {
    const inputValue = req.params.input_value;

    if (isNaN(inputValue)) {
        return res.status(400).json({ error: FIB_ERROR_NOT_NUMERIC });
    }

    const num = parseInt(inputValue, 10);

    if (num < 0) {
        return res.status(400).json({ error: FIB_ERROR_NEGATIVE });
    }

    let fibonacci_result = 0;
    if (num === 0) {
        fibonacci_result = 0;
    } else if (num === 1) {
        fibonacci_result = 1;
    } else {
        let a = 0, b = 1;
        for (let i = 2; i <= num; i++) {
            fibonacci_result = a + b;
            a = b;
            b = fibonacci_result;
        }
    }

    return res.status(200).json({ fibonacci: fibonacci_result });
}