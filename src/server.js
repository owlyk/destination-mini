package.json

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/fib/:n', (req, res) => {
    const n = parseInt(req.params.n, 10);
    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: 'n must be a non-negative integer' });
    }

    const fibonacciList = [];
    if (n === 0) {
        return res.json(fibonacciList);
    } else if (n === 1) {
        fibonacciList.push(0);
        return res.json(fibonacciList);
    } else if (n === 2) {
        fibonacciList.push(0, 1);
        return res.json(fibonacciList);
    } else {
        fibonacciList.push(0, 1);
        for (let i = 2; i < n; i++) {
            fibonacciList.push(fibonacciList[i - 1] + fibonacciList[i - 2]);
        }
        return res.json(fibonacciList);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});