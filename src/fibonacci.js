package src;

function calculateFibonacci(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) {
        return { error_message: 'Input must be a number.' };
    }
    if (n < 0) {
        return { error_message: 'Negative numbers are not valid.' };
    }
    if (n === 0) {
        return { result: 0 };
    }
    if (n === 1 || n === 2) {
        return { result: 1 };
    }
    let a = 1, b = 1, result;
    for (let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return { result: result };
}

export { calculateFibonacci };