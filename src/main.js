package main;

import promptSync from 'prompt-sync';
import { validateInput } from './ValidateInput.js';

const prompt = promptSync();

function main() {
    let continueInput = true;

    while (continueInput) {
        const userInput = prompt('Enter a positive integer (or type "exit" to quit): ');

        if (userInput.toLowerCase() === 'exit') {
            continueInput = false;
            break;
        }

        const validationResult = validateInput(userInput);
        console.log(validationResult.message);
    }
}

main();