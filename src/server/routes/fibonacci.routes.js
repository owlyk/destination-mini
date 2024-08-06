package routes;

const express = require('express');
const { calculateFibonacci } = require('../controllers/fibonacci.controller');
const router = express.Router();

router.post('/api/fibonacci', calculateFibonacci);

module.exports = router;