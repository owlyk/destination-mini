package main

const express = require('express');
const { getFibonacci } = require('./controllers/fibonacciController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/fib/:input_value', async (req, res) => {
    const inputValue = parseInt(req.params.input_value, 10);
    if (isNaN(inputValue) || inputValue < 0) {
        return res.status(400).send('Invalid input value');
    }
    try {
        const result = await getFibonacci(inputValue);
        res.json({ result });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});