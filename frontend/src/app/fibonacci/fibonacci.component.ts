package app.fibonacci;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TRUNCATE_AFTER_THIS_MANY = 10000;

@Component({
  selector: 'app-fibonacci',
  templateUrl: './output.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  argument: string = '';
  num: number = 0;
  fibNumbers: number[] = [];
  message: string = '';

  constructor(private http: HttpClient) {}

  calculateFibonacci() {
    this.message = '';
    this.fibNumbers = [];

    this.num = parseInt(this.argument, 10);
    if (isNaN(this.num) || this.num < 0) {
      this.message = 'Please enter a non-negative integer.';
      return;
    }

    if (this.num > TRUNCATE_AFTER_THIS_MANY) {
      this.num = TRUNCATE_AFTER_THIS_MANY;
      this.message = `Input truncated to ${TRUNCATE_AFTER_THIS_MANY}.`;
    }

    this.http.post<number[]>('api/fibonacci', { number: this.num }).subscribe(
      (data) => {
        this.fibNumbers = data;
      },
      (error) => {
        this.message = 'Error calculating Fibonacci numbers.';
      }
    );
  }
}