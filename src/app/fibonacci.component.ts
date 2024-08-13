package app;

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

  onCalculate(): void {
    const inputNumber = parseInt(this.inputValue, 10);
    if (isNaN(inputNumber)) {
      this.message = 'Invalid input. Please enter a positive integer.';
      return;
    }
    if (inputNumber < 0) {
      this.message = 'Negative numbers are not allowed.';
      return;
    }
    if (inputNumber > 10000) {
      this.message = 'Input was truncated to 10,000.';
      this.inputValue = '10000';
    } else {
      this.message = '';
    }
    this.fibonacciService.calculateFibonacci(parseInt(this.inputValue, 10)).subscribe(
      (result: number[]) => {
        this.fibonacciNumbers = result;
      },
      (error) => {
        this.message = error;
      }
    );
  }
}