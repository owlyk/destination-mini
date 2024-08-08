package src;

const express = require('express');
const prompt = require('prompt-sync')();
const app = express();
const port = 3000;

function getInput() {
    const input = prompt('Enter a non-negative integer or scientific notation: ');
    const regex = /^(0|[1-9]\d*)(e[+-]?\d+)?$/;
    if (regex.test(input)) {
        return parseInt(input, 10);
    } else if (input.match(/^(\d+(\.\d+)?|\.\d+)(e[+-]?\d+)?$/)) {
        return parseInt(Number(input));
    } else {
        return 'Invalid input. Please enter a non-negative integer or valid scientific notation.';
    }
}

app.get('/fib/:n', (req, res) => {
    const n = req.params.n;
    const validatedInput = getInput(n);
    if (typeof validatedInput === 'string') {
        res.status(400).send(validatedInput);
    } else {
        res.send(`Valid input: ${validatedInput}`);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});