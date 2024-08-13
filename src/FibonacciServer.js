package src;

const http = require('http');
const url = require('url');
const prompt = require('prompt-sync')();
const FibonacciCalculator = require('./FibonacciCalculator');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const input = parsedUrl.pathname.split('/fib/')[1];

    if (isValidInput(input)) {
        const result = FibonacciCalculator.calculateFibonacci(Number(input));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'success', result }));
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'error', message: 'Invalid input' }));
    }
}

function isValidInput(input) {
    const number = Number(input);
    return !isNaN(number) && number >= 0 && Number.isInteger(number);
}

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});