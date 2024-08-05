package frontend.src.services;

const generateFibonacciSeries = (num) => {
    let fibonacciSeries = [];
    let num1 = 0, num2 = 1, nextNum;

    for (let i = 0; i < num; i++) {
        fibonacciSeries.push(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }

    return fibonacciSeries;
};

export default generateFibonacciSeries;