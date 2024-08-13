package src;

import { Request, Response } from 'express';
import { FibonacciService } from './fibonacci.service';

export class FibonacciController {
    private fibonacciService: FibonacciService;

    constructor() {
        this.fibonacciService = new FibonacciService();
    }

    public getFibonacci(req: Request, res: Response): void {
        const n = parseInt(req.params.n, 10);

        if (isNaN(n) || n < 0) {
            res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
            return;
        }

        const result = this.fibonacciService.calculate(n);
        res.json({ input: n, fibonacci: result });
    }
}