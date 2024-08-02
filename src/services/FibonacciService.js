import axios from 'axios';

class FibonacciService {
    async getFibonacciNumber(n) {
        try {
            const response = await axios.get(`https://api.example.com/fibonacci/${n}`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch Fibonacci number');
        }
    }
}

export default FibonacciService;