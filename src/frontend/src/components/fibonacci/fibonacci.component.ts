```typescript
import { FibonacciService } from '../services/fibonacci.service';

export class FibonacciComponent {
  private fibonacciService: FibonacciService;

  constructor() {
    this.fibonacciService = new FibonacciService();
  }

  handleUserInput(input: string): void {
    const validatedInput = this.fibonacciService.validateInput(input);
    const fibonacciSeries = this.fibonacciService.generateFibonacciSeries(validatedInput);
    this.displayFibonacciSeries(fibonacciSeries);
  }

  displayFibonacciSeries(series: number[]): void {
    // Render output HTML template with the Fibonacci numbers list and message
  }
}
```