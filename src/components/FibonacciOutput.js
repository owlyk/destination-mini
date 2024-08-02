```javascript
import React from 'react';

class FibonacciOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: []
        };
    }

    componentDidMount() {
        this.generateFibonacciSeries();
    }

    generateFibonacciSeries = () => {
        let series = [0, 1];
        for (let i = 2; i < 10; i++) {
            series[i] = series[i - 1] + series[i - 2];
        }
        this.setState({ series });
    }

    render() {
        return (
            <div>
                <h1>Fibonacci Series</h1>
                <ul>
                    {this.state.series.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FibonacciOutput;
```