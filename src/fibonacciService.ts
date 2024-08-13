package fibonacciService;

function fibonacci(n: number): number {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer');
    }
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}