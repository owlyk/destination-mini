const truncateFibonacci = (num) => {
    if (num <= 0) {
        return 0;
    }
    
    let a = 0;
    let b = 1;
    let next = a + b;
    
    while (next <= num) {
        a = b;
        b = next;
        next = a + b;
    }
    
    return b;
};

module.exports = {
    truncateFibonacci
};