import axios from 'axios';

class FibonacciController {
    static calculateFibonacciNumbers = async (input) => {
        try {
            const response = await axios.post('/api/calculateFibonacci', { input });
            return response.data;
        } catch (error) {
            console.error('Error calculating Fibonacci numbers:', error);
            return null;
        }
    }
}

export default FibonacciController;