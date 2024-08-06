```typescript
import { Component } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  fibonacciSeries: number[] = [];

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacciSeries(num: number): void {
    this.fibonacciSeries = this.fibonacciService.generateFibonacciSeries(num);
  }
}
```