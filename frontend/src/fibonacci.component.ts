package src;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: string = '';
  result: string = '';

  constructor(private http: HttpClient) {}

  calculateFibonacci() {
    const n = Number(this.inputValue);
    if (isNaN(n)) {
      this.result = 'Invalid input. Please enter a numeric value.';
      return;
    }
    if (n < 0) {
      this.result = 'Negative Fibonacci numbers are not defined.';
      return;
    }
    this.http.get(`/fib/${n}`).pipe(
      catchError(err => {
        this.result = 'Error occurred while fetching the Fibonacci number.';
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        this.result = `Fibonacci number for ${n} is ${response}`;
      }
    });
  }
}