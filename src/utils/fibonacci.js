const generateFibonacciSeries = (input) => {
    let fibonacciSeries = [0, 1];
    let i = 2;
    
    while (i < input) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        i++;
    }
    
    return fibonacciSeries.slice(0, input);
};

module.exports = generateFibonacciSeries;