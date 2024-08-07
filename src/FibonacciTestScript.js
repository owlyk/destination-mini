package src;

const prompt = require('prompt-sync')();
const TRUNCATE_AFTER_THIS_MANY = 10000;

function fibList(count) {
    const fibNumbers = [];
    let a = 0, b = 1;
    for (let i = 0; i < count; i++) {
        fibNumbers.push(a);
        [a, b] = [b, a + b];
    }
    return fibNumbers;
}

function main() {
    const input = prompt('Enter a positive integer for Fibonacci calculation: ');
    const argument = parseInt(input, 10);
    let message = '';

    if (isNaN(argument) || argument < 1) {
        message = 'Invalid input. Please enter a positive integer.';
        console.log(message);
        return;
    }

    const count = argument > TRUNCATE_AFTER_THIS_MANY ? TRUNCATE_AFTER_THIS_MANY : argument;
    const fibNumbers = fibList(count);
    
    console.log(`Fibonacci sequence for ${argument}:`, fibNumbers);
    if (argument > TRUNCATE_AFTER_THIS_MANY) {
        console.log(`Notice: The sequence has been truncated to ${TRUNCATE_AFTER_THIS_MANY} numbers.`);
    }
}

main();