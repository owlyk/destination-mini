package app;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  template: `
    <div>
      <input [(ngModel)]="inputValue" placeholder="Enter a number" />
      <button (click)="calculateFibonacci()">Calculate Fibonacci</button>
      <p>{{ result }}</p>
    </div>
  `
})
export class FibonacciComponent {
  inputValue: number;
  result: string;

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci() {
    if (isNaN(this.inputValue)) {
      this.result = 'Please enter a valid number.';
      return;
    }
    if (this.inputValue < 0) {
      this.result = 'Negative numbers are not allowed.';
      return;
    }
    this.fibonacciService.getFibonacci(this.inputValue).subscribe(
      (response) => {
        this.result = `Fibonacci number: ${response}`;
      },
      (error) => {
        this.result = 'An error occurred while calculating Fibonacci.';
      }
    );
  }
}