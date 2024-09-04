package src;

import express from 'express';
import { handleFibonacciRequest } from './fibonacciService.js';

const app = express();
const PORT = 3000;

app.get('/fib/:inputValue', (req, res) => {
    const inputValue = req.params.inputValue;
    const num = Number(inputValue);
    
    if (isNaN(num) || num < 0) {
        return res.status(400).send({ error: 'Invalid input value. Please provide a non-negative integer.' });
    }

    const result = handleFibonacciRequest(num);
    res.send(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});