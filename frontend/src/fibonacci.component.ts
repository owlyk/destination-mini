package src;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  template: `
    <div>
      <h1>Fibonacci Calculator</h1>
      <input [(ngModel)]="inputNumber" placeholder="Enter a positive integer" />
      <button (click)="calculateFibonacci()">Calculate</button>
      <div *ngIf="result !== null">Fibonacci of {{ inputNumber }} is {{ result }}</div>
      <div *ngIf="errorMessage">{{ errorMessage }}</div>
    </div>
  `
})
export class FibonacciComponent {
  inputNumber: number;
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci() {
    this.errorMessage = null;
    this.result = null;

    if (this.inputNumber === undefined || this.inputNumber === null || isNaN(this.inputNumber) || this.inputNumber < 0 || !Number.isInteger(this.inputNumber)) {
      this.errorMessage = 'Please enter a valid positive integer.';
      return;
    }

    this.result = this.fibonacciService.calculate(this.inputNumber);
  }
}