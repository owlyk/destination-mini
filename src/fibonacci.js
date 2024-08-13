package fibonacci;

const TRUNCATE_AFTER_THIS_MANY = 10000;

function myFib(argument) {
    const number = parseInt(argument, 10);
    if (isNaN(number)) {
        return "Input must be a valid integer.";
    }
    if (number < 0) {
        return "Input must be a positive integer.";
    }
    return fibList(number);
}

function fibList(num) {
    const fibNumbers = [];
    let message = "";
    let a = 0, b = 1;
    while (a <= num && fibNumbers.length < TRUNCATE_AFTER_THIS_MANY) {
        fibNumbers.push(a);
        const next = a + b;
        a = b;
        b = next;
    }
    message = `Fibonacci numbers up to ${num}:`;
    return { fibNumbers, message };
}