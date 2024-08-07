package app.components;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  inputValue: string;
  fibNumbers: number[] = [];
  message: string;

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {}

  generateFibonacci(): void {
    const number = parseInt(this.inputValue, 10);
    if (isNaN(number)) {
      this.message = 'Invalid input. Please enter a valid number.';
      return;
    }
    if (number < 0) {
      this.message = 'Negative numbers are not allowed.';
      return;
    }
    this.fibonacciService.getFibonacciNumbers(number).subscribe(
      (data: number[]) => {
        this.fibNumbers = data;
        this.message = '';
      },
      (error) => {
        this.message = 'An error occurred while fetching Fibonacci numbers.';
      }
    );
  }
}