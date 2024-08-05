package app;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  numberOfFibonacci: number;
  fibonacciResult: number[];

  constructor(private fibonacciService: FibonacciService) {
    this.numberOfFibonacci = 0;
    this.fibonacciResult = [];
  }

  generateFibonacci() {
    if (this.numberOfFibonacci < 0 || !Number.isInteger(this.numberOfFibonacci)) {
      this.fibonacciResult = ['Invalid input. Please enter a positive integer.'];
      return;
    }
    this.fibonacciService.getFibonacci(this.numberOfFibonacci).subscribe(
      (result: number[]) => {
        this.fibonacciResult = result;
      },
      (error) => {
        this.fibonacciResult = ['Error fetching Fibonacci numbers.'];
      }
    );
  }
}