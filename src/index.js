package main;

const express = require('express');
const FibonacciInstructions = require('./FibonacciInstructions');

const app = express();
const port = 3000;

app.get('/fibonacciInstructions', (req, res) => {
    const instructions = new FibonacciInstructions();
    res.json(instructions.getInstructions());
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});