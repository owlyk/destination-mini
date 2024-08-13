package routes

import express from 'express';
import { handleFibonacciRequest } from './controllers/fibonacciController';

const router = express.Router();

router.get('/fib/:input', handleFibonacciRequest);

export default router;