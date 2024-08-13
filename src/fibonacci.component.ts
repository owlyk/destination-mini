package src;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputNumber: number;
  result: number;
  errorMessage: string;

  constructor(private http: HttpClient) {
    this.inputNumber = null;
    this.result = null;
    this.errorMessage = '';
  }

  calculateFibonacci() {
    this.http.get<number>(`/api/fib/${this.inputNumber}`).subscribe(
      (data) => {
        this.result = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = error.error.message || 'An error occurred';
        this.result = null;
      }
    );
  }
}