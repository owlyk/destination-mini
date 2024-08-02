const validateInput = (input) => {
    // Input validation code here
};

const generateFibonacciSeries = (n) => {
    // Fibonacci series generation code here
};

const calculateNumber = (n) => {
    // Number calculation code here
};

const truncateNumber = (num) => {
    // Truncation code here
};

const formatToJson = (data) => {
    // JSON formatting code here
};

// Main application file
const userInput = 10;

validateInput(userInput);
const fibonacciSeries = generateFibonacciSeries(userInput);
const calculatedNumber = calculateNumber(userInput);
const truncatedNumber = truncateNumber(calculatedNumber);
const jsonData = formatToJson({ userInput, fibonacciSeries, calculatedNumber, truncatedNumber });

console.log(jsonData);