const validateFibonacciInput = () => {
    const userInput = prompt("Enter a number for Fibonacci calculation:");
    const number = parseInt(userInput);

    if (Number.isInteger(number) && number > 0) {
        return "Input is valid for Fibonacci calculation.";
    } else {
        return "Input is invalid for Fibonacci calculation.";
    }
};