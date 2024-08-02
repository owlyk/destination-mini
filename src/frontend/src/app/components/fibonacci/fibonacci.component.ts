```typescript
import { Component } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  userInput: string = '';
  fibonacciSeries: number[] = [];

  constructor(private fibonacciService: FibonacciService) {}

  onSubmit(argument: string): void {
    if (this.isValidInput(argument)) {
      this.fibonacciSeries = this.fibonacciService.generateFibonacciSeries(parseInt(argument));
    }
  }

  private isValidInput(input: string): boolean {
    const number = parseInt(input);
    return !isNaN(number) && number > 0;
  }
}
```