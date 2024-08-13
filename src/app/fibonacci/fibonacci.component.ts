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
  fibonacciResult: string = '';

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci(): void {
    this.fibonacciService.getFibonacci(this.inputValue).subscribe(
      result => {
        this.fibonacciResult = result.toString();
      },
      error => {
        this.fibonacciResult = 'Error: ' + error.message;
      }
    );
  }

  reset(): void {
    this.inputValue = '';
    this.fibonacciResult = '';
  }
}