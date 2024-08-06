package main

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

function fibonacci(n) {
    if (n <= 0) return [];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

app.get('/fibonacci/:number', (req, res) => {
    const num = req.params.number;
    const parsedNum = parseInt(num, 10);
    if (isNaN(parsedNum) || parsedNum < 1) {
        return res.render('usage', { error: 'Invalid input. Please provide a positive integer.' });
    }
    const result = fibonacci(parsedNum);
    res.render('output', { result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});