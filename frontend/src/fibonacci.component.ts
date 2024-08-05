package src;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputNumber: number;
  result: string;

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci() {
    if (this.isValidInput(this.inputNumber)) {
      this.fibonacciService.getFibonacci(this.inputNumber).subscribe(
        (response) => {
          this.result = `Fibonacci of ${this.inputNumber} is ${response.fibonacci}`;
        },
        (error) => {
          this.result = error.message;
        }
      );
    } else {
      this.result = 'Please enter a positive integer.';
    }
  }

  isValidInput(input: number): boolean {
    return Number.isInteger(input) && input >= 0;
  }
}