package app;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  template: `
    <div>
      <h1>Fibonacci Sequence Generator</h1>
      <input type="number" [(ngModel)]="numberOfTerms" placeholder="Enter number of terms" />
      <button (click)="requestFibonacciNumbers()">Generate</button>
      <div *ngIf="errorMessage">{{ errorMessage }}</div>
      <div *ngIf="fibonacciNumbers">
        <h2>Fibonacci Numbers:</h2>
        <p>{{ fibonacciNumbers }}</p>
      </div>
    </div>
  `
})
export class FibonacciComponent {
  numberOfTerms: number;
  fibonacciNumbers: number[];
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {}

  requestFibonacciNumbers() {
    this.errorMessage = '';
    if (!this.isValidInput(this.numberOfTerms)) {
      this.errorMessage = 'Please enter a positive integer.';
      return;
    }
    this.fibonacciService.getFibonacciNumbers(this.numberOfTerms).subscribe(
      (data) => {
        this.fibonacciNumbers = data;
      },
      (error) => {
        this.errorMessage = 'Error retrieving Fibonacci numbers. Please try again.';
      }
    );
  }

  isValidInput(input: number): boolean {
    return Number.isInteger(input) && input > 0;
  }
}