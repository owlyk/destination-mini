package fibonacci;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  num: number;
  fibSequence: number[];
  message: string;

  constructor(private http: HttpClient) {
    this.num = 0;
    this.fibSequence = [];
    this.message = '';
  }

  ngOnInit(): void {
  }

  generateFibonacci(): void {
    if (!this.isValidInput(this.num)) {
      this.message = 'Invalid input. Please enter a positive integer.';
      return;
    }

    this.http.get<number[]>(`/fib/${this.num}`).subscribe(
      (data) => {
        this.fibSequence = data;
        this.message = 'Fibonacci sequence generated successfully.';
      },
      (error) => {
        this.message = 'Error generating Fibonacci sequence.';
      }
    );

    if (this.num === 0) {
      this.fibSequence = [0];
      this.message = 'Fibonacci sequence for 0 is [0].';
    } else if (this.num === 1) {
      this.fibSequence = [0, 1];
      this.message = 'Fibonacci sequence for 1 is [0, 1].';
    }
  }

  private isValidInput(input: number): boolean {
    return Number.isInteger(input) && input >= 0;
  }
}