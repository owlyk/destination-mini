package app.components.test_script;

import { Component } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-test-script',
  templateUrl: './test-script.component.html',
  styleUrls: ['./test-script.component.css']
})
export class TestScriptComponent {
  fibonacciInput: number;
  fibonacciResult: number[];
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {
    this.fibonacciInput = 0;
    this.fibonacciResult = [];
    this.errorMessage = '';
  }

  calculateFibonacci(): void {
    if (!Number.isInteger(this.fibonacciInput) || this.fibonacciInput < 0) {
      this.errorMessage = 'Please enter a valid non-negative integer.';
      this.fibonacciResult = [];
      return;
    }

    this.fibonacciService.getFibonacci(this.fibonacciInput).subscribe(
      (result) => {
        this.fibonacciResult = result;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error fetching Fibonacci sequence: ' + error.message;
        this.fibonacciResult = [];
      }
    );
  }
}