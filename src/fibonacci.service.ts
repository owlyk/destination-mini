package src;

import axios from 'axios';
import { Request, Response } from 'express';

export class FibonacciService {
    private readonly maxFibonacci: number = 10000;
    private readonly baseUrl: string = '/myFib/';

    public async calculateFibonacci(number: number): Promise<any> {
        if (!this.isValidInput(number)) {
            return this.renderError('Input must be a non-negative integer.');
        }

        try {
            const response = await axios.get(`${this.baseUrl}${number}`);
            return response.data;
        } catch (error) {
            return this.renderError('An error occurred while calculating Fibonacci numbers.');
        }
    }

    private isValidInput(number: number): boolean {
        return Number.isInteger(number) && number >= 0 && number <= this.maxFibonacci;
    }

    private renderError(message: string): any {
        return { error: message, template: 'usage.html' };
    }
}