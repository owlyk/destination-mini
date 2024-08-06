package fibonacci;

function calculateFibonacci(num) {
    const TRUNCATE_AFTER_THIS_MANY = 10000;
    let message = '';
    if (num > TRUNCATE_AFTER_THIS_MANY) {
        message = `Input truncated from ${num} to ${TRUNCATE_AFTER_THIS_MANY}.`;
        num = TRUNCATE_AFTER_THIS_MANY;
    }
    const fibNumbers = [];
    let a = 0, b = 1;
    while (a <= num) {
        fibNumbers.push(a);
        const temp = a;
        a = b;
        b = temp + b;
    }
    return { fibNumbers, message };
}