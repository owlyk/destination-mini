package src;

import React from 'react';

const FibonacciPage = () => {
    const title = 'Fibonacci';

    return (
        <div>
            <h1>{title}</h1>
            <h2>Start Page</h2>
            <p>Hello! Would you like to calculate Fibonacci numbers?</p>
            <a href="./fib">Calculate Fibonacci</a>
        </div>
    );
};

export default FibonacciPage;