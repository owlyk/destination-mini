```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  userInput: number;
  fibonacciNumbers: number[] = [];

  generateFibonacciNumbers(): void {
    if (this.userInput <= 0) {
      this.fibonacciNumbers = [];
    } else if (this.userInput === 1) {
      this.fibonacciNumbers = [0];
    } else {
      let a = 0, b = 1;
      this.fibonacciNumbers = [a, b];
      for (let i = 2; i < this.userInput; i++) {
        let c = a + b;
        this.fibonacciNumbers.push(c);
        a = b;
        b = c;
      }
    }
  }

  handleUserInput(input: number): void {
    this.userInput = input;
    this.generateFibonacciNumbers();
  }
}
```