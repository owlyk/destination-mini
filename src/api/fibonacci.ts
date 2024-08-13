package api;

import express from 'express';
import bodyParser from 'body-parser';

const FIBONACCI_BASE_CASE = 0;
const ERROR_INVALID_INPUT = 'Invalid input';

const router = express.Router();

router.get('/fib/0', (req, res) => {
    res.json({ result: FIBONACCI_BASE_CASE });
});

export default router;