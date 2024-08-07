package src;

const express = require('express');
const prompt = require('prompt-sync')();
const { calculateFibonacci } = require('./FibonacciCalculator');

const app = express();
app.set('view engine', 'html');

app.get('/myFib', (req, res) => {
    const input = prompt('Enter a positive integer for Fibonacci calculation: ');
    const message = validateInput(input);
    
    if (message) {
        res.render('usage.html', { message });
    } else {
        const result = calculateFibonacci(parseInt(input));
        console.log(result.numbers);
        console.log(result.message);
    }
});

function validateInput(input) {
    const num = Number(input);
    if (isNaN(num) || num < 0) {
        return 'Please enter a valid positive integer.';
    }
    return null;
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});