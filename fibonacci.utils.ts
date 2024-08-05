package fibonacci.utils;

export function formatNumber(num: number): string {
    return num.toLocaleString();
}

export function generateMessage(num: number): string {
    return `The Fibonacci number is ${num}`;
}

export function calculateFibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}