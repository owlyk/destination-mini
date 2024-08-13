package src;

import React from 'react';

const UsageComponent = () => {
    return (
        <div>
            <h1>Fibonacci Application Usage Instructions</h1>
            <h2>How to Use the Application</h2>
            <p>To calculate the Fibonacci number, please enter a non-negative integer.</p>
            <h3>Valid Input Formats:</h3>
            <ul>
                <li>0</li>
                <li>1</li>
                <li>5</li>
                <li>10</li>
            </ul>
            <h3>Examples:</h3>
            <p>Input: 5 → Output: 5</p>
            <p>Input: 10 → Output: 55</p>
            <h2>Error Messages</h2>
            <p>If you enter an invalid input, you will receive the following error messages:</p>
            <ul>
                <li>For negative numbers: "Please enter a non-negative integer."</li>
                <li>For non-integer values: "Invalid input. Please enter a valid integer."</li>
            </ul>
        </div>
    );
};

export default UsageComponent;