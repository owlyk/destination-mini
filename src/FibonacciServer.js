package src;

const express = require('express');
const prompt = require('prompt-sync')();
const { calculateFibonacci } = require('./FibonacciCalculator');

const app = express();
const PORT = 3000;

app.get('/fib/:n', (req, res) => {
    const n = req.params.n;
    let response = { success: false, data: null };

    const num = parseFloat(n);
    if (!isNaN(num) && num >= 0 && num <= 10000) {
        response.data = calculateFibonacci(num);
        response.success = true;
    } else {
        response.data = 'Invalid input. Please provide a valid non-negative integer.';
    }

    res.json(response);
});

function startServer() {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        while (true) {
            const input = prompt('Enter a number for Fibonacci calculation: ');
            const response = calculateFibonacci(input);
            console.log(JSON.stringify({ success: true, data: response }));
        }
    });
}

startServer();