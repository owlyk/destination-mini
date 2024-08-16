package app.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: string;
  response: string;

  constructor(private fibonacciService: FibonacciService) {
    this.inputValue = '';
    this.response = '';
  }

  calculateFibonacci(): void {
    const number = this.validateInput(this.inputValue);
    if (number !== null) {
      this.fibonacciService.getFibonacci(number).subscribe(
        result => this.response = `Fibonacci result: ${result}`,
        error => this.response = 'Error calculating Fibonacci.'
      );
    } else {
      this.response = 'Invalid input. Please enter a valid number.';
    }
  }

  private validateInput(value: string): number | null {
    const parsedValue = Number(value);
    if (!isNaN(parsedValue) && Number.isInteger(parsedValue) && parsedValue >= 0) {
      return parsedValue;
    }
    return null;
  }
}