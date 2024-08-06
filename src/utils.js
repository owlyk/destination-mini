const validateInput = (input) => {
    if (!Array.isArray(input)) {
        return false;
    }

    for (let num of input) {
        if (!Number.isInteger(num) || num <= 0) {
            return false;
        }
    }

    return true;
};

const calculateFibonacci = (n) => {
    if (n <= 0) {
        return 0;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

module.exports = {
    validateInput,
    calculateFibonacci
};