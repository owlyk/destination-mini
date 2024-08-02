```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  userInput: number;
  fibonacciSeries: number[] = [];
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  generateFibonacciSeries(): void {
    if (this.userInput <= 0) {
      this.message = 'Please enter a positive number.';
      this.fibonacciSeries = [];
    } else {
      this.message = '';
      let a = 0, b = 1, nextTerm;
      for (let i = 1; i <= this.userInput; i++) {
        this.fibonacciSeries.push(a);
        nextTerm = a + b;
        a = b;
        b = nextTerm;
      }
    }
  }
}
```