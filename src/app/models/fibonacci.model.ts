package models;

import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

export interface FibonacciResponse {
    result: number;
}

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
    message: { error: 'Too many requests, please try again later.' }
});

export const securityMiddleware = [helmet(), limiter];

export const getFibonacci = (req: Request, res: Response) => {
    const n = parseInt(req.params.n, 10);
    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const fibonacci = (num: number): number => {
        if (num <= 1) return num;
        return fibonacci(num - 1) + fibonacci(num - 2);
    };

    const start = Date.now();
    try {
        const result = fibonacci(n);
        const responseTime = Date.now() - start;
        if (responseTime > 200) {
            console.warn(`Response time exceeded acceptable limits: ${responseTime}ms`);
        }
        return res.status(200).json({ result });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const fibonacciRoute = (app: any) => {
    app.get('/fib/:n', securityMiddleware, getFibonacci);
};