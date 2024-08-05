package routes;

import express from 'express';
const router = express.Router();

router.get('/api/home', (req, res) => {
    res.json({
        title: 'Home',
        navigation: {
            fibonacci: '/api/fibonacci',
            instructions: '/api/instructions'
        }
    });
});

export default router;