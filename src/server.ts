package main

import express from 'express';
import { validateInput, fibonacci } from './fibonacciService';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/fib/:n', (req, res) => {
    const n = req.params.n;
    const validationResult = validateInput(n);
    
    if (validationResult.isValid) {
        const result = fibonacci(Number(n));
        res.json({ result });
    } else {
        res.status(400).json({ error: validationResult.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});