package src;

import promptSync from 'prompt-sync';

export function displayFibonacciTests() {
    const prompt = promptSync();
    console.log('Tests for Fibonacci Numbers calculator');
    console.log('Please select a test case from the list below:');
    
    const testCases = [
        { description: 'Test case 1: Fibonacci of 0', url: 'http://example.com/test1' },
        { description: 'Test case 2: Fibonacci of 1', url: 'http://example.com/test2' },
        { description: 'Test case 3: Fibonacci of 5', url: 'http://example.com/test3' },
        { description: 'Test case 4: Fibonacci of 10', url: 'http://example.com/test4' },
        { description: 'Test case 5: Fibonacci of 20', url: 'http://example.com/test5' }
    ];

    testCases.forEach((testCase, index) => {
        console.log(`${index + 1}. ${testCase.description} - ${testCase.url}`);
    });

    let validSelection = false;
    while (!validSelection) {
        const selection = prompt('Enter the number of the test case you want to select: ');
        const index = parseInt(selection) - 1;

        if (index >= 0 && index < testCases.length) {
            console.log(`You selected: ${testCases[index].description}`);
            validSelection = true;
        } else {
            console.log('Invalid selection. Please try again.');
        }
    }
}