const truncateNumber = (num, threshold) => {
    if (num.toString().length > threshold) {
        return Number(num.toString().slice(0, threshold));
    }
    return num;
};

module.exports = {
    truncateNumber,
};