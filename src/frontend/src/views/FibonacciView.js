import React, { useState } from 'react';

const FibonacciView = () => {
    const [input, setInput] = useState('');
    const [fibonacciNumbers, setFibonacciNumbers] = useState([]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const calculateFibonacci = async () => {
        if (input.trim() === '') {
            alert('Please enter a valid input');
            return;
        }

        const response = await fetch('/api/calculateFibonacci', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: parseInt(input) })
        });

        if (response.ok) {
            const data = await response.json();
            setFibonacciNumbers(data.fibonacciNumbers);
        } else {
            alert('Failed to calculate Fibonacci numbers');
        }
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={calculateFibonacci}>Calculate Fibonacci</button>
            <ul>
                {fibonacciNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    );
};

export default FibonacciView;