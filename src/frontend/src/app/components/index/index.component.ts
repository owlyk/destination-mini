package app.components.index;

import { Component } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  userInput: number;
  fibonacciNumbers: number[];
  message: string;

  constructor(private fibonacciService: FibonacciService) {}

  validateInput(): boolean {
    return this.userInput && this.userInput > 0 && Number.isInteger(this.userInput);
  }

  calculateFibonacci(): void {
    if (this.validateInput()) {
      this.fibonacciService.getFibonacciNumbers(this.userInput).subscribe(
        (data: number[]) => {
          this.fibonacciNumbers = data;
          this.message = 'Fibonacci numbers generated successfully.';
        },
        (error) => {
          this.message = 'Error generating Fibonacci numbers.';
        }
      );
    } else {
      this.message = 'Please enter a valid positive integer.';
    }
  }
}