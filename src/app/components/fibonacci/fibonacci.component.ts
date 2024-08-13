package app.components.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  result: number;
  error: string;

  constructor(private fibonacciService: FibonacciService) {}

  fetchFibonacci() {
    this.fibonacciService.getFibonacciZero().subscribe(
      (data: number) => {
        this.result = data;
        this.error = null;
      },
      (error: any) => {
        this.error = error.message;
        this.result = null;
      }
    );
  }
}