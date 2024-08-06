const prompt = require('prompt-sync')();

function fibonacciMessage(req, res) {
    const num = req.query.num;

    if (isNaN(num) || num <= 0) {
        res.status(400).json({ message: "Invalid input. Please provide a valid number." });
    } else {
        const fibonacciNumbers = [0, 1];
        for (let i = 2; i < num; i++) {
            fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        }
        res.status(200).json({ 
            originalInput: num,
            message: `Generated Fibonacci numbers: ${fibonacciNumbers.join(', ')}` 
        });
    }
}

module.exports = fibonacciMessage;