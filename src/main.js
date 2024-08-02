const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

function truncateFibonacci(numbers, limit) {
    return numbers.map(num => num > limit ? limit : num);
}

app.post('/fibonacci/truncate', (req, res) => {
    const { fibonacciNumbers, limit } = req.body;
    const truncatedNumbers = truncateFibonacci(fibonacciNumbers, limit);
    res.json({ truncatedNumbers, message: 'Fibonacci numbers truncated successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});