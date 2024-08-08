package main

import promptSync from 'prompt-sync';
import { calculateFibonacci } from './FibonacciCalculator.js';

const runTestScript = () => {
    const prompt = promptSync();
    console.log('Test Script for Fibonacci Numbers calculator');
    console.log('Tests for Fibonacci Numbers calculator');
    console.log('This script allows you to test various Fibonacci calculation requests.');

    const testCases = [
        { label: 'Request for 0 Fibonacci numbers', path: '/fib/0' },
        { label: 'Request for 1 Fibonacci number', path: '/fib/1' },
        { label: 'Request for 2 Fibonacci numbers', path: '/fib/2' },
        { label: 'Request for Fibonacci numbers using scientific notation', path: '/fib/2e3' },
        { label: 'Request for a very large Fibonacci number', path: '/fib/3e7' },
        { label: 'Request for a negative Fibonacci number', path: '/fib/-9' },
        { label: 'Request for a non-numeric input', path: '/fib/foo' },
    ];

    console.log('Test Cases:');
    testCases.forEach((testCase, index) => {
        console.log(`${index + 1}. ${testCase.label} (${testCase.path})`);
    });

    let continueTesting = true;

    while (continueTesting) {
        const choice = prompt('Select a test case number (1-7) or type "exit" to quit: ');

        if (choice.toLowerCase() === 'exit') {
            continueTesting = false;
            break;
        }

        const testCaseIndex = parseInt(choice) - 1;

        if (testCaseIndex >= 0 && testCaseIndex < testCases.length) {
            const testCase = testCases[testCaseIndex];
            const result = calculateFibonacci(testCase.path);
            console.log(`Result for ${testCase.label}: ${result}`);
        } else {
            console.log('Invalid input. Please select a valid test case number.');
        }
    }
};

runTestScript();