```typescript
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  testInputs: string[] = ['0', '1', '2', 'scientific notation', 'large number', 'negative number', 'word'];
  testScript: string = '';

  constructor(private http: HttpClient) {
    this.getTestScript();
  }

  getTestScript() {
    this.http.get('/fib/-9').subscribe((data: any) => {
      this.testScript = data.testScript;
    });
  }

  handleTestInput(input: string) {
    // Handle test input logic here
  }
}
```