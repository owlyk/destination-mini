const calculateFibonacci = (num) => {
    if (num <= 0 || !Number.isInteger(num)) {
        return { error: "Input must be a positive integer" };
    }

    let fibonacci = [];
    if (num === 0) {
        return fibonacci;
    } else if (num === 1) {
        fibonacci.push(0);
        return fibonacci;
    } else if (num === 2) {
        fibonacci.push(0, 1);
        return fibonacci;
    } else {
        fibonacci.push(0, 1);
        for (let i = 2; i < num; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        return fibonacci;
    }
};