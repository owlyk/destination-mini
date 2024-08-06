const express = require('express');
const { fibonacciDetails } = require('./main');

const app = express();
const PORT = 3000;

app.get('/fibonacciDetails', (req, res) => {
  const number = parseInt(req.query.number);

  if (isNaN(number) || number <= 0) {
    res.status(400).json({ error: 'Invalid input. Please provide a positive integer.' });
    return;
  }

  const result = fibonacciDetails(number);

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(result.fibonacciNumber); i++) {
    if (result.fibonacciNumber % i === 0) {
      isPrime = false;
      break;
    }
  }

  res.json({
    fibonacciNumber: result.fibonacciNumber,
    position: result.position,
    isPrime: isPrime
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});