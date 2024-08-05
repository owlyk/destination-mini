package fibonacci;

function calculateFibonacci(n) {
    if (isNaN(n)) {
        return JSON.stringify({ error: "Input must be a number." });
    }
    n = parseFloat(n);
    if (n < 0) {
        return JSON.stringify({ error: "Negative numbers are not valid." });
    }
    n = Math.floor(n);
    if (n === 0) {
        return JSON.stringify({ fibonacci: 0 });
    }
    if (n === 1 || n === 2) {
        return JSON.stringify({ fibonacci: 1 });
    }
    let a = 1, b = 1, fib;
    for (let i = 3; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return JSON.stringify({ fibonacci: fib });
}