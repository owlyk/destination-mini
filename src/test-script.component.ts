package src;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-script',
  template: `
    <div>
      <h1>Fibonacci Calculation API Tests</h1>
      <button (click)="runTest(5)">Test Fibonacci(5)</button>
      <button (click)="runTest(10)">Test Fibonacci(10)</button>
      <div *ngIf="result">
        <h2>Test Result:</h2>
        <p>{{ result }}</p>
      </div>
    </div>
  `
})
export class TestScriptComponent {
  result: string;

  constructor(private http: HttpClient) {}

  runTest(n: number) {
    this.http.get<number>(`/api/fibonacci/${n}`).subscribe(
      response => {
        this.result = `Success: Fibonacci(${n}) = ${response}`;
      },
      error => {
        this.result = `Failure: ${error.message}`;
      }
    );
  }
}