package.json

const express = require('express');
const { setupFibonacciEndpoint } = require('./FibonacciEndpoint');

const app = express();
const port = 3000;

setupFibonacciEndpoint(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});