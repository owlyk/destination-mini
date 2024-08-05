package routes;

const express = require('express');
const router = express.Router();

router.get('/fib_usage', (req, res) => {
    res.render('fib_usage', {
        title: 'Fibonacci Calculator Usage',
        explanation: 'Fibonacci numbers are a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.',
        inputInstructions: 'Please input only positive integers.',
        outputFormat: 'The expected output will be a single integer representing the Fibonacci number at the specified position.',
        errorMessages: {
            negative: 'Error: Input must be a positive integer.',
            nonInteger: 'Error: Input must be an integer.'
        }
    });
});

module.exports = router;