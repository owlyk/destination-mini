package main;

const prompt = require('prompt-sync')();
const validation = require('./validation');

const userInput = prompt('Please enter a non-negative integer: ');
const validationResult = validation.validateInput(userInput);

if (validationResult.isValid) {
    console.log('Input is valid.');
    // Existing functionality for generating Fibonacci series can be called here
} else {
    console.log(validationResult.errorMessage);
}