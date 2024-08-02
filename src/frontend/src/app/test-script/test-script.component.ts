```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-script',
  templateUrl: './test-script.component.html',
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent implements OnInit {
  testInputs: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  fibonacciEndpoints: string[] = ['http://localhost:3000/fibonacci/recursive', 'http://localhost:3000/fibonacci/iterative'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTestInputs();
  }

  fetchTestInputs(): void {
    // Fetch test inputs from API
  }

  calculateFibonacci(input: number, endpoint: string): void {
    // Call Fibonacci calculation endpoint with input
  }

  handleUserInteraction(): void {
    // Handle user interaction with test inputs
  }
}
```