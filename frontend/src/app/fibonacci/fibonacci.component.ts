package app.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  userInput: string = '';
  output: string = '';
  errorMessage: string = '';

  constructor(private fibonacciService: FibonacciService) {}

  onCalculate() {
    const inputNumber = parseInt(this.userInput, 10);
    if (isNaN(inputNumber) || inputNumber < 0) {
      this.errorMessage = 'Please enter a positive integer.';
      this.output = '';
      return;
    }
    this.fibonacciService.getFibonacciSeries(inputNumber).subscribe(
      (response) => {
        this.output = response.series;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching the Fibonacci series.';
        this.output = '';
      }
    );
  }
}