const prompt = require('prompt-sync')();

function fibonacciDetails() {
    const number = parseInt(prompt('Enter a number to calculate its Fibonacci details: '));

    if (isNaN(number) || number < 0) {
        return { error: 'Invalid input. Please enter a valid number.' };
    }

    let a = 0, b = 1, temp;
    let fibonacci = [0, 1];

    for (let i = 2; i <= number; i++) {
        temp = a + b;
        a = b;
        b = temp;
        fibonacci.push(temp);
    }

    const position = fibonacci.indexOf(b);
    const isPrime = b > 1 && Array.from({ length: b - 1 }, (_, i) => i + 2).every(i => b % i !== 0);

    return { fibonacci: b, position: position, prime: isPrime };
}

module.exports = fibonacciDetails;