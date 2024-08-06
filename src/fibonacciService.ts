package fibonacciService;

export function calculateFibonacci(num: number): number[] {
    const fibonacci_sequence: number[] = [];
    if (num === 0) {
        fibonacci_sequence.push(0);
    } else if (num === 1) {
        fibonacci_sequence.push(0, 1);
    } else {
        fibonacci_sequence.push(0, 1);
        for (let i = 2; i <= num; i++) {
            const next_fib = fibonacci_sequence[i - 1] + fibonacci_sequence[i - 2];
            fibonacci_sequence.push(next_fib);
        }
    }
    return fibonacci_sequence;
}