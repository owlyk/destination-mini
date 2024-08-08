package fibonacci;

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function calculateFibonacci(n) {
    const response = {
        input: n,
        fibonacci: null,
        error: null
    };

    if (typeof n !== 'number' && isNaN(n)) {
        response.error = 'Input must be a non-negative integer.';
        return response;
    }

    n = parseFloat(n);
    if (!Number.isInteger(n) || n < 0) {
        response.error = 'Fibonacci sequence is not defined for negative indices.';
        return response;
    }

    n = Math.floor(n);
    let a = 0, b = 1, fib = 0;

    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    response.fibonacci = n === 0 ? 0 : b;
    return response;
}

app.post('/fibonacci', (req, res) => {
    const n = req.body.n;
    const result = calculateFibonacci(n);
    console.log(result);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});