package app.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: string = '';
  fibonacciNumbers: number[] = [];
  message: string = '';

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci(): void {
    const value = parseInt(this.inputValue, 10);
    if (isNaN(value) || value < 0) {
      this.message = 'Please enter a valid positive integer.';
      this.fibonacciNumbers = [];
      return;
    }
    this.fibonacciNumbers = this.fibonacciService.calculateFibonacci(value);
    this.message = this.fibonacciNumbers.length > 0 ? 'Fibonacci series calculated successfully.' : '';
  }
}