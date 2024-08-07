package UsageInstructions;

const prompt = require('prompt-sync')();

function displayInstructions() {
    console.log('Welcome to the Fibonacci Calculator!');
    console.log('Please enter a positive integer to see the Fibonacci series.');
}

function getUserInput() {
    let userInput;
    while (true) {
        userInput = prompt('Enter a positive integer: ');
        if (!isNaN(userInput) && Number.isInteger(+userInput) && +userInput > 0) {
            return +userInput;
        } else {
            errorHandling('Invalid input. Please enter a positive integer.');
        }
    }
}

function errorHandling(message) {
    console.log(message);
    // Redirect to usage.html logic can be implemented here
}

function main() {
    displayInstructions();
    const num = getUserInput();
    // Call Fibonacci generation logic here with num
}

main();