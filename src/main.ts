import { Request, Response } from 'express';
import express from 'express';
import promptSync from 'prompt-sync';

const app = express();
const prompt = promptSync();

function getUserInput(): number {
    let input: number;
    do {
        input = parseInt(prompt('Enter a positive integer: '));
    } while (isNaN(input) || input <= 0);
    return input;
}

function generateFibonacciSeries(n: number): number[] {
    let fibonacciSeries: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    return fibonacciSeries;
}

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Fibonacci series generator!');
});

app.get('/index', (req: Request, res: Response) => {
    res.send('Index page');
});

app.get('/test_script.html', (req: Request, res: Response) => {
    res.send('Test script page');
});

app.get('/fib/', (req: Request, res: Response) => {
    res.send('Please provide a number in the URL');
});

app.get('/fib/:argument', (req: Request, res: Response) => {
    const userInput = parseInt(req.params.argument);
    if (isNaN(userInput) || userInput <= 0) {
        res.send('Invalid input. Please provide a positive integer.');
    } else {
        const fibonacciSeries = generateFibonacciSeries(userInput);
        res.send(`Fibonacci series for ${userInput}: ${fibonacciSeries.join(', ')}`);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});