const express = require('express');
const router = express.Router();

router.get('/fibonacci/truncate', (req, res) => {
    const n = parseInt(req.query.n);
    let a = 0, b = 1, nextTerm;

    for (let i = 1; i <= n; i++) {
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    res.json({ result: a });
});

module.exports = router;