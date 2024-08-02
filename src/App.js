import React from 'react';
import FibonacciCalculator from './FibonacciCalculator';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Fibonacci Calculator</h1>
        <FibonacciCalculator />
      </div>
    );
  }
}

export default App;