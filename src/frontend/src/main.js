import React from 'react';
import ReactDOM from 'react-dom';
import FibonacciController from './FibonacciController';

const App = () => {
    const [input, setInput] = React.useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleCalculate = () => {
        FibonacciController.calculateFibonacci(input);
    };

    return (
        <div>
            <h1>Fibonacci Calculator</h1>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleCalculate}>Calculate Fibonacci</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));