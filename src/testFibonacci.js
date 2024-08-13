package main;

const prompt = require('prompt-sync')();

const testCases = [
    { description: "Ask for 0 Fibonacci numbers", url: "/fib/0" },
    { description: "Only 1 Fibonacci number", url: "/fib/1" },
    { description: "Only 2 Fibonacci numbers", url: "/fib/2" },
    { description: "Try scientific notation", url: "/fib/2e3" },
    { description: "Try a really large number", url: "/fib/3e7" },
    { description: "Try a negative number", url: "/fib/-9" },
    { description: "Try a word", url: "/fib/foo" }
];

console.log("Test Script for Fibonacci Numbers calculator");
console.log("Tests for Fibonacci Numbers calculator");
console.log("Here are some inputs to the Fibonacci calculator to try:");

while (true) {
    testCases.forEach((testCase, index) => {
        console.log(`${index + 1}: ${testCase.description}`);
    });

    const userInput = prompt("Select a test case by entering the corresponding number (or 'exit' to quit): ");

    if (userInput.toLowerCase() === 'exit') {
        break;
    }

    const selectedIndex = parseInt(userInput) - 1;

    if (selectedIndex >= 0 && selectedIndex < testCases.length) {
        console.log(`Selected URL: ${testCases[selectedIndex].url}`);
    } else {
        console.log("Invalid selection, please try again.");
    }
}