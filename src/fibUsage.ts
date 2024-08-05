package src;

import { Request, Response } from 'express';

export function fibUsage(req: Request, res: Response): void {
    res.render('usage.html', {
        title: 'Fibonacci Calculator Usage',
        description: 'Fibonacci numbers are a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.',
        inputInstructions: 'Please input only positive integers.',
        outputFormat: 'The expected output will be a single Fibonacci number corresponding to the input.',
        errorMessages: {
            negative: 'Error: Input must be a positive integer.',
            nonInteger: 'Error: Input must be an integer.'
        }
    });
}