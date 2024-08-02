const generateFibonacciSeries = (numTerms) => {
    let fibonacciSeries = [];
    let num1 = 0, num2 = 1, nextTerm;

    for (let i = 1; i <= numTerms; i++) {
        fibonacciSeries.push(num1);
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }

    return fibonacciSeries;
};