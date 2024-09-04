package app.components.test_script;

import { Component } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-test-script',
  template: `
    <div>
      <h2>Fibonacci Series Generator</h2>
      <input type="number" [(ngModel)]="inputNumber" placeholder="Enter a non-negative integer" />
      <button (click)="calculateFibonacci()">Generate</button>
      <div *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</div>
      <div *ngIf="fibonacciResult.length > 0">
        <h3>Fibonacci Series:</h3>
        <p>{{ fibonacciResult.join(', ') }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent {
  inputNumber: number;
  fibonacciResult: number[];
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {
    this.inputNumber = 0;
    this.fibonacciResult = [];
    this.errorMessage = '';
  }

  calculateFibonacci(): void {
    this.errorMessage = '';
    if (this.inputNumber < 0 || !Number.isInteger(this.inputNumber)) {
      this.errorMessage = 'Please enter a non-negative integer.';
      return;
    }

    this.fibonacciService.getFibonacci(this.inputNumber).subscribe(
      (result: number[]) => {
        this.fibonacciResult = result;
      },
      (error) => {
        this.errorMessage = 'Error fetching Fibonacci series.';
      }
    );
  }
}