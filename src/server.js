package main

const express = require('express');
const bodyParser = require('body-parser');
const fibonacciRouter = require('./fibonacci');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/fib', fibonacciRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});