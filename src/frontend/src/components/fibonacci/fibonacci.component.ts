package frontend.src.components.fibonacci;

import { FibonacciService } from './fibonacci.service';

export class FibonacciComponent {
    handleFibonacciRequest() {
        const fibonacciService = new FibonacciService();
        const fibonacciSeries = fibonacciService.generateFibonacciSeries();
        // Display fibonacciSeries on the UI
    }
}