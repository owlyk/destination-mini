package main;

const prompt = require('prompt-sync')();

function startFibonacciCalculator() {
    console.log('Start Page');
    console.log("Hello! Would you like to calculate Fibonacci numbers? (Type 'yes' to continue).");
    
    const userResponse = prompt();
    
    if (userResponse.toLowerCase() === 'yes') {
        const inputValue = prompt('Enter the number of terms for Fibonacci series: ');
        
        if (!isNaN(inputValue) && Number.isInteger(+inputValue) && +inputValue > 0) {
            const terms = parseInt(inputValue);
            let fibSeries = [0, 1];
            
            for (let i = 2; i < terms; i++) {
                fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
            }
            
            console.log(`Fibonacci series up to ${terms} terms: ${fibSeries.slice(0, terms).join(', ')}`);
        } else {
            const errorMessage = "Invalid input: Please enter a numeric value.";
            console.log(errorMessage);
        }
    } else {
        console.log("You can exit or restart.");
    }
}

startFibonacciCalculator();