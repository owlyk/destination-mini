package app.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

const FIB_LIMIT = 2000000;

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputNumber: number;
  fibonacciSequence: number[] = [];
  msg: string = '';

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci() {
    if (!this.isValidInput(this.inputNumber)) {
      this.msg = 'Please enter a positive integer less than or equal to ' + FIB_LIMIT;
      this.fibonacciSequence = [];
      return;
    }

    this.fibonacciService.getFibonacci(this.inputNumber).subscribe(
      (data: number[]) => {
        this.fibonacciSequence = data;
        this.msg = 'Fibonacci sequence calculated successfully.';
      },
      (error) => {
        this.msg = 'Error calculating Fibonacci sequence.';
        this.fibonacciSequence = [];
      }
    );
  }

  isValidInput(input: number): boolean {
    return Number.isInteger(input) && input > 0 && input <= FIB_LIMIT;
  }
}