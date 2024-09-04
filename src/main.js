package main;

const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
    ],
});

const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

app.get('/fib/:input_value', (req, res) => {
    const inputValue = req.params.input_value;

    if (!/^\d+$/.test(inputValue) || parseInt(inputValue) < 0) {
        const errorResponse = {
            message: 'Invalid input. Please provide a valid integer.'
        };
        logger.error(`Invalid request: ${inputValue}`);
        return res.status(400).json(errorResponse);
    }

    const result = fibonacci(parseInt(inputValue));
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});