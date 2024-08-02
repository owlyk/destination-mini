const fibonacciService = {
    calculateFibonacci: function(n) {
        if (n <= 1) {
            return n;
        } else {
            return this.calculateFibonacci(n - 1) + this.calculateFibonacci(n - 2);
        }
    }
};

module.exports = fibonacciService;