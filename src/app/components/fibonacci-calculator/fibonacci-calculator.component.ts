package app.components.fibonacci-calculator;

import { Component } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci-calculator',
  templateUrl: './fibonacci-calculator.component.html',
  styleUrls: ['./fibonacci-calculator.component.css']
})
export class FibonacciCalculatorComponent {
  userInput: number;
  results: number[];
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {
    this.userInput = null;
    this.results = [];
    this.errorMessage = '';
  }

  calculateFibonacci() {
    if (this.isValidInput(this.userInput)) {
      this.fibonacciService.getFibonacci(this.userInput).subscribe(
        (data: number[]) => {
          this.results = data;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Error fetching Fibonacci numbers.';
        }
      );
    } else {
      this.errorMessage = 'Please enter a non-negative integer not exceeding 10,000.';
      this.results = [];
    }
  }

  reset() {
    this.userInput = null;
    this.results = [];
    this.errorMessage = '';
  }

  private isValidInput(input: number): boolean {
    return Number.isInteger(input) && input >= 0 && input <= 10000;
  }
}