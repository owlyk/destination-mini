package express;
const express = require('express');
const app = express();
const port = 3000;
const FibonacciCalculator = require('./FibonacciCalculator');

app.get('/fib/:n', (req, res) => {
    const input = req.params.n;
    const number = parseFloat(input);

    if (isNaN(number)) {
        return res.status(400).json({ error: 'Input must be a valid number.' });
    }

    if (number < 0) {
        return res.status(400).json({ error: 'Fibonacci numbers are not defined for negative indices.' });
    }

    const fibonacciNumber = FibonacciCalculator.calculateFibonacci(Math.floor(number));
    res.json({ fibonacci: fibonacciNumber });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});