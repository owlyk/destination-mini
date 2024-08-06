package app.components.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from 'path/to/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  constructor(private fibonacciService: FibonacciService) {}

  generateFibonacciSeries(input: any): void {
    this.fibonacciService.generateFibonacciSeries(input)
      .subscribe(
        (result: any) => {
          // Display the generated Fibonacci series in the UI
        },
        (error: any) => {
          // Handle any errors that may occur during the generation of the Fibonacci series
        }
      );
  }
}