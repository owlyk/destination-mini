npm install prompt-sync

import prompt from 'prompt-sync';

class FibonacciService {
    calculateFibonacci() {
        const promptSync = prompt();
        const n = parseInt(promptSync('Enter the number of terms for Fibonacci series: '));

        if (isNaN(n) || n <= 0) {
            console.log('Invalid input. Please enter a positive integer.');
            return;
        }

        let fibSeries = [0, 1];
        for (let i = 2; i < n; i++) {
            fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
        }

        console.log('Fibonacci Series:');
        console.log(fibSeries.join(', '));
    }
}

export default FibonacciService;