const truncateFibonacci = (body) => {
    const { fibonacciNumbers, truncateLimit } = JSON.parse(body);
    
    const truncatedFibonacci = fibonacciNumbers.map(num => {
        const numStr = num.toString();
        return numStr.length > truncateLimit ? parseInt(numStr.slice(0, truncateLimit)) : num;
    });
    
    return JSON.stringify({ truncatedFibonacci, message: "Fibonacci numbers truncated successfully" });
};