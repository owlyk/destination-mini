package backend

import express from 'express';
import bodyParser from 'body-parser';
import { fibonacciController } from './controllers/fibonacciController';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/fib/:input', fibonacciController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});