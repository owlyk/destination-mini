const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/fibonacci', (req, res) => {
    const userInput = req.body.value;

    if (Number.isInteger(userInput) && userInput > 0) {
        let fibonacci = [0, 1];
        let i = 2;

        while (fibonacci[i - 1] + fibonacci[i - 2] <= userInput) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            i++;
        }

        res.json({
            message: 'Fibonacci numbers calculated successfully',
            fibonacciNumbers: fibonacci
        });
    } else {
        res.status(400).json({ message: 'Input value must be a positive integer' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});