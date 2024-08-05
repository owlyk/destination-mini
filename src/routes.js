package routes;

const express = require('express');
const router = express.Router();
const { getFibonacciInfo } = require('./FibonacciInfoController');

router.get('/fibonacciInfo', getFibonacciInfo);

module.exports = router;