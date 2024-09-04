package app.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: number;
  response: string;

  constructor(private fibonacciService: FibonacciService) {}

  onSubmit() {
    if (Number.isInteger(this.inputValue) && this.inputValue >= 0) {
      this.fibonacciService.getFibonacci(this.inputValue).subscribe(
        result => {
          this.response = `Fibonacci number is: ${result}`;
        },
        error => {
          this.response = `Error: ${error.message}`;
        }
      );
    } else {
      this.response = 'Please enter a valid non-negative integer.';
    }
  }
}