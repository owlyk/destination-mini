package src;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: string = '';
  fibonacciResult: string = '';

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci() {
    this.fibonacciService.getFibonacci(this.inputValue).subscribe(
      result => {
        this.fibonacciResult = result;
      },
      error => {
        this.fibonacciResult = error.message;
      }
    );
  }

  resetFields() {
    this.inputValue = '';
    this.fibonacciResult = '';
  }
}