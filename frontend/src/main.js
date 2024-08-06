import axios from 'axios';

const validateFibonacci = async (number) => {
    try {
        const response = await axios.post('/validateFibonacci', { number });
        return response.data;
    } catch (error) {
        console.error(error);
        return { valid: false, message: 'An error occurred while validating Fibonacci number' };
    }
};

export default validateFibonacci;