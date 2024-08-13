package main;

const express = require('express');
const prompt = require('prompt-sync')();
const { validateInput, generateFibonacci } = require('./FibonacciCalculator');

const app = express();
app.set('view engine', 'ejs');

app.get('/test_script', (req, res) => {
    res.render('test_script');
});

function main() {
    console.log("Welcome to the Fibonacci Generator!");
    const input = prompt("How many Fibonacci numbers would you like to generate? ");
    const num = validateInput(input);
    
    if (num === null) {
        console.error("Invalid input. Please enter a positive integer.");
    } else {
        const fibonacciNumbers = generateFibonacci(num);
        console.log(`The first ${num} Fibonacci numbers are: ${fibonacciNumbers.join(', ')}`);
        res.render('output', { fibonacciNumbers });
    }
}

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

main();