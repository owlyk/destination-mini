const express = require('express');
const { truncateFibonacci } = require('./main');

const app = express();
app.use(express.json());

app.post('/fibonacci/truncate', (req, res) => {
    const { numbers, limit } = req.body;
    const truncatedNumbers = truncateFibonacci(numbers, limit);
    res.json({ truncatedNumbers, message: 'Fibonacci numbers truncated successfully' });
});

module.exports = app;