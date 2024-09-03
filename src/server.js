package

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const generateFibonacci = (num) => {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
};

app.get('/api/fib/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number) || number <= 0) {
        return res.status(400).json({ message: 'Input must be a positive integer.' });
    }
    const fibonacciSeries = generateFibonacci(number);
    res.json({ fibonacci: fibonacciSeries });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});