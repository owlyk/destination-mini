package src;

import axios from 'axios';

class FibonacciService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    public async calculateFibonacci(index: string): Promise<any> {
        if (!this.isNumeric(index)) {
            this.logError('Invalid input: Input is not a numeric value.');
            return { error: 'Invalid input. Please provide a numeric value.' };
        }

        const numericIndex = parseInt(index, 10);
        if (numericIndex < 0) {
            this.logError('Negative indices are not allowed.');
            return { error: 'Negative indices are not allowed.' };
        }

        try {
            const response = await axios.get(`${this.apiUrl}/fibonacci/${numericIndex}`);
            return response.data;
        } catch (error) {
            this.logError(`Error fetching Fibonacci number: ${error.message}`);
            return { error: 'An error occurred while fetching the Fibonacci number.' };
        }
    }

    private isNumeric(value: string): boolean {
        return !isNaN(Number(value)) && !isNaN(parseFloat(value));
    }

    private logError(message: string): void {
        console.error(message);
    }
}