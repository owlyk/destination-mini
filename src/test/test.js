const assert = require('assert');

function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let fibSeries = [0, 1];
        for (let i = 2; i < n; i++) {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
        return fibSeries;
    }
}

// Test cases for input validation
assert.deepStrictEqual(fibonacci(-1), []);
assert.deepStrictEqual(fibonacci(0), []);
assert.deepStrictEqual(fibonacci(1), [0]);
assert.deepStrictEqual(fibonacci(2), [0, 1]);

// Test cases for Fibonacci series generation
assert.deepStrictEqual(fibonacci(5), [0, 1, 1, 2, 3]);
assert.deepStrictEqual(fibonacci(8), [0, 1, 1, 2, 3, 5, 8, 13]);

console.log("All test cases passed successfully.");