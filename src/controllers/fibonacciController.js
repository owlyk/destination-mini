const express = require('express');
const fibonacciModel = require('../models/fibonacciModel');

const fibonacciController = {
    calculateFibonacci: async (req, res) => {
        try {
            const n = parseInt(req.params.n);
            if (isNaN(n) || n < 0) {
                return res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
            }

            const result = await fibonacciModel.calculateFibonacci(n);
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
    }
};

module.exports = fibonacciController;