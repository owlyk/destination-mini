package server;

class FibonacciService {
    calculateFibonacci(n) {
        if (n < 0) {
            throw new Error("Input must be a non-negative integer.");
        }
        let a = 0, b = 1, temp;
        for (let i = 0; i < n; i++) {
            temp = a;
            a = b;
            b = temp + b;
        }
        return a;
    }
}