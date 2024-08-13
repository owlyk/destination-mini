package app.components.fibonacci;

import { Component, OnInit } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  result: number;
  errorMessage: string;

  constructor(private fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.fibonacciService.getFibonacciZero().subscribe(
      (data: number) => {
        this.result = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching Fibonacci number';
      }
    );
  }
}