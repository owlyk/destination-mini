package src;

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const ERROR_MESSAGE = 'Invalid input. Please provide a positive integer or valid scientific notation.';

function calculateFibonacci(limit: number): number[] {
    const FIB_NUMBERS: number[] = [];
    let a = 0, b = 1;
    for (let i = 0; i < limit; i++) {
        FIB_NUMBERS.push(a);
        const next = a + b;
        a = b;
        b = next;
    }
    return FIB_NUMBERS;
}

app.get('/fib/:num', (req, res) => {
    const num = req.params.num;
    const validInput = /^(\d+|\d+e\d+)$/.test(num);
    if (!validInput) {
        return res.status(400).json({ error: ERROR_MESSAGE });
    }
    
    const FIB_LIMIT = parseInt(num, 10);
    if (FIB_LIMIT < 1) {
        return res.status(400).json({ error: ERROR_MESSAGE });
    }

    const result = calculateFibonacci(FIB_LIMIT);
    return res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});