package routes;

const express = require('express');
const router = express.Router();

router.get('/fib', (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Only GET requests are supported' });
    }
    
    const title = 'Fibonacci Calculation';
    const response = {
        title: title,
        message: 'Welcome! Please calculate Fibonacci numbers.',
        link: {
            text: 'Fibonacci numbers',
            url: './fib'
        }
    };
    
    res.json(response);
});

module.exports = router;