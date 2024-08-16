package src;

import express from 'express';

const app = express();
const port = 3000;

function validateInput(n) {
    if (typeof n === 'string' && !isNaN(n)) {
        n = Number(n);
    }
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return 'Invalid input.';
    }
    return n;
}

function calculateFibonacci(n) {
    const fib = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fib.push(a);
        [a, b] = [b, a + b];
    }
    return fib;
}

app.get('/fib/:n', (req, res) => {
    const n = validateInput(req.params.n);
    if (typeof n === 'string') {
        if (n === 'Invalid input.') {
            return res.status(400).json({ error: n });
        }
        return res.status(400).json({ error: 'Negative inputs are not allowed.' });
    }
    const result = calculateFibonacci(n);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});