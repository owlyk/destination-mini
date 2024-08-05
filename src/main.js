package main;

const prompt = require('prompt-sync')();
const { fibonacci } = require('./fibonacci');

const input = prompt('How many terms of the Fibonacci sequence would you like to generate? ');

const numTerms = parseInt(input);

if (isNaN(numTerms) || numTerms <= 0) {
    console.error('Error: Input must be a positive integer.');
    process.exit(1);
}

const result = fibonacci(numTerms);
console.log(`Success: Generated Fibonacci sequence for ${numTerms} terms:`, result);