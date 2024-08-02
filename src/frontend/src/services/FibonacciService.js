package frontend.src.services;

class FibonacciService {
    generateFibonacciSeries(input) {
        // Validate input
        if (!Number.isInteger(input) || input <= 0) {
            return { error: "Input must be a positive integer" };
        }

        // Calculate Fibonacci series
        let fibonacciSeries = [];
        let a = 0, b = 1, nextTerm;

        for (let i = 1; i <= input; i++) {
            fibonacciSeries.push(a);
            nextTerm = a + b;
            a = b;
            b = nextTerm;
        }

        return { fibonacciSeries };
    }
}