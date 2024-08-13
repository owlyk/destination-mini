package app.services;

import axios, { AxiosError } from 'axios';

class ApiService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = '';
    }

    setBaseUrl(url: string): void {
        this.baseUrl = url;
    }

    async getFibonacci(n: number): Promise<number | string> {
        try {
            const response = await axios.get(`${this.baseUrl}/fibonacci/${n}`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return `Error: ${error.response?.status} - ${error.message}`;
            }
            return 'An unexpected error occurred';
        }
    }
}

export default new ApiService();