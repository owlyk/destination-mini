package main

const express = require('express');
const fibonacciService = require('./fibonacciService');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/fib/:num', (req, res) => {
    const num = parseInt(req.params.num, 10);
    if (isNaN(num) || num < 1) {
        return res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    }
    const result = fibonacciService.calculateFibonacci(num);
    return res.status(200).json({ fibonacci: result });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});