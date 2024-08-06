package app.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: string = '';
  fibonacciNumbers: number[] = [];
  errorMessage: string = '';

  constructor(private fibonacciService: FibonacciService) {}

  onCalculate() {
    const number = parseInt(this.inputValue, 10);
    if (isNaN(number) || number < 0) {
      this.errorMessage = 'Please enter a valid positive integer.';
      this.fibonacciNumbers = [];
      return;
    }
    this.fibonacciService.calculateFibonacci(number).subscribe(
      (result: number[]) => {
        this.fibonacciNumbers = result;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'An error occurred while calculating Fibonacci numbers.';
        this.fibonacciNumbers = [];
      }
    );
  }

  reset() {
    this.inputValue = '';
    this.fibonacciNumbers = [];
    this.errorMessage = '';
  }
}