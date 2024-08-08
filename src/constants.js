package src.constants;

const FIBONACCI_ERROR_MESSAGE = 'Negative indices are not valid for Fibonacci calculations.';
const FIBONACCI_SEQUENCE = [0, 1];

for (let i = 2; i <= 50; i++) {
    FIBONACCI_SEQUENCE[i] = FIBONACCI_SEQUENCE[i - 1] + FIBONACCI_SEQUENCE[i - 2];
}