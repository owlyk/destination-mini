import { FibonacciController } from './FibonacciController';
import { FibonacciService } from './FibonacciService';
import { FibonacciView } from './FibonacciView';

const fibonacciController = new FibonacciController(new FibonacciService(), new FibonacciView());

// Define REST endpoint for calculating Fibonacci numbers
app.post('/calculateFibonacci', (req, res) => {
    const userInput = req.body.input;

    // Validate input to ensure it is a positive integer
    if (!Number.isInteger(userInput) || userInput <= 0) {
        res.status(400).json({ error: 'Input must be a positive integer' });
    } else {
        // Calculate Fibonacci numbers up to the input value
        const fibonacciNumbers = fibonacciController.calculateFibonacci(userInput);

        // Return the list of Fibonacci numbers in the response
        res.status(200).json({ fibonacciNumbers });
    }
});