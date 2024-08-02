express = require('express');
const router = express.Router();

const fibonacciTruncate = (req, res) => {
    const { n } = req.query;
    
    if (!n || isNaN(n) || n <= 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a valid positive number.' });
    }

    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    const truncatedSeries = fibSeries.slice(0, n);

    res.json({ truncatedFibonacciSeries: truncatedSeries });
};

router.get('/fibonacci/truncate', fibonacciTruncate);

module.exports = router;