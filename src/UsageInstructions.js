package UsageInstructions;

const prompt = require('prompt-sync')();

function displayInstructions() {
    console.log('Welcome to the Fibonacci Calculator!');
    console.log('Please enter a positive integer to see the Fibonacci series.');
    console.log('Invalid inputs (non-numeric or negative) will result in an error message.');
}

function getUserInput() {
    let userInput;
    while (true) {
        userInput = prompt('Enter a positive integer: ');
        if (!isNaN(userInput) && Number(userInput) > 0) {
            return Number(userInput);
        } else {
            require('./ErrorHandling').handleError('Invalid input. Please enter a positive integer.');
        }
    }
}

function main() {
    displayInstructions();
    const validInput = getUserInput();
    // Call the Fibonacci calculation function here with validInput
}

main();