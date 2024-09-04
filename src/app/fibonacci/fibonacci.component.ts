package app.fibonacci;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  inputValue: string;
  errorMessage: string;
  response: any;

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {}

  submitInput(): void {
    if (this.inputValue === 'foo') {
      this.errorMessage = 'Invalid input: foo is not allowed.';
      return;
    }

    this.fibonacciService.calculateFibonacci(this.inputValue).subscribe(
      (data) => {
        this.response = data;
        if (this.response.error) {
          this.errorMessage = this.response.error;
        } else {
          this.errorMessage = '';
          this.processFibonacciSeries(this.response.series);
        }
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  processFibonacciSeries(series: any): void {
    // Implement processing of the Fibonacci series here
  }
}