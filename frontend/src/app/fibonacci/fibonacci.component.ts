package app.fibonacci;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  title: string;
  errorMessage: string;
  fibonacciNumbers: number[];

  constructor(private http: HttpClient) {
    this.title = 'Fibonacci Calculator';
    this.errorMessage = '';
    this.fibonacciNumbers = [];
  }

  ngOnInit(): void {
    this.title = 'Welcome to the Fibonacci Calculator';
  }

  fetchFibonacci(terms: number): void {
    if (terms <= 0) {
      this.errorMessage = 'Please enter a positive integer.';
      return;
    }

    this.http.get<number[]>(`/api/fibonacci?terms=${terms}`).subscribe(
      (data) => {
        this.fibonacciNumbers = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error fetching Fibonacci numbers. Please try again.';
      }
    );
  }
}