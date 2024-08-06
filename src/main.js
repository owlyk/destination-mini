const prompt = require('prompt-sync')();

function generateFibonacciList() {
    const n = parseInt(prompt('Enter the number of terms in the Fibonacci series: '));

    if (isNaN(n) || n <= 0) {
        return { error: 'Invalid input. Please enter a positive integer.' };
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return { fibonacciSeries: fib.slice(0, n), message: 'Fibonacci series generated successfully.' };
}

module.exports = generateFibonacciList;