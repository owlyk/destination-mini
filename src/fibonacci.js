package src;

const express = require('express');
const app = express();
const port = 3000;

app.get('/fib/:n', (req, res) => {
    const n = parseInt(req.params.n);
    let error_message = '';

    if (isNaN(n) || n < 0) {
        error_message = 'Invalid input: must be a non-negative integer';
        return res.status(400).json({ error: error_message });
    }

    let result;
    if (n === 0) {
        result = 0;
    } else if (n === 1) {
        result = 1;
    } else {
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            result = a + b;
            a = b;
            b = result;
        }
    }

    res.json({ fibonacci: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});