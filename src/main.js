package main;

const prompt = require('prompt-sync')();

function calculateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

function main() {
    try {
        const input = prompt('Enter a positive integer: ');
        const num = parseInt(input, 10);
        
        if (isNaN(num) || num <= 0) {
            console.log('Please enter a valid positive integer.');
            return;
        }
        
        const result = calculateFibonacci(num);
        console.log(`Fibonacci sequence up to ${num} terms:`, result);
    } catch (error) {
        console.log('An unexpected error occurred:', error.message);
    }
}

main();