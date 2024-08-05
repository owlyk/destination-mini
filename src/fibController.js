package fibController;

import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/fib/0', (req, res) => {
    const input = 0;

    if (typeof input !== 'number' || input < 0) {
        return res.status(400).json({ message: 'Input is not valid' });
    }

    const fibonacciNumber = 0;
    const response = {
        fibonacci: fibonacciNumber,
        message: 'Fibonacci number for 0 is 0'
    };

    return res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});