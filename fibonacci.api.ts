package fibonacci.api;

import axios from 'axios';

const BASE_URL = 'http://backend.com/api';

export const validateInput = async (input: number): Promise<boolean> => {
    try {
        const response = await axios.post(`${BASE_URL}/validate`, { input });
        return response.data.valid;
    } catch (error) {
        console.error('Error validating input:', error);
        return false;
    }
};

export const generateFibonacciNumber = async (n: number): Promise<number> => {
    try {
        const response = await axios.post(`${BASE_URL}/fibonacci`, { n });
        return response.data.result;
    } catch (error) {
        console.error('Error generating Fibonacci number:', error);
        return -1;
    }
};