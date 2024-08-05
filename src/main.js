const express = require('express');
const app = express();

function calculateFibonacci(input) {
    if (input <= 0 || !Number.isInteger(input)) {
        return { error: "Input must be a positive integer" };
    }

    let fibonacci = [0, 1];
    for (let i = 2; i <= input; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return { fibonacci };
}

app.get('/:input', (req, res) => {
    const input = parseInt(req.params.input);
    const result = calculateFibonacci(input);
    res.json(result);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});