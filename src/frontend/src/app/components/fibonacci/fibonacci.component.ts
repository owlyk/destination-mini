package src.frontend.src.app.components.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from 'path/to/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  
  constructor(private fibonacciService: FibonacciService) {}

  handleFibonacciRequest(terms: number): void {
    if (terms <= 0) {
      console.error('Invalid input. Please enter a positive number.');
      return;
    }

    const fibonacciSeries: number[] = this.fibonacciService.generateFibonacciNumbers(terms);
    console.log('Generated Fibonacci series:', fibonacciSeries);
    // Display the generated Fibonacci series in the UI
  }
}