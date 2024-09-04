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
  response: number;
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci() {
    this.fibonacciService.getFibonacci(this.inputValue).subscribe(
      (data) => {
        this.response = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error retrieving Fibonacci number';
        this.response = null;
      }
    );
  }
}