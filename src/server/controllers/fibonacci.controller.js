package controllers;

import { Request, Response } from 'express';
import { calculateFibonacci } from 'fibonacci.utils';

export class FibonacciController {
    public async calculateFibonacci(req: Request, res: Response): Promise<void> {
        const { argument } = req.body;

        if (!argument || isNaN(argument) || Number(argument) < 0) {
            res.render('usage.html', { error: 'Invalid input. Please provide a positive integer.' });
            return;
        }

        const num = parseInt(argument, 10);
        const result = calculateFibonacci(num);

        res.render('output.html', { fibonacciNumbers: result });
    }
}