package routes;

const express = require('express');
const router = express.Router();

router.get('/fib', (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const title = 'Fibonacci Calculator';
    const responseObject = {
        title: title,
        message: 'Welcome! You can calculate Fibonacci numbers.',
        link: {
            text: 'Fibonacci numbers',
            href: './fib'
        }
    };
    res.json(responseObject);
});

module.exports = router;