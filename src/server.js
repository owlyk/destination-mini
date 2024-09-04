package

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/fib/:inputValue', (req, res) => {
    const inputValue = req.params.inputValue;
    const num = parseInt(inputValue, 10);

    if (isNaN(num)) {
        return res.status(400).json({ error: 'Input must be a valid integer.' });
    }
    if (num < 0) {
        return res.status(400).json({ error: 'Input must be a non-negative integer.' });
    }

    const fibonacci = (n) => {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    };

    const result = fibonacci(num);
    res.json({ fibonacci: result });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});