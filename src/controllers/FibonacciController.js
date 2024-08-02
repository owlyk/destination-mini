const prompt = require('prompt-sync')();

function calculateFibonacci(input) {
    if (isNaN(input) || input <= 0 || !Number.isInteger(input)) {
        return "Invalid input. Please enter a positive integer.";
    }

    let prev = 0;
    let curr = 1;
    let temp;

    for (let i = 2; i <= input; i++) {
        temp = curr;
        curr = prev + curr;
        prev = temp;
    }

    return curr;
}

module.exports = {
    calculateFibonacci
};