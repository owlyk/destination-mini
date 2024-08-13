package src.api;

import express from 'express';
import bodyParser from 'body-parser';

const FIBONACCI_BASE_CASE = 0;
const ERROR_INVALID_INPUT = 'Invalid input';

const app = express();
app.use(bodyParser.json());

app.get('/fib/0', (req, res) => {
    try {
        const result = FIBONACCI_BASE_CASE;
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: ERROR_INVALID_INPUT });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});