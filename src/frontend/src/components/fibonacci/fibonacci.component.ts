```typescript
import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  userInput: number;
  fibonacciSeries: number[];
  message: string;

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci(): void {
    if (this.userInput && this.userInput > 0) {
      this.fibonacciSeries = this.fibonacciService.generateFibonacci(this.userInput);
      this.message = `Generated Fibonacci series up to ${this.userInput}`;
    } else {
      this.fibonacciSeries = [];
      this.message = 'Please enter a valid number greater than 0';
    }
  }
}
```