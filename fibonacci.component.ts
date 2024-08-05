```typescript
import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  template: `
    <div>
      <h2>Fibonacci Numbers</h2>
      <ul>
        <li *ngFor="let number of fibonacciNumbers">{{ number }}</li>
      </ul>
      <p>{{ message }}</p>
    </div>
  `
})
export class FibonacciComponent {
  fibonacciNumbers: number[] = [];
  message: string = '';

  constructor(private fibonacciService: FibonacciService) {
    this.generateFibonacciNumbers();
  }

  generateFibonacciNumbers() {
    this.fibonacciNumbers = this.fibonacciService.generateFibonacciNumbers();
    this.message = 'Generated Fibonacci numbers successfully.';
  }
}
```