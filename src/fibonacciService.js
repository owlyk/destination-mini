package fibonacciService;

const TRUNCATE_AFTER_THIS_MANY = 10000;

function calculateFibonacci(num) {
    let fibNumbers = [];
    let message = '';

    if (num >= 1) {
        fibNumbers.push(0);
    }
    if (num >= 2) {
        fibNumbers.push(1);
    }
    if (num > TRUNCATE_AFTER_THIS_MANY) {
        message = `Input truncated from ${num} to ${TRUNCATE_AFTER_THIS_MANY}.`;
        num = TRUNCATE_AFTER_THIS_MANY;
    }

    for (let i = 2; i < num; i++) {
        fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
    }

    return { fibNumbers, message };
}

module.exports = { calculateFibonacci };