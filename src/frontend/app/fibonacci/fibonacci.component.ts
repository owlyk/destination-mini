package app.fibonacci;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  userInput: number;
  results: number[];
  errorMessage: string;

  constructor(private http: HttpClient) {}

  calculateFibonacci() {
    this.http.get<number[]>(`/fib/${this.userInput}`).subscribe(
      (data) => {
        this.results = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error fetching Fibonacci numbers';
        this.results = [];
      }
    );
  }

  onInputChange(input: string) {
    this.userInput = Number(input);
    this.calculateFibonacci();
  }
}