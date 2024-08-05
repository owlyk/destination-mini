```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci-test',
  templateUrl: './fibonacci-test.component.html',
  styleUrls: ['./fibonacci-test.component.css']
})
export class FibonacciTestComponent {
  testInputs = [
    { description: 'Test for 0 Fibonacci numbers', endpoint: '/api/fibonacci/0' },
    { description: 'Test for 1 Fibonacci number', endpoint: '/api/fibonacci/1' },
    { description: 'Test for 5 Fibonacci numbers', endpoint: '/api/fibonacci/5' },
    { description: 'Test for 10 Fibonacci numbers', endpoint: '/api/fibonacci/10' }
  ];

  constructor() { }

  runTests() {
    this.testInputs.forEach(input => {
      console.log(`Description: ${input.description}, Endpoint: ${input.endpoint}`);
    });
  }
}
```