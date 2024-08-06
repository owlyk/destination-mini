const fibonacciGenerator = (numTerms) => {
    if (Number.isInteger(numTerms) && numTerms > 0) {
        let fibonacciSeries = [0, 1];
        for (let i = 2; i < numTerms; i++) {
            fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        }
        return { success: true, message: "Fibonacci series generated successfully", fibonacciSeries };
    } else {
        return { success: false, message: "Invalid input. Please provide a positive integer." };
    }
};