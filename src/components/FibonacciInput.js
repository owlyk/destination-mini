import React, { useState } from 'react';

const FibonacciInput = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  return (
    <div>
      <label>Enter a number:</label>
      <input type="number" value={number} onChange={handleChange} />
    </div>
  );
};

export default FibonacciInput;