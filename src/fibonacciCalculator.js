package fibonacciCalculator;

function validateInput(number) {
    if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
        return 'Input must be a non-negative integer.';
    }
    return true;
}

function calculateFibonacci(number) {
    const TRUNCATE_AFTER_THIS_MANY = 10000;
    const fibonacciSeries = [];
    
    const validationResult = validateInput(number);
    if (validationResult !== true) {
        return validationResult;
    }

    let a = 0, b = 1;
    while (fibonacciSeries.length < TRUNCATE_AFTER_THIS_MANY && a <= number) {
        fibonacciSeries.push(a);
        [a, b] = [b, a + b];
    }
    
    return fibonacciSeries;
}