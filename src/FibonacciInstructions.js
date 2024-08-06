package.json

const express = require('express');

class FibonacciInstructions {
    getInstructions(req, res) {
        const instructions = {
            description: "This endpoint provides instructions for calculating Fibonacci numbers.",
            examples: [
                {
                    input: 5,
                    output: 5
                },
                {
                    input: 10,
                    output: 55
                },
                {
                    input: 0,
                    output: 0
                },
                {
                    input: 1,
                    output: 1
                }
            ],
            note: "The Fibonacci sequence is defined as follows: F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1."
        };
        res.json(instructions);
    }
}

module.exports = FibonacciInstructions;