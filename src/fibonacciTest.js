package main;

const TITLE = "Test Script for Fibonacci Numbers calculator";
const MAIN_HEADING = "Tests for Fibonacci Numbers calculator";

const testCases = [
    { url: "/fib/0", description: "Ask for 0 Fibonacci numbers" },
    { url: "/fib/1", description: "Ask for 1 Fibonacci number" },
    { url: "/fib/2", description: "Ask for 2 Fibonacci numbers" },
    { url: "/fib/2e3", description: "Test scientific notation" },
    { url: "/fib/3e7", description: "Test a large number" },
    { url: "/fib/-9", description: "Test a negative number" },
    { url: "/fib/foo", description: "Test a non-numeric string" }
];

console.log(TITLE);
console.log(MAIN_HEADING);
console.log("Here is the list of test cases:");

for (let i = 0; i < testCases.length; i++) {
    console.log(`${i + 1}. ${testCases[i].description}`);
}

const prompt = require('prompt-sync')();
let continueTesting = true;

while (continueTesting) {
    const userInput = prompt("Select a test case by entering the corresponding number: ");
    const testCaseIndex = parseInt(userInput) - 1;

    if (testCaseIndex >= 0 && testCaseIndex < testCases.length) {
        console.log(`Executing test case: ${testCases[testCaseIndex].description}`);
        console.log(`Testing URL: ${testCases[testCaseIndex].url}`);
    } else {
        console.log("Invalid selection. Please try again.");
    }

    const anotherTest = prompt("Do you want to run another test? (yes/no): ");
    continueTesting = anotherTest.toLowerCase() === 'yes';
}

console.log("Thank you for using the Fibonacci testing interface. Goodbye!");