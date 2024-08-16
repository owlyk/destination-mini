package src.fibonacci;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  inputValue: string;
  fibonacciSequence: number[];
  errorMessage: string;

  constructor(private http: HttpClient) {
    this.inputValue = '';
    this.fibonacciSequence = [];
    this.errorMessage = '';
  }

  ngOnInit(): void {
  }

  calculateFibonacci(): void {
    const n = Number(this.inputValue);
    if (!isNaN(n) && n >= 0 && Number.isInteger(n)) {
      this.http.get<number[]>(`/fib/${n}`).subscribe(
        (data) => {
          this.fibonacciSequence = data;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Error fetching Fibonacci sequence';
        }
      );
    } else {
      this.errorMessage = 'Invalid input. Please enter a non-negative integer.';
      this.fibonacciSequence = [];
    }
  }

  reset(): void {
    this.inputValue = '';
    this.fibonacciSequence = [];
    this.errorMessage = '';
  }
}