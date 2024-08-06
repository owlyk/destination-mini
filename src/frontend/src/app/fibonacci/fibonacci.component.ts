```typescript
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  testScript: string;
  userInput: number;
  fibonacciNumbers: number[];

  constructor(private http: HttpClient) {}

  fetchTestScript() {
    this.http.get('https://api.example.com/test-script').subscribe((data: any) => {
      this.testScript = data.script;
    });
  }

  handleUserInput() {
    if (this.userInput < 0 || isNaN(this.userInput) || this.userInput === Infinity || this.userInput === -Infinity || typeof this.userInput === 'string') {
      alert('Invalid input. Please enter a valid number.');
      return;
    }

    this.fibonacciNumbers = this.calculateFibonacci(this.userInput);
  }

  calculateFibonacci(n: number): number[] {
    let fib: number[] = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
}
```