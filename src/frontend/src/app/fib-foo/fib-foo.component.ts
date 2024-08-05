import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib-foo',
  templateUrl: './fib-foo.component.html',
  styleUrls: ['./fib-foo.component.css']
})
export class FibFooComponent implements OnInit {
  testInputs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTestInputs();
  }

  fetchTestInputs(): void {
    this.http.get('/api/test-inputs').subscribe((data: any) => {
      this.testInputs = data;
    }, (error) => {
      console.error('Error fetching test inputs:', error);
    });
  }

  calculateFibonacci(testInput: number): void {
    window.location.href = `/fib/calculate/${testInput}`;
  }
}