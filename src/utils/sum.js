const calculateSum = (fibonacciSeries) => {
    let sum = 0;
    for (let num of fibonacciSeries) {
        sum += num;
    }
    return sum;
};

module.exports = calculateSum;