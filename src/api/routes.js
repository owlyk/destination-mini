package src.api;

const express = require('express');
const fibonacciController = require('../controllers/fibonacciController');

const router = express.Router();

router.get('/fib/:input', fibonacciController.handleFibonacciRequest);

module.exports = router;