package main

import express from 'express';
import promptSync from 'prompt-sync';
import { fibList } from './FibonacciCalculator.js';

const app = express();
const port = 3000;
const TRUNCATE_AFTER_THIS_MANY = 100;

app.get('/fib/:argument', (req, res) => {
    const argument = req.params.argument;
    const prompt = promptSync();
    const userInput = prompt(`Enter a number: `);
    
    let number;
    try {
        number = parseInt(userInput);
        if (isNaN(number)) {
            res.send('Invalid input. Please enter a valid integer.');
            return;
        }
        if (number < 0) {
            res.send('Please enter a non-negative integer.');
            return;
        }
    } catch (error) {
        res.send('Invalid input. Please enter a valid integer.');
        return;
    }

    const [fibs, message] = fibList(number);
    console.log(message);
    console.log(fibs);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});