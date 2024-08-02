import React from 'react';

class FibonacciCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            result: ''
        };
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    calculateFibonacci = () => {
        const n = parseInt(this.state.inputValue);
        if (n <= 0) {
            this.setState({ result: 'Please enter a positive integer' });
            return;
        }
        
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        
        this.setState({ result: fib[n] });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                <button onClick={this.calculateFibonacci}>Calculate Fibonacci</button>
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default FibonacciCalculator;