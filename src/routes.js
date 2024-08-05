package routes;

import express from 'express';
import { render } from 'ejs';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

router.get('/fib', (req, res) => {
    res.render('fibonacci', { title: 'Fibonacci' });
});

export default router;