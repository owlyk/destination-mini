```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {
  testInputs: number[] = [1, 2, 3, 4, 5];
  endpointUrl: string = 'http://backend-api/fibonacci/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTestInputs();
  }

  fetchTestInputs(): void {
    // Implement fetching test inputs from backend API
  }

  generateEndpointUrl(input: number): string {
    return this.endpointUrl + input;
  }
}
```