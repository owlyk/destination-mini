package app.fibonacci;

export interface FibonacciResponse {
    number?: number;
    error?: string;
    message?: string;
}

export class FibonacciService {
    public static calculateFibonacci(n: number): FibonacciResponse {
        if (n < 0) {
            return { error: "Negative integers are not allowed.", message: "Please provide a non-negative integer." };
        }
        if (n === 0) {
            return { number: 0, message: "The Fibonacci number for 0 is 0." };
        }
        let a = 0, b = 1, fib = 0;
        for (let i = 2; i <= n; i++) {
            fib = a + b;
            a = b;
            b = fib;
        }
        return { number: b, message: `The Fibonacci number for ${n} is ${b}.` };
    }
}