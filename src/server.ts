package main

import express from 'express';
import bodyParser from 'body-parser';
import fibonacciController from './controllers/fibonacciController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/fibonacci', fibonacciController.calculate);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});