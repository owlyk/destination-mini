package

const express = require('express');
const cluster = require('cluster');
const os = require('os');
const app = express();
const port = 3000;

const fibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
};

app.get('/fib/:n', (req, res) => {
    const n = parseInt(req.params.n, 10);
    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
    }
    const result = fibonacci(n);
    res.json({ fibonacci: result });
});

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}