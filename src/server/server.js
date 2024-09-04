package

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const fibonacci = (n) => {
    if (n < 0) throw new Error('Negative input not allowed');
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

app.post('/fibonacci', (req, res, next) => {
    const { number } = req.body;
    if (typeof number !== 'number' || number < 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
    }
    try {
        const result = fibonacci(number);
        res.json({ result });
    } catch (error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    console.error(err.message);
    if (err.message === 'Negative input not allowed') {
        return res.status(400).json({ error: err.message });
    }
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});