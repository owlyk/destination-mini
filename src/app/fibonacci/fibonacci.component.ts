package app.fibonacci;

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  inputValue: string;
  fibonacciNumber: number;
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.inputValue = params['input'];
      this.validateInput();
    });
  }

  validateInput(): void {
    const number = Number(this.inputValue);
    if (isNaN(number) || number < 0) {
      this.errorMessage = 'Invalid input. Please enter a non-negative integer.';
      this.fibonacciNumber = null;
    } else {
      this.calculateFibonacci(number);
    }
  }

  calculateFibonacci(input: number): void {
    this.fibonacciService.getFibonacci(input).subscribe(
      result => {
        this.fibonacciNumber = result;
        this.errorMessage = null;
      },
      error => this.handleError(error)
    );
  }

  handleError(error: any): void {
    this.errorMessage = 'An error occurred while fetching the Fibonacci number.';
    this.fibonacciNumber = null;
  }
}