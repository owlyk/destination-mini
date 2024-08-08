package main;

import promptSync from 'prompt-sync';
import { FibonacciCalculator } from './FibonacciCalculator';

function runTestScript() {
    const prompt = promptSync();
    console.log("Test Script for Fibonacci Numbers calculator");
    console.log("Tests for Fibonacci Numbers calculator");
    console.log("Here are some inputs to the Fibonacci calculator to try:");

    const testCases = [
        { description: "Request for 0 Fibonacci numbers", input: 0 },
        { description: "Request for 1 Fibonacci number", input: 1 },
        { description: "Request for 2 Fibonacci numbers", input: 2 },
        { description: "Request for Fibonacci numbers using scientific notation", input: 2e3 },
        { description: "Request for a very large Fibonacci number", input: 3e7 },
        { description: "Request for a negative Fibonacci number", input: -9 },
        { description: "Request for a non-numeric input", input: 'foo' }
    ];

    testCases.forEach((testCase, index) => {
        console.log(`${index + 1}: ${testCase.description} (Input: ${testCase.input})`);
    });

    const userInput = prompt("Select a test case by entering the corresponding number: ");
    const selectedIndex = parseInt(userInput) - 1;

    if (selectedIndex >= 0 && selectedIndex < testCases.length) {
        const testCase = testCases[selectedIndex];
        try {
            const result = FibonacciCalculator(testCase.input);
            console.log(`Result for input ${testCase.input}: ${result}`);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    } else {
        console.log("Invalid selection. Please enter a number corresponding to a test case.");
    }
}

export { runTestScript };