package src;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: number;
  fibonacciNumber: number;
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {
    this.inputValue = null;
    this.fibonacciNumber = null;
    this.errorMessage = '';
  }

  calculateFibonacci() {
    this.errorMessage = '';
    if (this.isValidInput(this.inputValue)) {
      this.fibonacciService.getFibonacci(this.inputValue).subscribe(
        (result) => {
          this.fibonacciNumber = result.fibonacci_number;
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
    } else {
      this.errorMessage = 'Input must be a positive integer.';
    }
  }

  isValidInput(value: number): boolean {
    return Number.isInteger(value) && value >= 0;
  }
}