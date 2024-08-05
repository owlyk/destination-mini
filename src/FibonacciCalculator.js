package src;

class FibonacciCalculator {
    calculateFibonacci(n) {
        if (n <= 0 || !Number.isInteger(n)) {
            return { success: false, message: "Input must be a positive integer." };
        }
        let a = 0, b = 1, fib = 0;
        for (let i = 2; i <= n; i++) {
            fib = a + b;
            a = b;
            b = fib;
        }
        return { success: true, input: n, fibonacci: n === 1 ? 0 : fib };
    }
}