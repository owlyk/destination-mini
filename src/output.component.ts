package src;

import React, { useEffect, useState } from 'react';

const OutputComponent = ({ fibonacciResult, message }) => {
    const [output, setOutput] = useState('');

    useEffect(() => {
        if (fibonacciResult) {
            setOutput(`Fibonacci Result: ${fibonacciResult}`);
        }
        if (message) {
            setOutput(prevOutput => `${prevOutput}\nMessage: ${message}`);
        }
    }, [fibonacciResult, message]);

    return (
        <div>
            <pre>{output}</pre>
        </div>
    );
};

export default OutputComponent;