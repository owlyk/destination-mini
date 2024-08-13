package main

import express from 'express';
import bodyParser from 'body-parser';
import { FibonacciController } from './controllers/FibonacciController';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/fib/:input', FibonacciController.calculateFibonacci);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});