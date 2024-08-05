package fibonacciController;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateFibonacci(num) {
    if (!Number.isInteger(num) || num < 0) {
        return { error: 'Input must be a positive integer.' };
    }
    const fib_sequence = [];
    if (num === 0) return fib_sequence;
    if (num === 1) return [0];
    fib_sequence.push(0, 1);
    for (let i = 2; i < num; i++) {
        const nextFib = BigInt(fib_sequence[i - 1]) + BigInt(fib_sequence[i - 2]);
        fib_sequence.push(nextFib);
    }
    return fib_sequence;
}

app.get('/fib/:num', (req, res) => {
    const num = parseInt(req.params.num, 10);
    const result = calculateFibonacci(num);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});