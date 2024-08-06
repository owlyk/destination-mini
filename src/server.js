npm install express

const express = require('express');
const bodyParser = require('body-parser');
const { truncatedFibonacci } = require('./main');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/truncatedFibonacci', (req, res) => {
    const { n } = req.body;
    const result = truncatedFibonacci(n);
    res.json({ result, message: 'Success' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});