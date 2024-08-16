package src;

export function displayUsageInstructions() {
    const instructions = `
    Welcome to the Fibonacci Calculator!
    
    Please enter a positive integer to see the Fibonacci series up to that number.
    
    Valid inputs are positive integers only.
    
    If you enter a negative number or a non-integer, you will receive an error message.
    `;
    console.log(instructions);
}