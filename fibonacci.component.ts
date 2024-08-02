package com.example;

import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  userInput: number;
  fibonacciNumbers: number[];

  constructor(private fibonacciService: FibonacciService) {}

  calculateFibonacci() {
    if (this.userInput && this.userInput > 0) {
      this.fibonacciNumbers = this.fibonacciService.generateFibonacci(this.userInput);
    } else {
      this.fibonacciNumbers = [];
    }
  }
}