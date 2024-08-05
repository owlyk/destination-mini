package frontend.src.controllers;

import { Request, Response } from 'express';

function calculateFibonacciSeries(num: number): number[] {
    // Validate input number
    if (num <= 0 || !Number.isInteger(num)) {
        return [];
    }

    // Calculate Fibonacci series
    let fibSeries: number[] = [0, 1];
    let i: number = 2;
    while (i < num) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
        i++;
    }

    // Truncate Fibonacci numbers if input value exceeds limit
    if (fibSeries.length > 100) {
        fibSeries = fibSeries.slice(0, 100);
    }

    return fibSeries;
}

export const FibonacciController = {
    getFibonacciSeries: (req: Request, res: Response) => {
        const num: number = parseInt(req.params.num);

        const fibSeries: number[] = calculateFibonacciSeries(num);

        res.json({ fibonacciSeries: fibSeries });
    }
};