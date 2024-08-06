package.json

const express = require('express');
const bodyParser = require('body-parser');
const fibonacciRoutes = require('./fibonacci');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/fib', fibonacciRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});