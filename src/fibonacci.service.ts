package src;

export class FibonacciService {
    calculateFibonacci(n: number): { input: number, fibonacci: number } | { error: string } {
        if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
            return { error: 'Input must be a non-negative integer.' };
        }
        let a = 0, b = 1, result = n === 0 ? 0 : 1;
        for (let i = 2; i <= n; i++) {
            result = a + b;
            a = b;
            b = result;
        }
        return { input: n, fibonacci: result };
    }
}