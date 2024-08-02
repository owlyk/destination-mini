const fibonacciModel = {
    generateFibonacciSeries: function(n) {
        if (n <= 0) {
            return [];
        } else if (n === 1) {
            return [0];
        } else {
            let series = [0, 1];
            for (let i = 2; i < n; i++) {
                series.push(series[i - 1] + series[i - 2]);
            }
            return series;
        }
    },
    validateInput: function(n) {
        return Number.isInteger(n) && n >= 0;
    }
};

module.exports = fibonacciModel;