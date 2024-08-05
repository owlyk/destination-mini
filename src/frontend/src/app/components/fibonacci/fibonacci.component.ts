package app.components.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: number;
  fibonacciSequence: number[];

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit() {
    console.log("Welcome to the Fibonacci web app!");
    console.log("Please enter a number to generate the Fibonacci sequence.");
  }

  calculateFibonacci() {
    if (this.inputValue && this.inputValue > 0) {
      this.fibonacciSequence = this.fibonacciService.generateSequence(this.inputValue);
    } else {
      console.error("Invalid input. Please enter a positive number.");
    }
  }
}