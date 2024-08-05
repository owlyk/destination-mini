package src;

export function handleFibonacciRequest(req, res) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    const title = 'Fibonacci Calculator';
    const greetingMessage = 'Welcome! Calculate Fibonacci numbers.';
    const hyperlink = { text: 'Fibonacci numbers', url: './fib' };

    const response = {
        title: title,
        message: greetingMessage,
        link: hyperlink
    };

    res.json(JSON.stringify(response));
}