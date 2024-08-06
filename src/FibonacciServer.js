package src;

import express from 'express';
import { FibonacciCalculator } from './FibonacciCalculator';
import { InputValidator } from './InputValidator';

const app = express();
const port = 3000;

app.get('/fib/:n', (req, res) => {
    const n = req.params.n;
    const validationResult = InputValidator.validate(n);

    if (!validationResult.isValid) {
        return res.status(400).json({ error: validationResult.message });
    }

    const fibonacciNumber = FibonacciCalculator.calculateFibonacci(validationResult.value);
    res.json({ fibonacci: fibonacciNumber });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});