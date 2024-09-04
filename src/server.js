const express = require('express');
const app = express();
const port = 3000;

app.get('/api/fib/:inputValue', (req, res) => {
    const input_value = req.params.inputValue;
    const num = parseInt(input_value, 10);

    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        const error_message = 'Input must be a non-negative integer.';
        return res.status(400).json({ error: error_message });
    }

    const result = fibonacci(num);
    const response = { input: num, fibonacci: result };
    res.json(response);
});

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});