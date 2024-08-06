const prompt = require('prompt-sync')();

function generateFibonacciSeries() {
    const n = parseInt(prompt('Enter the number of terms in the Fibonacci series: '));

    if (isNaN(n) || n <= 0) {
        console.log('Invalid input. Please enter a positive integer.');
        return;
    }

    let fibSeries = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        fibSeries.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    console.log('Generated Fibonacci series:');
    console.log(fibSeries);
}

generateFibonacciSeries();