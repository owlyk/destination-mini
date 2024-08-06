package main

import express from 'express';
import fibonacciRoutes from './fibonacciRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/fib', fibonacciRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});