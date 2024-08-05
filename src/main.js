package main

import http from 'http';
import { FibonacciCalculator } from './FibonacciCalculator';

const port = 3000;

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (method === 'GET' && url.startsWith('/fib/')) {
        const inputValue = url.split('/fib/')[1];

        if (!isNaN(inputValue) && Number.isInteger(+inputValue) && +inputValue >= 0) {
            const fibNumber = FibonacciCalculator.calculate(+inputValue);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ input: inputValue, fibonacci: fibNumber }));
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid input' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});