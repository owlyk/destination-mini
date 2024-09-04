package app.shared;

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <div *ngIf="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  `,
  styles: [`
    .error-message {
      color: red;
      font-weight: bold;
    }
  `]
})
export class ErrorMessageComponent {
  @Input() errorMessage: string | null = null;
}

package app.fibonacci;

import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci-calculator',
  template: `
    <div>
      <input [(ngModel)]="inputValue" (input)="validateInput()" placeholder="Enter a number" />
      <button (click)="calculateFibonacci()">Calculate Fibonacci</button>
      <app-error-message [errorMessage]="errorMessage"></app-error-message>
      <div *ngIf="result !== null">Fibonacci: {{ result }}</div>
    </div>
  `,
  styles: [`
    input {
      margin-right: 10px;
    }
  `]
})
export class FibonacciCalculatorComponent {
  inputValue: string = '';
  result: number | null = null;
  errorMessage: string | null = null;

  validateInput() {
    const value = Number(this.inputValue);
    if (isNaN(value) || value < 0 || !Number.isInteger(value)) {
      this.errorMessage = 'Please enter a non-negative integer.';
      this.result = null;
    } else {
      this.errorMessage = null;
    }
  }

  calculateFibonacci() {
    const value = Number(this.inputValue);
    if (this.errorMessage === null) {
      this.result = this.fibonacci(value);
    }
  }

  fibonacci(n: number): number {
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}