package.json

const express = require('express');
const bodyParser = require('body-parser');
const fibonacciRoutes = require('./fibonacci');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/fibonacci', fibonacciRoutes);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});