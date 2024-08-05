package src;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  index: number;
  result: number;
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.index = null;
    this.result = null;
    this.errorMessage = '';
  }

  calculateFibonacci(): void {
    this.errorMessage = '';
    if (this.isValidInput(this.index)) {
      this.fibonacciService.getFibonacci(this.index).subscribe(
        (data) => {
          this.result = data;
        },
        (error) => {
          this.errorMessage = error.error.message;
        }
      );
    } else {
      this.errorMessage = 'Invalid input. Please enter a numeric value.';
    }
  }

  isValidInput(value: any): boolean {
    return !isNaN(value) && Number.isInteger(value) && value >= 0;
  }
}