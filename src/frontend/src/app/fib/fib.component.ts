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
  endpointUrls: string[] = [
    '/api/fib/1',
    '/api/fib/2',
    '/api/fib/3',
    '/api/fib/4',
    '/api/fib/5'
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTestInputs();
  }

  fetchTestInputs(): void {
    this.http.get<number[]>('/api/testInputs').subscribe(data => {
      this.testInputs = data;
    });
  }
}
```