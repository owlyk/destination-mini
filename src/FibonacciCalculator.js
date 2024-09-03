const prompt = require('prompt-sync')();

function calculateFibonacci() {
    let input = prompt("Enter a positive integer: ");
    let num = parseInt(input);
    
    if (isNaN(num) || num <= 0) {
        console.log("Invalid input. Please enter a positive integer.");
        return;
    }
    
    if (num > 10000) {
        console.log("Input exceeds the limit of 10,000. The output will be truncated.");
        num = 10000;
    }
    
    let fibonacci = [0, 1];
    
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    console.log(fibonacci.slice(0, num));
    if (num > 10000) {
        console.log("Results have been truncated.");
    }
}

calculateFibonacci();