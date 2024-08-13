package main

const express = require('express');
const bodyParser = require('body-parser');
const fibonacciController = require('./controllers/fibonacciController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/fib/:input', fibonacciController.calculateFibonacci);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});