package main

const express = require('express');
const FibonacciController = require('./FibonacciController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/fib/:n', FibonacciController.calculateFibonacci);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});