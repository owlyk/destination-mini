```javascript
const express = require('express');
const main = require('./main');

const app = express();
const port = 3000;

app.get('/fibonacciMessage', (req, res) => {
    const num = req.query.num;
    if (!num || isNaN(num) || num <= 0) {
        res.status(400).json({ error: 'Invalid input' });
    } else {
        const fibonacciNumbers = main.fibonacciMessage(num);
        res.json({ num, message: fibonacciNumbers });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```