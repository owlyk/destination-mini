package promptSync;

const prompt = require('prompt-sync')();

function displayFibPrompt() {
    const title = 'Fibonacci Calculation';
    console.log(`${title} - Fibonacci`);
    console.log('Start Page');
    console.log('Hello! Would you like to calculate Fibonacci numbers?');
    const userResponse = prompt('Enter yes or no: ');

    if (userResponse.toLowerCase() === 'yes') {
        // Call the Fibonacci calculation function from main.js
    } else if (userResponse.toLowerCase() === 'no') {
        console.log('Thank you for your time!');
        process.exit();
    } else {
        console.log('Invalid input. Please enter yes or no.');
        displayFibPrompt();
    }
}

module.exports = { displayFibPrompt };