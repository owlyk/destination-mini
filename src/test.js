const assert = require('assert');

describe('Fibonacci Series Calculator', function() {
  
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  it('should return 0 for input 0', function() {
    assert.equal(fibonacci(0), 0);
  });

  it('should return 1 for input 1', function() {
    assert.equal(fibonacci(1), 1);
  });

  it('should return 1 for input 2', function() {
    assert.equal(fibonacci(2), 1);
  });

  it('should return 2 for input 3', function() {
    assert.equal(fibonacci(3), 2);
  });

  it('should return 3 for input 4', function() {
    assert.equal(fibonacci(4), 3);
  });

  it('should return 5 for input 5', function() {
    assert.equal(fibonacci(5), 5);
  });

  it('should return 8 for input 6', function() {
    assert.equal(fibonacci(6), 8);
  });

  it('should return 13 for input 7', function() {
    assert.equal(fibonacci(7), 13);
  });

  it('should return 21 for input 8', function() {
    assert.equal(fibonacci(8), 21);
  });

  it('should return 34 for input 9', function() {
    assert.equal(fibonacci(9), 34);
  });

});