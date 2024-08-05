```javascript
import express from 'express';
import { calculateFibonacciSeries } from '../controllers/FibonacciController';

const router = express.Router();

router.get('/fibonacci/:num', (req, res) => {
    const num = parseInt(req.params.num);

    if (isNaN(num) || num <= 0) {
        res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    } else {
        const fibonacciSeries = calculateFibonacciSeries(num);
        res.json({ fibonacciSeries });
    }
});

export default router;
```