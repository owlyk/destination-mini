package main

const express = require('express');
const FibonacciController = require('./controllers/FibonacciController');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/fibonacci/:number', FibonacciController.calculateFibonacci);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});