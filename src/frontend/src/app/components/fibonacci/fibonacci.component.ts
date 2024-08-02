```typescript
import { Component } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

const TRUNCATE_AFTER_THIS_MANY = 10;

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  userInput: number;
  fibonacciNumbers: number[];

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci(): void {
    if (this.userInput && this.userInput > 0) {
      this.fibonacciService.calculateFibonacci(this.userInput).subscribe(
        (data: number[]) => {
          this.fibonacciNumbers = data;
        },
        (error) => {
          console.error('Error calculating Fibonacci numbers:', error);
        }
      );
    } else {
      console.error('Invalid input for Fibonacci calculation');
    }
  }

  fibList(num: number): string {
    let fibNumbers = this.fibonacciNumbers.slice(0, num);
    if (fibNumbers.length > TRUNCATE_AFTER_THIS_MANY) {
      fibNumbers = fibNumbers.slice(0, TRUNCATE_AFTER_THIS_MANY);
      return `Fibonacci numbers truncated to ${TRUNCATE_AFTER_THIS_MANY}: ${fibNumbers.join(', ')}`;
    }
    return `Fibonacci numbers: ${fibNumbers.join(', ')}`;
  }
}
```